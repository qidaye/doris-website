"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[581378],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,d=p["".concat(i,".").concat(y)]||p[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},314429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"CREATE-ROLE",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",title:"CREATE-ROLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-ROLE",language:"zh-CN"},sidebar:"docs",previous:{title:"LDAP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/LDAP"},next:{title:"DROP-ROLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"}},i={},s=[{value:"CREATE ROLE",id:"create-role",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-role"},"CREATE ROLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE ROLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u6237\u521b\u5efa\u4e00\u4e2a\u89d2\u8272"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," CREATE ROLE rol_name;\n")),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u65e0\u6743\u9650\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u540e\u7eed\u901a\u8fc7 GRANT \u547d\u4ee4\u8d4b\u4e88\u8be5\u89d2\u8272\u6743\u9650\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u89d2\u8272"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE role1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE, ROLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);