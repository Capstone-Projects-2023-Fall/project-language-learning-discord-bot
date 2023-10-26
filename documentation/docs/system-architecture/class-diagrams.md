# Class Diagram

![UML drawio](https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/assets/74037708/ffcf247a-0599-45f6-93d7-ac37e41c5187)
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
  * **db**
  * **userCollection**
  * **quizCollection**
* Methods:
  * **__new__(cls)**: Ensures that only one instance of the Database class is created.
  * **initDb()**: Initializes the database connection and sets up the client, database, and collections.
  * **findUser(username)**: Finds a user in the database based on the username.
  * **insertUser(user)**: Inserts a user into the database.
  * **changeUserLanguage(username, language)**: Updates the user's language preference in the user collection.
  * **getQuizzes(language)**: Retrieves quizzes based on the specified language.
  * **getRandomQuiz(language)**: Selects and returns a random quiz for the specified language.
  * **updateUserQuiz(username, quiz)**: Updates the user's quiz score in the user collection.

# 3. '**vocabquiz.py**'
* Attributes:
  * **database**
* Methods:
  * **__init__(ctx, user, quiz)**: Initializes the quiz with context, user, and quiz data.
  * **get_question()**: Gets a quiz question.
  * **get_quiz_info()**: Gets quiz information including score. 
 
# 4. '**HelpCommand.py**'
* Methods:
  * **__init__(bot)**: Initializes the cog with a reference to the bot.
  * **on_ready()**: An event handler called when the cog is ready.
  * **help(ctx)**: A command that displays help information as an embedded message in Discord.
  * **setup(bot)**: Internal method for setting up the cog.
 
# 5. '**ChangeLanguage.py**'
* Attributes:
  * **database**
* Methods:
  * **__init__(bot)**: Initializes the cog with a reference to the bot.
  * **on_ready()**: An event handler called when the cog is ready.
  * **changeLanguage(ctx, userprompt)**: A command that allows the user to change languages.
  * **setup(bot)**: Internal method for setting up the cog.
  
# 6. '**JoinVoice.py**'
* Methods:
  * **__init__(bot)**: Initializes the cog with a reference to the bot.
  * **startVoiceQuiz(ctx)**: A command that enables the bot to join the user's voice channel.
  * **setup(bot)**: Internal method for setting up the cog.
 
# 7. '**StartVocabQuiz.py**'
* Attributes:
  * **database**
* Methods:
  * **__init__(bot)**: Initializes the cog with a reference to the bot.
  * **on_ready()**: An event handler called when the cog is ready.
  * **startVocabQuiz(ctx)**: A command that starts a vocabulary quiz.
  * **setup(bot)**: Internal method for setting up the cog.

# 8. '**constant.py**'
* Attributes:
  * **LANGUAGES**
  * **USER_LANGUAGE**
  * **USER_TOTALSCORE**
  * **QUIZ_QUESTIONS**
  * **QUIZ_QUESTION**
  * **QUIZ_ANSWERS**
  * **QUIZ_ANSWER**
  * **QUIZ_ISCORRECT**
  * **QUIZ_SCORE**
  * **QUIZ_NAME**
