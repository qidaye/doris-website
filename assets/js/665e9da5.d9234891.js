"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[576564],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(i,".").concat(f)]||u[f]||g[f]||l;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},501117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"REGEXP_EXTRACT_ALL",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp-extract-all",id:"version-3.0/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all",title:"REGEXP_EXTRACT_ALL",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all",permalink:"/docs/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all",draft:!1,tags:[],version:"3.0",frontMatter:{title:"REGEXP_EXTRACT_ALL",language:"en"},sidebar:"docs",previous:{title:"REGEXP_EXTRACT",permalink:"/docs/sql-manual/sql-functions/string-functions/regexp/regexp-extract"},next:{title:"REGEXP_REPLACE",permalink:"/docs/sql-manual/sql-functions/string-functions/regexp/regexp-replace"}},i={},c=[{value:"regexp_extract_all",id:"regexp_extract_all",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"regexp_extract_all"},"regexp_extract_all"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR regexp_extract_all (VARCHAR str, VARCHAR pattern)")),(0,a.yg)("p",null,"Regularly matches a string str and extracts the first sub-pattern matching part of pattern. The pattern needs to exactly match a part of str in order to return an array of strings for the part of the pattern that needs to be matched. If there is no match or the pattern has no sub-pattern, the empty string is returned."),(0,a.yg)("p",null,"Character set matching requires the use of Unicode standard character classes. For example, to match Chinese, use ",(0,a.yg)("inlineCode",{parentName:"p"},"\\p{Han}"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)');\n+--------------------------------------------------------------+\n| regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)') |\n+--------------------------------------------------------------+\n| ['b']                                                        |\n+--------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)');\n+-----------------------------------------------------------------+\n| regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)') |\n+-----------------------------------------------------------------+\n| ['b','f']                                                       |\n+-----------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('abc=111, def=222, ghi=333','(\"[^\"]+\"|\\\\w+)=(\"[^\"]+\"|\\\\w+)');\n+--------------------------------------------------------------------------------+\n| regexp_extract_all('abc=111, def=222, ghi=333', '(\"[^\"]+\"|\\w+)=(\"[^\"]+\"|\\w+)') |\n+--------------------------------------------------------------------------------+\n| ['abc','def','ghi']                                                            |\n+--------------------------------------------------------------------------------+\n\nmysql> select regexp_extract_all('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '(\\\\p{Han}+)(.+)');\n+------------------------------------------------------------------------------------------------+\n| regexp_extract_all('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '(\\p{Han}+)(.+)')       |\n+------------------------------------------------------------------------------------------------+\n| ['\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587']                                                                               |\n+------------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REGEXP_EXTRACT_ALL,REGEXP,EXTRACT,ALL\n")))}g.isMDXComponent=!0}}]);