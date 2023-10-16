import discord
from discord.ext import commands
import database
from database import Database
import constant

database = Database()


class ChangeLanguage(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("ChangeLang command is active")

    @commands.command()
    async def changeLanguage(self, ctx, userprompt: str):
        if userprompt in constant.LANGUAGES:
            database.changeUserLanguage(str(ctx.message.author), userprompt)
            await ctx.send(f"Language set to {userprompt}")
        else:
            await ctx.send(f"{userprompt} is not supported. Please select other language. Here is the list of our current language: {constant.LANGUAGES}")

async def setup(bot):
    await bot.add_cog(ChangeLanguage(bot))
    print("ChangeLanguage.py added")
