import discord
from discord.ext import commands
from cogs import HelpCommand


def test_help_command():
    helpEmbed = discord.Embed(title="Help command for Language Bot", description="All commands for the bot.", color=discord.Color.random())
    helpCommandEmbed = HelpCommand.commands.command.help
    assert helpEmbed == helpCommandEmbed.help()
