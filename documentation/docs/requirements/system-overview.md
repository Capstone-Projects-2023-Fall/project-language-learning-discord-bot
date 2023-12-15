---
sidebar_position: 1
---

# System Overview

## Language Learning Discord Bot

### Project Abstract
This document proposes a language-learning chatbot integrated with the Discord platform, i.e., a Discord bot. The bot is a language learning assistant designed to help users learn a new language effectively. It offers a wide range of features to support language acquisition and practice, including providing interactive lessons, vocabulary practice, language quizzes, pronunciation testing, reading with audio and translation, syntax and spelling checks, and more. Users will be able to start learning sessions, access learning materials, and conversation practice, all while being guided and assisted by the bot. Users should also be able to initiate language learning sessions and specify their chosen language, i.e., Japanese, Spanish, etc. The bot must offer a comprehensive set of interactive lessons, including text-based content, vocabulary quizzes, and pronunciation exercises. It will have features such as progress tracking and user profiles which are saved in a database. Additionally, the bot will provide resources and explanations to user requests.  

### Conceptual Design
This project will be developed with Python utilizing the Discord library. The bot will function as a “bot account” within Discord servers, offering users the ability to interact while on the phone or the web. User progress must be saved, so it will be managed by a MongoDB, allowing personalized learning journeys (Save progress for different languages).

### Background
Learning new languages is a significant educational need, and Discord provides a user-friendly platform for this interactive bot. This project aims to combine Discord’s chat feature with educational content to offer a simple and easy language learning solution. 

Existing language learning bots do exist, but the only known bot for this is the GPT-powered bot, “Memrise”. The bot utilizes GPT (the AI model behind ChatGPT) to allow users to learn new languages. The bot allows you to learn a language while talking to the bot itself, i.e., having a conversation. This project seeks to further what Memrise does by offering more ways to learn by providing users with quizzes, pronunciation exercises, and other resourceful tools.

### Required Resources
1. Python & Discord (Have them installed) 
2. Access to a Discord account and API token 
3. MongoDB (to host database)
4. Server or Cloud Hosting 
5. GPT
