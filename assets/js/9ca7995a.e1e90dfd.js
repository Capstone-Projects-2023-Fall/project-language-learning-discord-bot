"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},s="Integration tests",o={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration tests",description:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-language-learning-discord-bot/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Harsh Patel",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit tests",permalink:"/project-language-learning-discord-bot/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-language-learning-discord-bot/docs/testing/acceptence-testing"}},i={},c=[{value:"Use Case Integration Tests",id:"use-case-integration-tests",level:2},{value:"Integration Test Environment",id:"integration-test-environment",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,r.kt)("p",null,"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."),(0,r.kt)("h2",{id:"use-case-integration-tests"},"Use Case Integration Tests"),(0,r.kt)("p",null,"Test Case 1: Verify that the LDB can be successfully installed and invited to a Discord server."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Test Steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Install the LDB on a Discord server."),(0,r.kt)("li",{parentName:"ol"},"Invite the LDB to a Discord server."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Expected Results:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The LDB should be successfully installed on the Discord server."),(0,r.kt)("li",{parentName:"ol"},"The LDB should be successfully invited to the Discord server.")))),(0,r.kt)("p",null,"Test Case 2: Verify that users can create an account and select a starter language."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create a new Discord account."),(0,r.kt)("li",{parentName:"ol"},"Invite the LDB to a Discord server."),(0,r.kt)("li",{parentName:"ol"},"Send the /start command to the LDB."),(0,r.kt)("li",{parentName:"ol"},"Select a starter language."))),(0,r.kt)("li",{parentName:"ul"},"Expected Results:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully create a new account for the user."),(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully set the user's starter language.")))),(0,r.kt)("p",null,"Test Case 3: Verify that users can access the full command list and view the leaderboard."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Send the /help command to the LDB."),(0,r.kt)("li",{parentName:"ol"},"Verify that the full command list is displayed."),(0,r.kt)("li",{parentName:"ol"},"Send the /leaderboard command to the LDB."),(0,r.kt)("li",{parentName:"ol"},"Verify that the leaderboard is displayed."))),(0,r.kt)("li",{parentName:"ul"},"Expected Results:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully display the full command list."),(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully display the leaderboard.")))),(0,r.kt)("p",null,"Test Case 4: Verify that users can start and complete vocabulary and pronunciation quizzes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Send the /startVocabQuiz command to the LDB."),(0,r.kt)("li",{parentName:"ol"},"Select a level and start the quiz."),(0,r.kt)("li",{parentName:"ol"},"Answer all of the questions in the quiz."),(0,r.kt)("li",{parentName:"ol"},"Verify that the quiz results are displayed."),(0,r.kt)("li",{parentName:"ol"},"Send the /startVoiceQuiz command to the LDB."),(0,r.kt)("li",{parentName:"ol"},"Join a voice channel on the server."),(0,r.kt)("li",{parentName:"ol"},"Pronounce the words as instructed by the LDB."),(0,r.kt)("li",{parentName:"ol"},"Verify that the pronunciation results are displayed."))),(0,r.kt)("li",{parentName:"ul"},"Expected Results:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully start a vocabulary or pronunciation quiz."),(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully grade the user's answers and display the quiz results.")))),(0,r.kt)("p",null,"Test Case 5: Verify that user progress is saved and retrieved accurately."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create a new Discord account."),(0,r.kt)("li",{parentName:"ol"},"Invite the LDB to a Discord server."),(0,r.kt)("li",{parentName:"ol"},"Create an account and select a starter language."),(0,r.kt)("li",{parentName:"ol"},"Complete a vocabulary or pronunciation quiz."),(0,r.kt)("li",{parentName:"ol"},"Log out of the Discord account."),(0,r.kt)("li",{parentName:"ol"},"Log back into the Discord account."),(0,r.kt)("li",{parentName:"ol"},"Send the /myScores command to the LDB."),(0,r.kt)("li",{parentName:"ol"},"Verify that the user's quiz scores are displayed correctly."))),(0,r.kt)("li",{parentName:"ul"},"Expected Results:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully save the user's progress."),(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully retrieve the user's progress from the database."),(0,r.kt)("li",{parentName:"ol"},"The user's quiz scores should be displayed correctly.")))),(0,r.kt)("p",null,"Test Case 6: Verify that the LDB can send notifications to users."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create a new Discord account."),(0,r.kt)("li",{parentName:"ol"},"Invite the LDB to a Discord server."),(0,r.kt)("li",{parentName:"ol"},"Create an account and select a starter language."),(0,r.kt)("li",{parentName:"ol"},"Enable notifications from the LDB."),(0,r.kt)("li",{parentName:"ol"},"Wait for a notification to be sent from the LDB."))),(0,r.kt)("li",{parentName:"ul"},"Expected Results:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The LDB should successfully send a notification to the user."),(0,r.kt)("li",{parentName:"ol"},"The notification should be displayed correctly in the Discord client.")))),(0,r.kt)("h2",{id:"integration-test-environment"},"Integration Test Environment"),(0,r.kt)("p",null,"The integration testing will be conducted on a dedicated Discord server. The following hardware and software requirements will be used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hardware: Devices running on the following Operating System",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"OSX"),(0,r.kt)("li",{parentName:"ol"},"Windows"),(0,r.kt)("li",{parentName:"ol"},"Linux"),(0,r.kt)("li",{parentName:"ol"},"Android"),(0,r.kt)("li",{parentName:"ol"},"Discord Server LDB Server (",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/zW5RbpbTT"},"https://discord.gg/zW5RbpbTT"),")")))))}p.isMDXComponent=!0}}]);