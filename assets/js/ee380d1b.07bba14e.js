"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[926657],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},109448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"seconds_add",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds_add",id:"version-1.2/sql-manual/sql-functions/date-time-functions/seconds_add",title:"seconds_add",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/seconds_add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds_add",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_add",draft:!1,tags:[],version:"1.2",frontMatter:{title:"seconds_add",language:"en"},sidebar:"docs",previous:{title:"minutes_sub",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/minutes_sub"},next:{title:"seconds_diff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_diff"}},d={},c=[{value:"seconds_add",id:"seconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"seconds_add"},"seconds_add"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME SECONDS_ADD(DATETIME date, INT seconds)")),(0,o.yg)("p",null,"ADD a specified number of seconds from a datetime or date"),(0,o.yg)("p",null,"The parameter date can be DATETIME or DATE, and the return type is DATETIME."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select seconds_add(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| seconds_add('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:02:03                   |\n+---------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SECONDS_ADD\n")))}p.isMDXComponent=!0}}]);