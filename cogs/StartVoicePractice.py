import discord
from discord.ext import commands
import database
from database import Database
import constant
from texttospeech import TextToSpeech
import time
from pronunpractice import PronunPractice

database = Database()


class StartVoicePractice(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("StartVoicePractice.py is online.")

    @commands.command()
    async def startVoicePractice(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            quiz_embed = discord.Embed(title=f"Pronunciation Practice - {language}", description=f"Try repeating the following audio!", color=0xB6D7A8)
            await ctx.send(embed=quiz_embed)
            practice = database.getRandomPractice(language)
            t2s = TextToSpeech(language=language)
            pronunPractice = PronunPractice(ctx=ctx, user=username, practice=practice, textToSpeech=t2s)
            hasQuestion, sentence, view = pronunPractice.get_question()
            
            if hasQuestion:
                t2s.text_to_speech(text=sentence)
                await ctx.send(f"Hint: ||{sentence}||", view=view)
                await pronunPractice.play_sentence()
            else:
                practice_info = self.get_quiz_info()
                database.updateUserQuiz(username=dbuser,quiz=practice_info)
                await self.ctx.send(f"You finished the quiz! Your score is: {practice_info[constant.QUIZ_SCORE]}")
            
        else:
            error_embed = discord.Embed(title="Language Not Selected", description=f"Please use command !changeLanguage [language] to select your language", color=0xFF0000)
            await ctx.send(embed=error_embed)
        

def setup(bot):
    bot.add_cog(StartVoicePractice(bot))
    print("StartVoicePractice.py added")
