"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[987919],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),y=r,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},550090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"USE",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/USE",id:"sql-manual/sql-statements/Utility-Statements/USE",title:"USE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Utility-Statements/USE.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/USE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Utility-Statements/USE",draft:!1,tags:[],version:"current",frontMatter:{title:"USE",language:"zh-CN"},sidebar:"docs",previous:{title:"HELP",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Utility-Statements/HELP"},next:{title:"DESCRIBE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Utility-Statements/DESCRIBE"}},o={},c=[{value:"USE",id:"use",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"use"},"USE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"USE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"USE \u547d\u4ee4\u53ef\u4ee5\u8ba9\u6211\u4eec\u6765\u4f7f\u7528\u6570\u636e\u5e93"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"USE <[CATALOG_NAME].DATABASE_NAME>\n")),(0,r.yg)("p",null,"\u8bf4\u660e:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"USE CATALOG_NAME.DATABASE_NAME"),", \u4f1a\u5148\u5c06\u5f53\u524d\u7684Catalog\u5207\u6362\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"CATALOG_NAME"),", \u7136\u540e\u518d\u8bb2\u5f53\u524d\u7684Database\u5207\u6362\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"DATABASE_NAME"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5b58\u5728\uff0c\u5c1d\u8bd5\u4f7f\u7528\u5b83\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use demo;\nDatabase changed\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5728hms_catalog\u7684Catalog\u4e0b\u5b58\u5728\uff0c\u5c1d\u8bd5\u5207\u6362\u5230hms_catalog, \u5e76\u4f7f\u7528\u5b83\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use hms_catalog.demo;\nDatabase changed\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"USE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);