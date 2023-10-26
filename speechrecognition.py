import openai
import os
from dotenv import load_dotenv
import speech_recognition as sr

load_dotenv()

class SpeechToText(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(SpeechToText, cls).__new__(cls)
            cls.instance.initAPI()
        return cls.instance

    def initAPI(self) -> None:
        openai.api_key = os.environ['OPENAI_API_KEY']
        self.r = sr.Recognizer()

    def speech_to_text(self, filename, language):
        path = "audios/"
        #audio_file= open(path + filename, "rb")
        if language == "English":
            with sr.AudioFile(path + filename) as source:
                audio_data = self.r.record(source)
                text = self.r.recognize_google(audio_data)
                return text
        else: 
            audio_file= open(path + filename, "rb")
            transcript = openai.Audio.transcribe("whisper-1", audio_file)
        return transcript["text"]


    
s2t = SpeechToText()
text = s2t.speech_to_text(filename="how-are-you.wav", language="English")
print(text)



