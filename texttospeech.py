from gtts import gTTS 

class TextToSpeech(object):
    def __init__(self, language):
        self.language_map = {
            'English': 'en-US',
            'Spanish': 'es-US',
            'Franch': 'fr-Fr',
            'German': 'de-De',
            'Chinese': 'cmn-CN',
            'Greek': 'el-GR',
            'Vietnamese': 'vi-VN',
        }
        if language in self.language_map:
            self.language = self.language_map[language]
        else:
            self.language = self.language_map['English']
    
    def text_to_speech(self, text):
        voice = gTTS(text=text, lang=self.language, slow=False) 
        voice.save("audios/voice.mp3")

