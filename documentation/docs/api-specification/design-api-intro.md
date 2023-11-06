---
sidebar_position: 1
description: Documentation
---

Design Document - Part II API
=============================

## Main
    Class Purpose: The Main class will start and initialize the bot with its default parameters.

    Data Fields:
      - bot: An instance of the Discord Bot
      - database: An instance of the Database class

    Methods:
      - on_ready(): void
          - An event handler called when the Discord bot is ready. It prints a message to the console and sends a message to a specific channel.
          - Pre-conditions: None
          - Parameters: None
          - Returns: Prints "Hello, I'm now online!" string if the channel is active for the bot to enter.

      - setup_hook(): void
          - A method that loads external commands (cogs) from the 'cogs' directory.
          - Pre-conditions: None
          - Parameters: None
          - Returns: Prints string of cog commands to the console.

      - main(): void
          - The main entry point for the bot, where it sets up the bot, loads cogs, and starts the bot using asyncio.
          - Pre-conditions: None
          - Parameters: None
          - Returns: None
## Database
    Class Purpose: To create a database of users with data about their performance within a specific language.

    Data Fields: None

    Methods:
        - __new__(cls):
            - Ensures that only one instance of the Database class is created.
            - Pre-conditions: None
            - Parameters: cls
            - Returns: An instance of the database via cls.instance

        - initDb(self):
            - Initializes the database connection and sets up the client, database, and collections.
            - Pre-conditions: none
            - Parameters: self
            - Returns: Prints a success string if the client successfully to the MongoDB

        - findUser(self, username):
            - Finds a user in the database based on the username.
            - Pre-conditions: None
            - Parameters: self, username
            - Returns: self.userCollection.find_one(query), displays the user if it was found

        - insertUser(self, user): void
            - Inserts a user into the database.
            - Pre-conditions: None
            - Parameters: self, user
            - Returns: A successful call of inserting a user into the database

        - changeUserLangauge(self, username, language):
            - Updates the user's language preference in the user collection.
            - Pre-conditions: None
            - Parameters: self, username, language
            - Returns: A successful call of changing the language of a user based on their collection ID

        - getQuizzes(self, language):
            - Retrieves quizzes based on the specified language.
            - Pre-conditions: None
            - Parameters: self, language
            - Returns: An array of the quizzes

        - getPractices(self, language):
            - Retrieves practices based on the specified language.
            - Pre-conditions: None
            - Parameters: self, language
            - Returns: An array of practice activities

        - getRandomQuiz(self, language):
            - Selects and returns a random quiz for the specified language.
            - Pre-conditions: None
            - Parameters: self, language
            - Returns: The specific index (quizzes[index]) of the requested quiz

        - getRandomPractice(self, language):
            - Selects and returns a random practice for the specified language.
            - Pre-conditions: None
            - Parameters: self, language
            - Returns: The specific index (practices[index]) of the requested practice activity

        - updateUserQuiz(self, username, quiz):
            - Updates the user's quiz score in the user collection.
            - Pre-conditions: None
            - Parameters: self, username, quiz
            - Returns: A successful call to the database when a specific user score is updated

        - get_all_users(self):
            - Selects and returns all of the users regardless of language
            - Pre-conditions: None
            - Parameters: self
            - Returns: The array of all users

## VocabQuiz
    Class Purpose: To generate a customized vocab quiz for the user based on their selected language
    
    Data Fields: None

    Methods:
        - __init__(self, ctx, user, quiz):
            - Initializes the quiz with context, user, and quiz data.
            - Pre-conditions: None
            - Parameters: self, ctx, user, quiz
            - Returns: None

        - get_question(self):
            - Gets a quiz question
            - Pre-conditions: None
            - Parameters: self
            - Returns: True, the ID # of the quiz, and the display of it in the discord UI

        - get_quiz_info(self):
            - Gets quiz information including score.
            - Pre-conditions: None
            - Parameters: self
            - Returns: Quiz ID #, Quiz Name, Quiz Score, User Token, User Language

## HelpCommand
    Class Purpose: To allow the user to use the /help command

    Data Fields: None

    Methods:
        - __init__(self, bot):
            - Initializes the cog with a reference to the bot.
            - Pre-conditions: None
            - Parameters: self, bot
            - Returns: Sends an instance of the bot to the user

        - on_ready(self):
            - An event handler called when the cog is ready.
            - Pre-conditions: None
            - Parameters: self
            - Returns: Prints a success message to the console

        - help(self, ctx):
            - A command that displays help information as an embedded message in Discord.
            - Pre-conditions: None
            - Parameters: self, ctx
            - Returns: Displays all text for the user in the Discord Chat

        - setup(bot):
            - Internal method for setting up the cog.
            - Pre-conditions: None
            - Parameters: bot
            - Returns: Prints a success message to the console and adds feature to the cogs command archive

## ChangeLanguage
    Class Purpose: To allow the user to change its current learning language to any other on the "constant.py" file (either Spanish or French).

    Data Fields:
        - database: An instance of the Database class

    Methods:
        - __init__(self, bot):
            - Initializes the cog with a reference to the bot.
            - Pre-conditions: None
            - Parameters: self, bot
            - Returns: An active instance of the bot

        - on_ready(self):
            - An event handler called when the cog is ready.
            - Pre-conditions: None
            - Parameters: self
            - Returns: A success message to the console

        - changeLanguage(self, ctx, userprompt: str):
            - A command that allows the user to change languages.
            - Pre-conditions: None
            - Parameters: self, ctx, userprompt: str
            - Returns: A successful call to the database to alter language

        - setup(bot):
            - Internal method for setting up the cog.
            - Pre-conditions: None
            - Parameters: bot
            - Returns: Prints a success message to the console and adds feature to the cogs command archive

## StartVocabQuiz
    Class Purpose: To start the vocab quiz practice for a user in a text channel

    Data Fields:
        - database: An instance of the Database class

    Methods:
        - __init__(self, bot):
            - Initializes the cog with a reference to the bot.
            - Pre-conditions: None
            - Parameters: self, bot
            - Returns: An active instance of the bot

        - on_ready(self):
            - An event handler called when the cog is ready.
            - Pre-conditions: None
            - Parameters: self
            - Returns: A success message to the console

        - startVocabQuiz(self, ctx):
            - A command that starts a vocabulary quiz.
            - Pre-conditions: None
            - Parameters: self, ctx
            - Returns: Sends a vocab quiz formatted to the Discord UI for the user to complete

        - setup(bot):
            - Internal method for setting up the cog.
            - Pre-conditions: None
            - Parameters: bot
            - Returns: Prints a success message to the console and adds the feature to the cogs command archive

## Constant
    Class Purpose: Display all attributes that are considered constants throughout the entire codespace

    Data Fields:
        - LANGUAGE: What languages are available to the user
        - USER_LANGUAGE: What the user-selected language is
        - USER_TOTALSCORE: What the user's score is
        - USER_QUIZZES: The database array of all the quizzes
        - USER_TOOKON: The user's specific token
        - QUIZ_QUESTIONS: The database array of all the quiz questions
        - QUIZ_QUESTION: The array index of a specific question within a quiz
        - QUIZ_ANSWERS: The database array of all the quiz answers
        - QUIZ_ANSWER: The array index of a specific answer within a quiz
        - QUIZ_ISCORRECT: A boolean on whether a quiz answer was true or false
        - QUIZ_SCORE: An integer on what the user score was after a quiz is completed
        - QUIZ_NAME: The string name of a specific quiz
        - COLLECTION_ID: The integer ID of a specific user
        - DATE_FORMAT = "%d/%m/%Y %H:%M:%S": The string date format for date-based instances

    Methods: none

## MatchResult
    Class Purpose: To calculate the number of correct words that a user said during a given pronunciation quiz

    Data Fields: None

    Methods:
        - match_sentence(expected_sentence,actual_sentence):
            - Calculates the # of correct words in a given pronunciation quiz
            - Pre-conditions: None
            - Parameters: expected_sentence, actual_sentence
            - Returns: The number of correct words said by the user divided by the length of the expected words in the given phrase

        - match_word(word, words):
            - A method that sends a boolean if the word is a match or not
            - Pre-conditions: None
            - Parameters: word, words
            - Returns: True if the user said word is a match

## PronounTest
    Class Purpose: To scan the waveform and parse the user voice input into comparable strings 

    Data Fields:
        - database: An instance of the Database class

    Methods:
        - __init__(self, ctx, user, practice):
            - Initializes the cog with a reference to the bot.
            - Pre-conditions: None
            - Parameters: self, ctx, user, practice
            - Returns: a setup instance of the bot with pre-assigned values aka "self"

        - get_question(self):
            - A method that collects a question response from the user's voice input
            - Pre-conditions: None
            - Parameters: self
            - Returns: True, the current sentence that the bot displayed for the user and displaying it on the Discord UI

        - once_done(self, sink: discord.sinks, channel: discord.TextChannel, *args):
            - A method to scan for user input during a pronunciation quiz to present the next question to the user.
            - Pre-conditions: None
            - Parameters: self, sink: discord.sinks, channel: discord.TextChannel, *args
            - Returns: Sends the next question to the user on the Discord UI

        - get_quiz_info(self):
            - A method to collect all the info for the current quiz
            - Pre-conditions: None
            - Parameters: self
            - Returns: returns a full index of the current quiz
