import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()


class Database:
    def __init__(self):
        uri = os.environ['MONGO_DB_URI']
        # Create a new client and connect to the server
        self.client = MongoClient(uri, server_api=ServerApi('1'))
        self.isOk = False
        try:
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
            self.db = self.client["mydatabase"]
            self.collection = self.db["users"]
            self.isOk = True
        except Exception as e:
            self.isOk = False
            print(e)

    def findUser(self, username):
        if self.isOk:
            try:
                query = {"_id": username}
                return self.collection.find_one(query)
            except Exception as e:
                print(e)

        else:
            print("Cannot connect to database")

    def insertUser(self, user):
        if self.isOk:
            self.collection.insert_one(user)
        else: 
            print("Cannot connect to database")

    

