"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[684999],{15680:(n,e,r)=>{r.d(e,{xA:()=>c,yg:()=>y});var t=r(296540);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function u(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},l=Object.keys(n);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var a=t.createContext({}),s=function(n){var e=t.useContext(a),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},c=function(n){var e=s(n.components);return t.createElement(a.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,l=n.originalType,a=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),d=s(r),m=o,y=d["".concat(a,".").concat(m)]||d[m]||p[m]||l;return r?t.createElement(y,i(i({ref:e},c),{},{components:r})):t.createElement(y,i({ref:e},c))}));function y(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=r.length,i=new Array(l);i[0]=m;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=n,u[d]="string"==typeof n?n:o,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},621018:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var t=r(58168),o=(r(296540),r(15680));const l={title:"ROUND",language:"zh-CN"},i=void 0,u={unversionedId:"sql-manual/sql-functions/numeric-functions/round",id:"version-2.0/sql-manual/sql-functions/numeric-functions/round",title:"ROUND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/round.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/round",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ROUND",language:"zh-CN"},sidebar:"docs",previous:{title:"PMOD",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/pmod"},next:{title:"ROUND_BANKERS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/round-bankers"}},a={},s=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},d="wrapper";function p(n){let{components:e,...r}=n;return(0,o.yg)(d,(0,t.A)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"round"},"round"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"T round(T x[, d])"),"\n\u5c06",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u56db\u820d\u4e94\u5165\u540e\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0cd\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679cd\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9d\u4f4d\u4e3a0\u3002\u5982\u679cx\u6216d\u4e3anull\uff0c\u8fd4\u56denull\u3002\n2.5\u4f1a\u820d\u5165\u52303\uff0c\u5982\u679c\u60f3\u8981\u820d\u5165\u52302\u7684\u7b97\u6cd5\uff0c\u8bf7\u4f7f\u7528round_bankers\u51fd\u6570\u3002"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u8be5\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"dround"),"\u3002")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ROUND, DROUND\n")))}p.isMDXComponent=!0}}]);