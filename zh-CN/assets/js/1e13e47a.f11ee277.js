"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20514],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),v=i,y=u["".concat(s,".").concat(v)]||u[v]||f[v]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=v;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},800902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_TO_IPV6",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-to-ipv6",id:"version-3.0/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6",title:"IPV4_TO_IPV6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV4_TO_IPV6",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4_NUM_TO_STRING",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"},next:{title:"IPV4_STRING_TO_NUM",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num"}},s={},p=[{value:"IPV4_TO_IPV6",id:"ipv4_to_ipv6",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_to_ipv6"},"IPV4_TO_IPV6"),(0,i.yg)("p",null,"IPV4_TO_IPV6"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"IPV6 IPV4_TO_IPV6(IPV4 ipv4)")),(0,i.yg)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u7c7b\u578b\u4e3a IPv4 \u7684\u5730\u5740\uff0c\u8fd4\u56de\u76f8\u5e94 IPv6 \u7684\u5f62\u5f0f\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql [(none)]>select ipv6_num_to_string(ipv4_to_ipv6(to_ipv4('192.168.0.1')));\n+----------------------+\n| '::ffff:192.168.0.1' |\n+----------------------+\n| ::ffff:192.168.0.1   |\n+----------------------+\n1 row in set (0.02 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV4_TO_IPV6, IP"))}f.isMDXComponent=!0}}]);