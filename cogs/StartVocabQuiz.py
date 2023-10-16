import discord
from discord.ext import commands
import database
from database import Database
import constant
import vocabquiz
import json

database = Database()


class StartVocabQuiz(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("StartVocabQuiz command is active")

    @commands.command()
    async def startVocabQuiz(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        print("user", dbuser)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            await ctx.send(f"Start vocabulary for {language} quiz")
            quiz = database.getRandomQuiz(language)
            vocabQuiz = vocabquiz.VocabQuiz(ctx=ctx,user=username, quiz=quiz)
            hasQuestion, question, view = vocabQuiz.get_question()
            if (hasQuestion):
                await ctx.send(question, view=view)
            else:
                quizInfo = vocabQuiz.get_quiz_info()
                database.updateUserQuiz(username=username,quiz=quizInfo)
                await ctx.send(f"You finished the quiz! Your score is {quiz[constant.QUIZ_SCORE]}")
                

        else: 
            await ctx.send(f"Please use command !changeLanguage [language] to select your language")
            
async def setup(bot):
    await bot.add_cog(StartVocabQuiz(bot))
    print("StartVocabQuiz.py added")
