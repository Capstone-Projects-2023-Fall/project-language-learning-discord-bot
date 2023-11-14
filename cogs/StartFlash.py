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
        my_msg = await ctx.send('loading...')
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            cardset = database.getRandomFlash(language)
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

def setup(bot):
    bot.add_cog(StartFlash(bot))
    print("StartFlash.py added")
