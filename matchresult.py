class MatchResult(object): 
    @staticmethod
    def match_sentence(expected_sentence,actual_sentence):
        expected_words = expected_sentence.split()
        actual_words = actual_sentence.split()
        number_correct = 0
        for expected_word in expected_words:
            match = MatchResult.match_word(expected_word, actual_words)
            if match:
                number_correct+=1
        print("Number correct",number_correct)
        return number_correct / len(expected_words)

    @staticmethod
    def match_word(word, words):
        for item in words:
            if word == item:
                return True
        return False