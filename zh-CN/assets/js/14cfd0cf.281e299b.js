"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[574872],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),y=o,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},694630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const a={title:"ACOS",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/numeric-functions/acos",id:"version-2.0/sql-manual/sql-functions/numeric-functions/acos",title:"ACOS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/acos.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/acos",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/acos",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ACOS",language:"zh-CN"},sidebar:"docs",previous:{title:"ASIN",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/asin"},next:{title:"ATAN",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/atan"}},l={},s=[{value:"acos",id:"acos",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"acos"},"acos"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE acos(DOUBLE x)"),"\n\u8fd4\u56de",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u53cd\u4f59\u5f26\u503c\uff0c\u82e5 ",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u4e0d\u5728",(0,o.yg)("inlineCode",{parentName:"p"},"-1"),"\u5230 ",(0,o.yg)("inlineCode",{parentName:"p"},"1"),"\u7684\u8303\u56f4\u4e4b\u5185\uff0c\u5219\u8fd4\u56de ",(0,o.yg)("inlineCode",{parentName:"p"},"nan"),"."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select acos(1);\n+-----------+\n| acos(1.0) |\n+-----------+\n|         0 |\n+-----------+\nmysql> select acos(0);\n+--------------------+\n| acos(0.0)          |\n+--------------------+\n| 1.5707963267948966 |\n+--------------------+\nmysql> select acos(-2);\n+------------+\n| acos(-2.0) |\n+------------+\n|        nan |\n+------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ACOS\n")))}m.isMDXComponent=!0}}]);