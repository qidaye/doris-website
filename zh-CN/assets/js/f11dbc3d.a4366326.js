"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[812039],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},576963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const i={title:"KILL",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/KILL",id:"version-1.2/sql-manual/sql-reference/Database-Administration-Statements/KILL",title:"KILL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/KILL.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/KILL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/KILL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"KILL",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SHOW-CONFIG",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG"},next:{title:"ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"}},o={},c=[{value:"KILL",id:"kill",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"kill"},"KILL"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"KILL"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u6bcf\u4e2a Doris \u7684\u8fde\u63a5\u90fd\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 KILL processlist_id \u8bed\u53e5\u7ec8\u6b62\u7ebf\u7a0b\u3002"),(0,a.yg)("p",null,"\u7ebf\u7a0b\u8fdb\u7a0b\u5217\u8868\u6807\u8bc6\u7b26\u53ef\u4ee5\u4ece INFORMATION_SCHEMA PROCESSLIST \u8868\u7684 ID \u5217\u3001SHOW PROCESSLIST \u8f93\u51fa\u7684 Id \u5217\u548c\u6027\u80fd\u6a21\u5f0f\u7ebf\u7a0b\u8868\u7684 PROCESSLIST_ID \u5217\u786e\u5b9a\u3002 "),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"KILL [CONNECTION | QUERY] processlist_id\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"KILL\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);