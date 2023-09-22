import os
import discord
from discord.ext import commands

# Intents
intents = discord.Intents.default()
intents.message_content = True

# Creating the bot instance
bot = commands.Bot(command_prefix="!", intents=intents)


# Bot events
@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    print(f"Logged in as {bot.user.name}")
    print("Bot is now online and ready to use!")

    # Send a message to a specific channel when the bot comes online
    channel_id = 1154069544629960925  # Replace with specific channel ID
    channel = bot.get_channel(channel_id)

    if channel:
        await channel.send("Hello, I'm now online!")

# Run the bot
bot.run(os.environ['BOT_TOKEN'])
