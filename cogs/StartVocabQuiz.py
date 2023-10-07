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
        myview = discord.ui.View()
        button = discord.ui.Button(label="Eight")
        async def calback(interaction):
            print("button pressed", interaction)
            await interaction.response.send_message("Your select the right answer")
            await ctx.send("How many planet are in the solar system?", view=myview)

        button.callback = calback
        myview.add_item(button)
        dbuser = database.findUser(str(ctx.message.author))
        print("user", dbuser)
        if dbuser is not None and dbuser[constant.USER_LANGUAGE] is not None:
            await ctx.send(f"Start vocabulary for {dbuser[constant.USER_LANGUAGE]} quiz")
        else: 
            await ctx.send(f"Please use command !changeLanguage [language] to select your language")
            
        await ctx.send("How many planet are in the solar system?", view=myview)


async def setup(bot):
    await bot.add_cog(StartVocabQuiz(bot))
    print("StartVocabQuiz.py added")
