import discord
from discord.ext import commands
import nacl
import speechrecognition
from speechrecognition import SpeechToText

connections = {}

async def once_done(sink: discord.sinks, channel: discord.TextChannel, *args):  # Our voice client already passes these in.
    recorded_users = [  # A list of recorded users
        f"<@{user_id}>"
        for user_id, audio in sink.audio_data.items()
    ]
    await sink.vc.disconnect()  # Disconnect from the voice channel.
    files = [discord.File(audio.file, f"{user_id}.{sink.encoding}") for user_id, audio in sink.audio_data.items()]  # List down the files.
    text = ''
    for user_id, audio in sink.audio_data.items():
        with open(f"audios/temp.{sink.encoding}", "wb") as outfile:
            # Copy the BytesIO stream to the output file
            outfile.write(audio.file.getbuffer())
        s2t = SpeechToText()
        text = s2t.speech_to_text(filename="temp.wav", language="n/a")
        print(text)
    await channel.send(f"finished recording audio for: {', '.join(recorded_users)}.", files=files)  # Send a message with the accumulated files.
    await channel.send(f"You say: {text}")

# This cog handles manually recording what the user says and generating a .wav 
# file. As of 10/29/2023, this is unused by itself.

class Record(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def record(self, ctx):
        voice = ctx.author.voice

        if not voice:
            await ctx.respond("You aren't in a voice channel!")

        vc = await voice.channel.connect()  # Connect to the voice channel the author is in.
        connections.update({ctx.guild.id: vc})  # Updating the cache with the guild and channel.

        vc.start_recording(
            discord.sinks.WaveSink(),  # The sink type to use.
            once_done,  # What to do once done.
            ctx.channel  # The channel to disconnect from.
        )
        await ctx.send("Started recording!")

    @commands.command()
    async def stop(self, ctx):
        if ctx.guild.id in connections:  # Check if the guild is in the cache.
            vc = connections[ctx.guild.id]
            vc.stop_recording()  # Stop recording, and call the callback (once_done).
            del connections[ctx.guild.id]  # Remove the guild from the cache.
            print(ctx)
            #await ctx.delete()  # And delete.
        else:
            await ctx.send("I am currently not recording here.")  # Respond with this if we aren't recording.

def setup(bot):
    bot.add_cog(Record(bot))
    print("JoinVoice.py added")


