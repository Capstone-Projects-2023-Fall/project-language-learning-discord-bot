import discord
from discord.ext import commands

class HelpCommand(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("HelpCommand.py is online.")

    @commands.command()
    async def help(self, ctx):
        helpEmbed = discord.Embed(title="Help command for Language Bot", description="All commands for the bot.", color=discord.Color.random())
        helpEmbed.set_author(name="NewLangBot")
        helpEmbed.add_field(name="!changeLanguage [LANGUAGE]", value="Change desired language to learn. Currently only Spanish or French.", inline=False)

        helpEmbed.add_field(name="​", value="​", inline=False)

        helpEmbed.add_field(name="!fillInTheBlanks", value="Starts a fill-in-the-blank exercise for the specified language.", inline=False)
        helpEmbed.add_field(name="!startFlash", value="Sharpen your language skills by studying flashcards.", inline=False)
        helpEmbed.add_field(name="!startListeningQuiz", value="**User must be in a voice channel for this to work.**\nStarts a listening quiz in the selected language.", inline=False)
        helpEmbed.add_field(name="!startVocabQuiz", value="Starts a vocab quiz in the selected language.", inline=False)
        helpEmbed.add_field(name="!startVoiceQuiz", value="**User must be in a voice channel for this to work.**\nStarts a speaking quiz in the selected language.", inline=False)

        helpEmbed.add_field(name="​", value="​", inline=False)

        helpEmbed.add_field(name="!leaderboard", value="Displays the top linguists in terms of overall rating.", inline=False)
        helpEmbed.add_field(name="!myScores", value="Displays personal scores on vocab and voice quizzes.", inline=False)
        helpEmbed.add_field(name="!myProgress", value="Show study progress.", inline=False)
        

        await ctx.send(embed=helpEmbed)

def setup(bot):
    bot.remove_command('help')
    bot.add_cog(HelpCommand(bot))
    print("HelpCommand.py added")

