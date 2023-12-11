import discord
from discord.ext import commands
from database import Database
import constant

class MyScores(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.db = Database()

    @commands.Cog.listener()
    async def on_ready(self):
        print("MyScores.py is online.")

    @commands.command()
    async def myScores(self, ctx):
        username = str(ctx.message.author)
        dbuser = self.db.findUser(username=username)

        if not dbuser:
            await ctx.send(embed=discord.Embed(
                title="⚠️ No Scores Found",
                description="It looks like you haven't played any quizzes yet!",
                color=0xFFCC00
            ))
            return

        language = dbuser.get(constant.USER_LANGUAGE, "Not set")
        total_score = dbuser.get(constant.USER_TOTALSCORE, 0)
        quizzes = dbuser.get(constant.USER_QUIZZES, [])

        score_embed = discord.Embed(
            title=f"🏆 {ctx.message.author.display_name}'s Scoreboard",
            description="Here's a breakdown of your quiz scores!",
            color=0x00FF00
        )
        score_embed.add_field(
            name="📚 Language",
            value=language,
            inline=True
        )
        score_embed.add_field(
            name="🔢 Total Score",
            value=str(total_score),
            inline=True
        )

        for quiz in quizzes:
            score_embed.add_field(
                name=f"📝 Quiz: {quiz[constant.QUIZ_NAME]}",
                value=(f"Language: {quiz[constant.USER_LANGUAGE]} \n"
                       f"Score: {quiz[constant.QUIZ_SCORE]} \n"
                       f"Took on: {quiz[constant.USER_TOOKON]}"),
                inline=False
            )

        score_embed.set_footer(text="Keep learning and improving!")
        await ctx.send(embed=score_embed)

def setup(bot):
    bot.add_cog(MyScores(bot))
    print("MyScores.py added")