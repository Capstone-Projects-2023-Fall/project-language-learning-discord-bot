---
sidebar_position: 4
---

## Functional Requirements

1. Language Learning Discord Bot (will be abbreviated to LLDB going further) will require a Discord account to use.
    * Requirements for making a Discord account include having an email address, and being of 13 years of age or older.
    * Discord can be downloaded onto the computer, or be accessed via the web @ https://discord.com/app
2. The LLDB will require being in the server with the bot. 
    * To accomplish this, one must join a server that hosts the bot or invite the bot into a server of their choosing.
    * LLDB Team will host the bot here @ https://discord.gg/zW5RbpbTT
3. Communicating with the bot will require an internet connection.
    * A stable connection is necessary for voice input/output; but for learning via text, it is not necessary.
4. Starting setup for the bot includes just selecting a starter language to begin. 
    * This language can be changed at a later date if desired by sending "/changeLanguage".
5. The full command list for the bot can be viewed by sending "/help" in the chat while the bot is active.
    * Viewing the command list will let you see all possible options to learn with the bot.
6. To access a vocab quiz with the selected language, prompt the bot by sending "/startVocabQuiz". 
    * This will allow the user to select a level to start with; the higher the level number, the more difficult the words will be.
    * For example, level 1 might include "talkative", whereas level 7 might include "gregarious" by comparison.
    * After selecting the level, the bot will generate a practice test for the user to attempt.
7. To access pronounciation practice, prompt the bot by sending "/startVoiceQuiz".
    * To use this command, one must be in a voice channel on the server.
    * The bot must have permissions to access the voice channel; this can be done by giving the bot the permission or making the voice channel visible to the bot.
    * The bot will join the voice channel and transcribe the user's audio transmission.
    * The user will then be graded on their attempt.
8. The language leaderboard can be checked by sending "/leaderboard".
    * This will display the current top aggregate scores of all users.
    * These scores are increased when completing vocab and voice quizzes with the highest possible scores.
    * To check an individual's scores across all quizzes, send "/myScores".
    * The leaderboard will be specific to each language; there will be a different leaderboard for each different language.

## Nonfunctional Requirements
1. The LLDB will send notifications to practice.
    * The bot should send periodic notifications to users, reminding them to practice their chosen language.
    * Encouraging messages can be attached to the notifications.
    * Notifications should be sent at appropriate intervals to encourage consistent practice.
2. The bot can give language-specific responses.
	* The bot's responses should align with the language selected by the user for a more immersive learning experience.
3. LLDB will implement user-friendly interaction.
    * All commands will have relevant, intuitive names and provide clear instructions
    * The bot will provide feedback so the user is always aware of their current progress
4. The bot will provide an interactive learning experience.
    * Vocabulary practice, quizzes, and pronunciation exercises should be engaging and interactive.
5. The bot will employ data persistance to ensure all users can interact with the bot simutanenously 
  	* User progress data will be securely stored and retrieved for each session.
	* Data backup and recovery mechanisms via external database
    * Session persistence and ensuring that user progress is saved even if the user closes the Discord app or logs out.
    * The bot should keep track of individual user profiles with progress, including lessons completed, quiz scores, and pronunciation scores.

    



