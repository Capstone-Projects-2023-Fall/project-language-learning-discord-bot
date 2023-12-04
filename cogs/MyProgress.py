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
        my_msg = await ctx.send('loading...')
        username = str(ctx.message.author)
        dbuser = database.findUser(username=username)
        if dbuser is not None and constant.USER_LANGUAGE in dbuser:
            language = dbuser[constant.USER_LANGUAGE]
            dbuserprogress = database.readUserProgress(username=username)
            practice_shown = False
            practice_id = ""
            practice_type = ""

            dbprogress = dbuserprogress["progress"]
            dbunit = dbprogress[0]

            backbutton = discord.ui.Button(emoji='◀️', disabled=True)
            nextbutton = discord.ui.Button(emoji='▶️', disabled=len(dbunit['name']) == 1)
            startbutton = discord.ui.Button(emoji='📝')
            idx = 0

            dblessons = dbunit["lessons"]

            done = "Not completed"
            for counter in range(2):
                if dblessons[counter]["isDone"] == True: 
                    done_count += 1
                if practice_id == "" and dblessons[counter]["isDone"] == False:
                    practice_id = dblessons[counter]["id"]
                    practice_type = dblessons[counter]["type"]
                if dblessons[counter]["isDone"] == True:
                    done = "Completed"

            # progress_embed.title = f"Lesson {idx + 1}"
            progress_embed = discord.Embed(
                title=dbunit["name"],
                description=f'{dbunit["title"]} \n**Lesson 1**\n{dblessons[idx]["name"]} {done}\n**Lesson 2**\n{dblessons[idx + 1]["name"]} {done}',
                color=discord.Color.random()
            )

            if done_count == len(dblessons):
                progress_embed.set_thumbnail(url="attachment://trophy.png")

            if done_count < len(dblessons) and practice_shown == False:
                async def startbutton_callback(interaction):
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

            async def backbutton_callback(interaction):
                nonlocal idx, backbutton, nextbutton, progress_embed
                idx -= 1
                done_count = 0
                practice_shown = False
                practice_id = ""
                practice_type = ""
                dbunit = dbprogress[idx]

                if idx == 0:
                    backbutton.disabled = True
                if idx == len(dbunit['name']) - 2:
                    nextbutton.disabled = False

                dblessons = dbunit["lessons"]
                done = "Not completed"
                for counter in range(2):
                    if dblessons[counter]["isDone"] == True: 
                        done_count += 1
                    if practice_id == "" and dblessons[counter]["isDone"] == False:
                        practice_id = dblessons[counter]["id"]
                        practice_type = dblessons[counter]["type"]
                    if dblessons[counter]["isDone"] == True:
                        done = "Completed"

                progress_embed = discord.Embed(
                    title=dbunit["name"],
                    description=f'{dbunit["title"]} \n**Lesson 1**\n{dblessons[0]["name"]} {done}\n**Lesson 2**\n{dblessons[1]["name"]} {done}',
                    color=discord.Color.random()
                )

                await my_msg.edit(content='', embed=progress_embed, view=view)

                if done_count < len(dblessons) and practice_shown == False:
                    async def startbutton_callback(interaction):
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

                if done_count == len(dblessons):
                    progress_embed.set_thumbnail(url="attachment://trophy.png")
                    file = discord.File("images/trophy.png", filename="trophy.png")
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=progress_embed, view=view, file=file)
                else:
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=progress_embed, view=view)

                practice_shown = True
                print(f"{practice_id}    {practice_type}")

            async def nextbutton_callback(interaction):
                nonlocal idx, backbutton, nextbutton, progress_embed
                idx += 1
                dbunit = dbprogress[idx]
                done_count = 0
                practice_shown = False
                practice_id = ""
                practice_type = ""

                if idx == len(dbunit['title']) - 1:
                    nextbutton.disabled = True
                if idx == 1:
                    backbutton.disabled = False


                done = "Not completed"
                for counter in range(2):
                    if dblessons[counter]["isDone"] == True: 
                        done_count += 1
                    if practice_id == "" and dblessons[counter]["isDone"] == False:
                        practice_id = dblessons[counter]["id"]
                        practice_type = dblessons[counter]["type"]
                    if dblessons[counter]["isDone"] == True:
                        done = "Completed"

                progress_embed = discord.Embed(
                    title=dbunit["name"],
                    description=f'{dbunit["title"]} \n**Lesson 1**\n{dblessons[0]["name"]} {done}\n**Lesson 2**\n{dblessons[1]["name"]} {done}',
                    color=discord.Color.random()
                )
                
                await my_msg.edit(content='', embed=progress_embed, view=view)

                if done_count < len(dblessons) and practice_shown == False:
                    async def startbutton_callback(interaction):
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

                if done_count == len(dblessons):
                    progress_embed.set_thumbnail(url="attachment://trophy.png")
                    file = discord.File("images/trophy.png", filename="trophy.png")
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=progress_embed, view=view, file=file)
                else:
                    await interaction.response.defer()
                    await my_msg.edit(content='', embed=progress_embed, view=view)

                practice_shown = True
                print(f"{practice_id}    {practice_type}")

            # for dbunit in dbprogress:
            #     embed = discord.Embed(
            #         title=dbunit["name"],
            #         description=dbunit["title"],
            #         color=discord.Color.random()
            #     )
            #     dblessons = dbunit["lessons"]
            #     done_count = 0
            #     index = 0
            #     for dblesson in dblessons:
            #         if dblesson["isDone"] == True: 
            #             done_count += 1
            #         if practice_id == "" and dblesson["isDone"] == False:
            #             practice_id = dblesson["id"]
            #             practice_type = dblesson["type"]

            #         done = "Not completed"
            #         if dblesson["isDone"] == True:
            #             done = "Completed"
            #         embed.add_field(
            #             name=f"Lesson {index + 1}",
            #             value=f"{dblesson['name']}{done}",
            #             inline=False
            #         )
            #         index +=1
            #     # mark done
            #     if done_count == len(dblessons):
            #         embed.set_thumbnail(url="attachment://trophy.png")
            #         file = discord.File("images/trophy.png", filename="trophy.png")
            #         await ctx.send(file=file, embed=embed)
            #     else:
            #         await ctx.send(embed=embed)
            #     if done_count < len(dblessons) and practice_shown == False:
            #         async def button_record_callback(interaction):
            #             await interaction.response.send_message("Start practice!")
            #             if practice_type == "quiz":
            #                 quiz = database.getRandomQuiz(language)
            #                 vocabQuiz = vocabquiz.VocabQuiz(ctx=ctx,user=username, quiz=quiz, progressId=practice_id)
            #                 hasQuestion, question, view = vocabQuiz.get_question()
            #                 if hasQuestion:
            #                     await ctx.send(question, view=view)
            #             elif practice_type == "practice":
            #                 practice = database.getRandomPractice(language)
            #                 pronunTest = pronuntest.PronunTest(ctx=ctx, user=username, practice=practice, progressId=practice_id)
            #                 hasQuestion, sentence, view = pronunTest.get_question()
            #                 if hasQuestion:
            #                     await ctx.send(f"How do you say: {sentence}", view=view)
                    
            #         view = discord.ui.View()
            #         button = discord.ui.Button(label="Press to Continue")
            #         button.callback = button_record_callback
            #         view.add_item(button)
            #         practice_shown = True
            #         print(f"{practice_id}    {practice_type}")
            #         await ctx.send(view=view)

            backbutton.callback = backbutton_callback
            nextbutton.callback = nextbutton_callback
            startbutton.callback = startbutton_callback

            view = discord.ui.View()
            view.add_item(backbutton)
            view.add_item(nextbutton)
            view.add_item(startbutton)

            await my_msg.edit(content='', embed=progress_embed, view=view)


        else:
            error_embed = discord.Embed(title="Language Not Selected", description=f"Please use command !changeLanguage [language] to select your language", color=0xFF0000)
            await ctx.send(embed=error_embed)

def setup(bot):
    bot.add_cog(MyProgress(bot))
    print("MyProgress.py added")
