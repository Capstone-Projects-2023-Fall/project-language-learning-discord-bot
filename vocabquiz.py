import discord
import constant
import database
from database import Database
from datetime import datetime

database = Database()

class VocabQuiz(object):    
    def __init__(self, ctx, user, quiz): 
        self.ctx = ctx
        self.quiz = quiz
        self.numOfFinishQuestion = 0
        self.numOfCorrectAnswer = 0
        self.user = user
        self.questions = quiz[constant.QUIZ_QUESTIONS]
        self.numOfQuestion = len(self.questions)

    def get_question(self):
        print(f"get_question called: {self.numOfFinishQuestion}")
        if self.numOfFinishQuestion < self.numOfQuestion:
            question = self.questions[self.numOfFinishQuestion]
            answers = question[constant.QUIZ_ANSWERS]
            questionValue = question[constant.QUIZ_QUESTION]
            # return answer
            view = discord.ui.View()
            async def button_callback_true(interaction):
                self.numOfFinishQuestion += 1
                self.numOfCorrectAnswer += 1
                await interaction.response.send_message("Your select the right answer")
                subHasQuestion, subQuestion, subView = self.get_question()
                if subHasQuestion:
                    await self.ctx.send(subQuestion, view=subView)
                else:
                    quizInfo = self.get_quiz_info()
                    database.updateUserQuiz(username=self.user,quiz=quizInfo)
                    await self.ctx.send(f"You finished the quiz! Your score is: {quizInfo[constant.QUIZ_SCORE]}")

            
            async def button_callback_false(interaction):
                self.numOfFinishQuestion += 1
                await interaction.response.send_message("Your select the wrong answer")
                subHasQuestion, subQuestion, subView = self.get_question()
                if subHasQuestion:
                    await self.ctx.send(subQuestion, view=subView)
                else:
                    quizInfo = self.get_quiz_info()
                    database.updateUserQuiz(username=self.user,quiz=quizInfo)
                    await self.ctx.send(f"You finished the quiz! Your score is: {quizInfo[constant.QUIZ_SCORE]}")

            for answer in answers:
                button = discord.ui.Button(label=answer[constant.QUIZ_ANSWER])
                isCorrect = answer[constant.QUIZ_ISCORRECT]
                if isCorrect == 'true':
                    button.callback = button_callback_true
                else: 
                    button.callback = button_callback_false
                view.add_item(button)
            return True, questionValue, view
        else:
            return False, None, None
    
    def get_quiz_info(self):
        score = 10 * self.numOfCorrectAnswer
        now = datetime.now()
        return {
            constant.COLLECTION_ID: self.quiz[constant.COLLECTION_ID],
            constant.QUIZ_NAME: self.quiz[constant.QUIZ_NAME],
            constant.QUIZ_SCORE: score,
            constant.USER_TOOKON: now.strftime(constant.DATE_FORMAT),
            constant.USER_LANGUAGE: self.quiz[constant.USER_LANGUAGE]
        }


