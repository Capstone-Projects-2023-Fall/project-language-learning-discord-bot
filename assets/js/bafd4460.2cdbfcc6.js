"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o=void 0,l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"features-and-requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-language-learning-discord-bot/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"Justin Kuruvilla",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-language-learning-discord-bot/docs/requirements/general-requirements"},next:{title:"Use-Case Descriptions",permalink:"/project-language-learning-discord-bot/docs/requirements/use-case-descriptions"}},s={},c=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Nonfunctional Requirements",id:"nonfunctional-requirements",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Language Learning Discord Bot (will be abbreviated to LLDB going further) will require a Discord account to use.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Requirements for making a Discord account include having an email address, and being of 13 years of age or older."),(0,a.kt)("li",{parentName:"ul"},"Discord can be downloaded onto the computer, or be accessed via the web @ ",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/app"},"https://discord.com/app")))),(0,a.kt)("li",{parentName:"ol"},"The LLDB will require being in the server with the bot. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To accomplish this, one must join a server that hosts the bot or invite the bot into a server of their choosing."),(0,a.kt)("li",{parentName:"ul"},"LLDB Team will host the bot here @ ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/zW5RbpbTT"},"https://discord.gg/zW5RbpbTT")))),(0,a.kt)("li",{parentName:"ol"},"Communicating with the bot will require an internet connection.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A stable connection is necessary for voice input/output; but for learning via text, it is not necessary."))),(0,a.kt)("li",{parentName:"ol"},"Starting setup for the bot includes just selecting a starter language to begin. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'This language can be changed at a later date if desired by sending "/changeLanguage".'))),(0,a.kt)("li",{parentName:"ol"},'The full command list for the bot can be viewed by sending "/help" in the chat while the bot is active.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Viewing the command list will let you see all possible options to learn with the bot."))),(0,a.kt)("li",{parentName:"ol"},'To access a vocab quiz with the selected language, prompt the bot by sending "/startVocabQuiz". ',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will allow the user to select a level to start with; the higher the level number, the more difficult the words will be."),(0,a.kt)("li",{parentName:"ul"},'For example, level 1 might include "talkative", whereas level 7 might include "gregarious" by comparison.'),(0,a.kt)("li",{parentName:"ul"},"After selecting the level, the bot will generate a practice test for the user to attempt."))),(0,a.kt)("li",{parentName:"ol"},'To access pronounciation practice, prompt the bot by sending "/startVoiceQuiz".',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To use this command, one must be in a voice channel on the server."),(0,a.kt)("li",{parentName:"ul"},"The bot must have permissions to access the voice channel; this can be done by giving the bot the permission or making the voice channel visible to the bot."),(0,a.kt)("li",{parentName:"ul"},"The bot will join the voice channel and transcribe the user's audio transmission."),(0,a.kt)("li",{parentName:"ul"},"The user will then be graded on their attempt."))),(0,a.kt)("li",{parentName:"ol"},'The language leaderboard can be checked by sending "/leaderboard".',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will display the current top aggregate scores of all users."),(0,a.kt)("li",{parentName:"ul"},"These scores are increased when completing vocab and voice quizzes with the highest possible scores."),(0,a.kt)("li",{parentName:"ul"},'To check an individual\'s scores across all quizzes, send "/myScores".'),(0,a.kt)("li",{parentName:"ul"},"The leaderboard will be specific to each language; there will be a different leaderboard for each different language.")))),(0,a.kt)("h2",{id:"nonfunctional-requirements"},"Nonfunctional Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The LLDB will send notifications to practice.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The bot should send periodic notifications to users, reminding them to practice their chosen language."),(0,a.kt)("li",{parentName:"ul"},"Encouraging messages can be attached to the notifications."),(0,a.kt)("li",{parentName:"ul"},"Notifications should be sent at appropriate intervals to encourage consistent practice."))),(0,a.kt)("li",{parentName:"ol"},"The bot can give language-specific responses.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The bot's responses should align with the language selected by the user for a more immersive learning experience."))),(0,a.kt)("li",{parentName:"ol"},"LLDB will implement user-friendly interaction.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All commands will have relevant, intuitive names and provide clear instructions"),(0,a.kt)("li",{parentName:"ul"},"The bot will provide feedback so the user is always aware of their current progress"))),(0,a.kt)("li",{parentName:"ol"},"The bot will provide an interactive learning experience.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Vocabulary practice, quizzes, and pronunciation exercises should be engaging and interactive."))),(0,a.kt)("li",{parentName:"ol"},"The bot will employ data persistance to ensure all users can interact with the bot simutanenously ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"User progress data will be securely stored and retrieved for each session."),(0,a.kt)("li",{parentName:"ul"},"Data backup and recovery mechanisms via external database"),(0,a.kt)("li",{parentName:"ul"},"Session persistence and ensuring that user progress is saved even if the user closes the Discord app or logs out."),(0,a.kt)("li",{parentName:"ul"},"The bot should keep track of individual user profiles with progress, including lessons completed, quiz scores, and pronunciation scores.")))))}p.isMDXComponent=!0}}]);