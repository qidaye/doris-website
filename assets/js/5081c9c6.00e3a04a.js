"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[263798],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>D});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,D=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(D,i(i({ref:t},p),{},{components:n})):a.createElement(D,i({ref:t},p))}));function D(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},271489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"DROP-DATABASE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",id:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",title:"DROP-DATABASE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",draft:!1,tags:[],version:"current",frontMatter:{title:"DROP-DATABASE",language:"en"},sidebar:"docs",previous:{title:"DROP-CATALOG",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-CATALOG"},next:{title:"DROP-TABLE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE"}},o={},c=[{value:"DROP-DATABASE",id:"drop-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"drop-database"},"DROP-DATABASE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"DOPR DATABASE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to delete the database (database)\ngrammar:    "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db_name [FORCE];\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"During the execution of DROP DATABASE, the deleted database can be recovered through the RECOVER statement. See the ",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/RECOVER"},"RECOVER")," statement for details"),(0,r.yg)("li",{parentName:"ul"},"If you execute DROP DATABASE FORCE, the system will not check the database for unfinished transactions, the database will be deleted directly and cannot be recovered, this operation is generally not recommended")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Delete the database db_test"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE db_test;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," DROP, DATABASE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);