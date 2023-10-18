import discord
from discord.ext import commands
import nacl

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

async def setup(bot):
    await bot.add_cog(JoinVoice(bot))
    print("JoinVoice.py added")
