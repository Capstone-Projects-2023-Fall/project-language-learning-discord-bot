import unittest
from matchresult import MatchResult

class TestDatabase(unittest.TestCase):

    def test_score(self):
        expected_sentence = "how are you"
        actual_sentence = "how is it going"
        result = MatchResult.match_sentence(expected_sentence=expected_sentence, actual_sentence=actual_sentence)
        print("result",result)
        score = int(10 * result)
        print("score", score)

    def test_score_exactmatch(self):
        expected_sentence = "today is hot"
        actual_sentence = "today is hot"
        result = MatchResult.match_sentence(expected_sentence=expected_sentence, actual_sentence=actual_sentence)
        print("result",result)
        score = int(10 * result)
        print("score", score)


