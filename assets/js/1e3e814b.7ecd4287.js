"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[497506],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(296540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,d=c["".concat(u,".").concat(f)]||c[f]||g[f]||a;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},601103:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(58168),o=(n(296540),n(15680));const a={title:"group_bit_or",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/group_bit_or",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/group_bit_or",title:"group_bit_or",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/group_bit_or.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group_bit_or",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_or",draft:!1,tags:[],version:"1.2",frontMatter:{title:"group_bit_or",language:"en"},sidebar:"docs",previous:{title:"group_bit_and",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_and"},next:{title:"group_bit_xor",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_xor"}},u={},s=[{value:"group_bit_or",id:"group_bit_or",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},c="wrapper";function g(e){let{components:r,...n}=e;return(0,o.yg)(c,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"group_bit_or"},"group_bit_or"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"expr GROUP_BIT_OR(expr)")),(0,o.yg)("p",null,"Perform an or calculation on expr, and return a new expr.\nAll ints are supported"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from group_bit;\n+-------+\n| value |\n+-------+\n|     3 |\n|     1 |\n|     2 |\n|     4 |\n+-------+\n4 rows in set (0.02 sec)\n\nmysql> select group_bit_or(value) from group_bit;\n+-----------------------+\n| group_bit_or(`value`) |\n+-----------------------+\n|                     7 |\n+-----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GROUP_BIT_OR,BIT\n")))}g.isMDXComponent=!0}}]);