"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[668918],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"CAST",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/cast",id:"version-1.2/sql-manual/sql-functions/cast",title:"CAST",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/cast.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/cast",permalink:"/docs/1.2/sql-manual/sql-functions/cast",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CAST",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"},next:{title:"DIGITAL-MASKING",permalink:"/docs/1.2/sql-manual/sql-functions/digital-masking"}},s={},c=[{value:"CAST",id:"cast",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cast"},"CAST"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"T cast (input as Type)")),(0,a.yg)("p",null,"Converts input to the specified type"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Turn constant, or a column in a table")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Transferred raw data")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Note: In the import, because the original type is String, when the original data with floating point value is cast, the data will be converted to NULL, such as 12.0. Doris is currently not truncating raw data. *")),(0,a.yg)("p",null,"If you want to force this type of raw data cast to int. Look at the following words:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"CAST"))}y.isMDXComponent=!0}}]);