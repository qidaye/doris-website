"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[429520],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>I});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,I=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(I,l(l({ref:t},c),{},{components:n})):a.createElement(I,l({ref:t},c))}));function I(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},402664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const i={title:"SHOW-REPLICA-DISTRIBUTION",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",id:"version-2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",title:"SHOW-REPLICA-DISTRIBUTION",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-REPLICA-DISTRIBUTION",language:"en"},sidebar:"docs",previous:{title:"ADMIN-SET-TABLE-STATUS",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS"},next:{title:"SHOW-REPLICA-STATUS",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS"}},o={},p=[{value:"SHOW-REPLICA-DISTRIBUTION",id:"show-replica-distribution",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-replica-distribution"},"SHOW-REPLICA-DISTRIBUTION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW REPLICA DISTRIBUTION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display the distribution status of a table or partition replica"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)];\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The Graph column in the result shows the replica distribution ratio in the form of a graph")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the replica distribution of the table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM tbl1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the replica distribution of the partitions of the table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SHOW, REPLICA, DISTRIBUTION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);