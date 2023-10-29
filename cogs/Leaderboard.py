import discord
from discord.ext import commands
import database
from database import Database

db_instance = Database()

class Leaderboard(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.database = db_instance

    @commands.command(name='leaderboard')
    async def leaderboard(self, ctx):
        users = self.database.get_all_users()

        sorted_users = sorted(users, key=lambda user: user[1], reverse=True)

        leaderboard = "```\n"
        leaderboard += "Leaderboard:\n"
        for i, user in enumerate(sorted_users, start=1):
            leaderboard += f"{i}. {user[0]}: {user[1]} points\n"
        leaderboard += "```"

        await ctx.send(leaderboard)

def setup(bot):
    bot.add_cog(Leaderboard(bot))
    print("Leaderboard.py added")