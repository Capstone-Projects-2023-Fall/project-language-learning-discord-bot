import unittest
import database
import constant

class TestDatabase(unittest.TestCase):

    def setUp(self):
        self.database = database.Database()
        # switch to test database
        self.database.db = self.database.client["testdatabase"]
        self.database.userCollection = self.database.db["users"]
        self.database.quizCollection = self.database.db["quizzes"]
        # delete all data
        self.database.userCollection.delete_many({})
        self.database.quizCollection.delete_many({})
        # import data for testing
        user1 = {
                    "_id": "user1"
        }
        self.database.userCollection.insert_one(user1)
        quiz1 = {"name":"Practice 1","language":"Spanish","questions":[{"question":"How to say please?","answers":[{"answer":"por favor","isCorrect":"true"},{"answer":"por","isCorrect":"false"},{"answer":"favor","isCorrect":"false"}]},{"question":"How to say thank you?","answers":[{"answer":"por favor","isCorrect":"false"},{"answer":"por","isCorrect":"false"},{"answer":"gracias","isCorrect":"true"}]}]}
        quiz2 = {"name":"Practice 2","language":"Spanish","questions":[{"question":"How to say bad?","answers":[{"answer":"por favor","isCorrect":"false"},{"answer":"mal","isCorrect":"true"},{"answer":"favor","isCorrect":"false"}]},{"question":"How to say as always?","answers":[{"answer":"como siempre","isCorrect":"true"},{"answer":"por","isCorrect":"false"},{"answer":"gracias","isCorrect":"false"}]}]}
        self.database.quizCollection.insert_one(quiz1)
        self.database.quizCollection.insert_one(quiz2)

    def test_findUser_not_found(self):
        dbuser = self.database.findUser('notfound')
        self.assertIsNone(dbuser)

    def test_findUser_found(self):
        dbuser = self.database.findUser('user1')
        self.assertIsNotNone(dbuser)
        self.assertEqual(dbuser[constant.COLLECTION_ID], "user1")

    def test_insertUser(self):
        user = {
            constant.COLLECTION_ID: "user2"
        }
        self.database.insertUser(user)
        dbuser = self.database.findUser("user2")
        self.assertIsNotNone(dbuser)
        self.assertEqual(dbuser[constant.COLLECTION_ID], "user2")

    def test_changeLanguage(self): 
        self.database.changeUserLanguage(username="user1", language="Spanish")
        dbuser = self.database.findUser("user1")
        self.assertIsNotNone(dbuser)
        self.assertEqual(dbuser[constant.USER_LANGUAGE], "Spanish")

    def test_getQuizzes_no_record(self):
        dbquizzes = self.database.getQuizzes("a_language")
        self.assertEqual(len(dbquizzes), 0)
    
    def test_getQuizzes_has_record(self):
        dbquizzes = self.database.getQuizzes("Spanish")
        self.assertEqual(len(dbquizzes), 2)

    def test_getRandomQuiz_no_record(self):
        dbquiz = self.database.getRandomQuiz(language="a_language")
        self.assertIsNone(dbquiz)

    def test_getRandomQuiz_has_record(self): 
        dbquiz = self.database.getRandomQuiz(language="Spanish")
        self.assertIsNotNone(dbquiz)

    def test_updateUserQuiz(self):
        dbquiz = self.database.getRandomQuiz(language="Spanish")
        quizInfo = {
            constant.COLLECTION_ID: dbquiz[constant.COLLECTION_ID],
            constant.QUIZ_NAME: dbquiz[constant.QUIZ_NAME],
            constant.QUIZ_SCORE: 20
        }
        self.database.updateUserQuiz(username="user1", quiz=quizInfo)
        dbuser = self.database.findUser(username="user1")
        self.assertEqual(dbuser[constant.COLLECTION_ID], "user1")
        self.assertEqual(dbuser[constant.USER_TOTALSCORE], 20)





if __name__ == '__main__':
    unittest.main()
