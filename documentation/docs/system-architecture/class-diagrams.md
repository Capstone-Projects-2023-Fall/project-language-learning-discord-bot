---
sidebar_position: 3
---

# Class Diagram

![ClassDiagram drawio](https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/assets/74037708/97869cb6-9bb1-4085-a8b3-ad8cdddefbc9)
##### Figure 1.1 UML Class Diagram
## Explanation 
# 1. '**main.py**'
* Attributes: 
  * **bot**: An instance of the Discord bot.
  * **database**: An instance of the Database class.
* Methods:
  * **on_ready()**: An event handler called when the Discord bot is ready. It prints a message to the console and sends a message to a specific channel.
  * **setup_hook()**: A method that loads external commands (cogs) from the 'cogs' directory.
  * **main()**: The main entry point for the bot, where it sets up the bot, loads cogs, and starts the bot using asyncio.

# 2. '**database.py**'
* Attributes:
  * **client**: An instance of MongoClient.
  * **isOk**: A boolean flag to indicate the database connection status.
* Methods:
  * **__init__()**: Initializes the Database object and establishes a connection to the MongoDB database.
  * **findUser(username)**: Finds a user in the database based on the username.
  * **insertUser(user)**: Inserts a user into the database.
 
# 3. '**HelpCommand.py**'
* Methods:
  * **__init__(bot)**: Initializes the cog with a reference to the bot.
  * **on_ready()**: An event handler called when the cog is ready.
  * **help(ctx)**: A command that displays help information as an embedded message in Discord.
  * **setup(bot)**: Internal method for setting up the cog.  
