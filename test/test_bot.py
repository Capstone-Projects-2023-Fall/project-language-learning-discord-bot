import asyncio
import discord
import discord.ext.commands as commands
from discord.ext.commands import Cog, command
import pytest
import pytest_asyncio
import discord.ext.test as dpytest
from cogs.HelpCommand import HelpCommand
from cogs.ChangeLanguage import ChangeLanguage
from cogs.StartVocabQuiz import StartVocabQuiz
from cogs.MyScores import MyScores


class Test(Cog):
    @command()
    async def ping(self, ctx):
        await ctx.send("Pong!")


@pytest_asyncio.fixture
async def bot():
    # Setup
    intents = discord.Intents.all()
    b = commands.Bot(command_prefix="!",
                     intents=intents)
    await b._async_setup_hook()
    await b.add_cog(Test())

    b.remove_command('help')

    await b.add_cog(HelpCommand(b))
    await b.add_cog(ChangeLanguage(b))
    await b.add_cog(StartVocabQuiz(b))
    await b.add_cog(MyScores(b))

    dpytest.configure(b)

    yield b

    # Teardown
    await dpytest.empty_queue()  # empty the global message queue as test teardown


# Test the testing cog, i.e., the ping command
@pytest.mark.asyncio
async def test_ping(bot):
    await dpytest.message("!ping")
    assert dpytest.verify().message().content("Pong!")


# Test the help command
@pytest.mark.asyncio
async def test_help(bot):
    await dpytest.message("!help")
    # Retrieves the message that was sent in response to !help
    response_message = dpytest.get_message()
    # Checks if the message is an embed
    assert response_message.embeds, "No embeds found in the response message"
    # Gets the first embed in the response
    embed = response_message.embeds[0]

    # Checks for specific fields in the embed
    assert embed.title == "Help command for Language Bot"
    assert embed.description == "All commands for the bot."


# Test the changeLanguage command
@pytest.mark.asyncio
async def test_changeLanguage(bot):
    await dpytest.message("!changeLanguage Spanish")
    # Retrieves the message that was sent in response to !help
    response_message = dpytest.get_message()
    # Checks if the message is an embed
    assert response_message.embeds, "No embeds found in the response message"
    # Gets the first embed in the response
    embed = response_message.embeds[0]

    # Checks for specific fields in the embed
    assert embed.title == "Language changed"
    assert embed.description == "Language set to Spanish"


# Test the startVocabQuiz command
@pytest.mark.asyncio
async def test_startVocabQuiz(bot):
    await dpytest.message("!startVocabQuiz")
    # Retrieves the message that was sent in response to !help
    response_message = dpytest.get_message()
    # Checks if the message is an embed
    assert response_message.embeds, "No embeds found in the response message"
    # Gets the first embed in the response
    embed = response_message.embeds[0]

    # Checks for specific fields in the embed
    assert embed.title == "Vocabulary Quiz - Spanish"
    assert embed.description == "Get ready to test your vocabulary!"


# Test the myScores command
@pytest.mark.asyncio
async def test_myScores(bot):
    await dpytest.message("!myScores")
    # Retrieves the message that was sent in response to !help
    response_message = dpytest.get_message()
    # Checks if the message is an embed
    assert response_message.embeds, "No embeds found in the response message"
    # Gets the first embed in the response
    embed = response_message.embeds[0]

    # Checks for specific fields in the embed
    assert embed.title == "User score"
    assert embed.description == "Your all score"
