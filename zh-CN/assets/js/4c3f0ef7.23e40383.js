"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[182991],{15680:(e,r,n)=>{n.d(r,{xA:()=>i,yg:()=>d});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),u=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},i=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=t,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||l;return n?a.createElement(d,o(o({ref:r},i),{},{components:n})):a.createElement(d,o({ref:r},i))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:t,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},806965:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(58168),t=(n(296540),n(15680));const l={title:"ARRAY_PUSHBACK",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array-pushback",id:"version-2.0/sql-manual/sql-functions/array-functions/array-pushback",title:"ARRAY_PUSHBACK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-pushback.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-pushback",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushback",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_PUSHBACK",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_PUSHFRONT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushfront"},next:{title:"ARRAY_COMPACY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-compact"}},s={},u=[{value:"array_pushback",id:"array_pushback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:u},p="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_pushback"},"array_pushback"),(0,t.yg)("p",null,"array_pushback"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array<T> array_pushback(Array<T> arr, T value)")),(0,t.yg)("p",null,"\u5c06 value \u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5c3e\u90e8\u3002"),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"\u8fd4\u56de\u6dfb\u52a0 value \u540e\u7684\u6570\u7ec4"),(0,t.yg)("p",null,"\u7c7b\u578b\uff1aArray."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_pushback([1, 2], 3);\n+---------------------------------+\n| array_pushback(ARRAY(1, 2), 3)  |\n+---------------------------------+\n| [1, 2, 3]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushback(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushback(`col3`, 6)  |\n+-----------+----------------------------+\n| [3, 4, 5] | [3, 4, 5, 6]               |\n| [NULL]    | [NULL, 6]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushback(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushback(`col3`, `col1`)  |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [3, 4, 5, 0]                    |\n|    1 | [NULL]    | [NULL, 1]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,PUSHBACK,ARRAY_PUSHBACK"))}y.isMDXComponent=!0}}]);