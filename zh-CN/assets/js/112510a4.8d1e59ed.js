"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[521142],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>N});var l=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,N=u["".concat(o,".").concat(d)]||u[d]||y[d]||a;return n?l.createElement(N,i(i({ref:t},m),{},{components:n})):l.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},658640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>g,toc:()=>p});var l=n(58168),r=(n(296540),n(15680));const a={title:"\u7d22\u5f15\u6982\u8ff0",language:"zh-CN"},i=void 0,g={unversionedId:"table-design/index/index-overview",id:"version-2.0/table-design/index/index-overview",title:"\u7d22\u5f15\u6982\u8ff0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/table-design/index/index-overview.md",sourceDirName:"table-design/index",slug:"/table-design/index/index-overview",permalink:"/zh-CN/docs/2.0/table-design/index/index-overview",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u7d22\u5f15\u6982\u8ff0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u51b7\u70ed\u6570\u636e\u5206\u5c42",permalink:"/zh-CN/docs/2.0/table-design/cold-hot-separation"},next:{title:"\u524d\u7f00\u7d22\u5f15\u4e0e\u6392\u5e8f\u952e",permalink:"/zh-CN/docs/2.0/table-design/index/prefix-index"}},o={},p=[{value:"\u7d22\u5f15\u5206\u7c7b\u548c\u539f\u7406",id:"\u7d22\u5f15\u5206\u7c7b\u548c\u539f\u7406",level:2},{value:"\u7d22\u5f15\u8bbe\u8ba1\u6307\u5357",id:"\u7d22\u5f15\u8bbe\u8ba1\u6307\u5357",level:2}],m={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,l.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u6570\u636e\u5e93\u7d22\u5f15\u662f\u7528\u4e8e\u67e5\u8be2\u52a0\u901f\u7684\uff0c\u4e3a\u4e86\u52a0\u901f\u4e0d\u540c\u7684\u67e5\u8be2\u573a\u666f\uff0cApache Doris \u652f\u6301\u4e86\u591a\u79cd\u4e30\u5bcc\u7684\u7d22\u5f15\u3002"),(0,r.yg)("h2",{id:"\u7d22\u5f15\u5206\u7c7b\u548c\u539f\u7406"},"\u7d22\u5f15\u5206\u7c7b\u548c\u539f\u7406"),(0,r.yg)("p",null,"\u4ece\u52a0\u901f\u7684\u67e5\u8be2\u548c\u539f\u7406\u6765\u770b\uff0cApache Doris \u7684\u7d22\u5f15\u5206\u4e3a\u70b9\u67e5\u7d22\u5f15\u548c\u8df3\u6570\u7d22\u5f15\u4e24\u5927\u7c7b\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u70b9\u67e5\u7d22\u5f15\uff1a\u5e38\u7528\u4e8e\u52a0\u901f\u70b9\u67e5\uff0c\u539f\u7406\u662f\u901a\u8fc7\u7d22\u5f15\u5b9a\u4f4d\u5230\u6ee1\u8db3 WHERE \u6761\u4ef6\u7684\u6709\u54ea\u4e9b\u884c\uff0c\u76f4\u63a5\u8bfb\u53d6\u90a3\u4e9b\u884c\u3002\u70b9\u67e5\u7d22\u5f15\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\u6bd4\u8f83\u5c11\u65f6\u6548\u679c\u5f88\u597d\u3002Apache Doris \u7684\u70b9\u67e5\u7d22\u5f15\u5305\u62ec\u524d\u7f00\u7d22\u5f15\u548c\u5012\u6392\u7d22\u5f15\u3002",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u524d\u7f00\u7d22\u5f15\uff1aApache Doris \u6309\u7167\u6392\u5e8f\u952e\u4ee5\u6709\u5e8f\u7684\u65b9\u5f0f\u5b58\u50a8\u6570\u636e\uff0c\u5e76\u6bcf\u9694 1024 \u884c\u6570\u636e\u521b\u5efa\u4e00\u4e2a\u7a00\u758f\u524d\u7f00\u7d22\u5f15\u3002\u7d22\u5f15\u4e2d\u7684 Key \u662f\u5f53\u524d 1024 \u884c\u4e2d\u7b2c\u4e00\u884c\u4e2d\u6392\u5e8f\u5217\u7684\u503c\u3002\u5982\u679c\u67e5\u8be2\u6d89\u53ca\u5df2\u6392\u5e8f\u5217\uff0c\u7cfb\u7edf\u5c06\u627e\u5230\u76f8\u5173 1024 \u884c\u7ec4\u7684\u7b2c\u4e00\u884c\u5e76\u4ece\u90a3\u91cc\u5f00\u59cb\u626b\u63cf\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5012\u6392\u7d22\u5f15\uff1a\u5bf9\u521b\u5efa\u4e86\u5012\u6392\u7d22\u5f15\u7684\u5217\uff0c\u5efa\u7acb\u6bcf\u4e2a\u503c\u5230\u5bf9\u5e94\u884c\u53f7\u96c6\u5408\u7684\u5012\u6392\u8868\u3002\u5bf9\u4e8e\u7b49\u503c\u67e5\u8be2\uff0c\u5148\u4ece\u5012\u6392\u8868\u4e2d\u67e5\u5230\u884c\u53f7\u96c6\u5408\uff0c\u7136\u540e\u76f4\u63a5\u8bfb\u53d6\u5bf9\u5e94\u884c\u7684\u6570\u636e\uff0c\u800c\u4e0d\u7528\u9010\u884c\u626b\u63cf\u5339\u914d\u6570\u636e\uff0c\u4ece\u800c\u51cf\u5c11 I/O \u52a0\u901f\u67e5\u8be2\u3002\u5012\u6392\u7d22\u5f15\u8fd8\u80fd\u52a0\u901f\u8303\u56f4\u8fc7\u6ee4\u3001\u6587\u672c\u5173\u952e\u8bcd\u5339\u914d\uff0c\u7b97\u6cd5\u66f4\u52a0\u590d\u6742\u4f46\u662f\u57fa\u672c\u539f\u7406\u7c7b\u4f3c\u3002\uff08\u5907\u6ce8\uff1a\u4e4b\u524d\u7684 BITMAP \u7d22\u5f15\u5df2\u7ecf\u88ab\u66f4\u5f3a\u7684\u5012\u6392\u7d22\u5f15\u53d6\u4ee3\uff09"))),(0,r.yg)("li",{parentName:"ul"},"\u8df3\u6570\u7d22\u5f15\uff1a\u5e38\u7528\u4e8e\u52a0\u901f\u5206\u6790\uff0c\u539f\u7406\u662f\u901a\u8fc7\u7d22\u5f15\u786e\u5b9a\u4e0d\u6ee1\u8db3 WHERE \u6761\u4ef6\u7684\u6570\u636e\u5757\uff0c\u8df3\u8fc7\u8fd9\u4e9b\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u5757\uff0c\u53ea\u8bfb\u53d6\u53ef\u80fd\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u5757\u5e76\u518d\u8fdb\u884c\u4e00\u6b21\u9010\u884c\u8fc7\u6ee4\uff0c\u6700\u7ec8\u5f97\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\u3002\u8df3\u6570\u7d22\u5f15\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\u6bd4\u8f83\u591a\u65f6\u6548\u679c\u8f83\u597d\u3002Apache Doris \u7684\u8df3\u6570\u7d22\u5f15\u5305\u62ec ZoneMap \u7d22\u5f15\u3001BloomFilter \u7d22\u5f15\u3001NGram BloomFilter \u7d22\u5f15\u3002",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"ZoneMap \u7d22\u5f15\uff1a\u81ea\u52a8\u7ef4\u62a4\u6bcf\u4e00\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\uff08Segment\uff09\u548c\u6570\u636e\u5757\uff08Page\uff09\u8bb0\u5f55\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u3001\u662f\u5426\u6709 NULL\u3002\u5bf9\u4e8e\u7b49\u503c\u67e5\u8be2\u3001\u8303\u56f4\u67e5\u8be2\u3001IS NULL\uff0c\u53ef\u4ee5\u901a\u8fc7\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u3001\u662f\u5426\u6709 NULL \u6765\u5224\u65ad\u6570\u636e\u6587\u4ef6\u548c\u6570\u636e\u5757\u662f\u5426\u53ef\u4ee5\u5305\u542b\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8df3\u8fc7\u4e0d\u8bfb\u5bf9\u5e94\u7684\u6587\u4ef6\u6216\u6570\u636e\u5757\u51cf\u5c11 I/O \u52a0\u901f\u67e5\u8be2\u3002"),(0,r.yg)("li",{parentName:"ul"},"BloomFilter \u7d22\u5f15\uff1a\u5c06\u7d22\u5f15\u5bf9\u5e94\u5217\u7684\u53ef\u80fd\u53d6\u503c\u5b58\u5165 BloomFilter \u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u5b83\u53ef\u4ee5\u5feb\u901f\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u5728 BloomFilter \u91cc\u9762\uff0c\u5e76\u4e14 BloomFilter \u5b58\u50a8\u7a7a\u95f4\u5360\u7528\u5f88\u4f4e\u3002\u5bf9\u4e8e\u7b49\u503c\u67e5\u8be2\uff0c\u5982\u679c\u5224\u65ad\u8fd9\u4e2a\u503c\u4e0d\u5728 BloomFilter \u91cc\u9762\uff0c\u5c31\u53ef\u4ee5\u8df3\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6587\u4ef6\u6216\u8005\u6570\u636e\u5757\u51cf\u5c11 I/O \u52a0\u901f\u67e5\u8be2\u3002"),(0,r.yg)("li",{parentName:"ul"},"NGram BloomFilter \u7d22\u5f15\uff1a\u7528\u4e8e\u52a0\u901f\u6587\u672c LIKE \u67e5\u8be2\uff0c\u57fa\u672c\u539f\u7406\u4e0e BloomFilter \u7d22\u5f15\u7c7b\u4f3c\uff0c\u53ea\u662f\u5b58\u5165 BloomFilter \u7684\u4e0d\u662f\u539f\u59cb\u6587\u672c\u7684\u503c\uff0c\u800c\u662f\u5bf9\u6587\u672c\u8fdb\u884c NGram \u5206\u8bcd\uff0c\u6bcf\u4e2a\u8bcd\u4f5c\u4e3a\u503c\u5b58\u5165 BloomFilter\u3002\u5bf9\u4e8e LIKE \u67e5\u8be2\uff0c\u5c06 LIKE \u7684 pattern \u4e5f\u8fdb\u884c NGram \u5206\u8bcd\uff0c\u5224\u65ad\u6bcf\u4e2a\u8bcd\u662f\u5426\u5728 BloomFilter \u4e2d\uff0c\u5982\u679c\u67d0\u4e2a\u8bcd\u4e0d\u5728\u5219\u5bf9\u5e94\u7684\u6570\u636e\u6587\u4ef6\u6216\u8005\u6570\u636e\u5757\u5c31\u4e0d\u6ee1\u8db3 LIKE \u6761\u4ef6\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u90e8\u5206\u6570\u636e\u51cf\u5c11 I/O \u52a0\u901f\u67e5\u8be2\u3002")))),(0,r.yg)("p",null,"\u4e0a\u8ff0\u7d22\u5f15\u4e2d\uff0c\u524d\u7f00\u7d22\u5f15\u548c ZoneMap \u7d22\u5f15\u662f Apache Doris \u81ea\u52a8\u7ef4\u62a4\u7684\u5185\u5efa\u667a\u80fd\u7d22\u5f15\uff0c\u65e0\u9700\u7528\u6237\u7ba1\u7406\uff0c\u800c\u5012\u6392\u7d22\u5f15\u3001BloomFilter \u7d22\u5f15\u3001NGram BloomFilter \u7d22\u5f15\u5219\u9700\u8981\u7528\u6237\u81ea\u5df1\u6839\u636e\u573a\u666f\u9009\u62e9\uff0c\u624b\u52a8\u521b\u5efa\u3001\u5220\u9664\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7d22\u5f15"),(0,r.yg)("th",{parentName:"tr",align:null},"\u52a0\u901f\u7b49\u4e8e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u52a0\u901f\u4e0d\u7b49"),(0,r.yg)("th",{parentName:"tr",align:null},"\u52a0\u901f\u8303\u56f4"),(0,r.yg)("th",{parentName:"tr",align:null},"\u52a0\u901f LIKE"),(0,r.yg)("th",{parentName:"tr",align:null},"\u52a0\u901f MATCH\uff08\u5173\u952e\u8bcd\u3001\u77ed\u8bed\uff09"),(0,r.yg)("th",{parentName:"tr",align:null},"\u4f18\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5c40\u9650"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u70b9\u67e5\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"\u524d\u7f00\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5e38\u7528\u7684\u8fc7\u6ee4\u6761\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u8868\u53ea\u6709\u4e00\u4e2a\u524d\u7f00\u7d22\u5f15")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u70b9\u67e5\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5012\u6392\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"COMING"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u5206\u8bcd\u548c\u5173\u952e\u8bcd\u5339\u914d\uff0c\u4efb\u610f\u5217\u53ef\u5efa\u7d22\u5f15\uff0c\u591a\u6761\u4ef6\u7ec4\u5408"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u5b58\u50a8\u7a7a\u95f4\u8f83\u5927\uff0c\u4e0e\u539f\u59cb\u6570\u636e\u76f8\u5f53")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8df3\u6570\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"ZoneMap \u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u7d22\u5f15\uff0c\u7d22\u5f15\u5b58\u50a8\u7a7a\u95f4\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8df3\u6570\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"BloomFilter \u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bd4 ZoneMap \u66f4\u7cbe\u7ec6\uff0c\u7d22\u5f15\u7a7a\u95f4\u8f83\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u7684\u67e5\u8be2\u7c7b\u578b\u5c11\uff0c\u53ea\u652f\u6301\u7b49\u4e8e\uff0c\u4e0d\u652f\u6301\u5176\u4ed6\uff08\u4e0d\u7b49\u3001\u8303\u56f4\u3001LIKE\u3001MATCH\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8df3\u6570\u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"NGram BloomFilter \u7d22\u5f15"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301 LIKE \u52a0\u901f\uff0c\u7d22\u5f15\u7a7a\u95f4\u8f83\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ea\u652f\u6301 LIKE \u52a0\u901f")))),(0,r.yg)("h2",{id:"\u7d22\u5f15\u8bbe\u8ba1\u6307\u5357"},"\u7d22\u5f15\u8bbe\u8ba1\u6307\u5357"),(0,r.yg)("p",null,'\u6570\u636e\u5e93\u8868\u7684\u7d22\u5f15\u8bbe\u8ba1\u548c\u4f18\u5316\u8ddf\u6570\u636e\u7279\u70b9\u548c\u67e5\u8be2\u5f88\u76f8\u5173\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u573a\u666f\u6d4b\u8bd5\u548c\u4f18\u5316\u3002\u867d\u7136\u6ca1\u6709 "\u94f6\u5f39"\uff0cApache Doris \u4ecd\u7136\u4e0d\u65ad\u52aa\u529b\u964d\u4f4e\u7528\u6237\u4f7f\u7528\u7d22\u5f15\u7684\u96be\u5ea6\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u4e0b\u9762\u7684\u7b80\u5355\u5efa\u8bae\u539f\u5219\u8fdb\u884c\u7d22\u5f15\u9009\u62e9\u548c\u6d4b\u8bd5\u3002'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6700\u9891\u7e41\u4f7f\u7528\u7684\u8fc7\u6ee4\u6761\u4ef6\u6307\u5b9a\u4e3a Key \u81ea\u52a8\u5efa\u524d\u7f00\u7d22\u5f15\uff0c\u56e0\u4e3a\u5b83\u7684\u8fc7\u6ee4\u6548\u679c\u6700\u597d\uff0c\u4f46\u662f\u4e00\u4e2a\u8868\u53ea\u80fd\u6709\u4e00\u4e2a\u524d\u7f00\u7d22\u5f15\uff0c\u56e0\u6b64\u8981\u7528\u5728\u6700\u9891\u7e41\u7684\u8fc7\u6ee4\u6761\u4ef6\u4e0a"),(0,r.yg)("li",{parentName:"ol"},"\u5bf9\u975e Key \u5b57\u6bb5\u5982\u6709\u8fc7\u6ee4\u52a0\u901f\u9700\u6c42\uff0c\u9996\u9009\u5efa\u5012\u6392\u7d22\u5f15\uff0c\u56e0\u4e3a\u5b83\u7684\u9002\u7528\u9762\u5e7f\uff0c\u53ef\u4ee5\u591a\u6761\u4ef6\u7ec4\u5408\uff0c\u6b21\u9009\u4e0b\u9762\u4e24\u79cd\u7d22\u5f15\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6709\u5b57\u7b26\u4e32 LIKE \u5339\u914d\u9700\u6c42\uff0c\u518d\u52a0\u4e00\u4e2a NGram BloomFilter \u7d22\u5f15"),(0,r.yg)("li",{parentName:"ul"},"\u5bf9\u7d22\u5f15\u5b58\u50a8\u7a7a\u95f4\u5f88\u654f\u611f\uff0c\u5c06\u5012\u6392\u7d22\u5f15\u6362\u6210 BloomFilter \u7d22\u5f15")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u6027\u80fd\u4e0d\u53ca\u9884\u671f\uff0c\u901a\u8fc7 QueryProfile \u5206\u6790\u7d22\u5f15\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u91cf\u548c\u6d88\u8017\u7684\u65f6\u95f4\uff0c\u5177\u4f53\u53c2\u8003\u5404\u4e2a\u7d22\u5f15\u7684\u8be6\u7ec6\u6587\u6863")))}y.isMDXComponent=!0}}]);