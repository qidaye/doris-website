"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[894026],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),y=l,f=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},838468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(58168),l=(t(296540),t(15680));const a={title:"HLL_CARDINALITY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/hll-functions/hll-cardinality",id:"sql-manual/sql-functions/hll-functions/hll-cardinality",title:"HLL_CARDINALITY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/hll-functions/hll-cardinality.md",sourceDirName:"sql-manual/sql-functions/hll-functions",slug:"/sql-manual/sql-functions/hll-functions/hll-cardinality",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hll-functions/hll-cardinality",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL_CARDINALITY",language:"zh-CN"},sidebar:"docs",previous:{title:"XXHASH_64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-64"},next:{title:"HLL_EMPTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hll-functions/hll-empty"}},c={},s=[{value:"HLL_CARDINALITY",id:"hll_cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hll_cardinality"},"HLL_CARDINALITY"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HLL_CARDINALITY(hll)")),(0,l.yg)("p",null,"HLL_CARDINALITY \u7528\u4e8e\u8ba1\u7b97 HLL \u7c7b\u578b\u503c\u7684\u57fa\u6570\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MySQL > select HLL_CARDINALITY(uv_set) from test_uv;\n+---------------------------+\n| hll_cardinality(`uv_set`) |\n+---------------------------+\n|                         3 |\n+---------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"HLL,HLL_CARDINALITY"))}d.isMDXComponent=!0}}]);