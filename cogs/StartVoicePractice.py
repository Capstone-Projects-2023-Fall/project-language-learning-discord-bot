import discord
from discord.ext import commands
import database
from database import Database
import constant
from texttospeech import TextToSpeech
import time

database = Database()

connections = {}

class StartVoicePractice(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("StartVoicePractice.py is online.")

    @commands.command()
    async def startVoicePractice(self, ctx):
        print("Start voice practice")
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        language = dbuser[constant.USER_LANGUAGE]
        t2s = TextToSpeech(language=language)
        t2s.text_to_speech(text="Cómo estás")
        voice = ctx.author.voice
        if not voice:
            await ctx.respond("You aren't in a voice channel!")
        vc = await voice.channel.connect() 
        vc.play(discord.FFmpegPCMAudio(executable="audios/bin/ffmpeg.exe", source="audios/voice.mp3"))
        # Sleep while audio is playing.
        while vc.is_playing():
            time.sleep(.1)
        await vc.disconnect()
        

def setup(bot):
    bot.add_cog(StartVoicePractice(bot))
    print("StartVoicePractice.py added")
