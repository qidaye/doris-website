"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[525967],{15680:(e,n,t)=>{t.d(n,{xA:()=>f,yg:()=>p});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),c=d(t),y=a,p=c["".concat(l,".").concat(y)]||c[y]||u[y]||i;return t?r.createElement(p,s(s({ref:n},f),{},{components:t})):r.createElement(p,s({ref:n},f))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},400521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(58168),a=(t(296540),t(15680));const i={title:"days_diff",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/days_diff",id:"version-1.2/sql-manual/sql-functions/date-time-functions/days_diff",title:"days_diff",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/days_diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/days_diff",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/days_diff",draft:!1,tags:[],version:"1.2",frontMatter:{title:"days_diff",language:"zh-CN"},sidebar:"docs",previous:{title:"days_add",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/days_add"},next:{title:"days_sub",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/days_sub"}},l={},d=[{value:"days_diff",id:"days_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],f={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"days_diff"},"days_diff"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT days_diff(DATETIME enddate, DATETIME startdate)")),(0,a.yg)("p",null,"\u5f00\u59cb\u65f6\u95f4\u5230\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u5929\uff0c\u5bf9\u65e5\u671f\u7684\u5224\u65ad\u7cbe\u786e\u5230\u79d2\uff0c\u5e76\u5411\u4e0b\u53d6\u6574\u6570\u3002\n\u533a\u522b\u4e8edate_diff\uff0cdatediff\u51fd\u6570\u5bf9\u65e5\u671f\u7684\u5224\u65ad\u7cbe\u786e\u5230\u5929\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:00');\n+---------------------------------------------------------+\n| days_diff('2020-12-25 22:00:00', '2020-12-24 22:00:00') |\n+---------------------------------------------------------+\n|                                                       1 |\n+---------------------------------------------------------+\n\nmysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:01');\n+---------------------------------------------------------+\n| days_diff('2020-12-24 22:00:01', '2020-12-25 22:00:00') |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"days_diff\n")))}u.isMDXComponent=!0}}]);