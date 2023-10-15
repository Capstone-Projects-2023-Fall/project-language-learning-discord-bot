import discord
from discord.ext import commands
import database
from database import Database
import vocabquiz
import constant

database = Database()

class MyScores(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("MyScores.py is online.")

    @commands.command()
    async def myScores(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        language = dbuser[constant.USER_LANGUAGE]
        quiz = database.getRandomQuiz(language)
        await ctx.send("Testing")
        await ctx.send(f"Your scores are: {quiz[constant.QUIZ_SCORE]}")

async def setup(bot):
    await bot.add_cog(MyScores(bot))
    print("MyScores.py added")
