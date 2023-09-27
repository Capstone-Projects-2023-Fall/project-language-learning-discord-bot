import discord
from discord.ext import commands


class TestCommand(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("TestCommand.py is online.")

    @commands.command()
    async def test(self, ctx):
        await ctx.send("test cog load")
        testEmbed = discord.Embed(title="test Command for Language Bot", description="All commands for the bot.", color=discord.Color.blue)

        testEmbed.set_author(name="NewLangBot", icon_url=self.bot.avatar)
        testEmbed.add_field(name="!changeLanguage", value="Change desired language to learn.", inline=False)
        testEmbed.add_field(name="!startVocabQuiz", value="Starts a vocab quiz in the selected language.", inline=False)
        testEmbed.add_field(name="!startVoiceQuiz", value="**User must be in a voice channel for this to work.**\nBot will join the user in the respective channel.", inline=False)
        testEmbed.add_field(name="!leaderboard", value="Displays the top linguists in terms of overall rating.", inline=False)
        testEmbed.add_field(name="!myScores", value="Displays personal scores on vocab and voice quizzes.", inline=False)

        # await ctx.send(embed=test_embed)
        await ctx.send(embed=testEmbed)

async def setup(bot):
        # bot.remove_command('test')
    await bot.add_cog(TestCommand(bot))
    print("TestCommand.py added")

