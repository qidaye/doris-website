"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[475746],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,y=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},987819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"TO_IPV4_OR_DEFAULT",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv4-or-default",id:"sql-manual/sql-functions/ip-functions/to-ipv4-or-default",title:"TO_IPV4_OR_DEFAULT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/to-ipv4-or-default.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv4-or-default",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-default",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_IPV4_OR_DEFAULT",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_IPV4",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4"},next:{title:"TO_IPV4_OR_NULL",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null"}},u={},c=[{value:"TO_IPV4_OR_DEFAULT",id:"to_ipv4_or_default",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],s={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv4_or_default"},"TO_IPV4_OR_DEFAULT"),(0,o.yg)("p",null,"TO_IPV4_OR_DEFAULT"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV4 TO_IPV4_OR_DEFAULT(STRING ipv4_str)")),(0,o.yg)("p",null,"\u4e0eto_ipv4\u51fd\u6570\u7c7b\u4f3c\uff0c\u4f46\u5982\u679cIPv4\u5730\u5740\u7684\u683c\u5f0f\u975e\u6cd5\uff0c\u5219\u8fd4\u56de0.0.0.0\u3002"),(0,o.yg)("h4",{id:"notice"},"Notice"),(0,o.yg)("p",null,"\u5165\u53c2\u5982\u679c\u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u5219\u8fd4\u56de ",(0,o.yg)("inlineCode",{parentName:"p"},"0.0.0.0\u3002")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv4_or_default('.');\n+-------------------------+\n| to_ipv4_or_default('.') |\n+-------------------------+\n| 0.0.0.0                 |\n+-------------------------+\n\nmysql> select to_ipv4_or_default(NULL);\n+--------------------------+\n| to_ipv4_or_default(NULL) |\n+--------------------------+\n| 0.0.0.0                  |\n+--------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("p",null,"TO_IPV4_OR_DEFAULT, IP"))}f.isMDXComponent=!0}}]);