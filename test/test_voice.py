import discord
import discord.ext.commands as commands
from discord.ext.commands import Cog, command
import pytest
import pytest_asyncio
import discord.ext.test as dpytest

class Voice(Cog):
    @command()
    async def ping(self, ctx):
        await ctx.send("Pong!")

    @command()
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

    # Unused
    @command()
    async def echo(self, ctx, text: str):
        await ctx.send(text)


@pytest_asyncio.fixture
async def bot():
    # Setup
    intents = discord.Intents.all()
    b = commands.Bot(command_prefix="!",
                     intents=intents)
    await b._async_setup_hook()  # setup the loop
    await b.add_cog(Voice())

    dpytest.configure(b)

    yield b

    # Teardown
    await dpytest.empty_queue() # empty the global message queue as test teardown


@pytest.mark.asyncio
async def test_ping(bot):
    await dpytest.message("!ping")
    assert dpytest.verify().message().content("Pong!")

@pytest.mark.asyncio
async def test_startVoiceQuiz_notinvc(bot):
    await dpytest.message("!startVoiceQuiz")
    assert dpytest.verify().message().content("You need to be in a voice channel to use this command.")

@pytest.mark.asyncio
async def test_startVoiceQuiz_invc(bot):
    # Fake context : where member is in a voice channel
    ctx = dpytest.FakeContext(author=dpytest.FakeMember(voice=dpytest.FakeVoiceChannel()))
    await dpytest.message("!startVoiceQuiz", ctx=ctx)
    
    assert dpytest.verify().message().content(f"Bot has joined {ctx.author.voice.channel.name}.")

"""
# Unused test provided from:
# https://dpytest.readthedocs.io/en/latest/tutorials/using_pytest.html
@pytest.mark.asyncio
async def test_echo(bot):
    await dpytest.message("!echo Hello world")
    assert dpytest.verify().message().contains().content("Hello")
"""