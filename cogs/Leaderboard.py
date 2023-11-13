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

        leaderboard_embed = discord.Embed(title="Leaderboard", description="Top Users", color=0xF1C232)

        file = discord.File("images/trophy.png", filename="trophy.png")
        leaderboard_embed.set_thumbnail(url="attachment://trophy.png")

        for i, user in enumerate(sorted_users, start=1):
            leaderboard_embed.add_field(name=f"{i}. {user[0]}", value=f"Points: {user[1]}", inline=False)

        await ctx.send(file=file, embed=leaderboard_embed)


async def setup(bot):
    await bot.add_cog(Leaderboard(bot))
    print("Leaderboard.py added")
