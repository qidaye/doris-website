"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[992918],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},S=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),S=r,y=u["".concat(i,".").concat(S)]||u[S]||p[S]||l;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=S;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}S.displayName="MDXCreateElement"},508848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-COLUMN-STATS",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",title:"SHOW-COLUMN-STATS",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-COLUMN-STATS",language:"en"},sidebar:"docs",previous:{title:"SHOW-COLUMNS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLUMNS"},next:{title:"SHOW-COLLATION",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLLATION"}},i={},c=[{value:"SHOW-COLUMN-STATS",id:"show-column-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}],m={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-column-stats"},"SHOW-COLUMN-STATS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW COLUMN STATS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW COLUMN STATS")," to view various statistics data for columns."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n")),(0,r.yg)("p",null,"Where:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"cached: Show statistics information in the current FE memory cache."),(0,r.yg)("li",{parentName:"ul"},"table_name: The target table for collecting statistics. It can be in the format ",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"."),(0,r.yg)("li",{parentName:"ul"},"column_name: Specifies the target column, which must be an existing column in ",(0,r.yg)("inlineCode",{parentName:"li"},"table_name"),". You can specify multiple column names separated by commas.")),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"SHOW, TABLE, STATS"))}p.isMDXComponent=!0}}]);