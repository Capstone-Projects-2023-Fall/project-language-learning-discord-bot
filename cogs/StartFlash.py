import time

import discord
from discord.ext import commands
import database
from database import Database
import constant
## import flashCard

database = Database()

class StartFlash(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("StartFlash.py is online.")

    @commands.command()
    async def startFlash(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]

            units = discord.ui.Select(
                placeholder="Select a Unit or Randomize",
                options=[
                    discord.SelectOption(label="Unit 1", value="1", emoji='1️⃣'),
                    discord.SelectOption(label="Unit 2", value="2", emoji='2️⃣'),
                    discord.SelectOption(label="Unit 3", value="3", emoji='3️⃣'),
                    discord.SelectOption(label="Unit 4", value="4", emoji='4️⃣'),
                    discord.SelectOption(label="Unit 5", value="5", emoji='5️⃣'),
                    discord.SelectOption(label="Random", value="6", emoji='🎲')
                ]
            )

            async def select_callback(interaction):
                nonlocal view, units
                await interaction.response.defer()

                unit_choice = int(units.values[0])

                units.disabled = True
                view.remove_item(units)

                if unit_choice == 6:
                    cardset = database.getRandomFlash(language)
                else:
                    cardset = database.getUsrFlashcards(unit_choice, language)

                idx = 0
                flipped = False
                flash_embed = discord.Embed(title="Front", description=cardset['cards'][idx]['front'], color=0xFF69B4)

                backbutton = discord.ui.Button(emoji='◀️', disabled=True)
                nextbutton = discord.ui.Button(emoji='▶️', disabled=len(cardset['cards']) == 1)
                flipbutton = discord.ui.Button(emoji='🔄')
                endbutton = discord.ui.Button(emoji='❌')

                async def backbutton_callback(interaction):
                    nonlocal flipped, idx, backbutton, nextbutton, flash_embed
                    idx -= 1
                    flipped = False

                    if idx == 0:
                        backbutton.disabled = True
                    if idx == len(cardset['cards']) - 2:
                        nextbutton.disabled = False

                    flash_embed.title = "Front"
                    flash_embed.description = cardset['cards'][idx]['front']
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=flash_embed, view=view)

                async def nextbutton_callback(interaction):
                    nonlocal flipped, idx, backbutton, nextbutton, flash_embed
                    idx += 1
                    flipped = False

                    if idx == len(cardset['cards']) - 1:
                        nextbutton.disabled = True
                    if idx == 1:
                        backbutton.disabled = False

                    flash_embed.title = "Front"
                    flash_embed.description = cardset['cards'][idx]['front']
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=flash_embed, view=view)

                async def flipbutton_callback(interaction):
                    nonlocal flipped, idx, flash_embed

                    flipped = not flipped

                    flash_embed.title = "Back" if flipped else "Front"
                    flash_embed.description = cardset['cards'][idx]['back' if flipped else 'front']
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=flash_embed, view=view)

                async def endbutton_callback(interaction):
                    nonlocal view
                    flash_embed = discord.Embed(title="Great Work!", description="", color=0x800020)
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=flash_embed, view=None)
                    view.stop()

                backbutton.callback = backbutton_callback
                nextbutton.callback = nextbutton_callback
                flipbutton.callback = flipbutton_callback
                endbutton.callback = endbutton_callback

                view = discord.ui.View()
                view.add_item(backbutton)
                view.add_item(nextbutton)
                view.add_item(flipbutton)
                view.add_item(endbutton)

                await my_msg.edit(content='', embed=flash_embed, view=view)

            units.callback = select_callback

            view = discord.ui.View()
            view.add_item(units)
            my_msg = await ctx.send("Please select a unit", view=view)

def setup(bot):
    bot.add_cog(StartFlash(bot))
    print("StartFlash.py added")
