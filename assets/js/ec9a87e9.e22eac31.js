"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[424],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>p});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},d="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),d=l(t),m=a,p=d["".concat(c,".").concat(m)]||d[m]||g[m]||i;return t?r.createElement(p,s(s({ref:e},u),{},{components:t})):r.createElement(p,s({ref:e},u))}));function p(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[d]="string"==typeof n?n:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7286:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:6},s="Database Diagrams",o={unversionedId:"system-architecture/database-diagrams",id:"system-architecture/database-diagrams",title:"Database Diagrams",description:"Entity-Relation Diagram",source:"@site/docs/system-architecture/database-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/database-diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/database-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/system-architecture/database-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Version Control",permalink:"/project-language-learning-discord-bot/docs/system-architecture/version-control"},next:{title:"Class Diagram",permalink:"/project-language-learning-discord-bot/docs/system-architecture/class-diagrams"}},c={},l=[{value:"Entity-Relation Diagram",id:"entity-relation-diagram",level:2},{value:"NoSQL translated example",id:"nosql-translated-example",level:2}],u={toc:l};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"database-diagrams"},"Database Diagrams"),(0,a.kt)("h2",{id:"entity-relation-diagram"},"Entity-Relation Diagram"),(0,a.kt)("mermaid",{value:'erDiagram\nUsers {\n  String username PK\n  String language_id FK\n  String email\n  Int totalScore\n}\n\nLanguages {\n  String id PK\n  String name\n}\n\nUserQuiz {\n  Int id PK\n  String username FK\n  Int quiz_id FK\n  Date took_on\n  Int score\n\n}\n\nQuizzes {\n  Int id PK\n  String name\n  Int score\n  Int level\n}\n\nQuestions {\n  Int id PK\n  String language_id FK\n  Int quizz_id FK\n  String question\n}\n\nAnswers {\n  Int id PK\n  Int question_id FK\n  String answer\n  Boolean isCorrect\n}\n\nPractices {\n  Int id PK\n  String name\n  Int Score\n}\n\nUserPractice {\n  Int id PK\n  String username FK\n  Int practice_id FK\n  Date took_on\n  Int score\n}\n\nSentences {\n  Int id PK\n  Int practice_id FK\n  String sentences\n}\n\nFillInTheBlank {\n  Int id PK\n  String name\n  Int Score\n  Int level\n}\n\nUserFillInTheBlank {\n  Int id PK\n  String username FK\n  Int fill_in_the_blank_id FK\n  Date took_on\n  Int score\n}\n\nBlankQuestion {\n  Int id PK\n  Int fill_in_the_blank_id FK\n  String sentences\n  String englishEquivalent\n  String correctAnswer\n  String englishWord\n}\n\nFlashCard {\n  Int id PK\n  String name\n  Int Score\n  Int level\n}\n\nCard {\n  Int id PK\n  Int flash_card_id FK\n  String front\n  String back\n}\n\n\n\nQuestions ||--|{ Answers : ""\nQuizzes ||--|{ Questions : ""\nUsers ||--|{ UserQuiz : ""\nQuizzes ||--|{ UserQuiz : ""\nUsers }|--|| Languages : ""\nQuizzes }|--|| Languages : ""\n\nUsers ||--|{ UserPractice : ""\nPractices ||--|{ UserPractice : ""\nPractices ||--|{ Sentences : ""\nPractices }|--|| Languages : ""\n\n\nUsers ||--|{ UserFillInTheBlank : ""\nFillInTheBlank ||--|{ UserFillInTheBlank : ""\nFillInTheBlank ||--|{ BlankQuestion : ""\nFillInTheBlank }|--|| Languages : ""\n\n\nFlashCard ||--|{ Card : ""\nFlashCard }|--|| Languages : ""\n\n\n'}),(0,a.kt)("h2",{id:"nosql-translated-example"},"NoSQL translated example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Users document\n{\n    _id: "barrydoan#8032",\n    email: "tun70473@temple.edu",\n    totalScore: 10,\n    language: "Spanish",\n    quizzes: [\n        {\n            _id: "1",\n            name: "Quizz 1",\n            score: 5\n            tookOn: "2023/10/01",\n        },\n        {\n            _id: "1",\n            name: "Practice 1",\n            score: "5",\n            tookOn: "2023/10/01"\n        }\n    ],\n}\n\n# Practice document\n{\n    _id: "1",\n    name: "Practice 1",\n    language: "Spanish",\n    sentences: [\n        {\n            sentence: "Cat has four legs"\n        },\n        {\n            sentence: "Chicken has two legs"\n        }\n    ]\n}\n\n# Quiz document\n{\n    _id: "1",\n    name: "Quiz 1",\n    language: "Spanish",\n        level: 2\n    questions: [\n        {\n            question: "How many planets are there in the solar system?"\n            answers: [\n                {\n                    answer: "Eight planets",\n                    isCorrect: true\n                },\n                {\n                    answer: "Nine planets",\n                    isCorrect: false\n                },\n                {\n                    answer: "Seven planets",\n                    isCorrect: false\n                },\n                {\n                    answer: "Six planets",\n                    isCorrect: false\n                }\n            ]\n        }\n    ]\n}\n\n# fill_in_the_blank document\n{\n    "name": "Spanish Numbers Set 1",\n    "language": "Spanish",\n    "level": 1,\n    "questions": [\n                {\n                    "sentence": "Uno m\xe1s uno es ___. (dos, tres, cuatro, cinco)",\n                    "englishEquivalent": "One plus one is ___.",\n                    "correctAnswer": "dos",\n                    "englishWord": "two"\n            },\n            {\n                    "sentence": "Tres menos dos es ___. (uno, dos, tres, cuatro)",\n                    "englishEquivalent": "Three minus two is ___.",\n                    "correctAnswer": "uno",\n                    "englishWord": "one"\n            },\n            {\n                    "sentence": "Cuatro m\xe1s uno es ___. (cinco, seis, siete, ocho)",\n                    "englishEquivalent": "Four plus one is ___.",\n                    "correctAnswer": "cinco",\n                    "englishWord": "five"\n            },\n            {\n                    "sentence": "Cinco m\xe1s cuatro es ___. (nueve, diez, once, doce)",\n                    "englishEquivalent": "Five plus four is ___.",\n                    "correctAnswer": "nueve",\n                    "englishWord": "nine"\n            },\n            {\n                    "sentence": "Seis m\xe1s dos es ___. (ocho, nueve, diez, once)",\n                    "englishEquivalent": "Six plus two is ___.",\n                    "correctAnswer": "ocho",\n                    "englishWord": "eight"\n            }\n        ]\n}\n\n# FlashCard document\n{\n    "name": "Unit 2 Set 3",\n    "language": "Spanish",\n    "cards": [\n                {\n                    "front": "Which phrase means How much is the subway ticket? in Spanish?",\n                    "back": "\xbfCu\xe1nto cuesta el boleto de metro?"\n                },\n                {\n                    "front": "What is the Spanish word for beer?",\n                    "back": "Cerveza"\n                },\n                {\n                    "front": "How would you ask Where is the nearest ATM? in Spanish?",\n                    "back": "\xbfD\xf3nde puedo encontrar un cajero autom\xe1tico?"\n                },\n                {\n                    "front": "What does arroz con pollo mean in English when ordering food in Spanish?",\n                    "back": "Rice with chicken"\n                },\n                {\n                    "front": "Which phrase means Excuse me, how do I get to the museum? in Spanish?",\n                    "back": "\xbfC\xf3mo llego al museo?"\n                }\n        ],\n    "level": 2\n}\n\n\n')))}d.isMDXComponent=!0}}]);