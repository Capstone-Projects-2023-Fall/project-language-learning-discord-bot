"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,g=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},l="Unit tests",s={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit tests",description:"Class: TestDatabase",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-language-learning-discord-bot/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Michael Ewing",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-language-learning-discord-bot/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-language-learning-discord-bot/docs/testing/integration-testing"}},o={},u=[{value:"Class: TestDatabase",id:"class-testdatabase",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,a.kt)("h2",{id:"class-testdatabase"},"Class: TestDatabase"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_findUser_not_found")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"findUser")," returns ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," for a non-existent user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'notfound' (non-existent user)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_findUser_found")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"findUser")," retrieves existing user data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'user1' (existing user)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," User data with ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," equal to 'user1'.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_insertUser")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"insertUser")," successfully inserts new user data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," User data with ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," 'user2'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," User data retrievable with ",(0,a.kt)("inlineCode",{parentName:"li"},"findUser"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," equal to 'user2'.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_changeLanguage")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"changeUserLanguage")," updates user's language preference."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'user1', 'Spanish'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," User data shows updated language 'Spanish'.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_getQuizzes_no_record")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"getQuizzes")," returns empty when no quizzes in specified language."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'a_language' (no quizzes)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," Empty list.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_getQuizzes_has_record")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"getQuizzes")," retrieves quizzes in specified language."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'Spanish' (language with quizzes)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," List with quizzes.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_getRandomQuiz_no_record")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"getRandomQuiz")," returns ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," when no quiz in language."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'a_language' (no quizzes)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_getRandomQuiz_has_record")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"getRandomQuiz")," retrieves quiz in specified language."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'Spanish' (language with quizzes)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," Non-",(0,a.kt)("inlineCode",{parentName:"li"},"None")," quiz object.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method: test_updateUserQuiz")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose:")," Verify ",(0,a.kt)("inlineCode",{parentName:"li"},"updateUserQuiz")," updates user's quiz records."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input:")," 'user1', quiz data with score 20."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expected Result:")," User's ",(0,a.kt)("inlineCode",{parentName:"li"},"totalScore")," updated to 20.")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);