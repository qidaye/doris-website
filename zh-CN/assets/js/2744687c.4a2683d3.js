"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[493438],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>y});var r=t(296540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var a=r.createContext({}),u=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(a.Provider,{value:e},n.children)},c="mdxType",_={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,a=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=u(t),m=i,y=c["".concat(a,".").concat(m)]||c[m]||_[m]||o;return t?r.createElement(y,l(l({ref:e},p),{},{components:t})):r.createElement(y,l({ref:e},p))}));function y(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=n,s[c]="string"==typeof n?n:i,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},834263:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_STRING_TO_NUM_OR_NULL",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null",id:"version-3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null",title:"IPV4_STRING_TO_NUM_OR_NULL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV4_STRING_TO_NUM_OR_NULL",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4_STRING_TO_NUM_OR_DEFAULT",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default"},next:{title:"IPV6_NUM_TO_STRING",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-num-to-string"}},a={},u=[{value:"IPV4_STRING_TO_NUM_OR_NULL",id:"ipv4_string_to_num_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function _(n){let{components:e,...t}=n;return(0,i.yg)(c,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_string_to_num_or_null"},"IPV4_STRING_TO_NUM_OR_NULL"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_NULL"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT IPV4_STRING_TO_NUM_OR_NULL(VARCHAR ipv4_string)")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT INET_ATON(VARCHAR ipv4_string)")),(0,i.yg)("p",null,"\u83b7\u53d6\u5305\u542b IPv4 \u5730\u5740\u7684\u5b57\u7b26\u4e32\uff0c\u683c\u5f0f\u4e3a A.B.C.D\uff08\u70b9\u5206\u9694\u7684\u5341\u8fdb\u5236\u6570\u5b57\uff09\u3002\u8fd4\u56de\u4e00\u4e2a BIGINT \u6570\u5b57\uff0c\u8868\u793a\u76f8\u5e94\u7684\u5927\u7aef IPv4 \u5730\u5740\u3002"),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u4e0d\u662f\u6709\u6548\u7684 IPv4 \u5730\u5740\uff0c\u5c06\u8fd4\u56de ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),"\u3002\u8be5\u51fd\u6570\u6709\u4e00\u4e2a\u522b\u540d\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"INET_ATON"),"\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select ipv4_string_to_num_or_null('192.168.0.1'); \n+-------------------------------------------+ \n| ipv4_string_to_num_or_null('192.168.0.1') | \n+-------------------------------------------+ \n| 3232235521                                | \n+-------------------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select str, ipv4_string_to_num_or_null(str) from ipv4_str; \n+-----------------+---------------------------------+ \n|str              | ipv4_string_to_num_or_null(str) | \n+-----------------+---------------------------------+ \n| 0.0.0.0         | 0                               | \n| 127.0.0.1       | 2130706433                      | \n| 255.255.255.255 | 4294967295                      | \n| invalid         | NULL                            | \n+-----------------+---------------------------------+ \n4 rows in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_NULL, INET_ATON, IP"))}_.isMDXComponent=!0}}]);