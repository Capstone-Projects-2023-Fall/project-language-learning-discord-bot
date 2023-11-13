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
        print("my score")
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        language = dbuser[constant.USER_LANGUAGE]
        total_score = 0
        if constant.USER_TOTALSCORE in dbuser:
            total_score = dbuser[constant.USER_TOTALSCORE]
        quizzes = []
        if constant.USER_QUIZZES in dbuser:
            quizzes = dbuser[constant.USER_QUIZZES]
        scoreEmbed = discord.Embed(title="User score", description="Your all score", color=discord.Color.random())
        scoreEmbed.add_field(name="Total score", value=total_score, inline=False)
        for quiz in quizzes:
            print(quiz)
            scoreEmbed.add_field(name=quiz[constant.QUIZ_NAME], value=f"Language: {quiz[constant.USER_LANGUAGE]} score: {quiz[constant.QUIZ_SCORE]} took on: {quiz[constant.USER_TOOKON]}", inline=False)
        await ctx.send(embed=scoreEmbed)

async def setup(bot):
    await bot.add_cog(MyScores(bot))
    print("MyScores.py added")
