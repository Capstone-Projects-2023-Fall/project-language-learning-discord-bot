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
        - __new__():
            - Creates a new instance of a user in the database
            - Pre-conditions: None
            - Parameters: cls
            - Returns: cls.instance

        - initDb(): void
            - Initializes the Mongo DB and replies to the user if the database was successful or not in the starting sequence
            - Pre-conditions: none
            - Parameters: self
            - Returns: none

        - findUser():
            - Command to find a username of the current user within the database
            - Pre-conditions: None
            - Parameters: self, username
            - Returns: self.userCollection.find_one(query), displays the user if it was found

        - insertUser(): void
            - Command to insert a user into the Mongo database
            - Pre-conditions: None
            - Parameters: self, user
            - Returns: none

        - changeUserLangauge(): void
            - Command to change user language
            - Pre-conditions: None
            - Parameters: self, username, language
            - Returns: none

        - getQuizes():
            - Method to collect all quizzes from the user-specified language
            - Pre-conditions: None
            - Parameters: self, language
            - Returns: quizzes

        - getRandomQuiz():
            - Method to get a random quiz from the array
            - Pre-conditions: None
            - Parameters: self, language
            - Returns: quizzes[index]

        - updateUserQuiz():
            - Method to update the user quiz status in their dbuser database
            - Pre-conditions: None
            - Parameters: self, username, quiz
            - Returns: none

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
