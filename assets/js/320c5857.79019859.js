"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[536052],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>D});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,D=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(D,i(i({ref:t},p),{},{components:n})):r.createElement(D,i({ref:t},p))}));function D(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},333559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"DROP-DATABASE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",title:"DROP-DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DROP-DATABASE",language:"en"},sidebar:"docs",previous:{title:"DROP-ENCRYPT-KEY",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY"},next:{title:"DROP-MATERIALIZED-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW"}},s={},c=[{value:"DROP-DATABASE",id:"drop-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-database"},"DROP-DATABASE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DOPR DATABASE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to delete the database (database)\ngrammar:    "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db_name [FORCE];\n")),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"During the execution of DROP DATABASE, the deleted database can be recovered through the RECOVER statement. See the ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},"RECOVER")," statement for details"),(0,a.yg)("li",{parentName:"ul"},"If you execute DROP DATABASE FORCE, the system will not check the database for unfinished transactions, the database will be deleted directly and cannot be recovered, this operation is generally not recommended")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Delete the database db_test"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE db_test;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," DROP, DATABASE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);