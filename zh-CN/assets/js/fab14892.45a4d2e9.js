"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[824194],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>N});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,N=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(N,i(i({ref:t},p),{},{components:n})):r.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},201220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"ADMIN-SHOW-CONFIG",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG",title:"ADMIN-SHOW-CONFIG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ADMIN-SHOW-CONFIG",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-USER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"},next:{title:"ADMIN-SET-CONFIG",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG"}},s={},c=[{value:"ADMIN-SHOW-CONFIG",id:"admin-show-config",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-show-config"},"ADMIN-SHOW-CONFIG"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN SHOW CONFIG"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\uff08\u5f53\u524d\u4ec5\u652f\u6301\u5c55\u793a FE \u7684\u914d\u7f6e\u9879\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ADMIN SHOW FRONTEND CONFIG [LIKE "pattern"];\n')),(0,a.yg)("p",null,"\u7ed3\u679c\u4e2d\u7684\u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Key\uff1a        \u914d\u7f6e\u9879\u540d\u79f0"),(0,a.yg)("li",{parentName:"ol"},"Value\uff1a      \u914d\u7f6e\u9879\u503c"),(0,a.yg)("li",{parentName:"ol"},"Type\uff1a       \u914d\u7f6e\u9879\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ol"},"IsMutable\uff1a  \u662f\u5426\u53ef\u4ee5\u901a\u8fc7 ADMIN SET CONFIG \u547d\u4ee4\u8bbe\u7f6e"),(0,a.yg)("li",{parentName:"ol"},"MasterOnly\uff1a \u662f\u5426\u4ec5\u9002\u7528\u4e8e Master FE"),(0,a.yg)("li",{parentName:"ol"},"Comment\uff1a    \u914d\u7f6e\u9879\u8bf4\u660e")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524dFE\u8282\u70b9\u7684\u914d\u7f6e"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN SHOW FRONTEND CONFIG;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528like\u8c13\u8bcd\u641c\u7d22\u5f53\u524dFe\u8282\u70b9\u7684\u914d\u7f6e"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+-----------+------------+---------+\n| Key                | Value | Type    | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+-----------+------------+---------+\n| check_java_version | true  | boolean | false     | false      |         |\n+--------------------+-------+---------+-----------+------------+---------+\n1 row in set (0.01 sec)\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN, SHOW, CONFIG, ADMIN SHOW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);