"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[165555],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>g});var r=t(296540);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=r.createContext({}),c=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(i.Provider,{value:e},n.children)},p="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,l=n.originalType,i=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),p=c(t),f=o,g=p["".concat(i,".").concat(f)]||p[f]||y[f]||l;return t?r.createElement(g,s(s({ref:e},u),{},{components:t})):r.createElement(g,s({ref:e},u))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=t.length,s=new Array(l);s[0]=f;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=n,a[p]="string"==typeof n?n:o,s[1]=a;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},380644:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const l={title:"JSON_LENGTH",language:"zh-CN"},s=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/json-length",id:"sql-manual/sql-functions/json-functions/json-length",title:"JSON_LENGTH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-length.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-length",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-length",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_LENGTH",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_CONTAINS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-contains"},next:{title:"GET_JSON_DOUBLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-double"}},i={},c=[{value:"json_length",id:"json_length",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(n){let{components:e,...t}=n;return(0,o.yg)(p,(0,r.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_length"},"json_length"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT json_length(JSON json_str)")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT json_length(JSON json_str, VARCHAR json_path)")),(0,o.yg)("p",null,"\u5982\u679c\u6307\u5b9apath\uff0c\u8be5JSON_LENGTH()\u51fd\u6570\u8fd4\u56de\u4e0e JSON \u6587\u6863\u4e2d\u7684\u8def\u5f84\u5339\u914d\u7684\u6570\u636e\u7684\u957f\u5ea6\uff0c\u5426\u5219\u8fd4\u56de JSON \u6587\u6863\u7684\u957f\u5ea6\u3002\u8be5\u51fd\u6570\u6839\u636e\u4ee5\u4e0b\u89c4\u5219\u8ba1\u7b97 JSON \u6587\u6863\u7684\u957f\u5ea6\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u6807\u91cf\u7684\u957f\u5ea6\u4e3a 1\u3002\u4f8b\u5982: '1', '\"x\"', 'true', 'false', 'null' \u7684\u957f\u5ea6\u5747\u4e3a 1\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u6570\u7ec4\u7684\u957f\u5ea6\u662f\u6570\u7ec4\u5143\u7d20\u7684\u6570\u91cf\u3002\u4f8b\u5982: '","[1, 2]","' \u7684\u957f\u5ea6\u4e3a2\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u957f\u5ea6\u662f\u5bf9\u8c61\u6210\u5458\u7684\u6570\u91cf\u3002\u4f8b\u5982: '{\"x\": 1}' \u7684\u957f\u5ea6\u4e3a1")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT json_length(\'{"k1":"v31","k2":300}\');\n+--------------------------------------+\n| json_length(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.26 sec)\n\nmysql> SELECT json_length(\'"abc"\');\n+----------------------+\n| json_length(\'"abc"\') |\n+----------------------+\n|                    1 |\n+----------------------+\n1 row in set (0.17 sec)\n\nmysql> SELECT json_length(\'{"x": 1, "y": [1, 2]}\', \'$.y\');\n+---------------------------------------------+\n| json_length(\'{"x": 1, "y": [1, 2]}\', \'$.y\') |\n+---------------------------------------------+\n|                                           2 |\n+---------------------------------------------+\n1 row in set (0.07 sec)\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"json,json_length"))}y.isMDXComponent=!0}}]);