"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=s,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:5},o="Use-Case Descriptions",i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-Case Descriptions",description:"Use Case 1: Account Creation and Bot Initialization",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-language-learning-discord-bot/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"features-and-requirements",permalink:"/project-language-learning-discord-bot/docs/requirements/features-and-requirements"},next:{title:"Test-Report",permalink:"/project-language-learning-discord-bot/docs/requirements/Test-Report"}},c={},u=[{value:"Use Case 1: Account Creation and Bot Initialization",id:"use-case-1-account-creation-and-bot-initialization",level:3},{value:"Use Case 2: Vocabulary Knowledge Test",id:"use-case-2-vocabulary-knowledge-test",level:3},{value:"Use Case 3: Pronunciation Testing",id:"use-case-3-pronunciation-testing",level:3},{value:"Use Case 4: Tracking Progress",id:"use-case-4-tracking-progress",level:3},{value:"Use Case 5: Viewing Top Performers for Each Language",id:"use-case-5-viewing-top-performers-for-each-language",level:3},{value:"Use Case 6: Changing Current Learning Language",id:"use-case-6-changing-current-learning-language",level:3}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-descriptions"},"Use-Case Descriptions"),(0,s.kt)("h3",{id:"use-case-1-account-creation-and-bot-initialization"},"Use Case 1: Account Creation and Bot Initialization"),(0,s.kt)("i",null,"As a user, I want to set up a language-learning discord bot to personalize my language-learning experience."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'    1. User opens Discord.\n    2. The user selects the "Create an account" option.\n    3. Discord prompts the user for account details.\n    4. User provides the required details such as email, display name, username, password, and date of birth.\n    5. Discord stores the provided account details in its database.\n    6. Database confirms successful account creation.\n    7. Discord confirms to the user that the account is created, and the user is logged in.\n    8. The user invites the bot to their server.\n    9. The bot sends an introductory message upon joining the server\n    10. The user sends a command to the bot to set language preferences.\n    11. The bot requests the user\u2019s preferred language for interaction.\n    12. The user responds with their language of choice.\n    13. Bot updates the user\u2019s language preference in the database.\n    14. The database confirms the preference has been updated.\n    15. Bot sends a confirmation message in the user\'s selected language.\n')),(0,s.kt)("h3",{id:"use-case-2-vocabulary-knowledge-test"},"Use Case 2: Vocabulary Knowledge Test"),(0,s.kt)("i",null,"As a user, I want to test my vocabulary knowledge for my selected language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    1. The user opens the Discord app.\n    2. The user sends a command to initiate a vocabulary test.\n    3. The bot retrieves vocabulary quizzes from the database in the user\u2019s selected language.\n    4. The user takes the vocabulary quiz generated by the bot.\n    5. The bot evaluates the user's answers, checking syntax and spelling.\n    6. The bot updates the database with the user's quiz results.\n    7. The bot sends a message to the user, presenting the quiz results.\n    8. The user reviews the result, understanding their strengths and areas of improvement.\n")),(0,s.kt)("h3",{id:"use-case-3-pronunciation-testing"},"Use Case 3: Pronunciation Testing"),(0,s.kt)("i",null,"As a user, I want to test my pronunciation skills in my chosen language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'    1. The user opens the Discord app.\n    2. The user sends a command, e.g., "!startPronunciationTest" to initiate the pronunciation test.\n    3. The bot retrieves the user\u2019s preferred language and related exercise from the database.\n    4. The user sends an audio message with the given text or sentence\'s pronunciation.\n    5. As the user speaks, the bot listens and transcribes the user\u2019s audio.\n    6. The bot updates the database with the transcription and performance metrics.\n    7. The bot provides feedback on pronunciation accuracy and areas for improvement.\n    8. The user reviews the feedback to understand their pronunciation accuracy and areas of improvement.\n')),(0,s.kt)("h3",{id:"use-case-4-tracking-progress"},"Use Case 4: Tracking Progress"),(0,s.kt)("i",null,"As a user, I want to track my progress."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    1. The user opens the Discord App.\n    2. The user sends the \u201c!myScores\u201d command to the bot.\n    3. The bot fetches the user\u2019s scores from the database.\n    4. The bot presents the user with their scores for vocabulary quizzes, pronunciation tests, and overprogress on Discord.\n")),(0,s.kt)("h3",{id:"use-case-5-viewing-top-performers-for-each-language"},"Use Case 5: Viewing Top Performers for Each Language"),(0,s.kt)("i",null,"As a user, I want to view the top performers for each language to gauge my progress against peers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    1. The user opens the Discord App.\n    2. The user sends the \u201c!leaderboard\u201d command to the bot.\n    3. The bot retrieves the top aggregate scores for the currently selected language from the database.\n    4. The bot displays the leaderboard to the user on Discord.\n")),(0,s.kt)("h3",{id:"use-case-6-changing-current-learning-language"},"Use Case 6: Changing Current Learning Language"),(0,s.kt)("i",null,"As a user, I want to change my current learning language to explore other languages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    1. The user opens the Discord App.\n    2. The user sends the \u201c!changeLanguage\u201d command to the bot.\n    3. The bot displays a list of available languages to the user on Discord.\n    4. The user selects a new language from the list.\n    5. The bot updates the user\u2019s preferred language in the database.\n    6. The bot confirms the change to the user on Discord.\n")))}d.isMDXComponent=!0}}]);