import discord
import constant
from database import Database
from speechrecognition import SpeechToText
from matchresult import MatchResult
from datetime import datetime
from pronuntest import PronunTest
import time

database = Database()

connections = {}

class PronunPractice(object):  
    def __init__(self, ctx, user, practice, textToSpeech, progressId = ""): 
        self.ctx = ctx
        self.practice = practice
        self.numOfFinishQuestion = 0
        self.user = user
        self.sentences = practice["sentences"]
        self.numOfSentences = len(self.sentences)
        self.currentSentence = ""
        self.currentAnswer = ""
        self.currentScore = 0
        self.progressId = progressId
        self.textToSpeech = textToSpeech

    async def play_sentence(self):
        voice = self.ctx.author.voice
        if not voice:
            await self.ctx.respond("You aren't in a voice channel!")
        vc = await voice.channel.connect() 
        vc.play(discord.FFmpegPCMAudio(executable="audios/bin/ffmpeg.exe", source="audios/voice.mp3"))
        while vc.is_playing():
            time.sleep(.1)
        await vc.disconnect()

    def get_question(self):
        if self.numOfFinishQuestion < self.numOfSentences:
            sentence = self.sentences[self.numOfFinishQuestion]
            self.currentSentence = sentence["sentence"]
            self.currentAnswer = sentence["answer"]

            # return answer
            view = discord.ui.View()

            async def button_play_callback(interaction):
                await interaction.response.defer()
                await self.play_sentence()

            async def button_stop_callback(interaction):
                await interaction.response.send_message("Done!")
                if self.ctx.guild.id in connections:  
                    vc = connections[self.ctx.guild.id]
                    vc.stop_recording()  
                    del connections[self.ctx.guild.id]

            async def button_record_callback(interaction):
                voice = self.ctx.author.voice
                if not voice:
                    await self.ctx.respond("You aren't in a voice channel!")

                vc = await voice.channel.connect() 
                connections.update({self.ctx.guild.id: vc}) 
                vc.start_recording(
                    discord.sinks.WaveSink(),  
                    self.once_done, 
                    self.ctx.channel  
                )
                await interaction.response.send_message("Start recording!")

                stopbutton = discord.ui.Button(label="Stop")
                stopbutton.callback = button_stop_callback
                view = discord.ui.View()
                view.add_item(stopbutton)
                await self.ctx.send(view=view)

            playbutton = discord.ui.Button(emoji='▶️')
            playbutton.callback = button_play_callback
            view.add_item(playbutton)
                
            button = discord.ui.Button(label="Press to Record")
            button.callback = button_record_callback
            view.add_item(button)
                        
            return True, self.currentAnswer, view
        else:
            return False, None, None
        
    async def once_done(self, sink: discord.sinks, channel: discord.TextChannel, *args):  # Our voice client already passes these in.
        recorded_users = [  # A list of recorded users
            f"<@{user_id}>"
            for user_id, audio in sink.audio_data.items()
        ]
        await sink.vc.disconnect()  # Disconnect from the voice channel.
        files = [discord.File(audio.file, f"{user_id}.{sink.encoding}") for user_id, audio in sink.audio_data.items()]  # List down the files.
        text = ''
        for user_id, audio in sink.audio_data.items():
            with open(f"audios/temp.{sink.encoding}", "wb") as outfile:
                # Copy the BytesIO stream to the output file
                outfile.write(audio.file.getbuffer())
            s2t = SpeechToText()
            text = s2t.speech_to_text(filename="temp.wav", language="n/a")
        #await channel.send(f"finished recording audio for: {', '.join(recorded_users)}.", files=files)  # Send a message with the accumulated files.
        highlighted_text = MatchResult.highlight_errors(self.currentAnswer, text)
        await channel.send(f"You said: {highlighted_text}")
        self.numOfFinishQuestion += 1
        # score
        percent = MatchResult.match_sentence(self.currentAnswer, text)
        score = int(percent * 10)
        self.currentScore += score
        await channel.send(f"Your score: {score}")
        # next question
        hasQuestion, sentence, view = self.get_question()
        if hasQuestion:
            self.textToSpeech.text_to_speech(text=sentence)
            await self.ctx.send(f"Hint: ||{sentence}||", view=view)
            await self.play_sentence()
        else:
            practice_info = self.get_quiz_info()
            database.updateUserQuiz(username=self.user,quiz=practice_info)
            await self.ctx.send(f"You finished the quiz! Your score is: {practice_info[constant.QUIZ_SCORE]}")

    def get_quiz_info(self):
        score = self.currentScore
        now = datetime.now()
        return {
            constant.COLLECTION_ID: self.practice["_id"],
            constant.QUIZ_NAME: self.practice["name"],
            constant.QUIZ_SCORE: score,
            constant.USER_TOOKON: now.strftime(constant.DATE_FORMAT),
            constant.USER_LANGUAGE: self.practice[constant.USER_LANGUAGE],
            "progress_id": self.progressId
        }