"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[848485],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?t.createElement(y,l(l({ref:r},c),{},{components:n})):t.createElement(y,l({ref:r},c))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},775019:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=n(58168),a=(n(296540),n(15680));const o={title:"PARSE_URL",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/parse-url",id:"version-2.1/sql-manual/sql-functions/string-functions/parse-url",title:"PARSE_URL",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/parse-url.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/parse-url",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/parse-url",draft:!1,tags:[],version:"2.1",frontMatter:{title:"PARSE_URL",language:"en"},sidebar:"docs",previous:{title:"MONEY_FORMAT",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/money-format"},next:{title:"QUOTE",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/quote"}},i={},u=[{value:"parse_url",id:"parse_url",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"parse_url"},"parse_url"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR  parse_url(VARCHAR url, VARCHAR  name)")),(0,a.yg)("p",null,"From the URL, the field corresponding to name is resolved. The name options are as follows: 'PROTOCOL', 'HOST', 'PATH', 'REF', 'AUTHORITY', 'FILE', 'USERINFO', 'PORT', 'QUERY', and the result is returned."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT parse_url ('https://doris.apache.org/', 'HOST');\n+------------------------------------------------+\n| parse_url('https://doris.apache.org/', 'HOST') |\n+------------------------------------------------+\n| doris.apache.org                               |\n+------------------------------------------------+\n")),(0,a.yg)("p",null,"If you want to get parameter in QUERY, you can use ",(0,a.yg)("a",{parentName:"p",href:"./extract_url_parameter.md"},"extract_url_parameter"),"."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"PARSE URL\n")))}f.isMDXComponent=!0}}]);