"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,p=u["".concat(c,".").concat(f)]||u[f]||h[f]||o;return t?s.createElement(p,r(r({ref:n},d),{},{components:t})):s.createElement(p,r({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var l=2;l<o;l++)r[l]=t[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,description:"Documentation"},r="Design Document - Part II API",i={unversionedId:"api-specification/design-api-intro",id:"api-specification/design-api-intro",title:"Design Document - Part II API",description:"Documentation",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/project-language-learning-discord-bot/docs/api-specification/design-api-intro",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Documentation"},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-language-learning-discord-bot/docs/category/api-specification"},next:{title:"Test Procedures",permalink:"/project-language-learning-discord-bot/docs/category/test-procedures"}},c={},l=[{value:"Main",id:"main",level:2},{value:"Database",id:"database",level:2},{value:"VocabQuiz",id:"vocabquiz",level:2},{value:"SpeechRecognition",id:"speechrecognition",level:2},{value:"HelpCommand",id:"helpcommand",level:2},{value:"MyScores",id:"myscores",level:2},{value:"Leaderboard",id:"leaderboard",level:2},{value:"ChangeLanguage",id:"changelanguage",level:2},{value:"StartVocabQuiz",id:"startvocabquiz",level:2},{value:"StartVoiceQuiz",id:"startvoicequiz",level:2},{value:"Constant",id:"constant",level:2},{value:"MatchResult",id:"matchresult",level:2},{value:"PronounTest",id:"pronountest",level:2},{value:"Test_Database",id:"test_database",level:2},{value:"Test_HelpCommand",id:"test_helpcommand",level:2},{value:"Test_Match",id:"test_match",level:2},{value:"Test_Voice",id:"test_voice",level:2},{value:"Record",id:"record",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design-document---part-ii-api"},"Design Document - Part II API"),(0,a.kt)("h2",{id:"main"},"Main"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: The Main class will start and initialize the bot with its default parameters.\n\nData Fields:\n  - bot: An instance of the Discord Bot\n  - database: An instance of the Database class\n\nMethods:\n  - on_ready(): void\n      - An event handler called when the Discord bot is ready. It prints a message to the console and sends a message to a specific channel.\n      - Pre-conditions: None\n      - Parameters: None\n      - Returns: Prints \"Hello, I'm now online!\" string if the channel is active for the bot to enter.\n\n  - setup_hook(): void\n      - A method that loads external commands (cogs) from the 'cogs' directory.\n      - Pre-conditions: None\n      - Parameters: None\n      - Returns: Prints string of cog commands to the console.\n\n  - main(): void\n      - The main entry point for the bot, where it sets up the bot, loads cogs, and starts the bot using asyncio.\n      - Pre-conditions: None\n      - Parameters: None\n      - Returns: None\n")),(0,a.kt)("h2",{id:"database"},"Database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To create a database of users with data about their performance within a specific language.\n\nData Fields: None\n\nMethods:\n    - __new__(cls):\n        - Ensures that only one instance of the Database class is created.\n        - Pre-conditions: None\n        - Parameters: cls\n        - Returns: An instance of the database via cls.instance\n\n    - initDb(self):\n        - Initializes the database connection and sets up the client, database, and collections.\n        - Pre-conditions: none\n        - Parameters: self\n        - Returns: Prints a success string if the client successfully to the MongoDB\n\n    - findUser(self, username):\n        - Finds a user in the database based on the username.\n        - Pre-conditions: None\n        - Parameters: self, username\n        - Returns: self.userCollection.find_one(query), displays the user if it was found\n\n    - insertUser(self, user): void\n        - Inserts a user into the database.\n        - Pre-conditions: None\n        - Parameters: self, user\n        - Returns: A successful call of inserting a user into the database\n\n    - changeUserLangauge(self, username, language):\n        - Updates the user's language preference in the user collection.\n        - Pre-conditions: None\n        - Parameters: self, username, language\n        - Returns: A successful call of changing the language of a user based on their collection ID\n\n    - getQuizzes(self, language):\n        - Retrieves quizzes based on the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: An array of the quizzes\n\n    - getPractices(self, language):\n        - Retrieves practices based on the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: An array of practice activities\n\n    - getRandomQuiz(self, language):\n        - Selects and returns a random quiz for the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: The specific index (quizzes[index]) of the requested quiz\n\n    - getRandomPractice(self, language):\n        - Selects and returns a random practice for the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: The specific index (practices[index]) of the requested practice activity\n\n    - updateUserQuiz(self, username, quiz):\n        - Updates the user's quiz score in the user collection.\n        - Pre-conditions: None\n        - Parameters: self, username, quiz\n        - Returns: A successful call to the database when a specific user score is updated\n\n    - get_all_users(self):\n        - Selects and returns all of the users regardless of language\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: The array of all users\n")),(0,a.kt)("h2",{id:"vocabquiz"},"VocabQuiz"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To generate a customized vocab quiz for the user based on their selected language\n\nData Fields: None\n\nMethods:\n    - __init__(self, ctx, user, quiz):\n        - Initializes the quiz with context, user, and quiz data.\n        - Pre-conditions: None\n        - Parameters: self, ctx, user, quiz\n        - Returns: None\n\n    - get_question(self):\n        - Gets a quiz question\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: True, the ID # of the quiz, and the display of it in the discord UI\n\n    - get_quiz_info(self):\n        - Gets quiz information including score.\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: Quiz ID #, Quiz Name, Quiz Score, User Token, User Language\n")),(0,a.kt)("h2",{id:"speechrecognition"},"SpeechRecognition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To show the user and display the result in a text channel and to be interpreted by other functions\n\nData Fields: None\n\nMethods:\n    - __new__(cls):\n        - Initializes a new instance of the user voice input to be generated\n        - Pre-conditions: None\n        - Parameters: cls\n        - Returns: A successfully developed user instance\n\n    - initAPI(self) -> None:\n        - Initializes OpenAI to start analyzing user voice input\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A successful call for the recognizer within OpenAI to start\n\n    - speech_to_text(self, filename, language):\n        - Converts the waveform speech into text\n        - Pre-conditions: None\n        - Parameters: self, filename, language\n        - Returns: An array with a transcript of the user voice text\n")),(0,a.kt)("h2",{id:"helpcommand"},"HelpCommand"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To allow the user to use the /help command\n\nData Fields: None\n\nMethods:\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: Sends an instance of the bot to the user\n\n    - on_ready(self):\n        - An event handler called when the cog is ready.\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: Prints a success message to the console\n\n    - help(self, ctx):\n        - A command that displays help information as an embedded message in Discord.\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Displays all text for the user in the Discord Chat\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds feature to the cogs command archive\n")),(0,a.kt)("h2",{id:"myscores"},"MyScores"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To display the user scores of everyone on a server\n\nData Fields:\n    - database: An instance of the Database class\n\nMethods:\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: An active instance of the bot\n\n    - on_ready(self):\n        - An event handler called when the cog is ready.\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A success message to the console\n\n    - myScores(self, ctx):\n        - A command that allows the bot to display in the Discord Chat the scores of all users\n        - Pre-conditions: None\n        - Parameters: self, ctx, userprompt: str\n        - Returns: A successful call to the database to display user scores\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds feature to the cogs command archive\n")),(0,a.kt)("h2",{id:"leaderboard"},"Leaderboard"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To display the top user scores on a given server\n\nData Fields:\n    - database: An instance of the Database class\n\nMethods:\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: An active instance of the bot\n\n    - leaderboard(self, ctx):\n        - Displays a leaderboard trophy next to the user with the highest score\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: A displayed image to the Discord UI indicating the highest scored user\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds feature to the cogs command archive\n")),(0,a.kt)("h2",{id:"changelanguage"},"ChangeLanguage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Class Purpose: To allow the user to change its current learning language to any other on the "constant.py" file (either Spanish or French).\n\nData Fields:\n    - database: An instance of the Database class\n\nMethods:\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: An active instance of the bot\n\n    - on_ready(self):\n        - An event handler called when the cog is ready.\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A success message to the console\n\n    - changeLanguage(self, ctx, userprompt: str):\n        - A command that allows the user to change languages.\n        - Pre-conditions: None\n        - Parameters: self, ctx, userprompt: str\n        - Returns: A successful call to the database to alter language\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds feature to the cogs command archive\n')),(0,a.kt)("h2",{id:"startvocabquiz"},"StartVocabQuiz"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To start the vocab quiz practice for a user in a text channel\n\nData Fields:\n    - database: An instance of the Database class\n\nMethods:\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: An active instance of the bot\n\n    - on_ready(self):\n        - An event handler called when the cog is ready.\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A success message to the console\n\n    - startVocabQuiz(self, ctx):\n        - A command that starts a vocabulary quiz.\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Sends a vocab quiz formatted to the Discord UI for the user to complete\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds the feature to the cogs command archive\n")),(0,a.kt)("h2",{id:"startvoicequiz"},"StartVoiceQuiz"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To start the voice quiz practice for a user in a voice channel\n\nData Fields:\n    - database: An instance of the Database class\n\nMethods:\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: An active instance of the bot\n\n    - on_ready(self):\n        - An event handler called when the cog is ready.\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A success message to the console\n\n    - startVoiceQuiz(self, ctx):\n        - A command that starts a voice quiz.\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Sends a voice quiz formatted to the Discord UI for the user to complete\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds the feature to the cogs command archive\n")),(0,a.kt)("h2",{id:"constant"},"Constant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: Display all attributes that are considered constants throughout the entire codespace\n\nData Fields:\n    - LANGUAGE: What languages are available to the user\n    - USER_LANGUAGE: What the user-selected language is\n    - USER_TOTALSCORE: What the user's score is\n    - USER_QUIZZES: The database array of all the quizzes\n    - USER_TOOKON: The user's specific token\n    - QUIZ_QUESTIONS: The database array of all the quiz questions\n    - QUIZ_QUESTION: The array index of a specific question within a quiz\n    - QUIZ_ANSWERS: The database array of all the quiz answers\n    - QUIZ_ANSWER: The array index of a specific answer within a quiz\n    - QUIZ_ISCORRECT: A boolean on whether a quiz answer was true or false\n    - QUIZ_SCORE: An integer on what the user score was after a quiz is completed\n    - QUIZ_NAME: The string name of a specific quiz\n    - COLLECTION_ID: The integer ID of a specific user\n    - DATE_FORMAT = \"%d/%m/%Y %H:%M:%S\": The string date format for date-based instances\n\nMethods: none\n")),(0,a.kt)("h2",{id:"matchresult"},"MatchResult"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To calculate the number of correct words that a user said during a given pronunciation quiz\n\nData Fields: None\n\nMethods:\n    - match_sentence(expected_sentence,actual_sentence):\n        - Calculates the # of correct words in a given pronunciation quiz\n        - Pre-conditions: None\n        - Parameters: expected_sentence, actual_sentence\n        - Returns: The number of correct words said by the user divided by the length of the expected words in the given phrase\n\n    - match_word(word, words):\n        - A method that sends a boolean if the word is a match or not\n        - Pre-conditions: None\n        - Parameters: word, words\n        - Returns: True if the user said word is a match\n")),(0,a.kt)("h2",{id:"pronountest"},"PronounTest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Class Purpose: To scan the waveform and parse the user voice input into comparable strings \n\nData Fields:\n    - database: An instance of the Database class\n\nMethods:\n    - __init__(self, ctx, user, practice):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, ctx, user, practice\n        - Returns: a setup instance of the bot with pre-assigned values aka "self"\n\n    - get_question(self):\n        - A method that collects a question response from the user\'s voice input\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: True, the current sentence that the bot displayed for the user and displaying it on the Discord UI\n\n    - once_done(self, sink: discord.sinks, channel: discord.TextChannel, *args):\n        - A method to scan for user input during a pronunciation quiz to present the next question to the user.\n        - Pre-conditions: None\n        - Parameters: self, sink: discord.sinks, channel: discord.TextChannel, *args\n        - Returns: Sends the next question to the user on the Discord UI\n\n    - get_quiz_info(self):\n        - A method to collect all the info for the current quiz\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: returns a full index of the current quiz\n')),(0,a.kt)("h2",{id:"test_database"},"Test_Database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To test the different attributes of the database\n\nData Fields: None\n\nMethods:\n    - setUp(self): \n        - Sets up the database with testing values\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_findUser_not_found(self):\n        - A method to test if a user is not found\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_findUser_found(self):\n        - A method to test if a user is found\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_insertUser(self):\n        - A method to test if a user can be inserted into the database\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_changeLanguage(self):\n        - A method to test if a set language can be changed\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getQuizzes_no_record(self):\n        - A method to test if there are no records for a specific quiz\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getQuizzes_has_record(self): \n        - A method to test if there are records for a specific quiz\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getRandomQuiz_no_record(self):\n        - A method to test if there are no records for a random quiz\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getRandomQuiz_has_record(self):\n        - A method to test if there are records for a random quiz\n        - Pre-conditions: None\n        - Parameters: self, sink: discord.sinks, channel: discord.TextChannel, *args\n        - Returns: a successful test case\n        \n    - test_updateUserQuiz(self):\n        - A method to test if you can update a user-given quiz\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_updateUserQuiz_raise_exception(self):\n        - A method to test if you can update a user-given quiz with an added exception by modification \n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getPractices_no_record(self):\n        - A method to test if there are no records from a given practice\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getPractices_has_record(self):\n        - A method to test if there are records from a given practice\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getRandomPractice_no_record(self):\n        - A method to test if there are no records from a random practice\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_getRandomPractice_has_record(self): \n        - A method to test if there are records from a random practice\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n\n    - test_readUser_throw_exception(self):\n        - A method to test if an exception can be thrown when reading a user\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: a successful test case\n")),(0,a.kt)("h2",{id:"test_helpcommand"},"Test_HelpCommand"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To test the different attributes of the help command\n\nData Fields: None\n\nMethods:\n    - ping(self, ctx):\n        - To ping the bot to display a help command (in a testing context)\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Display successful in console\n\n    - echo(self, ctx, text: str):\n        - To echo or repeat the current ping to the console\n        - Pre-conditions: None\n        - Parameters: self, ctx, text: str\n        - Returns: Send successful echo test to the console \n\n    - bot():\n        - An initializer method to set a simple instance of the bot and then teardown its global default message\n        - Pre-conditions: None\n        - Parameters: None\n        - Returns: None\n\n    - test_ping(bot):\n        - To ping the bot to display a help command (in a testing context)\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Display successful in console\n\n    - test_echo(bot):\n        - To echo or repeat the current ping to the bot\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Send successful echo test to the bot\n")),(0,a.kt)("h2",{id:"test_match"},"Test_Match"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Class Purpose: To test the attributes of the pronunciation test input\n\nData Fields: None\n\nMethods:\n    - test_score(self):\n        - Tests a given sentence score between two strings\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A successful score between the two strings\n\n    - test_score_exactmatch(self):\n        - Tests a given sentence score between two exact strings\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: A successful score between the two exact strings\n")),(0,a.kt)("h2",{id:"test_voice"},"Test_Voice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Class Purpose: To test the attributes of the user voice input\n\nData Fields: None\n\nMethods:\n    - ping(self, ctx):\n        - To ping the bot to start the voice test command\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Display successful in console\n\n    - startVoiceQuiz(self, ctx):\n        - To move to the user voice channel and begin the procedure\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Display a successful message to the user saying "Bot has joined (channel here)"\n\n    - bot():\n        - An initializer method to set a simple instance of the bot and then teardown its global default message\n        - Pre-conditions: None\n        - Parameters: None\n        - Returns: None\n\n    - test_ping(bot):\n        - To ping the bot to start the voice command\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Display successful in console\n\n    - test_startVoiceQuiz_notinvc(bot):\n        - To test if the user is not in a voice channel to be recorded\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Display successful in the console that the user isn\'t in a channel\n\n    - test_startVoiceQuiz_invc(bot):\n        - To test if the user is in a voice channel to be recorded\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Display successful in the console that the user is in a channel\n')),(0,a.kt)("h2",{id:"record"},"Record"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Class Purpose: To record the user voice input and store it as a .wav file in the current instance\n\nData Fields: None\n\nMethods:\n    - once_done(sink: discord.sinks, channel: discord.TextChannel, *args):\n        - A method to verify that voice input from the user is all collected\n        - Pre-conditions: None\n        - Parameters: sink: discord.sinks, channel: discord.TextChannel, *args\n        - Returns: Successful print message to the discord UI saying that message has been recorded and verified\n\n    - __init__(self, bot):\n        - Initializes the cog with a reference to the bot.\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: a setup instance of the bot with pre-assigned values aka "self"\n\n    - record(self, ctx):\n        - Records the user voice as an input to be analyzed and collected\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: A successful print message saying that the bot has started recording\n\n    - stop(self, ctx):\n        - To stop the recording and send it to other functions to be analyzed\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: Sends successful response call to once_done() method above for verification\n\n    - setup(bot):\n        - Internal method for setting up the cog.\n        - Pre-conditions: None\n        - Parameters: bot\n        - Returns: Prints a success message to the console and adds the feature to the cogs command archive\n')))}u.isMDXComponent=!0}}]);