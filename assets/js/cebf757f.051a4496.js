"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[361320],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),y=a,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},570372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(58168),a=(t(296540),t(15680));const i={title:"cosine_distance",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/distance-functions/cosine-distance",id:"sql-manual/sql-functions/distance-functions/cosine-distance",title:"cosine_distance",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/distance-functions/cosine-distance.md",sourceDirName:"sql-manual/sql-functions/distance-functions",slug:"/sql-manual/sql-functions/distance-functions/cosine-distance",permalink:"/docs/dev/sql-manual/sql-functions/distance-functions/cosine-distance",draft:!1,tags:[],version:"current",frontMatter:{title:"cosine_distance",language:"en"},sidebar:"docs",previous:{title:"TO_IPV6_OR_NULL",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6-or-null"},next:{title:"inner_product",permalink:"/docs/dev/sql-manual/sql-functions/distance-functions/inner-product"}},c={},l=[{value:"cosine_distance",id:"cosine_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cosine_distance"},"cosine_distance"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE cosine_distance(ARRAY<T> array1, ARRAY<T> array2)\n")),(0,a.yg)("p",null,"Calculates the cosine distance between two vectors (the values of the vectors are the coordinates).\nReturn NULL if input array is NULL or any element of array is NULL."),(0,a.yg)("h4",{id:"notice"},"Notice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nested type of input array support: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE"),(0,a.yg)("li",{parentName:"ul"},"input array1 and array2 should have the same element size")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sql> SELECT cosine_distance([1, 2], [2, 3]);\n+-------------------------------------------+\n| cosine_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+-------------------------------------------+\n|                     0.0077221232863322609 |\n+-------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"COSINE_DISTANCE,DISTANCE,COSINE,ARRAY\n")))}p.isMDXComponent=!0}}]);