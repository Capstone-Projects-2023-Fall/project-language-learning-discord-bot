import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import random
import constant
import certifi

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
        self.client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())
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
                query = {constant.COLLECTION_ID: username}
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
            query = {constant.COLLECTION_ID: username}
            newValue = {"$set": {
                    constant.USER_LANGUAGE: language
                }
            }
            self.userCollection.update_one(query, newValue)
        else:
            print("Insert new user")
            user = {
                constant.COLLECTION_ID: username,
                constant.USER_LANGUAGE: language
            }
            self.insertUser(user)

    def getQuizzes(self, language):
        if self.isOk:
            try:
                query = {constant.USER_LANGUAGE: language}
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
            if quizCount == 0:
                return None
            else:
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

                query = {constant.COLLECTION_ID: username}
                newValue = {}
                if constant.USER_QUIZZES in dbuser:
                    dbquizzes = dbuser[constant.USER_QUIZZES]
                    dbquizzes.append(quiz)
                    newValue = {"$set": {
                            constant.USER_TOTALSCORE: score,
                            constant.USER_QUIZZES: dbquizzes
                        }
                    }
                else:
                    newValue = {"$set": {
                            constant.USER_TOTALSCORE: score,
                            constant.USER_QUIZZES: [quiz]
                        }
                    }

                    
                self.userCollection.update_one(query, newValue)
        else:
            print("Cannot connect to database")



    

