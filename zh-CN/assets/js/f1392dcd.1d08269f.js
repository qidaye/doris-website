"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[990363],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>y});var r=t(296540);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),d=s(t),m=o,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(y,l(l({ref:e},c),{},{components:t})):r.createElement(y,l({ref:e},c))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i[d]="string"==typeof n?n:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64622:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const a={title:"round",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/round",id:"version-1.2/sql-manual/sql-functions/math-functions/round",title:"round",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/math-functions/round.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/round",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/round",draft:!1,tags:[],version:"1.2",frontMatter:{title:"round",language:"zh-CN"},sidebar:"docs",previous:{title:"pmod",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/pmod"},next:{title:"round_bankers",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/round_bankers"}},u={},s=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},d="wrapper";function p(n){let{components:e,...t}=n;return(0,o.yg)(d,(0,r.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"round"},"round"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"T round(T x[, d])"),"\n\u5c06",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u56db\u820d\u4e94\u5165\u540e\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0cd\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679cd\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9d\u4f4d\u4e3a0\u3002\u5982\u679cx\u6216d\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u8be5\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"dround"),"\u3002")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ROUND, DROUND\n")))}p.isMDXComponent=!0}}]);