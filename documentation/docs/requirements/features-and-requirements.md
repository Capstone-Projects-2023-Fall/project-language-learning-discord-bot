---
sidebar_position: 4
---

## Functional Requirements: ##

* User Notification to Practice.
    *	The bot should send periodic notifications to users, reminding them to practice their chosen language.
    *	Encouraging messages can be attached to the notifications.
*	Bot Introduction Message.
     * When users open the bot, they should receive a welcome message.
     * The welcome message will explain how the bot works and all the tips
*	User Interaction with Bot.
     * Users should initiate interactions with the bot by entering specific chat commands.
     * The bot should recognize and respond to these commands promptly.
*	List of Instructions.
     * Upon user request, the bot should provide a list of available instructions and commands for learning.
*	Starter Language Selection
     * Users can select their starter language from the available options (possible to have only one choice as language)
     * The bot should offer a range of languages to choose from.
*	Language-Specific Responses.
	 * The bot's responses should align with the language selected by the user for a more immersive learning experience.
     * And the range of learning option should be offered.
*	Vocabulary Practice.
     * Users can access vocabulary practice sessions.
     * The bot should provide users with vocabulary words and their translations.
     * The bot can also give suggestions on how to improve the user’s vocabulary.
*	Language Quiz.
     * Users can opt for language quizzes to test their knowledge.
     * The bot should generate quiz questions and validate user responses.
*	Pronunciation Practice.
     * Users can engage in pronunciation practice sessions.
     * The bot should provide audio prompts for users to practice pronunciation.
*	Voice Recognition.
     * The bot should listen to users' audio submissions during pronunciation practice.
     * It should transcribe the user's audio and evaluate pronunciation accuracy.
*	Grading and Feedback.
     * The bot should grade quiz responses and pronunciation submissions.
     * Provide clear feedback, indicating whether answers are correct or not.
*	Language Leaderboard.
     * Implement a language-specific leaderboard to track user progress and achievements.
     * Leaderboards should be periodically updated.
*	Language Switching.
     * Users can switch between languages without losing their progress in each language.
     * The bot should maintain individual progress for each language.
*	User Profile Updates.
     * The bot should update individual user profiles with progress, including lessons completed, quiz scores, and pronunciation scores.
*	Session Persistence.
     * Ensure that user progress is saved even if the user closes the Discord app or logs out.

## Nonfunctional Requirements: ##
*	Timely Notifications
      * Notifications should be sent at appropriate intervals to encourage consistent practice.
*	User-Friendly Interaction.
     * The bot should provide clear and concise instructions for all interactions.
     *  Ensure users can easily navigate through available features.
*	Language Selection Clarity.
     * Make it clear to users how to select their preferred language.
*	Interactive Learning Experience.
     *  Vocabulary practice, quizzes, and pronunciation exercises should be engaging and interactive.
     *	The bot's responses should provide a good language learning experience.
*	Feedback Accuracy.
     *	The bot's grading and feedback mechanisms should be accurate and provide valuable feedbacks for users.
*	Data Persistence.
  	 *  Ensure that user progress data is securely stored and retrieved for each session.
	 * Implement data backup and recovery mechanisms.
=======
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

5. The full command list for the bot can be viewed by sending "/help" in to the chat while the bot is active.
    * Viewing the command list will let you see all possible options to learn with the bot.

6. To access a vocab quiz with the selected language, simply prompt the bot via sending "/startVocabQuiz". 
    * This will allow the user to select a level to start with; the higher the level number, the more difficult the words will be.
    * For example, level 1 might include "talkative", whereas level 7 might include "gregarious" by comparison.
    * After selecting the level, the bot will generate a practice test for the user to attempt.

7. To access pronounciation practice, prompt the bot via sending "/startVoiceQuiz".
    * To use this command, one must be in a voice channel on the server.
    * Furthermore, the bot must have permissions to access the voice channel; this can be done by giving the bot the permission or making the voice channel visible to the bot.
    * The bot will join the voice channel and transcribe the user's audio transmission.
    * The user will then be graded on their attempt.

8. The language leaderboard can be checked via "/leaderboard".
    * This will display the current top aggregate scores of all users.
    * These scores are increased when completing vocab and voice quizzes with the highest possible scores.
    * To check an individual's scores across all quizzes, send "/myScores".
    * The leaderboard will be specific to each language; there will be a different leaderboard for each different language.


    



