"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[540796],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,f=d["".concat(i,".").concat(y)]||d[y]||m[y]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},168799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"FROM_DAYS",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/from-days",id:"sql-manual/sql-functions/date-time-functions/from-days",title:"FROM_DAYS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/from-days.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/from-days",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from-days",draft:!1,tags:[],version:"current",frontMatter:{title:"FROM_DAYS",language:"zh-CN"},sidebar:"docs",previous:{title:"SECOND",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/second"},next:{title:"LAST_DAY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/last-day"}},i={},c=[{value:"from_days",id:"from_days",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"from_days"},"from_days"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATE FROM_DAYS(INT N)")),(0,a.yg)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5929\u6570\uff0c\u8fd4\u56de\u4e00\u4e2aDATE\u3002\u6ce8\u610f\uff0c\u4e3a\u4e86\u548cmysql\u4fdd\u6301\u4e00\u81f4\u7684\u884c\u4e3a\uff0c\u4e0d\u5b58\u57280000-02-29\u8fd9\u4e2a\u65e5\u671f\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select from_days(730669);\n+-------------------+\n| from_days(730669) |\n+-------------------+\n| 2000-07-03        |\n+-------------------+\n\nmysql> select from_days (5);\n+--------------+\n| from_days(5) |\n+--------------+\n| 0000-01-05   |\n+--------------+\n\nmysql> select from_days (59);\n+---------------+\n| from_days(59) |\n+---------------+\n| 0000-02-28    |\n+---------------+\n\nmysql> select from_days (60);\n+---------------+\n| from_days(60) |\n+---------------+\n| 0000-03-01    |\n+---------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"FROM_DAYS,FROM,DAYS\n")))}m.isMDXComponent=!0}}]);