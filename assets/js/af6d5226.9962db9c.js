"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[844957],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),i=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),h=a,d=m["".concat(u,".").concat(h)]||m[h]||p[h]||s;return r?t.createElement(d,l(l({ref:n},c),{},{components:r})):t.createElement(d,l({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=h;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34652:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var t=r(58168),a=(r(296540),r(15680));const s={title:"MURMUR_HASH3_64",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/hash-functions/murmur-hash3-64",id:"version-2.1/sql-manual/sql-functions/hash-functions/murmur-hash3-64",title:"MURMUR_HASH3_64",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/hash-functions/murmur-hash3-64.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/murmur-hash3-64",permalink:"/docs/2.1/sql-manual/sql-functions/hash-functions/murmur-hash3-64",draft:!1,tags:[],version:"2.1",frontMatter:{title:"MURMUR_HASH3_64",language:"en"},sidebar:"docs",previous:{title:"MURMUR_HASH3_32",permalink:"/docs/2.1/sql-manual/sql-functions/hash-functions/murmur-hash3-32"},next:{title:"XXHASH_32",permalink:"/docs/2.1/sql-manual/sql-functions/hash-functions/xxhash-32"}},u={},i=[{value:"murmur_hash3_64",id:"murmur_hash3_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"murmur_hash3_64"},"murmur_hash3_64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT MURMUR_HASH3_64(VARCHAR input, ...)")),(0,a.yg)("p",null,"Return the 64 bits murmur3 hash of input string."),(0,a.yg)("p",null,"Note: When calculating hash values, it is more recommended to use ",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"murmur_hash3_64"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select murmur_hash3_64(null);\n+-----------------------+\n| murmur_hash3_64(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_64(\"hello\");\n+--------------------------+\n| murmur_hash3_64('hello') |\n+--------------------------+\n|     -3215607508166160593 |\n+--------------------------+\n\nmysql> select murmur_hash3_64(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_64('hello', 'world') |\n+-----------------------------------+\n|               3583109472027628045 |\n+-----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MURMUR_HASH3_64,HASH\n")))}p.isMDXComponent=!0}}]);