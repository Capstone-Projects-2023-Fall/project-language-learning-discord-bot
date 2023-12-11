"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=s,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),s=(a(7294),a(3905));const r={},o=void 0,i={unversionedId:"requirements/Test-Report",id:"requirements/Test-Report",title:"Test-Report",description:"Test Report for Database Test Cases",source:"@site/docs/requirements/Test-Report.md",sourceDirName:"requirements",slug:"/requirements/Test-Report",permalink:"/project-language-learning-discord-bot/docs/requirements/Test-Report",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/requirements/Test-Report.md",tags:[],version:"current",lastUpdatedBy:"Alan Saji",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Use-Case Descriptions",permalink:"/project-language-learning-discord-bot/docs/requirements/use-case-descriptions"},next:{title:"System Architecture",permalink:"/project-language-learning-discord-bot/docs/category/system-architecture"}},l={},u=[{value:"Test Report for Database Test Cases",id:"test-report-for-database-test-cases",level:2},{value:"Purpose",id:"purpose",level:3},{value:"1. <code>test_findUser_not_found</code>",id:"1-test_finduser_not_found",level:3},{value:"2. <code>test_findUser_found</code>",id:"2-test_finduser_found",level:3},{value:"3. <code>test_insertUser</code>",id:"3-test_insertuser",level:3},{value:"4. <code>test_changeLanguage</code>",id:"4-test_changelanguage",level:3},{value:"5. <code>test_getQuizzes_no_record</code>",id:"5-test_getquizzes_no_record",level:3},{value:"6. <code>test_getQuizzes_has_record</code>",id:"6-test_getquizzes_has_record",level:3},{value:"7. <code>test_getRandomQuiz_no_record</code>",id:"7-test_getrandomquiz_no_record",level:3},{value:"8. <code>test_getRandomQuiz_has_record</code>",id:"8-test_getrandomquiz_has_record",level:3},{value:"9. <code>test_getFlashcards_has_record</code>",id:"9-test_getflashcards_has_record",level:3},{value:"10. <code>test_RandomFlash_has_no_record</code>",id:"10-test_randomflash_has_no_record",level:3},{value:"11. <code>test_getUsrFlashcards_has_fake_unit</code>",id:"11-test_getusrflashcards_has_fake_unit",level:3},{value:"12. <code>test_updateUserQuiz</code>",id:"12-test_updateuserquiz",level:3},{value:"13. <code>test_updateUserQuiz_raise_exception</code>",id:"13-test_updateuserquiz_raise_exception",level:3},{value:"Known Problems",id:"known-problems",level:3},{value:"Test Report for Discord Bot Commands",id:"test-report-for-discord-bot-commands",level:2},{value:"Purpose",id:"purpose-1",level:3},{value:"1. Test: <code>test_ping</code>",id:"1-test-test_ping",level:4},{value:"2. Test: <code>test_help</code>",id:"2-test-test_help",level:4},{value:"3. Test: <code>test_changeLanguage</code>",id:"3-test-test_changelanguage",level:4},{value:"4. Test: <code>test_startVocabQuiz</code>",id:"4-test-test_startvocabquiz",level:4},{value:"5. Test: <code>test_myScores</code>",id:"5-test-test_myscores",level:4},{value:"6. <code>test_leaderboard</code>",id:"6-test_leaderboard",level:4},{value:"7. <code>test_myProgress</code>",id:"7-test_myprogress",level:4},{value:"Known Problems",id:"known-problems-1",level:3},{value:"Test Report for test_helpcommand",id:"test-report-for-test_helpcommand",level:2},{value:"Purpose",id:"purpose-2",level:3},{value:"1. <code>test_ping</code>",id:"1-test_ping",level:3},{value:"2. <code>test_echo</code>",id:"2-test_echo",level:3},{value:"Known Problems",id:"known-problems-2",level:3},{value:"Test Report for MatchResult Class",id:"test-report-for-matchresult-class",level:2},{value:"Purpose",id:"purpose-3",level:3},{value:"1. <code>test_score</code>",id:"1-test_score",level:3},{value:"2. <code>test_score_exactmatch</code>",id:"2-test_score_exactmatch",level:3},{value:"Known Problems",id:"known-problems-3",level:3},{value:"Test Report for Voice Commands Testing",id:"test-report-for-voice-commands-testing",level:2},{value:"Purpose",id:"purpose-4",level:3},{value:"1. <code>test_ping</code>",id:"1-test_ping-1",level:3},{value:"2. <code>test_startVoiceQuiz_notinvc</code>",id:"2-test_startvoicequiz_notinvc",level:3},{value:"3. <code>test_startVoiceQuiz_invc</code>",id:"3-test_startvoicequiz_invc",level:3},{value:"Known Problems",id:"known-problems-4",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"test-report-for-database-test-cases"},"Test Report for Database Test Cases"),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"This test suite validates the functionality of the database module's methods within the context of the defined test cases. It examines different scenarios and verifies the expected behavior of the database operations."),(0,s.kt)("h3",{id:"1-test_finduser_not_found"},"1. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_findUser_not_found")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Checks the behavior of the ",(0,s.kt)("inlineCode",{parentName:"li"},"findUser")," method when the user is not found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test ensures the method returns ",(0,s.kt)("inlineCode",{parentName:"li"},"None")," when the user is not present."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"2-test_finduser_found"},"2. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_findUser_found")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Validates the ",(0,s.kt)("inlineCode",{parentName:"li"},"findUser")," method when the user is found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test confirms the method returns the user object when found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"3-test_insertuser"},"3. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_insertUser")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the insertion of a new user into the database."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test verifies the successful addition of a new user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"4-test_changelanguage"},"4. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_changeLanguage")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Evaluate the functionality of changing the user's language."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test ensures the user's language is updated to the provided language."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"5-test_getquizzes_no_record"},"5. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_getQuizzes_no_record")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Examines the scenario when no quizzes are available for a specific language."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test checks if an empty list is returned when no quizzes are found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"6-test_getquizzes_has_record"},"6. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_getQuizzes_has_record")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Checks the retrieval of quizzes when at least one exists for a language."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test confirms the retrieval of quizzes when available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"7-test_getrandomquiz_no_record"},"7. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_getRandomQuiz_no_record")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the case when no quizzes are available for a specific language."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test ensures that ",(0,s.kt)("inlineCode",{parentName:"li"},"None")," is returned when no quizzes are found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"8-test_getrandomquiz_has_record"},"8. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_getRandomQuiz_has_record")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Examines the retrieval of a random quiz for a language when available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test verifies the successful retrieval of a quiz."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"9-test_getflashcards_has_record"},"9. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_getFlashcards_has_record")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Checks retrieval of flashcards when at least one record exists."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test confirms retrieval when quizzes are found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"10-test_randomflash_has_no_record"},"10. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_RandomFlash_has_no_record")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Checks retrieval of random flashcards with no records."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test ensures that ",(0,s.kt)("inlineCode",{parentName:"li"},"None")," is returned when no cards are found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"11-test_getusrflashcards_has_fake_unit"},"11. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_getUsrFlashcards_has_fake_unit")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Checks retrieval of user-specified flashcards with no records."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test ensures that ",(0,s.kt)("inlineCode",{parentName:"li"},"None")," is returned when no cards are found."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"12-test_updateuserquiz"},"12. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_updateUserQuiz")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Validates the updating of user quiz information."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test checks if the user's quiz information is updated successfully."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"13-test_updateuserquiz_raise_exception"},"13. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_updateUserQuiz_raise_exception")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Examines the scenario when updating user quiz information raises an exception."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," The test verifies the correct handling of expected exceptions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully with exception handling.")),(0,s.kt)("h3",{id:"known-problems"},"Known Problems"),(0,s.kt)("p",null,"No known problems or failed tests were observed during the test execution."),(0,s.kt)("h2",{id:"test-report-for-discord-bot-commands"},"Test Report for Discord Bot Commands"),(0,s.kt)("h3",{id:"purpose-1"},"Purpose"),(0,s.kt)("p",null,"This test suite aims to validate the functionality of various commands implemented within the Discord bot."),(0,s.kt)("h4",{id:"1-test-test_ping"},"1. Test: ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_ping")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Test the functionality of the ",(0,s.kt)("inlineCode",{parentName:"li"},"ping")," command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:"),' Verifies if the command sends "Pong!" upon invocation.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Successful execution.")),(0,s.kt)("h4",{id:"2-test-test_help"},"2. Test: ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_help")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Evaluate the behavior of the ",(0,s.kt)("inlineCode",{parentName:"li"},"help")," command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," Checks if the command generates an embedded response."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Successful execution with the expected embed title and description.")),(0,s.kt)("h4",{id:"3-test-test_changelanguage"},"3. Test: ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_changeLanguage")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Validates the ",(0,s.kt)("inlineCode",{parentName:"li"},"changeLanguage")," command functionality."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," Examines if the command sets the language to the provided input."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Successful execution with the title and description indicating language change.")),(0,s.kt)("h4",{id:"4-test-test_startvocabquiz"},"4. Test: ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_startVocabQuiz")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the behavior of the ",(0,s.kt)("inlineCode",{parentName:"li"},"startVocabQuiz")," command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," Verifies if the command initiates a Vocabulary Quiz with relevant details."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Successful execution with the expected quiz details.")),(0,s.kt)("h4",{id:"5-test-test_myscores"},"5. Test: ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_myScores")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Assesses the functionality of the ",(0,s.kt)("inlineCode",{parentName:"li"},"myScores")," command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:")," Checks if the command generates user score-related data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Successful execution with user-specific score information.")),(0,s.kt)("h4",{id:"6-test_leaderboard"},"6. ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_leaderboard")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the 'Leaderboard' command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:")," Expect a response in the form of an embed displaying the leaderboard."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Validates the title and description of the embedded message.")),(0,s.kt)("h4",{id:"7-test_myprogress"},"7. ",(0,s.kt)("inlineCode",{parentName:"h4"},"test_myProgress")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the 'Myprogress' command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:")," Expect a response in the form of an embed displaying the user's progress."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Validates the title and description of the embedded message.")),(0,s.kt)("h3",{id:"known-problems-1"},"Known Problems"),(0,s.kt)("p",null,"No known problems or failed tests were observed during the test execution."),(0,s.kt)("h2",{id:"test-report-for-test_helpcommand"},"Test Report for test_helpcommand"),(0,s.kt)("h3",{id:"purpose-2"},"Purpose"),(0,s.kt)("p",null,"This test suite aims to validate the functionality of miscellaneous commands within a Discord bot. It verifies the behavior of commands like ",(0,s.kt)("inlineCode",{parentName:"p"},"ping")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"echo"),"."),(0,s.kt)("h3",{id:"1-test_ping"},"1. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_ping")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Checks the functionality of the 'ping' command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:"),' Verifies if the bot sends an embedded message with the title "Help Command Mock Data" upon receiving the ',(0,s.kt)("inlineCode",{parentName:"li"},"!ping")," command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"2-test_echo"},"2. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_echo")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Validates the 'echo' command functionality."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Outcome:"),' Tests if the bot responds with "Hello" after receiving the ',(0,s.kt)("inlineCode",{parentName:"li"},"!echo Hello world")," command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Test passed successfully.")),(0,s.kt)("h3",{id:"known-problems-2"},"Known Problems"),(0,s.kt)("p",null,"During the test execution, no known problems or failed tests were observed."),(0,s.kt)("h2",{id:"test-report-for-matchresult-class"},"Test Report for MatchResult Class"),(0,s.kt)("h3",{id:"purpose-3"},"Purpose"),(0,s.kt)("p",null,"The test suite aims to validate the functionality of the ",(0,s.kt)("inlineCode",{parentName:"p"},"MatchResult")," class for sentence matching."),(0,s.kt)("h3",{id:"1-test_score"},"1. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_score")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Evaluate the sentence matching score."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:"),' Compares the similarity between the expected sentence "how are you" and the actual sentence "how is it going."'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," The calculated score based on the matching similarity is printed.")),(0,s.kt)("h3",{id:"2-test_score_exactmatch"},"2. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_score_exactmatch")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Verifies the sentence matching score for an exact match."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:"),' Compares the similarity between the expected sentence "today is hot" and the actual sentence "today is hot."'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," The calculated score for the exact matching sentences is printed.")),(0,s.kt)("h3",{id:"known-problems-3"},"Known Problems"),(0,s.kt)("p",null,"During the test execution, no known problems or failed tests were observed."),(0,s.kt)("h2",{id:"test-report-for-voice-commands-testing"},"Test Report for Voice Commands Testing"),(0,s.kt)("h3",{id:"purpose-4"},"Purpose"),(0,s.kt)("p",null,"This test suite aims to validate the functionality of the voice-related commands within the ",(0,s.kt)("inlineCode",{parentName:"p"},"Voice")," cog."),(0,s.kt)("h3",{id:"1-test_ping-1"},"1. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_ping")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the 'ping' command."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:"),' Sends a message "!ping" and expects a response containing "Pong!".'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:"),' Verifies if the received message contains "Pong!".')),(0,s.kt)("h3",{id:"2-test_startvoicequiz_notinvc"},"2. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_startVoiceQuiz_notinvc")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the 'startVoiceQuiz' command when the user is not in a voice channel."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:"),' Expect a message stating "You need to be in a voice channel to use this command."'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Asserts that no voice clients exist and checks for the expected response message.")),(0,s.kt)("h3",{id:"3-test_startvoicequiz_invc"},"3. ",(0,s.kt)("inlineCode",{parentName:"h3"},"test_startVoiceQuiz_invc")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Purpose:")," Tests the 'startVoiceQuiz' command when the user is in a voice channel."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Expected Outcome:")," Executes the command and checks if a voice client exists after execution."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Result:")," Asserts the presence of voice clients after executing the command.")),(0,s.kt)("h3",{id:"known-problems-4"},"Known Problems"),(0,s.kt)("p",null,"During the test execution, no known problems or failed tests were observed."))}d.isMDXComponent=!0}}]);