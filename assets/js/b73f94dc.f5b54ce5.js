"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[446605],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},131190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"TO_IPV6",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv6",id:"sql-manual/sql-functions/ip-functions/to-ipv6",title:"TO_IPV6",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/to-ipv6.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv6",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_IPV6",language:"en"},sidebar:"docs",previous:{title:"TO_IPV4_OR_NULL",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null"},next:{title:"TO_IPV6_OR_DEFAULT",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6-or-default"}},s={},c=[{value:"TO_IPV6",id:"to_ipv6",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv6"},"TO_IPV6"),(0,o.yg)("p",null,"TO_IPV6"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV6 TO_IPV6(STRING ipv6_str)")),(0,o.yg)("p",null,"Convert a string form of IPv6 address to IPv6 type.\nIf the IPv6 address has an invalid format, throw an exception.\nSimilar to ipv6_string_to_num function, which converts IPv6 address to binary format."),(0,o.yg)("h4",{id:"notice"},"Notice"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Input cannot be NULL. If it is NULL, an exception will be thrown.")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv6('::');\n+---------------+\n| to_ipv6('::') |\n+---------------+\n| ::            |\n+---------------+\n")),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("p",null,"TO_IPV6, IP"))}f.isMDXComponent=!0}}]);