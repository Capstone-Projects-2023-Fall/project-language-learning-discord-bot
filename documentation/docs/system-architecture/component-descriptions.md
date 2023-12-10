---
sidebar_position: 2
---

# Component Descriptions
A description the different components and their interfaces. See the [System Block Diagram](https://capstone-projects-2023-fall.github.io/project-language-learning-discord-bot/docs/requirements/system-block-diagram) for a visualization of how these components interact.

## Discord API
	An API that allows interactions with various features on Discord 
	such as chatting and user authentication. We will use Discord's API 
	to facilitate communication with users and recieve commands. 
 
## Py-cord (Discord API Wrapper)
	A feature-rich Python library which is forked from discord.py.
 	Py-cord encapsulates many Discord API calls for ease of use. 

## MongoDB
	A NoSQL database management system. We will use MongoDB to
	store user's selected language as well as current progress. 
 	Additionally course materials including quizzes, flashcards, and 
  	more will be stored on a MongoDB database. 

## Language Bot
	Python program in charge of generating the language learning experience for 
 	users. This includes displaying all course materials (units/quizzes/etc.) in the 
  	form of embeds and other message types within the Discord platform.  
	
## GTTS
	A Python library used to interface with Google Translate's text-to-speech 
 	API. GTTS will be used to vocalize lesson text for the learning bot to be 
  	used in listening comprehension. 

## OpenAI
	Python library which provides access to OpenAi's APIs. This project will
 	make use of OpenAi's Audio API trained on their automatic speech recognition 
  	system Whisper to transcribe user audio. 
	
