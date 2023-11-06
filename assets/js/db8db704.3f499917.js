"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:1,description:"Documentation"},s="Design Document - Part II API",i={unversionedId:"api-specification/design-api-intro",id:"api-specification/design-api-intro",title:"Design Document - Part II API",description:"Documentation",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/project-language-learning-discord-bot/docs/api-specification/design-api-intro",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Documentation"},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-language-learning-discord-bot/docs/category/api-specification"},next:{title:"Test Procedures",permalink:"/project-language-learning-discord-bot/docs/category/test-procedures"}},c={},l=[{value:"Main",id:"main",level:2},{value:"Database",id:"database",level:2},{value:"VocabQuiz",id:"vocabquiz",level:2},{value:"JoinVoice",id:"joinvoice",level:2},{value:"HelpCommand",id:"helpcommand",level:2},{value:"ChangeLanguage",id:"changelanguage",level:2},{value:"StartVocabQuiz",id:"startvocabquiz",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-document---part-ii-api"},"Design Document - Part II API"),(0,o.kt)("h2",{id:"main"},"Main"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: The Main class will start and initialize the bot with its default parameters.\n\nData Fields:\n  - bot: An instance of the Discord Bot\n  - database: An instance of the Database class\n\nMethods:\n  - on_ready(): void\n      - An event handler called when the Discord bot is ready. It prints a message to the console and sends a message to a specific channel.\n      - Pre-conditions: None\n      - Parameters: None\n      - Returns: Prints \"Hello, I'm now online!\" string if the channel is active for the bot to enter.\n\n  - setup_hook(): void\n      - A method that loads external commands (cogs) from the 'cogs' directory.\n      - Pre-conditions: None\n      - Parameters: None\n      - Returns: Prints string of cog commands to the console.\n\n  - main(): void\n      - The main entry point for the bot, where it sets up the bot, loads cogs, and starts the bot using asyncio.\n      - Pre-conditions: None\n      - Parameters: None\n      - Returns: None\n")),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: To create a database of users with data about their performance within a specific language.\n\nData Fields: None\n\nMethods:\n    - __new__(cls):\n        - Ensures that only one instance of the Database class is created.\n        - Pre-conditions: None\n        - Parameters: cls\n        - Returns: An instance of the database via cls.instance\n\n    - initDb(self):\n        - Initializes the database connection and sets up the client, database, and collections.\n        - Pre-conditions: none\n        - Parameters: self\n        - Returns: Prints a success string if the client successfully to the MongoDB\n\n    - findUser(self, username):\n        - Finds a user in the database based on the username.\n        - Pre-conditions: None\n        - Parameters: self, username\n        - Returns: self.userCollection.find_one(query), displays the user if it was found\n\n    - insertUser(self, user): void\n        - Inserts a user into the database.\n        - Pre-conditions: None\n        - Parameters: self, user\n        - Returns: A successful call of inserting a user into the database\n\n    - changeUserLangauge(self, username, language):\n        - Updates the user's language preference in the user collection.\n        - Pre-conditions: None\n        - Parameters: self, username, language\n        - Returns: A successful call of changing the language of a user based on their collection ID\n\n    - getQuizzes(self, language):\n        - Retrieves quizzes based on the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: An array of the quizzes\n\n    - getPractices(self, language):\n        - Retrieves practices based on the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: An array of practice activities\n\n    - getRandomQuiz(self, language):\n        - Selects and returns a random quiz for the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: The specific index (quizzes[index]) of the requested quiz\n\n    - getRandomPractice(self, language):\n        - Selects and returns a random practice for the specified language.\n        - Pre-conditions: None\n        - Parameters: self, language\n        - Returns: The specific index (practices[index]) of the requested practice activity\n\n    - updateUserQuiz(self, username, quiz):\n        - Updates the user's quiz score in the user collection.\n        - Pre-conditions: None\n        - Parameters: self, username, quiz\n        - Returns: A successful call to the database when a specific user score is updated\n\n    - get_all_users(self):\n        - Selects and returns all of the users regardless of language\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: The array of all users\n")),(0,o.kt)("h2",{id:"vocabquiz"},"VocabQuiz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: To generate a customized vocab quiz for the user based on their selected language\n\nData Fields: None\n\nMethods:\n    - __init__(): void\n        - Constructor to create bot object\n        - Pre-conditions: None\n        - Parameters: self, ctx, user, quiz\n        - Returns: None\n\n    - get_question():\n        - Method to collect all questions and their respective answers from the user\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: True or False\n\n    - button_callback_true(): void\n        - Method to test if the user has selected the correct answer to their quiz and if so then display their results\n        - Pre-conditions: None\n        - Parameters: interaction\n        - Returns: none\n\n    - button_callback_false(): void\n        - Method to test if the user has selected the wrong answer on their quiz and if so then display their results\n        - Pre-conditions: None\n        - Parameters: interaction\n        - Returns: none\n\n    - get_quiz_info(): void\n        - Method to collect final quiz data and store it in the user's database\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: none\n")),(0,o.kt)("h2",{id:"joinvoice"},"JoinVoice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: To allow the discord bot to enter into the voice channel of the current user\n\nData Fields: None\n\nMethods:\n    - __init__(): void\n        - Constructor to create bot object\n        - Pre-conditions: None\n        - Parameters: None\n        - Returns: None\n\n    - startVoiceQuiz(): void\n        - Command to start Voice Quiz for the specific user in said voice channel\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: None\n")),(0,o.kt)("h2",{id:"helpcommand"},"HelpCommand"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: To allow the user to use the /help command\n\nData Fields: None\n\nMethods:\n    - __init__(): void\n        - Constructor to create bot object\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: None\n\n    - on_ready(): void\n        - To display a debug message to Cogs to confirm it's working\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: None\n\n    - help(): void\n        - To display to the user the contents of the help command\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: None\n")),(0,o.kt)("h2",{id:"changelanguage"},"ChangeLanguage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: To allow the user to change its current learning language to any other on the \"constant.py\" file (either Spanish or French).\n\nData Fields: None\n\nMethods:\n    - __init__(): void\n        - Constructor to create bot object\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: None\n\n    - on_ready(): void\n        - To display a debug message to Cogs to confirm it's working\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: None\n\n    - changeLanguage(): void\n        - To change the default language in the user's current database entry\n        - Pre-conditions: None\n        - Parameters: self, ctx, userprompt: str\n        - Returns: None\n")),(0,o.kt)("h2",{id:"startvocabquiz"},"StartVocabQuiz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Class Purpose: To start the vocab quiz practice for a user in a text channel\n\nData Fields: None\n\nMethods:\n    - __init__(): void\n        - Constructor to create bot object\n        - Pre-conditions: None\n        - Parameters: self, bot\n        - Returns: None\n\n    - on_ready(): void\n        - To display a debug message to Cogs to confirm it's working\n        - Pre-conditions: None\n        - Parameters: self\n        - Returns: None\n\n    - startVocabQuiz(): void\n        - Method to find the user in the database and start the process of associating all vocab quiz content to them on completion\n        - Pre-conditions: None\n        - Parameters: self, ctx\n        - Returns: None\n")))}d.isMDXComponent=!0}}]);