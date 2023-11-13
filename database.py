import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import random
import constant
import certifi

load_dotenv()

class DatabaseConnectionException(Exception):
    "Raised when cannot connect to database"
    pass

class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass

class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass


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
            self.practiceCollection = self.db["pratices"]
            self.cardCollection = self.db["flashcards"]
            self.progressCollection = self.db["progresses"]
            self.isOk = True
        except Exception as e:
            self.isOk = False
            print(e)

    
    def readUser(self, username):
        if self.isOk:
            try:
                query = {constant.COLLECTION_ID: username}
                result = self.userCollection.find_one(query)
                if result is None:
                    raise EntityNotFoundExcepton(f"Cannot read user with username: {username}")
            except EntityNotFoundExcepton as e:
                raise e
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)

        else:
            raise DatabaseConnectionException("Cannot connect to database.")


    def findUser(self, username):
        if self.isOk:
            try:
                query = {constant.COLLECTION_ID: username}
                return self.userCollection.find_one(query)
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)

        else:
            raise DatabaseConnectionException("Cannot connect to database.")
            

    def insertUser(self, user):
        if self.isOk:
            try:
                x = self.userCollection.insert_one(user)
                dbuser = self.readUser(x.inserted_id)
                return dbuser
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else: 
            raise DatabaseConnectionException("Cannot connect to database.")

    def changeUserLanguage(self, username, language): 
        if self.isOk:
            try: 
                dbuser = self.findUser(username)
                if dbuser is not None:
                    query = {constant.COLLECTION_ID: username}
                    newValue = {"$set": {
                            constant.USER_LANGUAGE: language
                        }
                    }
                    self.userCollection.update_one(query, newValue)
                    return self.readUser(username=username)
                else:
                    print("Insert new user")
                    user = {
                        constant.COLLECTION_ID: username,
                        constant.USER_LANGUAGE: language
                    }
                    return self.insertUser(user)
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")

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
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")
    
    def getPractices(self, language):
        if self.isOk:
            try:
                query = {constant.USER_LANGUAGE: language}
                cursor = self.practiceCollection.find(query)
                practices = []
                for practice in cursor:
                    practices.append(practice)
                return practices
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")

    def getFlashcards(self, language):
        if self.isOk:
            try:
                query = {constant.USER_LANGUAGE: language}
                cursor = self.cardCollection.find(query)
                flashcards = []
                for cardset in cursor:
                    flashcards.append(cardset)
                return flashcards
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")
        
    def readProgress(self, language):
        if self.isOk:
            try:
                query = {"language": language}
                result = self.progressCollection.find_one(query)
                if result is None:
                    raise EntityNotFoundExcepton("Cannot get a Progress")
                return result
            except EntityNotFoundExcepton as e:
                raise e
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")

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
            raise DatabaseConnectionException("Cannot connect to database.")
    
    def getRandomPractice(self, language): 
        if self.isOk:
            practices = self.getPractices(language)
            practiceCount = len(practices)
            if practiceCount == 0:
                return None
            else:
                index = random.randrange(0, practiceCount)
                return practices[index]
        else:
            raise DatabaseConnectionException("Cannot connect to database.")

    def getRandomFlash(self, language):
        if self.isOk:
            flashcards = self.getFlashcards(language)
            cardCount = len(flashcards)
            if cardCount == 0:
                return None
            else:
                index = random.randrange(0, cardCount)
                return flashcards[index]
        else:
            raise DatabaseConnectionException("Cannot connect to database.")

    def updateUserQuiz(self, username, quiz):
        if self.isOk:
            try:
                dbuser = self.findUser(username)
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
                        self.userCollection.update_one(query, newValue)
                    else:
                        newValue = {"$set": {
                                constant.USER_TOTALSCORE: score,
                                constant.USER_QUIZZES: [quiz]
                            }
                        }
                        self.userCollection.update_one(query, newValue)
                    # update progress if available
                    if "progress_id" in quiz and quiz["progress_id"] != "" and "progresses" in dbuser:
                        language = dbuser["language"]
                        dbprogress = None
                        dbprocesses = dbuser["progresses"]
                        for item in dbprocesses:
                            if item["language"] == language:
                                dbprogress = item
                                break
                        print("dbprogress", dbprogress)
                        if dbprogress is not None:
                            for item in dbprogress["progress"]:
                                print("item", item)
                                dblessons = item["lessons"]
                                for dblesson in dblessons:
                                    if dblesson["id"] == quiz["progress_id"]:
                                        dblesson["isDone"] = True
                                        newValue = {"$set": {
                                                "progresses": dbprocesses
                                            }
                                        }
                                        self.userCollection.update_one(query, newValue)
                else:
                    raise EntityNotFoundExcepton(f"Cannot find user with username: {username}")
            except EntityNotFoundExcepton as e:
                raise e
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")
        
    def readUserProgress(self, username):
        if self.isOk:
            try:
                dbuser = self.findUser(username)
                progress = None
                newValue = None
                query = {constant.COLLECTION_ID: username}
                if dbuser is not None:
                    language = None
                    if "language" in dbuser:
                        language = dbuser["language"]
                    else:
                        raise DatabaseProcessingException("User have not select a language")
                    dbprogress = self.readProgress(language)
                    if "progresses" in dbuser:
                        dbprogresses = dbuser["progresses"]
                        for item in dbprogresses:
                            if item["language"] == language:
                                progress = item
                                break
                        if progress is None:
                            dbprogresses.append(dbprogress)
                            newValue = {"$set": {
                                    "progresses": dbprogresses
                                }
                            }
                            self.userCollection.update_one(query, newValue)
                            progress = dbprogress
                    else:
                        newValue = {"$set": {
                                "progresses": [dbprogress]
                            }
                        }
                        self.userCollection.update_one(query, newValue)
                        progress = dbprogress
                    return progress
                else:
                    raise EntityNotFoundExcepton(f"Cannot read user with username: {username}")
            except EntityNotFoundExcepton as e:
                raise e
            except DatabaseProcessingException as e:
                raise e
            except Exception as e:
                print(e)
                raise DatabaseProcessingException(e)
        else:
            raise DatabaseConnectionException("Cannot connect to database.")

    def get_all_users(self):
        user_documents = self.userCollection.find()
        users = [(doc[constant.COLLECTION_ID], doc[constant.USER_TOTALSCORE]) for doc in user_documents]
        return users

    # prevent the user from retaking the same quiz if they already took it & got a perfect score
    def has_taken_quiz(self, username, quiz):
        dbuser = self.findUser(username)
        if dbuser is not None:
            if constant.USER_QUIZZES in dbuser:
                quizzes = dbuser[constant.USER_QUIZZES]
                for q in quizzes:
                    if q[constant.QUIZ_NAME] == quiz[constant.QUIZ_NAME] and q[constant.QUIZ_SCORE] == 50:
                        return True
        return False


    

