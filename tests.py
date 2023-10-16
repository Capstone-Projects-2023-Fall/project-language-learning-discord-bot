import discord
from discord.ext import commands
from cogs import HelpCommand


def test_help_command():
    helpEmbed = discord.Embed(title="Help command for Language Bot", description="All commands for the bot.", color=discord.Color.random())
    helpCommandEmbed = discord.Embed()
    assert helpEmbed != helpCommandEmbed
    assert helpCommandEmbed == discord.Embed()

def test_scores():
    pass
