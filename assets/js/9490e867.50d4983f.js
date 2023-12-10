"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8772],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,s(s({ref:n},l),{},{components:t})):a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2,description:"Documentation"},s=void 0,i={unversionedId:"api-specification/Backend-API",id:"api-specification/Backend-API",title:"Backend-API",description:"Documentation",source:"@site/docs/api-specification/Backend-API.md",sourceDirName:"api-specification",slug:"/api-specification/Backend-API",permalink:"/project-language-learning-discord-bot/docs/api-specification/Backend-API",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/api-specification/Backend-API.md",tags:[],version:"current",lastUpdatedBy:"Justin Kuruvilla",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Documentation"},sidebar:"docsSidebar",previous:{title:"Classes",permalink:"/project-language-learning-discord-bot/docs/api-specification/design-api-intro"},next:{title:"Test Procedures",permalink:"/project-language-learning-discord-bot/docs/category/test-procedures"}},c={},p=[{value:"Connecting to general MongoDB Database",id:"connecting-to-general-mongodb-database",level:3},{value:"POST /users/create",id:"post-userscreate",level:3},{value:"POST /users/quizzes",id:"post-usersquizzes",level:3},{value:"POST /users/practices",id:"post-userspractices",level:3}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"connecting-to-general-mongodb-database"},"Connecting to general MongoDB Database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't be accessed"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class DatabaseConnectionException(Exception):\n    "Raised when cannot connect to database"\n    pass\n')),(0,r.kt)("h3",{id:"post-userscreate"},"POST /users/create"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Create a new user and store it in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": String,\n  "quizzes": [\n    {\n      "_id": {\n        "$oid": String\n      },\n      "name": String,\n      "score": int,\n      "tookOn": String\n    }\n  ],\n  "totalScore": int\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't find user entity"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class EntityNotFoundExcepton(Exception):\n    "Raised when cannot find object by id"\n    pass\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't update the user entity"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class DatabaseProcessingException(Exception):\n    "Raised when having error while process"\n    pass\n')),(0,r.kt)("h3",{id:"post-usersquizzes"},"POST /users/quizzes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Create a new quiz and store it in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": {\n    "$oid": String\n  },\n  "name": String,\n  "language": String,\n  "questions": [\n    {\n      "question": String,\n      "answers": [\n        {\n          "answer": String,\n          "isCorrect": String\n        },\n      ]\n    },\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't find quiz entity"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class EntityNotFoundExcepton(Exception):\n    "Raised when cannot find object by id"\n    pass\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't update the quiz entity"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class DatabaseProcessingException(Exception):\n    "Raised when having error while process"\n    pass\n')),(0,r.kt)("h3",{id:"post-userspractices"},"POST /users/practices"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Create a new practice and store it in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": {\n    "$oid": String\n  },\n  "name": String,\n  "language": String,\n  "sentences": [\n    {\n      "sentence": String\n    },\n    {\n      "sentence": String\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't find practice entity"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class EntityNotFoundExcepton(Exception):\n    "Raised when cannot find object by id"\n    pass\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception thrown when database can't update the practice entity"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'class DatabaseProcessingException(Exception):\n    "Raised when having error while process"\n    pass\n')))}u.isMDXComponent=!0}}]);