import discord
from discord.ext import commands
import database
from database import Database
import constant
import json
import pronuntest


database = Database()


class StartVoiceQuiz(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("StartVoiceQuiz.py is online.")

    @commands.command()
    async def startVoiceQuiz(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            quiz_embed = discord.Embed(title=f"Pronunciation Quiz - {language}", description=f"Get ready to test your pronunciation!", color=0xB6D7A8)
            await ctx.send(embed=quiz_embed)
            practice = database.getRandomPractice(language)
            pronunTest = pronuntest.PronunTest(ctx=ctx, user=username, practice=practice)
            hasQuestion, sentence, view = pronunTest.get_question()
            if hasQuestion:
                await ctx.send(f"How do you say: {sentence}", view=view)
            else:
                practice_info = self.get_quiz_info()
                database.updateUserQuiz(username=dbuser,quiz=practice_info)
                await self.ctx.send(f"You finished the quiz! Your score is: {practice_info[constant.QUIZ_SCORE]}")
            
        else:
            error_embed = discord.Embed(title="Language Not Selected", description=f"Please use command !changeLanguage [language] to select your language", color=0xFF0000)
            await ctx.send(embed=error_embed)

async def setup(bot):
    await bot.add_cog(StartVoiceQuiz(bot))
    print("StartVoiceQuiz.py added")

""" legacy code
class JoinVoice(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def startVoiceQuiz(self, ctx):
        if ctx.author.voice:
            voice_channel = ctx.author.voice.channel

            # if bot is already connected to a (different) voice channel
            if ctx.voice_client is not None:
                await ctx.voice_client.move_to(voice_channel)
            else:
                voice_client = await voice_channel.connect()
                print(f"Bot has joined {voice_channel.name}.")
        else:
            await ctx.send("You need to be in a voice channel to use this command.")

    # command for bot to leave call (this should be automated at some point 
    # i.e. x seconds when channel is empty)
    @commands.command()
    async def dc(self, ctx):
        if ctx.voice_client is not None:
            await ctx.voice_client.disconnect()
            print(f"Bot has left the voice channel.")
        else:
            await ctx.send("The bot is not in a voice channel.")

def setup(bot):
    bot.add_cog(JoinVoice(bot))
    print("JoinVoice.py added")
"""
