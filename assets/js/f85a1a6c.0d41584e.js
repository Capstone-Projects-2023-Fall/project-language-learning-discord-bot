"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||g[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Unit Tests",p={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit Tests",description:"Database Component",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-language-learning-discord-bot/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-language-learning-discord-bot/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-language-learning-discord-bot/docs/testing/integration-testing"}},o={},s=[{value:"Database Component",id:"database-component",level:2},{value:"Bot Component",id:"bot-component",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("h2",{id:"database-component"},"Database Component"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_findUser_not_found")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"findUser")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," for a non-existent user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'notfound' (String - non-existent user ID)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," (No user object).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_findUser_found")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"findUser")," retrieves existing user data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'user1' (String - existing user ID)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," User data with ",(0,r.kt)("inlineCode",{parentName:"li"},"_id")," equal to 'user1'."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Dictionary (user data).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_insertUser")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"insertUser")," successfully inserts new user data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," User data with ",(0,r.kt)("inlineCode",{parentName:"li"},"_id")," 'user2' (Dictionary - new user data)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," Dictionary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," User data retrievable with ",(0,r.kt)("inlineCode",{parentName:"li"},"findUser"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"_id")," equal to 'user2'."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Boolean or Dictionary (confirmation of insertion or inserted user data).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_changeLanguage")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"changeUserLanguage")," updates user's language preference."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'user1', 'Spanish' (String - user ID and new language)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String, String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," User data shows updated language 'Spanish'."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Dictionary (updated user data).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_getQuizzes_no_record")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"getQuizzes")," returns empty when no quizzes in the specified language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'a_language' (String - no quizzes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," Empty list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Array (empty array indicating no quizzes).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_getQuizzes_has_record")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"getQuizzes")," retrieves quizzes in the specified language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'Spanish' (String - language with quizzes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," List with quizzes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Array of JSON Objects (quiz data with properties ",(0,r.kt)("inlineCode",{parentName:"li"},"questions"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"answers"),", etc.).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_getRandomQuiz_no_record")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"getRandomQuiz")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," when no quiz in language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'a_language' (String - no quizzes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," (No quiz object).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_getRandomQuiz_has_record")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"getRandomQuiz")," retrieves a quiz in the specified language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'Spanish' (String - language with quizzes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," Non-",(0,r.kt)("inlineCode",{parentName:"li"},"None")," quiz object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," JSON Object (quiz data with properties ",(0,r.kt)("inlineCode",{parentName:"li"},"questions"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"answers"),", etc.).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_updateUserQuiz")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"updateUserQuiz")," updates user's quiz records."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:")," 'user1', quiz data with score 20 (String - user ID and Dictionary - quiz data with score)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String, Dictionary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:")," User's ",(0,r.kt)("inlineCode",{parentName:"li"},"totalScore")," updated to 20."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Dictionary (updated user data with new ",(0,r.kt)("inlineCode",{parentName:"li"},"totalScore"),").")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bot-component"},"Bot Component"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_help")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify that the ",(0,r.kt)("inlineCode",{parentName:"li"},"!help")," command generates the expected help message embed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:"),' Sending the message "!help" to the bot (String - help command message).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:"),' An embed with title "Help command for Language Bot" and description "All commands for the bot."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Embed object (help message embed).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_changeLanguage")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify that the ",(0,r.kt)("inlineCode",{parentName:"li"},"!changeLanguage")," command correctly changes the language and produces the expected response embed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:"),' Sending the message "!changeLanguage Spanish" to the bot (String - change language command message).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:"),' An embed with title "Language changed" and description "Language set to Spanish."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Embed object (confirmation message embed).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_startVocabQuiz")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify that the ",(0,r.kt)("inlineCode",{parentName:"li"},"!startVocabQuiz")," command initiates a vocabulary quiz with the correct title and description."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:"),' Sending the message "!startVocabQuiz" to the bot (String - start vocab quiz command message).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:"),' An embed with title "Vocabulary Quiz - Spanish" and description "Get ready to test your vocabulary!"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Embed object (quiz initiation message embed).")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method: test_myScores")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose:")," Verify that the ",(0,r.kt)("inlineCode",{parentName:"li"},"!myScores")," command retrieves and displays the user's score correctly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:"),' Sending the message "!myScores" to the bot (String - my scores command message).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Result:"),' An embed with title "User score" and description "Your all score."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Output Type:")," Embed object (user score message embed).")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);