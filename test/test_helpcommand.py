import discord
import discord.ext.commands as commands
from discord.ext.commands import Cog, command
import pytest
import pytest_asyncio
import discord.ext.test as dpytest


class Misc(Cog):
    @command()
    async def ping(self, ctx):
        helpEmbed = discord.Embed(title="Help Command Mock Data")
        await ctx.send(embed=helpEmbed)

    @command()
    async def echo(self, ctx, text: str):
        await ctx.send(text)


@pytest_asyncio.fixture
async def bot():
    # Setup
    intents = discord.Intents.default()
    intents.members = True
    intents.message_content = True
    b = commands.Bot(command_prefix="!",
                     intents=intents)
    await b._async_setup_hook()  # setup the loop
    await b.add_cog(Misc())

    dpytest.configure(b)

    yield b

    # Teardown
    await dpytest.empty_queue() # empty the global message queue as test teardown


@pytest.mark.asyncio
async def test_ping(bot):
    await dpytest.message("!ping")
    helpEmbed = discord.Embed(title="Help Command Mock Data") #change text here to show pass/fail
    assert dpytest.verify().message().embed(helpEmbed)


@pytest.mark.asyncio
async def test_echo(bot):
    await dpytest.message("!echo Hello world")
    assert dpytest.verify().message().contains().content("Hello")
