"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"Block Diagram",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-language-learning-discord-bot/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Alan Saji",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-language-learning-discord-bot/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-language-learning-discord-bot/docs/requirements/general-requirements"}},c={},l=[{value:"Key Interactions:",id:"key-interactions",level:2},{value:"Users",id:"users",level:3},{value:"Discord",id:"discord",level:3},{value:"Python Script",id:"python-script",level:3},{value:"Database",id:"database",level:3}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/assets/89528532/98a4116f-e66e-472f-becd-78146593cc8c",alt:"Block Diagram"})),(0,a.kt)("h2",{id:"key-interactions"},"Key Interactions:"),(0,a.kt)("h3",{id:"users"},"Users"),(0,a.kt)("p",null,"Users will interact with Language Learning bot by sending or clicking commands within the Discord UI."),(0,a.kt)("h3",{id:"discord"},"Discord"),(0,a.kt)("p",null,"THe Discord Client will pass a user's commands or requests to the python script where it will be processed depending on the appropriate function."),(0,a.kt)("h3",{id:"python-script"},"Python Script"),(0,a.kt)("p",null,"The script determines which commands/messages were issued and routes them to the respective functionality, sending the response back to the bot.\nThe python script will retreive relevant user data from the database."),(0,a.kt)("h3",{id:"database"},"Database"),(0,a.kt)("p",null,"User data will be managed by the MongoDB database,"))}p.isMDXComponent=!0}}]);