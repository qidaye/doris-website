"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[413841],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),f=o,d=p["".concat(c,".").concat(f)]||p[f]||y[f]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},486066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(58168),o=(a(296540),a(15680));const r={title:"External Table Statistics",language:"en"},l=void 0,i={unversionedId:"lakehouse/external-statistics",id:"version-2.1/lakehouse/external-statistics",title:"External Table Statistics",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/external-statistics.md",sourceDirName:"lakehouse",slug:"/lakehouse/external-statistics",permalink:"/docs/2.1/lakehouse/external-statistics",draft:!1,tags:[],version:"2.1",frontMatter:{title:"External Table Statistics",language:"en"},sidebar:"docs",previous:{title:"File Caches",permalink:"/docs/2.1/lakehouse/filecache"},next:{title:"Cloud Service Authentication",permalink:"/docs/2.1/lakehouse/cloud-auth"}},c={},s=[{value:"Property to turn on automatic collection when creating a catalog (default is false)",id:"property-to-turn-on-automatic-collection-when-creating-a-catalog-default-is-false",level:3},{value:"Control automatic collection by modifying the Catalog attribute:",id:"control-automatic-collection-by-modifying-the-catalog-attribute",level:3}],u={toc:s},p="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"external-table-statistics"},"External Table Statistics"),(0,o.yg)("p",null,"The collection method and content of external table statistical information are basically the same as those of internal tables. For detailed information, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.1/query/nereids/statistics"},"statistical information"),". After version 2.0.3, Hive tables support automatic and sampling collection."),(0,o.yg)("h1",{id:"note"},"Note"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Currently (2.0.3) only Hive external tables support automatic and sampling collection. HMS type of Iceberg and Hudi tables, as well as JDBC tables only support manual full collection. Other types of external tables do not support statistics collection yet.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The automatic collection function is turned off by default for the external tables. You need to add attributes to turn it on when creating the external catalog, or enable it by setting the catalog attribute."))),(0,o.yg)("h3",{id:"property-to-turn-on-automatic-collection-when-creating-a-catalog-default-is-false"},"Property to turn on automatic collection when creating a catalog (default is false)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},"'enable.auto.analyze' = 'true'\n")),(0,o.yg)("h3",{id:"control-automatic-collection-by-modifying-the-catalog-attribute"},"Control automatic collection by modifying the Catalog attribute:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='true'); // enable auto collection\nALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='false'); // disable auto collection\n")))}y.isMDXComponent=!0}}]);