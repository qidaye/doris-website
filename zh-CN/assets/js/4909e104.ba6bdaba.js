"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[631969],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=l,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?t.createElement(y,o(o({ref:n},c),{},{components:r})):t.createElement(y,o({ref:n},c))}));function y(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},211710:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(58168),l=(r(296540),r(15680));const a={title:"numbers",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/numbers",id:"version-1.2/sql-manual/sql-functions/table-functions/numbers",title:"numbers",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/table-functions/numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/numbers",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/numbers",draft:!1,tags:[],version:"1.2",frontMatter:{title:"numbers",language:"zh-CN"},sidebar:"docs",previous:{title:"outer\u7ec4\u5408\u5668",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/outer-combinator"},next:{title:"explode_numbers",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/explode-numbers"}},u={},s=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function m(e){let{components:n,...r}=e;return(0,l.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"numbers"},(0,l.yg)("inlineCode",{parentName:"h2"},"numbers")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210\u4e00\u5f20\u53ea\u542b\u6709\u4e00\u5217\u7684\u4e34\u65f6\u8868\uff0c\u5217\u540d\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"number"),"\uff0c\u884c\u7684\u503c\u4e3a[0,n)\u3002"),(0,l.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'numbers(\n  "number" = "n",\n  "backend_num" = "m"\n  );\n')),(0,l.yg)("p",null,"\u53c2\u6570\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"number"),": \u4ee3\u8868\u751f\u6210[0,n)\u7684\u884c\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"backend_num"),": \u53ef\u9009\u53c2\u6570,\u4ee3\u8868",(0,l.yg)("inlineCode",{parentName:"li"},"m"),"\u4e2abe\u8282\u70b9\u540c\u65f6\u6267\u884c\u8be5\u51fd\u6570\uff08\u9700\u8981\u90e8\u7f72\u591a\u4e2abe\uff09\u3002")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'mysql> select * from numbers("number" = "10");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n|      5 |\n|      6 |\n|      7 |\n|      8 |\n|      9 |\n+--------+\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"numbers\n")))}m.isMDXComponent=!0}}]);