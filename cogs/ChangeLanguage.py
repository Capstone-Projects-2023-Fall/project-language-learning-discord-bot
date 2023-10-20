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
            embed = discord.Embed(title="Language changed", description=f"Language set to {userprompt}", color=0xA2C4C9)
            await ctx.send(embed=embed)

        else:
            available_languages = "\n".join(constant.LANGUAGES)
            embed = discord.Embed(title="Language Not Supported", description=f"{userprompt} is not supported. Please select other language.", color=0xFF0000)
            embed.add_field(name="Available Languages", value=available_languages, inline=False)
            await ctx.send(embed=embed)


async def setup(bot):
    await bot.add_cog(ChangeLanguage(bot))
    print("ChangeLanguage.py added")
