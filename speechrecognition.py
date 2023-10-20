import openai
import os
from dotenv import load_dotenv

load_dotenv()

class SpeechToText(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(SpeechToText, cls).__new__(cls)
            cls.instance.initAPI()
        return cls.instance

    def initAPI(self) -> None:
        openai.api_key = os.environ['OPENAI_API_KEY']

    def speech_to_text(self, filename):
        path = "audios/"
        audio_file= open(path + filename, "rb")
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
        return transcript["text"]


    
        


