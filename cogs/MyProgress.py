import discord
from discord.ext import commands
import database
from database import Database
import constant
import vocabquiz
import json
import pronuntest

database = Database()

class MyProgress(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print("MyProgress command is online.")

    @commands.command()
    async def myProgress(self, ctx):
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            await ctx.send("My progress called")
            dbuserprogress = database.readUserProgress(username=username)
            print("dbprogress", dbuserprogress)
            dbprogress = dbuserprogress["progress"]
            practice_shown = False
            practice_id = ""
            practice_type = ""
            for dbunit in dbprogress:
                embed = discord.Embed(
                    title=dbunit["name"],
                    description=dbunit["title"],
                    color=discord.Color.random()
                )
                dblessons = dbunit["lessons"]
                done_count = 0
                index = 0
                for dblesson in dblessons:
                    if dblesson["isDone"] == True: 
                        done_count += 1
                    if practice_id == "" and dblesson["isDone"] == False:
                        practice_id = dblesson["id"]
                        practice_type = dblesson["type"]

                    done = "Not completed"
                    if dblesson["isDone"] == True:
                        done = "Completed"
                    embed.add_field(
                        name=f"Lesson {index + 1}",
                        value=f"{dblesson['name']}                           {done}",
                        inline=False
                    )
                    index +=1
                # mark done
                if done_count == len(dblessons):
                    embed.set_thumbnail(url="attachment://trophy.png")
               
                await ctx.send(embed=embed)
                if done_count < len(dblessons) and practice_shown == False:
                    async def button_record_callback(interaction):
                        await interaction.response.send_message("Start practice!")
                        if practice_type == "quiz":
                            quiz = database.getRandomQuiz(language)
                            vocabQuiz = vocabquiz.VocabQuiz(ctx=ctx,user=username, quiz=quiz, progressId=practice_id)
                            hasQuestion, question, view = vocabQuiz.get_question()
                            if hasQuestion:
                                await ctx.send(question, view=view)
                        elif practice_type == "practice":
                            practice = database.getRandomPractice(language)
                            pronunTest = pronuntest.PronunTest(ctx=ctx, user=username, practice=practice, progressId=practice_id)
                            hasQuestion, sentence, view = pronunTest.get_question()
                            if hasQuestion:
                                await ctx.send(f"How do you say: {sentence}", view=view)
                    
                    view = discord.ui.View()
                    button = discord.ui.Button(label="Press to Continue")
                    button.callback = button_record_callback
                    view.add_item(button)
                    practice_shown = True
                    print(f"{practice_id}    {practice_type}")
                    await ctx.send(view=view)


        else:
            error_embed = discord.Embed(title="Language Not Selected", description=f"Please use command !changeLanguage [language] to select your language", color=0xFF0000)
            await ctx.send(embed=error_embed)

def setup(bot):
    bot.add_cog(MyProgress(bot))
    print("MyProgress.py added")
