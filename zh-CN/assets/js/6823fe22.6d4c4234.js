"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[796079],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=o(t),d=l,y=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:l,s[1]=a;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},306035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=t(58168),l=(t(296540),t(15680));const i={title:"SPLIT_PART",language:"zh-CN"},s=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/split-part",id:"version-2.1/sql-manual/sql-functions/string-functions/split-part",title:"SPLIT_PART",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/split-part.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/split-part",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/split-part",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SPLIT_PART",language:"zh-CN"},sidebar:"docs",previous:{title:"STRRIGHT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/strright"},next:{title:"SPLIT_BY_STRING",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/split-by-string"}},p={},o=[{value:"split_part",id:"split_part",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:o},u="wrapper";function f(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"split_part"},"split_part"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)")),(0,l.yg)("p",null,"\u6839\u636e\u5206\u5272\u7b26\u62c6\u5206\u5b57\u7b26\u4e32, \u8fd4\u56de\u6307\u5b9a\u7684\u5206\u5272\u90e8\u5206(\u4ece\u4e00\u6216\u8d1f\u4e00\u5f00\u59cb\u8ba1\u6570)\u3002field\u5b57\u6bb5\u652f\u6301\u8d1f\u6570\uff0c\u4ee3\u8868\u4ece\u53f3\u5f80\u5de6\u5012\u7740\u622a\u53d6\u5e76\u53d6\u6570\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"delimiter")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"field")," \u53c2\u6570\u9700\u8981\u662f\u5e38\u91cf, \u4e0d\u652f\u6301\u53d8\u91cf\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part(\"hello world\", \" \", 2);\n+----------------------------------+\n| split_part('hello world', ' ', 2) |\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part(\"2019\u5e747\u67088\u53f7\", \"\u6708\", 1);\n+-----------------------------------------+\n| split_part('2019\u5e747\u67088\u53f7', '\u6708', 1)     |\n+-----------------------------------------+\n| 2019\u5e747                                 |\n+-----------------------------------------+\n\nmysql> select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -1);\n+--------------------------------------+\n| split_part('prefix_string', '_', -1) |\n+--------------------------------------+\n| string                               |\n+--------------------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -2);\n+--------------------------------------+\n| split_part('prefix_string', '_', -2) |\n+--------------------------------------+\n| prefix                               |\n+--------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -1);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -1) |\n+----------------------------------------+\n| 234                                    |\n+----------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -2);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -2) |\n+----------------------------------------+\n| 123#                                   |\n+----------------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SPLIT_PART,SPLIT,PART\n")))}f.isMDXComponent=!0}}]);