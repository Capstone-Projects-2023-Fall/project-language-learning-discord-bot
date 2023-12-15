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
        return number_correct / len(expected_words)
    
    @staticmethod
    def highlight_errors(expected_sentence,actual_sentence):
        expected_words = expected_sentence.split()
        actual_words = actual_sentence.split()
        highlighted = ""
    
        for actual_word in actual_words:
            match = MatchResult.match_word(actual_word, expected_words)
            if not match:
                highlighted += f"**{actual_word}** "
            else:
                highlighted += f"{actual_word} "
        
        return highlighted
    
    @staticmethod
    def match_word(word, words):
        for item in words:
            if word == item:
                return True
        return False