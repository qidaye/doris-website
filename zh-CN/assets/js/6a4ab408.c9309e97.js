"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[838955],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,g=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},842368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-VARIABLES",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",title:"SHOW-VARIABLES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-VARIABLES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLETS-BELONG",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG"},next:{title:"SHOW-PLUGINS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-PLUGINS"}},i={},p=[{value:"SHOW-VARIABLES",id:"show-variables",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-variables"},"SHOW-VARIABLES"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW VARIABLES"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u7528\u6765\u663e\u793aDoris\u7cfb\u7edf\u53d8\u91cf\uff0c\u53ef\u4ee5\u901a\u8fc7\u6761\u4ef6\u67e5\u8be2"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [GLOBAL | SESSION] VARIABLES\n    [LIKE 'pattern' | WHERE expr]\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"show variables\u4e3b\u8981\u662f\u7528\u6765\u67e5\u770b\u7cfb\u7edf\u53d8\u91cf\u7684\u503c."),(0,r.yg)("li",{parentName:"ul"},"\u6267\u884cSHOW VARIABLES\u547d\u4ee4\u4e0d\u9700\u8981\u4efb\u4f55\u6743\u9650,\u53ea\u8981\u6c42\u80fd\u591f\u8fde\u63a5\u5230\u670d\u52a1\u5668\u5c31\u53ef\u4ee5."),(0,r.yg)("li",{parentName:"ul"},"\u4f7f\u7528like\u8bed\u53e5\u8868\u793a\u7528variable_name\u8fdb\u884c\u5339\u914d."),(0,r.yg)("li",{parentName:"ul"},"%\u767e\u5206\u53f7\u901a\u914d\u7b26\u53ef\u4ee5\u7528\u5728\u5339\u914d\u6a21\u5f0f\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u9ed8\u8ba4\u7684\u5c31\u662f\u5bf9Variable_name\u8fdb\u884c\u5339\u914d,\u8fd9\u91cc\u662f\u51c6\u786e\u5339\u914d"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like 'max_connections'; \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u767e\u5206\u53f7(%)\u8fd9\u4e2a\u901a\u914d\u7b26\u8fdb\u884c\u5339\u914d,\u53ef\u4ee5\u5339\u914d\u591a\u9879"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like '%connec%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 Where \u5b50\u53e5\u8fdb\u884c\u5339\u914d\u67e5\u8be2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables where variable_name = 'version';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, VARIABLES\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);