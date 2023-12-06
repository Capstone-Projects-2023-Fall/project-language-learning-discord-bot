"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:5},o="Use-Case Descriptions",i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-Case Descriptions",description:"Use Case 1: Account Creation and Bot Initialization",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-language-learning-discord-bot/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"features-and-requirements",permalink:"/project-language-learning-discord-bot/docs/requirements/features-and-requirements"},next:{title:"System Architecture",permalink:"/project-language-learning-discord-bot/docs/category/system-architecture"}},l={},c=[{value:"Use Case 1: Account Creation and Bot Initialization",id:"use-case-1-account-creation-and-bot-initialization",level:3},{value:"Use Case 2: Vocabulary Knowledge Test",id:"use-case-2-vocabulary-knowledge-test",level:3},{value:"Use Case 3: Pronunciation Testing",id:"use-case-3-pronunciation-testing",level:3},{value:"Use Case 4: Tracking Progress",id:"use-case-4-tracking-progress",level:3},{value:"Use Case 5: Viewing Top Performers for Each Language",id:"use-case-5-viewing-top-performers-for-each-language",level:3},{value:"Use Case 6: Changing Current Learning Language",id:"use-case-6-changing-current-learning-language",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-case-descriptions"},"Use-Case Descriptions"),(0,n.kt)("h3",{id:"use-case-1-account-creation-and-bot-initialization"},"Use Case 1: Account Creation and Bot Initialization"),(0,n.kt)("i",null,"As a user, I want to create a Discord account and set up a language-learning bot to personalize my language-learning experience."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User opens Discord."),(0,n.kt)("li",{parentName:"ol"},'The user selects the "Create an account" option.'),(0,n.kt)("li",{parentName:"ol"},"Discord prompts the user for account details."),(0,n.kt)("li",{parentName:"ol"},"User provides the required details such as email, display name, username, password, and date of birth."),(0,n.kt)("li",{parentName:"ol"},"Discord stores the provided account details in its database."),(0,n.kt)("li",{parentName:"ol"},"Database confirms successful account creation."),(0,n.kt)("li",{parentName:"ol"},"Discord confirms to the user that the account is created, and the user is logged in."),(0,n.kt)("li",{parentName:"ol"},"The user invites the bot to their server."),(0,n.kt)("li",{parentName:"ol"},"The bot sends an introductory message upon joining the server"),(0,n.kt)("li",{parentName:"ol"},"The user sends a command to the bot to set language preferences."),(0,n.kt)("li",{parentName:"ol"},"The bot requests the user\u2019s preferred language for interaction."),(0,n.kt)("li",{parentName:"ol"},"The user responds with their language of choice."),(0,n.kt)("li",{parentName:"ol"},"Bot updates the user\u2019s language preference in the database."),(0,n.kt)("li",{parentName:"ol"},"The database confirms the preference has been updated."),(0,n.kt)("li",{parentName:"ol"},"Bot sends a confirmation message in the user's selected language.")),(0,n.kt)("h3",{id:"use-case-2-vocabulary-knowledge-test"},"Use Case 2: Vocabulary Knowledge Test"),(0,n.kt)("i",null,"As a user, I want to test my vocabulary knowledge for my selected language."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user opens the Discord app."),(0,n.kt)("li",{parentName:"ol"},"The user sends a command to initiate a vocabulary test."),(0,n.kt)("li",{parentName:"ol"},"The bot retrieves vocabulary quizzes from the database in the user\u2019s selected language."),(0,n.kt)("li",{parentName:"ol"},"The user takes the vocabulary quiz generated by the bot."),(0,n.kt)("li",{parentName:"ol"},"The bot evaluates the user's answers, checking syntax and spelling."),(0,n.kt)("li",{parentName:"ol"},"The bot updates the database with the user's quiz results."),(0,n.kt)("li",{parentName:"ol"},"The bot sends a message to the user, presenting the quiz results."),(0,n.kt)("li",{parentName:"ol"},"The user reviews the result, understanding their strengths and areas of improvement.")),(0,n.kt)("h3",{id:"use-case-3-pronunciation-testing"},"Use Case 3: Pronunciation Testing"),(0,n.kt)("i",null,"As a user, I want to test my pronunciation skills in my chosen language."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user opens the Discord app."),(0,n.kt)("li",{parentName:"ol"},'The user sends a command, e.g., "!startPronunciationTest" to initiate the pronunciation test.'),(0,n.kt)("li",{parentName:"ol"},"The bot retrieves the user\u2019s preferred language and related exercise from the database."),(0,n.kt)("li",{parentName:"ol"},"The user sends an audio message with the given text or sentence's pronunciation."),(0,n.kt)("li",{parentName:"ol"},"As the user speaks, the bot listens and transcribes the user\u2019s audio."),(0,n.kt)("li",{parentName:"ol"},"The bot updates the database with the transcription and performance metrics."),(0,n.kt)("li",{parentName:"ol"},"The bot provides feedback on pronunciation accuracy and areas for improvement."),(0,n.kt)("li",{parentName:"ol"},"The user reviews the feedback to understand their pronunciation accuracy and areas of improvement.")),(0,n.kt)("h3",{id:"use-case-4-tracking-progress"},"Use Case 4: Tracking Progress"),(0,n.kt)("i",null,"As a user, I want to track my progress."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user opens the Discord App."),(0,n.kt)("li",{parentName:"ol"},"The user sends the \u201c!myScores\u201d command to the bot."),(0,n.kt)("li",{parentName:"ol"},"The bot fetches the user\u2019s scores from the database."),(0,n.kt)("li",{parentName:"ol"},"The bot presents the user with their scores for vocabulary quizzes, pronunciation tests, and overprogress on Discord.")),(0,n.kt)("h3",{id:"use-case-5-viewing-top-performers-for-each-language"},"Use Case 5: Viewing Top Performers for Each Language"),(0,n.kt)("i",null,"As a user, I want to view the top performers for each language to gauge my progress against peers."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user opens the Discord App."),(0,n.kt)("li",{parentName:"ol"},"The user sends the \u201c!leaderboard\u201d command to the bot."),(0,n.kt)("li",{parentName:"ol"},"The bot retrieves the top aggregate scores for the currently selected language from the database."),(0,n.kt)("li",{parentName:"ol"},"The bot displays the leaderboard to the user on Discord.")),(0,n.kt)("h3",{id:"use-case-6-changing-current-learning-language"},"Use Case 6: Changing Current Learning Language"),(0,n.kt)("i",null,"As a user, I want to change my current learning language to explore other languages."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user opens the Discord App."),(0,n.kt)("li",{parentName:"ol"},"The user sends the \u201c!changeLanguage\u201d command to the bot."),(0,n.kt)("li",{parentName:"ol"},"The bot displays a list of available languages to the user on Discord."),(0,n.kt)("li",{parentName:"ol"},"The user selects a new language from the list."),(0,n.kt)("li",{parentName:"ol"},"The bot updates the user\u2019s preferred language in the database."),(0,n.kt)("li",{parentName:"ol"},"The bot confirms the change to the user on Discord.")))}p.isMDXComponent=!0}}]);