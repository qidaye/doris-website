"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[235265],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},838304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const a={title:"BITMAP_UNION",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-union",id:"sql-manual/sql-functions/bitmap-functions/bitmap-union",title:"BITMAP_UNION",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-union.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-union",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-union",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_UNION",language:"en"},sidebar:"docs",previous:{title:"BITMAP_AND",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-and"},next:{title:"BITMAP_XOR",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-xor"}},u={},p=[{value:"bitmap_union function",id:"bitmap_union-function",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_union-function"},"bitmap_union function"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("p",null,"Aggregate function, used to calculate the grouped bitmap union. Common usage scenarios such as: calculating PV, UV."),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_UNION(BITMAP value)")),(0,i.yg)("p",null,"Enter a set of bitmap values, find the union of this set of bitmap values, and return."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")),(0,i.yg)("p",null,"Combined with the bitmap_count function, the PV data of the web page can be obtained"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")),(0,i.yg)("p",null,"When the user_id field is int, the above query semantics is equivalent to"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select page_id, count(distinct user_id) from table group by page_id;\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_UNION, BITMAP\n")))}m.isMDXComponent=!0}}]);