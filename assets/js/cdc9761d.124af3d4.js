"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[498214],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,g=p["".concat(s,".").concat(y)]||p[y]||u[y]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},773351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-CONFIG",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-CONFIG",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/SHOW-CONFIG",title:"SHOW-CONFIG",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/SHOW-CONFIG.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/SHOW-CONFIG",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/SHOW-CONFIG",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-CONFIG",language:"en"},sidebar:"docs",previous:{title:"DROP-USER",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/DROP-USER"},next:{title:"ADMIN-SET-CONFIG",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-CONFIG"}},s={},c=[{value:"SHOW-CONFIG",id:"show-config",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-config"},"SHOW-CONFIG"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW CONFIG"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display the configuration of the current cluster (currently only the configuration items of FE are supported)"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW FRONTEND CONFIG [LIKE "pattern"];\n')),(0,r.yg)("p",null,"The columns in the results have the following meanings:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Key: Configuration item name"),(0,r.yg)("li",{parentName:"ol"},"Value: Configuration item value"),(0,r.yg)("li",{parentName:"ol"},"Type: Configuration item type"),(0,r.yg)("li",{parentName:"ol"},"IsMutable: Whether it can be set by ADMIN SET CONFIG command"),(0,r.yg)("li",{parentName:"ol"},"MasterOnly: Is it only applicable to Master FE"),(0,r.yg)("li",{parentName:"ol"},"Comment: Configuration item description")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the configuration of the current FE node"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FRONTEND CONFIG;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the like predicate to search the configuration of the current Fe node"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"mysql> SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+---------- -+------------+---------+\n| Key | Value | Type | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+---------- -+------------+---------+\n| check_java_version | true | boolean | false | false | |\n+--------------------+-------+---------+---------- -+------------+---------+\n1 row in set (0.01 sec)\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, CONFIG\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);