import discord
from discord.ext import commands
from database import Database
import constant

class FillInTheBlanks(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.db = Database()

    @commands.Cog.listener()
    async def on_ready(self):
        print("FillInTheBlanks command is online.")

    @commands.command(name='fillInTheBlanks')
    async def fill_in_the_blanks(self, ctx, *, language: str = None):
        username = str(ctx.message.author)
        dbuser = self.db.findUser(username=username)

        if language:
            language_preference = language.capitalize()
        elif dbuser and constant.USER_LANGUAGE in dbuser:
            language_preference = dbuser[constant.USER_LANGUAGE].capitalize()
        else:
            await ctx.send(embed=discord.Embed(
                title="Language Not Selected",
                description="Please use the command !changeLanguage [language] to select your language.",
                color=0xFF0000
            ))
            return

        fill_in_the_blank_set = self.db.get_random_fill_in_the_blank_set(language_preference)

        if fill_in_the_blank_set:
            total_score = 0
            question_number = 1
            
            for question in fill_in_the_blank_set['questions']:
                if '(' in question['sentence'] and ')' in question['sentence']:
                    
                    start = question['sentence'].find('(')
                    end = question['sentence'].find(')')
                    options_text = question['sentence'][start+1:end] 
                    options_list = options_text.split(',') 
                    options_formatted = '\n'.join([f"• {option.strip()}" for option in options_list]) 
                    sentence_with_blank = question['sentence'][:start] + "_ _ _" + question['sentence'][end+1:]
                else:
                    options_formatted = "• No options/hints available"
                    sentence_with_blank = question['sentence'].replace('_ _ _', '_ _ _')  

                
                question_text = (
                    f"**{sentence_with_blank}**\n\n"
                    f"**Options:**\n{options_formatted}\n\n"
                    f"*Type the correct answer in chat.*\n"
                    f"\n*English equivalent:*\n"
                    f"**{question['englishEquivalent']}**"
                )

            for question in fill_in_the_blank_set['questions']:
                question_embed = discord.Embed(
                    title=f"Question {question_number}: Fill in the Blanks!",
                    description=question['sentence'],
                    color=0x3498DB
                )
                question_embed.set_footer(text=f"Language: {language_preference}")
                await ctx.send(embed=question_embed)

                def check(m):
                    return m.author == ctx.author and m.channel == ctx.channel

                message = await self.bot.wait_for('message', check=check)

                if message.content.lower().strip() == question['correctAnswer'].lower():
                    response_embed = discord.Embed(
                        title=f"Question {question_number}: Correct!",
                        description=f"+5 points\nThe English word for '{question['correctAnswer']}' is '{question['englishWord']}'.",
                        color=0x2ECC71
                    )
                    total_score += 5
                else:
                    response_embed = discord.Embed(
                        title=f"Question {question_number}: Incorrect!",
                        description=f"The correct answer was '{question['correctAnswer']}' ('{question['englishWord']}').\nThe full sentence in English is: '{question['englishEquivalent']}'",
                        color=0xE74C3C
                    )
                await ctx.send(embed=response_embed)
                question_number += 1

            final_score_embed = discord.Embed(
                title="Session Over!",
                description=f"Your total score: {total_score}",
                color=0x9B59B6
            )
            await ctx.send(embed=final_score_embed)
            self.db.updateUserTotalScore(username, total_score)
        else:
            await ctx.send("No fill-in-the-blank set available for the selected language.")

def setup(bot):
    bot.add_cog(FillInTheBlanks(bot))
    print("FillInTheBlanks.py added")
