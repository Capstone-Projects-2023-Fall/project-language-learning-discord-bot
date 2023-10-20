import os
import discord
from discord.ext import commands
from dotenv import load_dotenv
import database
from database import Database
import asyncio

# Load environment variable from .env file first
# When your project is deployed to a host environment like a virtual machine or Docker container where the .env file is not present, the environment variables defined in the host environment will be used instead
load_dotenv()

# Intents
intents = discord.Intents.default()
intents.message_content = True

# Creating the bot instance
bot = commands.Bot(command_prefix="!", intents=intents)

# Init the database
database = Database()


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

# @bot.event
# async def on_message(message):
#     if message.author == bot.user:
#         return
#     # type $test to test the db connection
#     if message.content.startswith('$test'):
#         await message.channel.send('Hello!')
#         await message.channel.send(message.author)
#         # Find user in database
#         dbuser = database.findUser(str(message.author))
#         if dbuser is not None:
#             print(dbuser)
#         else:
#             print("Insert new user")
#             user = {"_id": str(message.author)}
#             database.insertUser(user)
#     # other commands go here
#     if message.content.startswith('$help'):
#         await message.channel.send('Hello! This is the content of help command')

# Loads all the cogs (external commands organized in classes)
async def setup_hook():
    for filename in os.listdir('./cogs'):
        if filename.endswith('.py'):
            await bot.load_extension(f'cogs.{filename[:-3]}')
            print(f"Loaded Cog: {filename[:-3]}")


# Run the bot
async def main():
    async with bot:
        await setup_hook()
        await bot.start(os.environ['BOT_TOKEN'])
asyncio.run(main())
