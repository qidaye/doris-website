"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[954577],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),y=i,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},836650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(58168),i=(t(296540),t(15680));const a={title:"cosine_distance",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/distance-functions/cosine-distance",id:"version-3.0/sql-manual/sql-functions/distance-functions/cosine-distance",title:"cosine_distance",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/distance-functions/cosine-distance.md",sourceDirName:"sql-manual/sql-functions/distance-functions",slug:"/sql-manual/sql-functions/distance-functions/cosine-distance",permalink:"/zh-CN/docs/sql-manual/sql-functions/distance-functions/cosine-distance",draft:!1,tags:[],version:"3.0",frontMatter:{title:"cosine_distance",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_IPV6_OR_NULL",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-null"},next:{title:"inner_product",permalink:"/zh-CN/docs/sql-manual/sql-functions/distance-functions/inner-product"}},s={},l=[{value:"cosine_distance",id:"cosine_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"cosine_distance"},"cosine_distance"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE cosine_distance(ARRAY<T> array1, ARRAY<T> array2)\n")),(0,i.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u5411\u91cf\uff08\u5411\u91cf\u503c\u4e3a\u5750\u6807\uff09\u4e4b\u95f4\u7684\u4f59\u5f26\u8ddd\u79bb\n\u5982\u679c\u8f93\u5165array\u4e3aNULL\uff0c\u6216\u8005array\u4e2d\u4efb\u4f55\u5143\u7d20\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u7ec4\u7684\u5b50\u7c7b\u578b\u652f\u6301\uff1aTINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE"),(0,i.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u7ec4array1\u548carray2\uff0c\u5143\u7d20\u6570\u91cf\u9700\u4fdd\u6301\u4e00\u81f4")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sql> SELECT cosine_distance([1, 2], [2, 3]);\n+-------------------------------------------+\n| cosine_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+-------------------------------------------+\n|                     0.0077221232863322609 |\n+-------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"COSINE_DISTANCE,DISTANCE,COSINE,ARRAY\n")))}d.isMDXComponent=!0}}]);