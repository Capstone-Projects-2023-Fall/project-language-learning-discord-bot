import discord
from discord.ext import commands

class JoinVoice(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def startVoiceQuiz(self, ctx):
        if ctx.author.voice:
            voice_channel = ctx.author.voice.channel

            if ctx.voice_client is not None:
                await ctx.voice_client.move_to(voice_channel)
            else:
                voice_client = await voice_channel.connect()
                print(f"Bot has joined {voice_channel.name}.")
        else:
            await ctx.send("You need to be in a voice channel to use this command.")

async def setup(bot):
    await bot.add_cog(JoinVoice(bot))
    print("JoinVoice.py added")
