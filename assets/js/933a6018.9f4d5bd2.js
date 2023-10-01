"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},s="Class Diagram",o={unversionedId:"system-architecture/class-diagrams",id:"system-architecture/class-diagrams",title:"Class Diagram",description:"ClassDiagram drawio",source:"@site/docs/system-architecture/class-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/class-diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/class-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/system-architecture/class-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Barry Doan",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Database Diagrams",permalink:"/project-language-learning-discord-bot/docs/system-architecture/database-diagrams"},next:{title:"API Specification",permalink:"/project-language-learning-discord-bot/docs/category/api-specification"}},l={},c=[{value:"Figure 1.1 UML Class Diagram",id:"figure-11-uml-class-diagram",level:5},{value:"Explanation",id:"explanation",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-diagram"},"Class Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/assets/74037708/97869cb6-9bb1-4085-a8b3-ad8cdddefbc9",alt:"ClassDiagram drawio"})),(0,n.kt)("h5",{id:"figure-11-uml-class-diagram"},"Figure 1.1 UML Class Diagram"),(0,n.kt)("h2",{id:"explanation"},"Explanation"),(0,n.kt)("h1",{id:"1-mainpy"},"1. '",(0,n.kt)("strong",{parentName:"h1"},"main.py"),"'"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attributes: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bot"),": An instance of the Discord bot."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"database"),": An instance of the Database class."))),(0,n.kt)("li",{parentName:"ul"},"Methods:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"on_ready()"),": An event handler called when the Discord bot is ready. It prints a message to the console and sends a message to a specific channel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"setup_hook()"),": A method that loads external commands (cogs) from the 'cogs' directory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"main()"),": The main entry point for the bot, where it sets up the bot, loads cogs, and starts the bot using asyncio.")))),(0,n.kt)("h1",{id:"2-databasepy"},"2. '",(0,n.kt)("strong",{parentName:"h1"},"database.py"),"'"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attributes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"client"),": An instance of MongoClient."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"isOk"),": A boolean flag to indicate the database connection status."))),(0,n.kt)("li",{parentName:"ul"},"Methods:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("strong",{parentName:"strong"},"init"),"()"),": Initializes the Database object and establishes a connection to the MongoDB database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"findUser(username)"),": Finds a user in the database based on the username."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"insertUser(user)"),": Inserts a user into the database.")))),(0,n.kt)("h1",{id:"3-helpcommandpy"},"3. '",(0,n.kt)("strong",{parentName:"h1"},"HelpCommand.py"),"'"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Methods:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("strong",{parentName:"strong"},"init"),"(bot)"),": Initializes the cog with a reference to the bot."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"on_ready()"),": An event handler called when the cog is ready."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"help(ctx)"),": A command that displays help information as an embedded message in Discord."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"setup(bot)"),": Internal method for setting up the cog.")))))}m.isMDXComponent=!0}}]);