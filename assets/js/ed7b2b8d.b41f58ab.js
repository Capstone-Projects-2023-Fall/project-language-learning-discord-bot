"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o=void 0,c={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"design",description:"Purpose",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-language-learning-discord-bot/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Kevin Nguyen",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-language-learning-discord-bot/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-language-learning-discord-bot/docs/category/api-specification"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Purpose")),(0,a.kt)("p",null,"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements")),(0,a.kt)("p",null,"In addition to the general requirements the Design Document - Part I Architecture will contain:"),(0,a.kt)("p",null,"A description the different components and their interfaces. For example: client, server, database."),(0,a.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,a.kt)("p",null,"Sequence diagrams showing the data flow for ",(0,a.kt)("em",{parentName:"p"},"all")," use cases.\xa0One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams."),(0,a.kt)("p",null,"Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc."),(0,a.kt)("p",null,"If there is a database:"),(0,a.kt)("p",null,"Entity-relation diagram."),(0,a.kt)("p",null,"Table design."),(0,a.kt)("p",null,"A check list for architecture design is attached here ",(0,a.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf"},"architecture","_","design","_","checklist.pdf"),"\xa0 and should be used as a guidance."))}u.isMDXComponent=!0}}]);