"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[704841],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},870360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(58168),l=(t(296540),t(15680));const o={title:"TO_IPV4_OR_NULL",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv4-or-null",id:"sql-manual/sql-functions/ip-functions/to-ipv4-or-null",title:"TO_IPV4_OR_NULL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/to-ipv4-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_IPV4_OR_NULL",language:"en"},sidebar:"docs",previous:{title:"TO_IPV4_OR_DEFAULT",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-default"},next:{title:"TO_IPV6",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6"}},s={},u=[{value:"TO_IPV4_OR_NULL",id:"to_ipv4_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"to_ipv4_or_null"},"TO_IPV4_OR_NULL"),(0,l.yg)("p",null,"TO_IPV4_OR_NULL"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"IPV4 TO_IPV4_OR_NULL(STRING ipv4_str)")),(0,l.yg)("p",null,"Same as to_ipv4, but if the IPv4 address has an invalid format, it returns NULL."),(0,l.yg)("h4",{id:"notice"},"Notice"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"If input is NULL, return NULL.")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv4_or_null('.');\n+----------------------+\n| to_ipv4_or_null('.') |\n+----------------------+\n| NULL                 |\n+----------------------+\n\nmysql> select to_ipv4_or_null(NULL);\n+-----------------------+\n| to_ipv4_or_null(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("p",null,"TO_IPV4_OR_NULL, IP"))}f.isMDXComponent=!0}}]);