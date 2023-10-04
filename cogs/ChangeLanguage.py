import discord
from discord.ext import commands


class ChangeLanguage(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("ChangeLang command is active")

    @commands.command()
    async def changeLanguage(self, ctx, userprompt: str):
        await ctx.send(f"Language set to {userprompt}")


async def setup(bot):
    await bot.add_cog(ChangeLanguage(bot))
    print("ChangeLanguage.py added")
