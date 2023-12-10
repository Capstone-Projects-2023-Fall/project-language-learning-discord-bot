"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8968],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),u=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(c.Provider,{value:a},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||l[g]||s;return n?t.createElement(m,i(i({ref:a},d),{},{components:n})):t.createElement(m,i({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1639:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const s={},i="Sequence Diagram",o={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagram",description:"Use Case 1: Account Creation and Bot Initialization",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Justin K",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Class Diagram",permalink:"/project-language-learning-discord-bot/docs/system-architecture/class-diagrams"},next:{title:"API Specification",permalink:"/project-language-learning-discord-bot/docs/category/api-specification"}},c={},u=[{value:"Use Case 1: Account Creation and Bot Initialization",id:"use-case-1-account-creation-and-bot-initialization",level:2},{value:"Use Case 2: Vocabulary Testing",id:"use-case-2-vocabulary-testing",level:2},{value:"Use Case 3: Pronunciation Testing",id:"use-case-3-pronunciation-testing",level:2},{value:"Use Case 4: Tracking Progress",id:"use-case-4-tracking-progress",level:2},{value:"Use Case 5: Viewing Top Performers for Each Language",id:"use-case-5-viewing-top-performers-for-each-language",level:2},{value:"Use Case 6: Changing Current Learning Language",id:"use-case-6-changing-current-learning-language",level:2}],d={toc:u};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sequence-diagram"},"Sequence Diagram"),(0,r.kt)("h2",{id:"use-case-1-account-creation-and-bot-initialization"},"Use Case 1: Account Creation and Bot Initialization"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to create a Discord account and set up a language-learning bot so that I can personalize my language learning experience.")),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Discord\n    participant B as Bot\n    participant DB as BotDatabase\n\n    activate U\n    U->>D: Opens Discord\n    activate D\n    U->>D: Select \"Create an account\"\n    D--\x3e>U: Request account details\n    U->>D: Provide email, display name, username, password, date of birth\n    D->>D: Store account details in Discord's database\n    D--\x3e>U: Account created & logged in\n    U->>D: Invites Bot to server\n    D--\x3e>B: Invitation received\n    activate B\n    B--\x3e>D: Sends introductory message\n    D->>U: Display message\n    U->>D: Sends command to set language preferences\n    D--\x3e>B: Command received\n    B--\x3e>U: Requests user\u2019s language preference\n    U->>D: Responds with preferred language\n    D--\x3e>B: Preferred language received\n    B->>DB: Updates user\u2019s language preference in BotDatabase\n    activate DB\n    DB--\x3e>B: Confirm preference updated\n    deactivate DB\n    B--\x3e>D: Sends confirmation in user's selected language\n    D->>U: Display confirmation\n    deactivate B\n    deactivate D\n    deactivate U\n"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1: User opens Discord.\n2: User selects the "Create an account" option.\n3: Discord prompts the user for account details.\n4: User provides required details such as email, display name, username, password, and date of birth.\n5: Discord stores the provided account details in its database.\n6: Database confirms successful account creation.\n7: Discord confirms to the user that the account is created, and the user is logged in.\n8: User invites the bot to their server.\n9: Bot sends an introductory message upon joining the server.\n10: User sends a command to the bot to set language preferences.\n11: Bot requests the user\u2019s preferred language for interaction.\n12: User responds with their language of choice.\n13: Bot updates the user\u2019s language preference in the database.\n14: Database confirms the preference has been updated.\n15: Bot sends a confirmation message in the user\'s selected language.\n')),(0,r.kt)("h2",{id:"use-case-2-vocabulary-testing"},"Use Case 2: Vocabulary Testing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to test my vocabulary knowledge for my selected language.")),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    actor U as User\n    participant D as Discord\n    participant B as Bot\n    participant DB as Database\n    \n    activate U\n\n    U->>D: Opens App\n    activate D\n    U->>D: Command for vocabulary test\n    D--\x3e>B: Request for vocabulary quiz\n    activate B\n    B->>DB: Retrieve vocabulary quiz based on user's language\n    B--\x3e>D: Provides vocabulary quiz\n    D->>U: Display vocabulary quiz\n    U->>D: Submits quiz answers\n    D--\x3e>B: Sends user's answers\n    B->>DB: Evaluate answers\n    B--\x3e>D: Sends quiz results\n    D->>U: Display results\n    deactivate B\n    deactivate D\n    deactivate U\n"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1: User opens the Discord app.\n2: User sends a command to initiate a vocabulary test.\n3: Bot retrieves vocabulary quizzes from the database in the user\u2019s selected language.\n4: User takes the vocabulary quiz generated by the bot.\n5: Bot evaluates the user's answers, checking syntax and spelling.\n6: Bot updates the database with the user's quiz results.\n7: Bot sends a message to the user, presenting the quiz results.\n8: User reviews the result, understanding their strengths and area of improvement.\n")),(0,r.kt)("h2",{id:"use-case-3-pronunciation-testing"},"Use Case 3: Pronunciation Testing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to test my pronunciation skills in my chosen language.")),(0,r.kt)("mermaid",{value:'sequenceDiagram\n    actor U as User\n    participant D as Discord\n    participant B as Bot\n    participant DB as Database\n    \n    activate U\n    U->>D: Opens App\n    activate D\n    U->>D: "!startPronunciationTest" command\n    D--\x3e>B: Request for pronunciation exercise\n    activate B\n    B->>DB: Retrieve language & exercise\n    DB--\x3e>B: Sends exercise details\n    B--\x3e>D: Provides pronunciation exercise\n    D->>U: Display exercise\n    U->>D: Sends audio message with pronunciation\n    D--\x3e>B: User\'s audio message\n    B->>DB: Transcribe & save metrics\n    B--\x3e>D: Sends pronunciation feedback\n    D->>U: Display feedback\n    deactivate B\n    deactivate D\n    deactivate U\n'}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1: User opens the Discord app.\n2: User sends a command, e.g., "!startPronunciationTest" to initiate the pronunciation test.\n3: Bot retrieves the user\u2019s preferred language and related exercise from the database.\n4: User sends an audio message with the given text or sentences\' pronunciation.\n5: As the user speaks, the bot listens and transcribes the user\u2019s audio.\n6: Bot updates the database with the transcription and performance metrics.\n7: Bot provides feedback on pronunciation accuracy and areas for improvement.\n8: User review the feedback to understand their pronunciation accuracy and areas of improvement.\n')),(0,r.kt)("h2",{id:"use-case-4-tracking-progress"},"Use Case 4: Tracking Progress"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to track my progress.")),(0,r.kt)("mermaid",{value:'sequenceDiagram\n    actor U as User\n    participant D as Discord\n    participant B as Bot\n    participant DB as Database\n    \n    activate U\n    U->>D: Opens App\n    activate D\n    U->>D: "!myScores" command\n    D--\x3e>B: Request for personal scores\n    activate B\n    B->>DB: Retrieve user scores\n    DB--\x3e>B: Sends user scores\n    B--\x3e>D: Sends score details\n    D->>U: Display personal scoring\n    deactivate B\n    deactivate D\n    deactivate U\n'}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1: User opens the Discord app.\n2: User sends the \u201c!myScores\u201d command to the bot.\n3: Bot fetches the user\u2019s scores from the database.\n4: Bot presents the user with their scores for vocabulary quizzes, pronunciation tests, and overall progress on Discord.\n")),(0,r.kt)("h2",{id:"use-case-5-viewing-top-performers-for-each-language"},"Use Case 5: Viewing Top Performers for Each Language"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to view the top performers for each language to gauge my progress against peers.")),(0,r.kt)("mermaid",{value:'sequenceDiagram\n    actor U as User\n    participant D as Discord\n    participant B as Bot\n    participant DB as Database\n    \n    activate U\n    U->>D: Opens App\n    activate D\n    U->>D: Sends "!leaderboard" Command\n    D--\x3e>B: Request for leaderboard information\n    activate B\n    B->>DB: Retrieve top aggregate scores for current language\n    DB--\x3e>B: Sends top score information\n    B--\x3e>D: Sends leaderboard information\n    D->>U: Displays leaderboard for current language\n    deactivate B\n    deactivate D\n    deactivate U\n'}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1: User opens the Discord app.\n2: User sends the \u201c!leaderboard\u201d command to the bot.\n3: Bot retrieves top aggregate scores for the currently selected language from the database.\n4: Bot displays the leaderboard to the user on Discord.\n")),(0,r.kt)("h2",{id:"use-case-6-changing-current-learning-language"},"Use Case 6: Changing Current Learning Language"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to change my current learning language to explore other languages.")),(0,r.kt)("mermaid",{value:'sequenceDiagram\nactor U as User\n    participant D as Discord\n    participant B as Bot\n    participant DB as Database\n    activate U\n    U->>D: Opens App\n    activate D\n    U->>D: Sends "!changeLanguage" Command\n    D--\x3e>B: Request for language change\n    activate B\n    B--\x3e>D: Sends available language info\n    D->>U: Displays list of available languages\n    U->>D: Command to select a new language from list\n    D--\x3e>B: Language selection received\n    B->>DB: Update language preference\n    B--\x3e>D: Acknowledge in selected language\n    D->>U: Display acknowledgment\n    deactivate B\n    deactivate D\n    deactivate U\n'}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1: User opens the Discord app.\n2: User sends the \u201c!changeLanguage\u201d command to the bot.\n3: Bot displays a list of available languages to the user on Discord.\n4: User selects a new language from the list.\n5: Bot updates the user\u2019s preferred language in the database.\n6: Bot confirms the change to the user on Discord.\n")))}p.isMDXComponent=!0}}]);