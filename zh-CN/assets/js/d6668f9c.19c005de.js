"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[315107],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>I});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,I=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(I,i(i({ref:t},c),{},{components:n})):a.createElement(I,i({ref:t},c))}));function I(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},664070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-REPLICA-DISTRIBUTION",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",id:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",title:"SHOW-REPLICA-DISTRIBUTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-REPLICA-DISTRIBUTION",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-TABLE-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS"},next:{title:"SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS"}},o={},p=[{value:"SHOW-REPLICA-DISTRIBUTION",id:"show-replica-distribution",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-replica-distribution"},"SHOW-REPLICA-DISTRIBUTION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW REPLICA DISTRIBUTION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u8868\u6216\u5206\u533a\u526f\u672c\u5206\u5e03\u72b6\u6001"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u7ed3\u679c\u4e2d\u7684 Graph \u5217\u4ee5\u56fe\u5f62\u7684\u5f62\u5f0f\u5c55\u793a\u526f\u672c\u5206\u5e03\u6bd4\u4f8b")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u7684\u526f\u672c\u5206\u5e03"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM tbl1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u7684\u5206\u533a\u7684\u526f\u672c\u5206\u5e03"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, REPLICA, DISTRIBUTION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);