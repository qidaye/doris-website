"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[614176],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},171384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"IS_IPV4_COMPAT",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv4-compat",id:"version-3.0/sql-manual/sql-functions/ip-functions/is-ipv4-compat",title:"IS_IPV4_COMPAT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/is-ipv4-compat.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv4-compat",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/is-ipv4-compat",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IS_IPV4_COMPAT",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV6_STRING_TO_NUM_OR_NULL",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null"},next:{title:"IS_IPV4_MAPPED",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/is-ipv4-mapped"}},a={},c=[{value:"IS_IPV4_COMPAT",id:"is_ipv4_compat",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"is_ipv4_compat"},"IS_IPV4_COMPAT"),(0,i.yg)("p",null,"IS_IPV4_COMPAT"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IS_IPV4_COMPAT(INET6_ATON(VARCHAR ipv4_addr))")),(0,i.yg)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u4ee5\u6570\u5b57\u5f62\u5f0f\u8868\u793a\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684 IPv6 \u5730\u5740\uff0c\u7531 INET6_ATON() \u8fd4\u56de\u3002\n\u5982\u679c\u53c2\u6570\u662f\u6709\u6548\u7684 IPv4 \u517c\u5bb9 IPv6 \u5730\u5740\uff0c\u5219\u8fd4\u56de 1\uff0c\u5426\u5219\u8fd4\u56de 0\uff08\u9664\u975e expr \u4e3a NULL\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8be5\u51fd\u6570\u8fd4\u56de NULL\uff09\u3002\nIPv4 \u517c\u5bb9\u5730\u5740\u7684\u683c\u5f0f\u4e3a::ipv4_address\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT IS_IPV4_COMPAT(INET6_ATON('::ffff:10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         0 |\n+-----------+\n1 row in set (0.02 sec)\n\nmysql> SELECT IS_IPV4_COMPAT(INET6_ATON('::10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         1 |\n+-----------+\n1 row in set (0.03 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IS_IPV4_COMPAT, IP"))}f.isMDXComponent=!0}}]);