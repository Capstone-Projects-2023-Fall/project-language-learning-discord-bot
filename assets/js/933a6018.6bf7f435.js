"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1807],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(a),g=r,k=m["".concat(o,".").concat(g)]||m[g]||c[g]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[m]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},34:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Class Diagram",s={unversionedId:"system-architecture/class-diagrams",id:"system-architecture/class-diagrams",title:"Class Diagram",description:"UML drawio",source:"@site/docs/system-architecture/class-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/class-diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/class-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/system-architecture/class-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Barry Doan",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Database Diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/database-diagrams"},next:{title:"Sequence Diagram",permalink:"/project-language-learning-discord-bot/docs/system-architecture/sequence-diagrams"}},o={},p=[{value:"Figure 1.1 UML Class Diagram",id:"figure-11-uml-class-diagram",level:5},{value:"Explanation",id:"explanation",level:2}],u={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-diagram"},"Class Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/assets/74037708/ffcf247a-0599-45f6-93d7-ac37e41c5187",alt:"UML drawio"})),(0,r.kt)("h5",{id:"figure-11-uml-class-diagram"},"Figure 1.1 UML Class Diagram"),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("h1",{id:"1-mainpy"},"1. '",(0,r.kt)("strong",{parentName:"h1"},"main.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attributes: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bot"),": An instance of the Discord bot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database"),": An instance of the Database class."))),(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"on_ready()"),": An event handler called when the Discord bot is ready. It prints a message to the console and sends a message to a specific channel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setup_hook()"),": A method that loads external commands (cogs) from the 'cogs' directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"main()"),": The main entry point for the bot, where it sets up the bot, loads cogs, and starts the bot using asyncio.")))),(0,r.kt)("h1",{id:"2-databasepy"},"2. '",(0,r.kt)("strong",{parentName:"h1"},"database.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client"),": An instance of MongoClient."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isOk"),": A boolean flag to indicate the database connection status."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"db")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"userCollection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quizCollection")))),(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"new"),"(cls)"),": Ensures that only one instance of the Database class is created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"initDb()"),": Initializes the database connection and sets up the client, database, and collections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"findUser(username)"),": Finds a user in the database based on the username."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"insertUser(user)"),": Inserts a user into the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"changeUserLanguage(username, language)"),": Updates the user's language preference in the user collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getQuizzes(language)"),": Retrieves quizzes based on the specified language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getRandomQuiz(language)"),": Selects and returns a random quiz for the specified language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"updateUserQuiz(username, quiz)"),": Updates the user's quiz score in the user collection.")))),(0,r.kt)("h1",{id:"3-vocabquizpy"},"3. '",(0,r.kt)("strong",{parentName:"h1"},"vocabquiz.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database")))),(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"init"),"(ctx, user, quiz)"),": Initializes the quiz with context, user, and quiz data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"get_question()"),": Gets a quiz question."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"get_quiz_info()"),": Gets quiz information including score. ")))),(0,r.kt)("h1",{id:"4-helpcommandpy"},"4. '",(0,r.kt)("strong",{parentName:"h1"},"HelpCommand.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"init"),"(bot)"),": Initializes the cog with a reference to the bot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"on_ready()"),": An event handler called when the cog is ready."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"help(ctx)"),": A command that displays help information as an embedded message in Discord."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setup(bot)"),": Internal method for setting up the cog.")))),(0,r.kt)("h1",{id:"5-changelanguagepy"},"5. '",(0,r.kt)("strong",{parentName:"h1"},"ChangeLanguage.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database")))),(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"init"),"(bot)"),": Initializes the cog with a reference to the bot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"on_ready()"),": An event handler called when the cog is ready."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"changeLanguage(ctx, userprompt)"),": A command that allows the user to change languages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setup(bot)"),": Internal method for setting up the cog.")))),(0,r.kt)("h1",{id:"6-joinvoicepy"},"6. '",(0,r.kt)("strong",{parentName:"h1"},"JoinVoice.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"init"),"(bot)"),": Initializes the cog with a reference to the bot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startVoiceQuiz(ctx)"),": A command that enables the bot to join the user's voice channel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setup(bot)"),": Internal method for setting up the cog.")))),(0,r.kt)("h1",{id:"7-startvocabquizpy"},"7. '",(0,r.kt)("strong",{parentName:"h1"},"StartVocabQuiz.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database")))),(0,r.kt)("li",{parentName:"ul"},"Methods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"init"),"(bot)"),": Initializes the cog with a reference to the bot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"on_ready()"),": An event handler called when the cog is ready."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startVocabQuiz(ctx)"),": A command that starts a vocabulary quiz."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setup(bot)"),": Internal method for setting up the cog.")))),(0,r.kt)("h1",{id:"8-constantpy"},"8. '",(0,r.kt)("strong",{parentName:"h1"},"constant.py"),"'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LANGUAGES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USER_LANGUAGE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USER_TOTALSCORE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_QUESTIONS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_QUESTION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_ANSWERS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_ANSWER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_ISCORRECT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_SCORE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QUIZ_NAME"))))))}m.isMDXComponent=!0}}]);