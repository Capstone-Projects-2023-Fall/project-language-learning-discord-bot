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
        - __init__(): void
            - Constructor to create bot object
            - Pre-conditions: None
            - Parameters: self, ctx, user, quiz
            - Returns: None

        - get_question():
            - Method to collect all questions and their respective answers from the user
            - Pre-conditions: None
            - Parameters: self
            - Returns: True or False

        - button_callback_true(): void
            - Method to test if the user has selected the correct answer to their quiz and if so then display their results
            - Pre-conditions: None
            - Parameters: interaction
            - Returns: none

        - button_callback_false(): void
            - Method to test if the user has selected the wrong answer on their quiz and if so then display their results
            - Pre-conditions: None
            - Parameters: interaction
            - Returns: none

        - get_quiz_info(): void
            - Method to collect final quiz data and store it in the user's database
            - Pre-conditions: None
            - Parameters: self
            - Returns: none

## JoinVoice
    Class Purpose: To allow the discord bot to enter into the voice channel of the current user
    
    Data Fields: None

    Methods:
        - __init__(): void
            - Constructor to create bot object
            - Pre-conditions: None
            - Parameters: None
            - Returns: None

        - startVoiceQuiz(): void
            - Command to start Voice Quiz for the specific user in said voice channel
            - Pre-conditions: None
            - Parameters: self, ctx
            - Returns: None

## HelpCommand
    Class Purpose: To allow the user to use the /help command

    Data Fields: None

    Methods:
        - __init__(): void
            - Constructor to create bot object
            - Pre-conditions: None
            - Parameters: self, bot
            - Returns: None

        - on_ready(): void
            - To display a debug message to Cogs to confirm it's working
            - Pre-conditions: None
            - Parameters: self
            - Returns: None

        - help(): void
            - To display to the user the contents of the help command
            - Pre-conditions: None
            - Parameters: self, ctx
            - Returns: None

## ChangeLanguage
    Class Purpose: To allow the user to change its current learning language to any other on the "constant.py" file (either Spanish or French).

    Data Fields: None

    Methods:
        - __init__(): void
            - Constructor to create bot object
            - Pre-conditions: None
            - Parameters: self, bot
            - Returns: None

        - on_ready(): void
            - To display a debug message to Cogs to confirm it's working
            - Pre-conditions: None
            - Parameters: self
            - Returns: None

        - changeLanguage(): void
            - To change the default language in the user's current database entry
            - Pre-conditions: None
            - Parameters: self, ctx, userprompt: str
            - Returns: None

## StartVocabQuiz
    Class Purpose: To start the vocab quiz practice for a user in a text channel

    Data Fields: None

    Methods:
        - __init__(): void
            - Constructor to create bot object
            - Pre-conditions: None
            - Parameters: self, bot
            - Returns: None

        - on_ready(): void
            - To display a debug message to Cogs to confirm it's working
            - Pre-conditions: None
            - Parameters: self
            - Returns: None

        - startVocabQuiz(): void
            - Method to find the user in the database and start the process of associating all vocab quiz content to them on completion
            - Pre-conditions: None
            - Parameters: self, ctx
            - Returns: None
