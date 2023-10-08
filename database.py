import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import random
import constant

load_dotenv()


class Database(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Database, cls).__new__(cls)
            cls.instance.initDb()
        return cls.instance

    def initDb(self):
        uri = os.environ['MONGO_DB_URI']
        # Create a new client and connect to the server
        self.client = MongoClient(uri, server_api=ServerApi('1'))
        self.isOk = False
        try:
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
            self.db = self.client["mydatabase"]
            self.userCollection = self.db["users"]
            self.quizCollection = self.db["quizzes"]
            self.isOk = True
        except Exception as e:
            self.isOk = False
            print(e)

    def findUser(self, username):
        if self.isOk:
            try:
                query = {"_id": username}
                return self.userCollection.find_one(query)
            except Exception as e:
                print(e)

        else:
            print("Cannot connect to database")

    def insertUser(self, user):
        if self.isOk:
            try:
                self.userCollection.insert_one(user)
            except Exception as e:
                print(e)
        else: 
            print("Cannot connect to database")

    def changeUserLanguage(self, username, language): 
        dbuser = self.findUser(username)
        if dbuser is not None:
            query = {"_id": username}
            newValue = {"$set": {
                    "language": language
                }
            }
            self.userCollection.update_one(query, newValue)
        else:
            print("Insert new user")
            user = {
                "_id": username,
                "language": language
            }
            self.insertUser(user)

    def getQuizzes(self, language):
        if self.isOk:
            try:
                query = {"language": language}
                cursor = self.quizCollection.find(query)
                quizzes = []
                for quiz in cursor:
                    quizzes.append(quiz)
                return quizzes
            except Exception as e:
                print(e)
        else:
            print("Cannot connect to database")

    def getRandomQuiz(self, language): 
        if self.isOk:
            quizzes = self.getQuizzes(language)
            quizCount = len(quizzes)
            index = random.randrange(0, quizCount)
            return quizzes[index]
        else:
            print("Cannot connect to database")

    def updateUserQuiz(self, username, quiz):
        if self.isOk:
            dbuser = self.findUser(username)
            print(dbuser)
            if dbuser is not None:
                score = quiz[constant.QUIZ_SCORE]
                if constant.USER_TOTALSCORE  in dbuser:
                    score += dbuser[constant.USER_TOTALSCORE]

                query = {"_id": username}
                newValue = {"$set": {
                        constant.USER_TOTALSCORE: score
                    }
                }
                self.userCollection.update_one(query, newValue)
        else:
            print("Cannot connect to database")



    

