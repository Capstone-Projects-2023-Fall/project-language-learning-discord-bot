---
sidebar_position: 1
description: What should be in this section.
---

Design Document - Part II API
=============================

## Main
    Class Purpose: The Main class will start and initalize the bot with it's default parameters.

    Data Fields: None

    Methods:
      - on_ready(): void
          - Inital bot event when bot enters discord server with assigned displayed message.
          - Pre-conditions: None
          - Parameters: None
          - Returns: None

      - setup_hook(): void
          - Loads all the cogs (external commands organized in classes).
          - Pre-conditions: None
          - Parameters: None
          - Returns: None

      - main(): void
          - Runs the bot with above methods
          - Pre-conditions: None
          - Parameters: None
          - Returns: None
## Database
    Class Purpose: To create a database of users with data about their performance within a specific langauge.

    Data Fields: None

    Methods:
        - __new__(): void
            - Creates a new instance of a user in the database
            - Pre-conditions: None
            - Parameters: cls
            - Returns: cls.instance

        - initDb(): void
            - Initalizes the Mongo DB and replies to user if database was successful or not in starting sequence
            - Pre-conditions: none
            - Parameters: self
            - Returns: none

        - findUser(): void
            - Command to find a username of current user within database
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
    Class Purpose: To allow the user to change it's current learning language to any other on the "constant.py" file (either Spanish or French).

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
            - To change the default language in the user's current datbase entry
            - Pre-conditions: None
            - Parameters: self, ctx, userprompt: str
            - Returns: None
