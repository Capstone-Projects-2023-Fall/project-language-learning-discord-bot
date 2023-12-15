---
sidebar_position: 2
---

# System Block Diagram
<img src ="https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/main/images/sysblocv2.png" alt="System Block Diagram"/>

## Key Interactions:
The diagram above depicts the high level design of services and their interactions in the Language Learning Discord Bot. The project can be seperated into a few distinct sections including: the client side, server side, and finally external API usage. The client side consists of the only the Discord application, which will serve as the only point of interaction between users and the bot. All course interactions including quizzes and lesson practice will sent as messages from the bot within Discord. On the serverside of this project consists of the bot and the MongoDB database. The bot will generate the user's learning experience within embeds and discord messages while accessing the database to retrieve course materials and update a user's lesson progress. Finally in terms of external APIs, this application makes use of both OpenAI and gTTS. Whisper from the OpenAi library will be used to produce text from user audio files while gTTS will be used to interface with Google Translate's API and create audio files from lesson text. 
