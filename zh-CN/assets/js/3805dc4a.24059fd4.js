"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[225549],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),y=o,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},595421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const a={title:"upper",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/upper",id:"version-1.2/sql-manual/sql-functions/string-functions/upper",title:"upper",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/upper.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/upper",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/upper",draft:!1,tags:[],version:"1.2",frontMatter:{title:"upper",language:"zh-CN"},sidebar:"docs",previous:{title:"lcase",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/lcase"},next:{title:"ucase",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/ucase"}},l={},u=[{value:"upper",id:"upper",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"upper"},"upper"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR upper(VARCHAR str)")),(0,o.yg)("p",null,"\u5c06\u53c2\u6570\u4e2d\u6240\u6709\u7684\u5b57\u7b26\u4e32\u90fd\u8f6c\u6362\u6210\u5927\u5199\uff0c\u6b64\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/ucase"},"ucase"),"\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT upper(\"aBc123\");\n+-----------------+\n| upper('aBc123') |\n+-----------------+\n| ABC123          |\n+-----------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"UPPER\n")))}f.isMDXComponent=!0}}]);