"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:6},s="Database Diagrams",o={unversionedId:"system-architecture/database-diagrams",id:"system-architecture/database-diagrams",title:"Database Diagrams",description:"Entity-Relation Diagram",source:"@site/docs/system-architecture/database-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/database-diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/database-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/system-architecture/database-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Kevin Nguyen",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Component Descriptions",permalink:"/project-language-learning-discord-bot/docs/system-architecture/component-descriptions"},next:{title:"Class Diagram",permalink:"/project-language-learning-discord-bot/docs/system-architecture/class-diagrams"}},c={},l=[{value:"Entity-Relation Diagram",id:"entity-relation-diagram",level:2},{value:"NoSQL translated example",id:"nosql-translated-example",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"database-diagrams"},"Database Diagrams"),(0,a.kt)("h2",{id:"entity-relation-diagram"},"Entity-Relation Diagram"),(0,a.kt)("mermaid",{value:'erDiagram\nUsers {\n  String username PK\n  String language_id FK\n  String email\n  Int totalScore\n  Int level\n}\n\nLanguages {\n  String id PK\n  String name\n}\n\nUserQuiz {\n  Int id PK\n  String username FK\n  Int quiz_id FK\n  Date took_on\n  Int score\n\n}\n\nQuizzes {\n  Int id PK\n  String name\n  Int score\n}\n\nQuestions {\n  Int id PK\n  String language_id FK\n  Int quizz_id FK\n  String question\n}\n\nAnswers {\n  Int id PK\n  Int question_id FK\n  String answer\n  Boolean isCorrect\n}\n\nPractices {\n  Int id PK\n  String name\n  Int Score\n}\n\nUserPractice {\n  Int id PK\n  String username FK\n  Int practice_id FK\n  Date took_on\n  Int score\n}\n\nSentences {\n  Int id PK\n  Int practice_id FK\n  String sentences\n}\n\nQuestions ||--|{ Answers : ""\nQuizzes ||--|{ Questions : ""\nUsers ||--|{ UserQuiz : ""\nQuizzes ||--|{ UserQuiz : ""\nUsers }|--|| Languages : ""\nQuizzes }|--|| Languages : ""\n\nUsers ||--|{ UserPractice : ""\nPractices ||--|{ UserPractice : ""\nPractices ||--|{ Sentences : ""\nPractices }|--|| Languages : ""\n\n\n'}),(0,a.kt)("h2",{id:"nosql-translated-example"},"NoSQL translated example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Users document\n{\n    _id: "barrydoan#8032",\n    email: "tun70473@temple.edu",\n    totalScore: 10,\n    level: 1,\n    language: "Spanish",\n    quizzes: [\n        {\n            _id: "1",\n            name: "Quizz 1",\n            score: 5\n            tookOn: "2023/10/01",\n        }\n    ],\n    practices: [\n        {\n            _id: "1",\n            name: "Practice 1",\n            score: "5",\n            tookOn: "2023/10/01"\n        }\n    ]\n}\n\n# Practice document\n{\n    _id: "1",\n    name: "Practice 1",\n    language: "Spanish",\n    sentences: [\n        {\n            sentence: "Cat has four legs"\n        },\n        {\n            sentence: "Chicken has two legs"\n        }\n    ]\n}\n\n# Quizz document\n{\n    _id: "1",\n    name: "Quizz 1",\n    language: "Spanish",\n    questions: [\n        {\n            question: "How many planets are there in the solar system?"\n            answers: [\n                {\n                    answer: "Eight planets",\n                    isCorrect: true\n                },\n                {\n                    answer: "Nine planets",\n                    isCorrect: false\n                },\n                {\n                    answer: "Seven planets",\n                    isCorrect: false\n                },\n                {\n                    answer: "Six planets",\n                    isCorrect: false\n                }\n            ]\n        }\n    ]\n}\n\n')))}d.isMDXComponent=!0}}]);