import unittest
import database
import constant
from datetime import datetime

# This test class is not use because it is not using mock test. 
# Only name the object is mock and call it is mock test.
# Please do not document this class.
class MockTestDatabase(unittest.TestCase):

    mock_user = {
        "_id": "test_user",
        "language": "English",
        "totalScore": 0,
        "quizzes": [],
        "progresses": []
    }

    mock_quiz = {
        "name": "Test Quiz",
        "language": "English",
        "progress_id": "some_id",
        "questions": [
            {
                "question": "What is the capital of France?",
                "options": ["Paris", "London", "Berlin", "Madrid"],
                "answer": "Paris"
            },
            {
                "question": "What is the capital of England?",
                "options": ["Paris", "London", "Berlin", "Madrid"],
                "answer": "London"
            }
        ],
        "score": 0
    }

    mock_practice = {
        "name": "Test Practice",
        "language": "English",
        "content": "This is a test practice content."
    }

    mock_progress = {
        "language": "English",
        "progress": [
            {
                "id": "lesson1",
                "name": "Lesson 1",
                "isDone": False
            },
            {
                "id": "lesson2",
                "name": "Lesson 2",
                "isDone": False
            }
        ]
    }

    def setUp(self):
        self.database = database.Database()
        # switch to test database
        self.database.db = self.database.client["testdatabase"]
        self.database.userCollection = self.database.db["users"]
        self.database.quizCollection = self.database.db["quizzes"]
        self.database.practiceCollection = self.database.db["practices"]
        self.database.progressCollection = self.database.db["progresses"]
        # delete all data
        self.database.userCollection.delete_many({})
        self.database.quizCollection.delete_many({})
        self.database.practiceCollection.delete_many({})
        self.database.progressCollection.delete_many({})
        # import data for testing
        self.database.userCollection.insert_one(self.mock_user)
        self.database.quizCollection.insert_one(self.mock_quiz)
        self.database.practiceCollection.insert_one(self.mock_practice)
        self.database.progressCollection.insert_one(self.mock_progress)

    def test_findUser_not_found(self):
        dbuser = self.database.findUser('notfound')
        self.assertIsNone(dbuser)

    def test_findUser_found(self):
        dbuser = self.database.findUser(self.mock_user["_id"])
        self.assertIsNotNone(dbuser)
        self.assertEqual(dbuser[constant.COLLECTION_ID], self.mock_user["_id"])

    def test_insertUser(self):
        user = {
            constant.COLLECTION_ID: "user2"
        }
        self.database.insertUser(user)
        dbuser = self.database.findUser("user2")
        self.assertIsNotNone(dbuser)
        self.assertEqual(dbuser[constant.COLLECTION_ID], "user2")

    def test_changeLanguage(self):
        self.database.changeUserLanguage(
            username=self.mock_user["_id"], language="Spanish")
        dbuser = self.database.findUser(self.mock_user["_id"])
        self.assertIsNotNone(dbuser)
        self.assertEqual(dbuser[constant.USER_LANGUAGE], "Spanish")

    def test_getQuizzes_no_record(self):
        dbquizzes = self.database.getQuizzes("a_language")
        self.assertEqual(len(dbquizzes), 0)

    def test_getQuizzes_has_record(self):
        dbquizzes = self.database.getQuizzes(self.mock_quiz["language"])
        self.assertEqual(len(dbquizzes), 1)

    def test_getRandomQuiz_no_record(self):
        dbquiz = self.database.getRandomQuiz(language="a_language")
        self.assertIsNone(dbquiz)

    def test_getRandomQuiz_has_record(self):
        dbquiz = self.database.getRandomQuiz(
            language=self.mock_quiz["language"])
        self.assertIsNotNone(dbquiz)

    def test_updateUserQuiz(self):
        dbquiz = self.database.getRandomQuiz(
            language=self.mock_quiz["language"])
        now = datetime.now()
        quizInfo = {
            constant.COLLECTION_ID: dbquiz[constant.COLLECTION_ID],
            constant.QUIZ_NAME: dbquiz[constant.QUIZ_NAME],
            constant.QUIZ_SCORE: 20,
            constant.USER_TOOKON: now.strftime(constant.DATE_FORMAT)
        }
        self.database.updateUserQuiz(
            username=self.mock_user["_id"], quiz=quizInfo)
        dbuser = self.database.findUser(username=self.mock_user["_id"])
        self.assertEqual(dbuser[constant.COLLECTION_ID], self.mock_user["_id"])
        self.assertEqual(dbuser[constant.USER_TOTALSCORE], 20)

    def test_updateUserQuiz_raise_exception(self):
        dbquiz = self.database.getRandomQuiz(
            language=self.mock_quiz["language"])
        now = datetime.now()
        quizInfo = {
            constant.COLLECTION_ID: dbquiz[constant.COLLECTION_ID],
            constant.QUIZ_NAME: dbquiz[constant.QUIZ_NAME],
            constant.QUIZ_SCORE: 20,
            constant.USER_TOOKON: now.strftime(constant.DATE_FORMAT)
        }
        try:
            self.database.updateUserQuiz(username="a_user", quiz=quizInfo)
            self.failUnlessRaises()
        except database.EntityNotFoundExcepton:
            print("Expect EntityNotFoundException.")

    def test_getPractices_no_record(self):
        dbpractices = self.database.getPractices("a_language")
        self.assertEqual(len(dbpractices), 0)

    def test_getPractices_has_record(self):
        dbpractices = self.database.getPractices(
            self.mock_practice["language"])
        self.assertEqual(len(dbpractices), 1)

    def test_getRandomPractice_no_record(self):
        dbpractice = self.database.getRandomPractice(language="a_language")
        self.assertIsNone(dbpractice)

    def test_getRandomPractice_has_record(self):
        dbpractice = self.database.getRandomPractice(
            language=self.mock_practice["language"])
        self.assertIsNotNone(dbpractice)

    def test_readUser_throw_exception(self):
        try:
            self.database.readUser("a_user")
            self.failUnlessRaises()
        except database.EntityNotFoundExcepton as e:
            print("Expect EntityNotFoundException.")

    def test_readProgress_throw_exception(self):
        try:
            self.database.readProgress("a_language")
            self.failUnlessRaises()
        except database.EntityNotFoundExcepton as e:
            print("Expect EntityNotFoundException.")

    def test_readProgress_has_record(self):
        dbprogress = self.database.readProgress(self.mock_progress["language"])
        self.assertIsNotNone(dbprogress)

    def test_readUserProgress_throw_exception(self):
        try:
            self.database.readUserProgress("a_user")
            self.failUnlessRaises()
        except database.EntityNotFoundExcepton as e:
            print("Expect EntityNotFoundException.")

    def test_readUserProgress_has_record(self):
        # update language
        self.database.changeUserLanguage(
            username=self.mock_user["_id"], language=self.mock_user["language"])
        dbprogress = self.database.readUserProgress(self.mock_user["_id"])
        self.assertIsNotNone(dbprogress)
            


if __name__ == '__main__':
    unittest.main()
