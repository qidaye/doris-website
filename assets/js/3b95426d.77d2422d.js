"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[653774],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"year_floor",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/year_floor",id:"version-1.2/sql-manual/sql-functions/date-time-functions/year_floor",title:"year_floor",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/year_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/year_floor",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/year_floor",draft:!1,tags:[],version:"1.2",frontMatter:{title:"year_floor",language:"en"},sidebar:"docs",previous:{title:"month_floor",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/month_floor"},next:{title:"second_ceil",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/second_ceil"}},s={},c=[{value:"year_floor",id:"year_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"year_floor"},"year_floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME YEAR_FLOOR(DATETIME datetime)\nDATETIME YEAR_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME YEAR_FLOOR(DATETIME datetime, INT period)\nDATETIME YEAR_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n")),(0,o.yg)("p",null,"Convert the date to the nearest rounding down time of the specified time interval period."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"datetime: a valid date expression."),(0,o.yg)("li",{parentName:"ul"},"period: specifies how many years each cycle consists of."),(0,o.yg)("li",{parentName:"ul"},"origin: starting from 0001-01-01T00:00:00.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select year_floor(\"2023-07-13 22:28:18\", 5);\n+-------------------------------------------------------------+\n| year_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+-------------------------------------------------------------+\n| 2020-01-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.11 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"YEAR_FLOOR, YEAR, FLOOR\n")))}f.isMDXComponent=!0}}]);