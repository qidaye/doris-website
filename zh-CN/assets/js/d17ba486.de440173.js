"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[124060],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(58168),o=(n(296540),n(15680));const i={title:"SEC_TO_TIME",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/sec-to-time",id:"sql-manual/sql-functions/date-time-functions/sec-to-time",title:"SEC_TO_TIME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/sec-to-time.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/sec-to-time",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/sec-to-time",draft:!1,tags:[],version:"current",frontMatter:{title:"SEC_TO_TIME",language:"zh-CN"},sidebar:"docs",previous:{title:"TIME_TO_SEC",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/time-to-sec"},next:{title:"EXTRACT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/extract"}},s={},l=[{value:"sec_to_time",id:"sec_to_time",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"sec_to_time"},"sec_to_time"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TIME sec_to_time(INT timestamp)")),(0,o.yg)("p",null,"\u53c2\u6570\u4e3aINT\u7c7b\u578b\u65f6\u95f4\u6233\uff0c\u51fd\u6570\u8fd4\u56deTIME\u7c7b\u578b\u65f6\u95f4\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql >select sec_to_time(time_to_sec(cast('16:32:18' as time)));\n+----------------------------------------------------+\n| sec_to_time(time_to_sec(CAST('16:32:18' AS TIME))) |\n+----------------------------------------------------+\n| 16:32:18                                           |\n+----------------------------------------------------+\n1 row in set (0.53 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SEC_TO_TIME\n")))}m.isMDXComponent=!0}}]);