"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[460088],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),y=a,f=p["".concat(c,".").concat(y)]||p[y]||g[y]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},372653:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(58168),a=(t(296540),t(15680));const o={title:"GROUP_ARRAY_INTERSECT",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/aggregate-functions/group-array-intersect",id:"sql-manual/sql-functions/aggregate-functions/group-array-intersect",title:"GROUP_ARRAY_INTERSECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/group-array-intersect.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group-array-intersect",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/group-array-intersect",draft:!1,tags:[],version:"current",frontMatter:{title:"GROUP_ARRAY_INTERSECT",language:"zh-CN"},sidebar:"docs",previous:{title:"HISTOGRAM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/histogram"},next:{title:"GROUP_BITMAP_XOR",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor"}},c={},l=[{value:"group_array_intersect",id:"group_array_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"group_array_intersect"},"group_array_intersect"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"expr GROUP_ARRAY_INTERSECT(expr)")),(0,a.yg)("p",null,"\u6c42\u51fa\u6240\u6709\u884c\u4e2d\u8f93\u5165\u6570\u7ec4\u4e2d\u7684\u4ea4\u96c6\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> select c_array_string from group_array_intersect_test where id in (18, 20);\n+--------------------------------+\n| c_array_string                 |\n+--------------------------------+\n| ["a", "b", "c", "d", "e", "f"] |\n| ["a", null]                    |\n+--------------------------------+\n2 rows in set (0.02 sec)\n\nmysql> select group_array_intersect(c_array_string) from group_array_intersect_test where id in (18, 20);\n+---------------------------------------+\n| group_array_intersect(c_array_string) |\n+---------------------------------------+\n| ["a"]                                 |\n+---------------------------------------+\n1 row in set (0.03 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"GROUP_ARRAY_INTERSECT, ARRAY"))}g.isMDXComponent=!0}}]);