"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[877568],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(t),f=a,m=s["".concat(l,".").concat(f)]||s[f]||y[f]||o;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[s]="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},777347:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=t(58168),a=(t(296540),t(15680));const o={title:"\u590d\u6742\u7c7b\u578b\u67e5\u8be2",language:"zh-CN"},c=void 0,u={unversionedId:"query/query-data/complex-type",id:"version-2.0/query/query-data/complex-type",title:"\u590d\u6742\u7c7b\u578b\u67e5\u8be2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/query/query-data/complex-type.md",sourceDirName:"query/query-data",slug:"/query/query-data/complex-type",permalink:"/zh-CN/docs/2.0/query/query-data/complex-type",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u590d\u6742\u7c7b\u578b\u67e5\u8be2",language:"zh-CN"},sidebar:"docs",previous:{title:"Select \u67e5\u8be2",permalink:"/zh-CN/docs/2.0/query/query-data/select"},next:{title:"\u5b50\u67e5\u8be2",permalink:"/zh-CN/docs/2.0/query/query-data/subquery"}},l={},i=[],p={toc:i},s="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u652f\u6301 Array\uff0cMap\uff0cStruct\uff0cJSON \u7b49\u590d\u6742\u7c7b\u578b\u3002"),(0,a.yg)("p",null,"Doris \u63d0\u4f9b\u4e86\u9488\u5bf9\u4ee5\u4e0a\u590d\u6742\u7c7b\u578b\u7684\u5404\u7c7b\u51fd\u6570\u3002"),(0,a.yg)("p",null,"\u8be6\u7ec6\u7684\u51fd\u6570\u652f\u6301\uff0c\u8bf7\u67e5\u770b SQL \u624b\u518c / SQL \u51fd\u6570 \u4e0b\u7684 ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/array-functions/array"},"\u6570\u7ec4\u51fd\u6570"),"\u3001",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/struct-functions/struct"},"Struct \u51fd\u6570")," \u548c ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/json-functions/json-parse"},"JSON \u51fd\u6570"),"\uff0cMap \u51fd\u6570\u652f\u6301\u60c5\u51b5\uff0c\u76f4\u63a5\u67e5\u770b SQL \u624b\u518c / \u6570\u636e\u7c7b\u578b / ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Types/MAP"},"MAP"),"\u3002"))}y.isMDXComponent=!0}}]);