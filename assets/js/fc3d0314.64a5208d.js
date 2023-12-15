"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var l=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=c(n),p=o,k=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return n?l.createElement(k,i(i({ref:e},u),{},{components:n})):l.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[d]="string"==typeof t?t:o,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2233:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},i="Acceptance Tests",a={unversionedId:"testing/acceptence-testing",id:"testing/acceptence-testing",title:"Acceptance Tests",description:"The table below outlines a series of manual acceptance tests performed by test users to demonstrate that all functional and non-functional requirements that have been specified for this project have been satisfied.",source:"@site/docs/testing/acceptence-testing.md",sourceDirName:"testing",slug:"/testing/acceptence-testing",permalink:"/project-language-learning-discord-bot/docs/testing/acceptence-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/testing/acceptence-testing.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Integration tests",permalink:"/project-language-learning-discord-bot/docs/testing/integration-testing"}},s={},c=[{value:"Spreadsheet Link:",id:"spreadsheet-link",level:3},{value:"Test Table:",id:"test-table",level:3}],u={toc:c};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"acceptance-tests"},"Acceptance Tests"),(0,o.kt)("p",null,"The table below outlines a series of manual acceptance tests performed by test users to demonstrate that all functional and non-functional requirements that have been specified for this project have been satisfied."),(0,o.kt)("h3",{id:"spreadsheet-link"},"Spreadsheet Link:"),(0,o.kt)("p",null,"View ",(0,o.kt)("a",{href:"https://docs.google.com/spreadsheets/d/1i5zTHbk7TgmvDQC02ETaOVChi-A53NR2/edit?usp=sharing&ouid=107964194543211256390&rtpof=true&sd=true"}," this google sheet")," for a copy of the manual acceptance test spreadsheet. "),(0,o.kt)("h3",{id:"test-table"},"Test Table:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Test ID"),(0,o.kt)("th",null,"Action/Steps"),(0,o.kt)("th",null,"Expected Result"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"Invite Bot to Server: Use the link below to add the bot to your discord server. https://discord.com/invite/zW5RbpbTT       "),(0,o.kt)("td",null,"The bot successfully joins the server and sends an introductory message.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,'Help Command: Type "!help" into the server to view a list of commands to initiate bot interaction.'),(0,o.kt)("td",null,"The bot responds with the list of available commands and their descriptions. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,'Select Desired Language: Type "!changeLanguage" followed by the language you wish to start learning into the chat.'),(0,o.kt)("td",null,"The bot will acknowledge that the language was changed to your selection. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"4"),(0,o.kt)("td",null,"Start Vocab Quiz: Enter !startVocabQuiz into the chat to initiate a vocab quiz."),(0,o.kt)("td",null,"The bot will ask user to select a difficulty level, and then generate questions in the selected language.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"Quiz Response - Right Answer: Select the correct response from the list of choices provided by the bot."),(0,o.kt)("td",null,"The bot will confirm user response was accurate.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"Quiz Response - Wrong Answer: Select the incorrect response from the list of choices provided by the bot."),(0,o.kt)("td",null,"The bot will notify you that your response was wrong.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"Complete Quiz: Respond to all quiz questions generated by the bot."),(0,o.kt)("td",null,"The bot will provide you with your quiz score.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,'Start Voice Quiz: Begin by entering a voice channel on the discord server in which you have invited the bot. Next confirm that the bot has been given permission to access voice channels. Finally enter the command "!startVoiceQuiz" into the chat.'),(0,o.kt)("td",null,"The bot will provide you with text in your selected language.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"9"),(0,o.kt)("td",null,'Start Voice Quiz Not in VC: Enter the command "!startVoiceQuiz" while not in a voice channel.'),(0,o.kt)("td",null,"The bot will state that you must currently be in a voice channel to use this command. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"10"),(0,o.kt)("td",null,"Voice Quiz Failed Attempt: Read the provided text with improper pronunciation. (Ignore accents/Improper stressing)"),(0,o.kt)("td",null,"The bot will listen the to your pronunciation and provides feedback reflecting improper pronunciation ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"11"),(0,o.kt)("td",null,"Voice Quiz Pass Attempt: Read the provided text to the best of your ability."),(0,o.kt)("td",null,"The bot will listen the to your pronunciation and provide feedback reflecting proper pronunciation and accents.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"12"),(0,o.kt)("td",null,"Start Listening Practice: While you are in a voice channel enter the command to start listening practice into the chat."),(0,o.kt)("td",null,"The bot will join the voice channel and provide you with audfio of a sentence in your selected language.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"13"),(0,o.kt)("td",null,"Listening Prac. Wrong Response: After listening to the sentence audio from the bot, type the incorrect translation into the chat."),(0,o.kt)("td",null,"The bot will notify you that your response was wrong and grade you accordingly. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"14"),(0,o.kt)("td",null,"Listening Prac. Correct Response: After listening to the sentence audio from the bot, type the correct translation into the chat."),(0,o.kt)("td",null,"The bot will accept your response and grade you accordingly.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"15"),(0,o.kt)("td",null,'View Flash Cards: Enter the command "!studyFlash" into the chat.'),(0,o.kt)("td",null,"The bot will generate a selec menu for you to choose the unit you want to practice.. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"16"),(0,o.kt)("td",null,"Select Flash card Unit: Select a Unit or choose to randomize card set"),(0,o.kt)("td",null,'The embed will update to display a set of cards from the unit you have selected".')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"17"),(0,o.kt)("td",null,"Flip Flash card: Click the flip button on the flash card embed."),(0,o.kt)("td",null,"The bot will show the phrase in english")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"18"),(0,o.kt)("td",null,"Progress Flash card: Click the right arrow button and then left arrow button on the flash card embed."),(0,o.kt)("td",null,"The embed will update to display the next and then previous cards.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"19"),(0,o.kt)("td",null,'End Flash card: Click the red "X" button on the flash card embed.'),(0,o.kt)("td",null,'The embed will update to display the message "Great Work!, and this flashcard session will end".')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"20"),(0,o.kt)("td",null,"Practice Fill in the Blank: Enter the command to start fill in the blank practice in the text channel."),(0,o.kt)("td",null,"The bot will generate sentences in your selected language with one word omitted. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"21"),(0,o.kt)("td",null,"Fill in the Wrong Answer: Type an answer which would not work in the given blank."),(0,o.kt)("td",null,"The bot will notify you your response was incorrect.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"22"),(0,o.kt)("td",null,"Fill in the Right Answer: Type an answer that fits the blank. "),(0,o.kt)("td",null,"The bot will notify you your response is appropriate.  ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"23"),(0,o.kt)("td",null,"Complete Fill in The Blank: Complete all fill in the blank practice problems. "),(0,o.kt)("td",null,"The bot will notify you that the session is over and present you with a total score.  ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"24"),(0,o.kt)("td",null,'Track Personal Progress: Type the command "!myScores" into the chat.'),(0,o.kt)("td",null,"The bot will respond with your scores for both vocab and voice quizzes. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"25"),(0,o.kt)("td",null,'Check Server Leaderboard: Enter the command "!leaderboard" into the chat.'),(0,o.kt)("td",null,"The bot will reply with a display of the top aggregate scores of all users on the server. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"26"),(0,o.kt)("td",null,"Practice Reminders: After inviting the bot to a discord server, wait a few moments without practice any quizzes. (reminder interval maybe shortened for testing)"),(0,o.kt)("td",null,"The bot will send you a notification to practice in your selected language.")))))}d.isMDXComponent=!0}}]);