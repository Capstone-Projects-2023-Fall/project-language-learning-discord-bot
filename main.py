import os
import discord
from discord.ext import commands
from discord.ui import Button, View
from dotenv import load_dotenv
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
    channel_id = int(os.getenv('CHANNEL_ID'))
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
def setup_hook():
    for filename in os.listdir('./cogs'):
        if filename.endswith('.py'):
            bot.load_extension(f'cogs.{filename[:-3]}')
            print(f"Loaded Cog: {filename[:-3]}")
setup_hook()

# Disconnect command with a disconnect button
@bot.command(name='disconnect')
@commands.has_role('Admin')
async def disconnect(ctx):
    # Create a button for disconnecting the bot
    disconnect_button = Button(label="Disconnect Bot", style=discord.ButtonStyle.danger)

    async def disconnect_button_callback(interaction):
        # Check if the user interacting is the one who initiated the disconnect
        if interaction.user == ctx.author:
            try:
                # Acknowledge the interaction first
                await interaction.response.defer()
            
                # Send a public message to the channel
                await interaction.followup.send(f"The bot is disconnecting as requested by {ctx.author.mention}.")
            
                # Wait a moment for the message to be processed
                await asyncio.sleep(1)
            
                # Delay to ensure the disconnect message is sent before shutting down
                await bot.close()
            except Exception as e:
                print(f"An error occurred: {e}")
        else:
            # If someone else clicks the button, inform them they don't have the permission to do so
            await interaction.response.send_message("You are not authorized to disconnect the bot.", ephemeral=True)

    disconnect_button.callback = disconnect_button_callback
    view = View()
    view.add_item(disconnect_button)
    await ctx.send(f"Bot disconnect has been initiated by {ctx.author.mention}. Please confirm by clicking the 'Disconnect Bot' button.", view=view)

bot.run(os.environ['BOT_TOKEN'])
