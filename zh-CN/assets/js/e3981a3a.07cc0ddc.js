"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[179638],{15680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(y,p(p({ref:t},i),{},{components:r})):n.createElement(y,p({ref:t},i))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},218682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(58168),a=(r(296540),r(15680));const l={title:"Truncate \u64cd\u4f5c",language:"zh-CN"},p=void 0,o={unversionedId:"data-operate/delete/truncate-manual",id:"data-operate/delete/truncate-manual",title:"Truncate \u64cd\u4f5c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/delete/truncate-manual.md",sourceDirName:"data-operate/delete",slug:"/data-operate/delete/truncate-manual",permalink:"/zh-CN/docs/dev/data-operate/delete/truncate-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Truncate \u64cd\u4f5c",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6279\u91cf\u5220\u9664",permalink:"/zh-CN/docs/dev/data-operate/delete/batch-delete-manual"},next:{title:"\u8868\u539f\u5b50\u66ff\u6362",permalink:"/zh-CN/docs/dev/data-operate/delete/atomicity-replace"}},c={},u=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],i={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6e05\u7a7a\u6307\u5b9a\u8868\u548c\u5206\u533a\u7684\u6570\u636e\u3002"),(0,a.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8be5\u8bed\u53e5\u6e05\u7a7a\u6570\u636e\uff0c\u4f46\u4fdd\u7559\u8868\u6216\u5206\u533a\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0d\u540c\u4e8e DELETE\uff0c\u8be5\u8bed\u53e5\u53ea\u80fd\u6574\u4f53\u6e05\u7a7a\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\uff0c\u4e0d\u80fd\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0d\u540c\u4e8e DELETE\uff0c\u4f7f\u7528\u8be5\u65b9\u5f0f\u6e05\u7a7a\u6570\u636e\u4e0d\u4f1a\u5bf9\u67e5\u8be2\u6027\u80fd\u9020\u6210\u5f71\u54cd\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8be5\u64cd\u4f5c\u5220\u9664\u7684\u6570\u636e\u4e0d\u53ef\u6062\u590d\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528\u8be5\u547d\u4ee4\u65f6\uff0c\u8868\u72b6\u6001\u9700\u4e3a NORMAL\uff0c\u5373\u4e0d\u5141\u8bb8\u6b63\u5728\u8fdb\u884c SCHEMA CHANGE \u7b49\u64cd\u4f5c\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6b63\u5728\u8fdb\u884c\u7684\u5bfc\u5165\u5931\u8d25\u3002"))),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. \u6e05\u7a7a example_db \u4e0b\u7684\u8868 tbl")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"TRUNCATE TABLE example_db.tbl;\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. \u6e05\u7a7a\u8868 tbl \u7684 p1 \u548c p2 \u5206\u533a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"TRUNCATE TABLE tbl PARTITION(p1, p2);\n")))}s.isMDXComponent=!0}}]);