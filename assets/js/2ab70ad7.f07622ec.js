"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[618391],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),i=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(t),y=r,d=p["".concat(a,".").concat(y)]||p[y]||f[y]||s;return t?o.createElement(d,l(l({ref:n},c),{},{components:t})):o.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=y;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var i=2;i<s;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},45849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var o=t(58168),r=(t(296540),t(15680));const s={title:"JSON_QUOTE",language:"en"},l=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json-quote",id:"version-2.0/sql-manual/sql-functions/json-functions/json-quote",title:"JSON_QUOTE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/json-quote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-quote",permalink:"/docs/2.0/sql-manual/sql-functions/json-functions/json-quote",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_QUOTE",language:"en"},sidebar:"docs",previous:{title:"JSON_OBJECT",permalink:"/docs/2.0/sql-manual/sql-functions/json-functions/json-object"},next:{title:"JSON_UNQUOTE",permalink:"/docs/2.0/sql-manual/sql-functions/json-functions/json-unquote"}},a={},i=[{value:"json_quote",id:"json_quote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"json_quote"},"json_quote"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR json_quote(VARCHAR)")),(0,r.yg)("p",null,'Enclose json_value in double quotes ("), escape special characters contained.'),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'MySQL> SELECT json_quote(\'null\'), json_quote(\'"null"\');\n+--------------------+----------------------+\n| json_quote(\'null\') | json_quote(\'"null"\') |\n+--------------------+----------------------+\n| "null"             | "\\"null\\""           |\n+--------------------+----------------------+\n\n\nMySQL> SELECT json_quote(\'[1, 2, 3]\');\n+-------------------------+\n| json_quote(\'[1, 2, 3]\') |\n+-------------------------+\n| "[1, 2, 3]"             |\n+-------------------------+\n\n\nMySQL> SELECT json_quote(null);\n+------------------+\n| json_quote(null) |\n+------------------+\n| NULL             |\n+------------------+\n\nMySQL> select json_quote("\\n\\b\\r\\t");\n+------------------------+\n| json_quote(\'\\n\\b\\r\\t\') |\n+------------------------+\n| "\\n\\b\\r\\t"             |\n+------------------------+\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"json,quote,json_quote"))}f.isMDXComponent=!0}}]);