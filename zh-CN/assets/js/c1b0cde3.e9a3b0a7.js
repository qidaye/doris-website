"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[629256],{15680:(e,t,a)=>{a.d(t,{xA:()=>E,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},E=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,E=i(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(g,s(s({ref:t},E),{},{components:a})):n.createElement(g,s({ref:t},E))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},884287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(58168),r=(a(296540),a(15680));const l={title:"CREATE-TABLE-LIKE",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",title:"CREATE-TABLE-LIKE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-TABLE-LIKE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-AND-GENERATED-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AND-GENERATED-COLUMN"},next:{title:"CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"}},p={},o=[{value:"CREATE-TABLE-LIKE",id:"create-table-like",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],E={toc:o},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-table-like"},"CREATE-TABLE-LIKE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE TABLE LIKE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8868\u7ed3\u6784\u548c\u53e6\u4e00\u5f20\u8868\u5b8c\u5168\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u540c\u65f6\u4e5f\u80fd\u591f\u53ef\u9009\u590d\u5236\u4e00\u4e9brollup\u3002 "),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r1,r2,r3,...)]\n")),(0,r.yg)("p",null,"\u8bf4\u660e: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u590d\u5236\u7684\u8868\u7ed3\u6784\u5305\u62ecColumn Definition\u3001Partitions\u3001Table Properties\u7b49 "),(0,r.yg)("li",{parentName:"ul"},"\u7528\u6237\u9700\u8981\u5bf9\u590d\u5236\u7684\u539f\u8868\u6709",(0,r.yg)("inlineCode",{parentName:"li"},"SELECT"),"\u6743\u9650 "),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u590d\u5236MySQL\u7b49\u5916\u8868 "),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u590d\u5236OLAP Table\u7684rollup")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test2.table2 LIKE test1.table1\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684r1\uff0cr2\u4e24\u4e2arollup"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684\u6240\u6709rollup"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684r1\uff0cr2\u4e24\u4e2arollup"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684\u6240\u6709rollup"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548cMySQL\u5916\u8868table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, TABLE, LIKE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);