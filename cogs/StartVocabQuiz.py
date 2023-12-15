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
        print("StartVocabQuiz command is online.")

    @commands.command()
    async def startVocabQuiz(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]

            quiz = database.getRandomQuiz(language)

            if database.has_taken_quiz(username, quiz):
                taken_quiz_embed = discord.Embed(title=f"{quiz[constant.QUIZ_NAME]} Quiz Already Completed",
                                                 description=f"You have already aced the quiz!", color=0xB6D7A8)
                await ctx.send(embed=taken_quiz_embed)
                return

            vocabQuiz = vocabquiz.VocabQuiz(ctx=ctx, user=username, quiz=quiz)
            hasQuestion, question, view = vocabQuiz.get_question()

            if hasQuestion:
                await ctx.send(question, view=view)
            else:
                quizInfo = vocabQuiz.get_quiz_info()
                database.updateUserQuiz(username=username, quiz=quizInfo)

                # Check if user has achieved a perfect score
                if quizInfo[constant.QUIZ_SCORE] == 50:
                    perfect_embed = discord.Embed(title="Perfect Score!",
                                                  description=f"Congratulations! You have achieved a perfect score!",
                                                  color=0xB6D7A8)
                    await ctx.send(embed=perfect_embed)
                else:
                    result_embed = discord.Embed(title="Quiz Completed!",
                                                 description=f"You finished the quiz! Your score is {quizInfo[constant.QUIZ_SCORE]}",
                                                 color=0xB6D7A8)
                    await ctx.send(embed=result_embed)

        else:
            error_embed = discord.Embed(title="Language Not Selected",
                                        description=f"Please use command !changeLanguage [language] to select your language",
                                        color=0xFF0000)
            await ctx.send(embed=error_embed)

def setup(bot):
    bot.add_cog(StartVocabQuiz(bot))
    print("StartVocabQuiz.py added")
