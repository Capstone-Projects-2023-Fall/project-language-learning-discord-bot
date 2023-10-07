import discord

class VocabButtons(object):    
    def __init__(self, answers): 
        self.view = discord.ui.View()
        for answer in answers: 
            button = discord.ui.Button(label=answer.answer)
            print("Answer", answer.answer)
            self.view.add_item(button)
    
    def get_answers_view(self):
        print("Return view")
        return self.view
