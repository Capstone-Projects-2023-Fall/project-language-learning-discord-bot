import discord
from discord.ext import commands
import database
from database import Database
import constant
import json
import pronuntest


database = Database()


class StartPronunTest(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("StartPronunTest command is active")

    @commands.command()
    async def startPronunTest(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            quiz_embed = discord.Embed(title=f"Pronun test - {language}", description=f"Get ready to test your pronunciation!", color=0xB6D7A8)
            await ctx.send(embed=quiz_embed)
            practice = database.getRandomPractice(language)
            pronunTest = pronuntest.PronunTest(ctx=ctx, user=username, practice=practice)
            hasQuestion, sentence, view = pronunTest.get_question()
            if hasQuestion:
                await ctx.send(sentence, view=view)
            else:
                practice_info = self.get_quiz_info()
                database.updateUserQuiz(username=dbuser,quiz=practice_info)
                await self.ctx.send(f"You finished the practice! Your score is: {practice_info[constant.QUIZ_SCORE]}")
            
        else:
            error_embed = discord.Embed(title="Language Not Selected", description=f"Please use command !changeLanguage [language] to select your language", color=0xFF0000)
            await ctx.send(embed=error_embed)

def setup(bot):
    bot.add_cog(StartPronunTest(bot))
    print("StartPronunTest.py added")

"""
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