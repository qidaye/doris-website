"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[126846],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),h=s(a),m=l,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=m;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n[h]="string"==typeof e?e:l,i[1]=n;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},385735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>s});var r=a(58168),l=(a(296540),a(15680));const o={title:"Apache Doris 2.1.2 just released",description:"Dear community, Apache Doris 2.1.2 has been officially released on April 12, 2024. This version submits several enhancements and bug fixes to further improve the performance and stability.",date:"2024-04-12",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.2.png"},i=void 0,n={permalink:"/blog/release-note-2.1.2",source:"@site/blog/release-note-2.1.2.md",title:"Apache Doris 2.1.2 just released",description:"Dear community, Apache Doris 2.1.2 has been officially released on April 12, 2024. This version submits several enhancements and bug fixes to further improve the performance and stability.",date:"2024-04-12T00:00:00.000Z",formattedDate:"April 12, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.1.2 just released",description:"Dear community, Apache Doris 2.1.2 has been officially released on April 12, 2024. This version submits several enhancements and bug fixes to further improve the performance and stability.",date:"2024-04-12",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.2.png"},prevItem:{title:"Arrow Flight SQL for 10X faster data transfer",permalink:"/blog/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer"},nextItem:{title:"Apache Doris 2.0.8 just released",permalink:"/blog/release-note-2.0.8"}},p={authorsImageUrls:[void 0]},s=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"Upgrade problem",id:"upgrade-problem",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],u={toc:s},h="wrapper";function c(e){let{components:t,...a}=e;return(0,l.yg)(h,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Dear community, Apache Doris 2.1.2 has been officially released on April 12, 2024. This version submits several enhancements and bug fixes to further improve the performance and stability."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"GitHub Release:")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,l.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Set the default value of the ",(0,l.yg)("inlineCode",{parentName:"li"},"data_consistence")," property of EXPORT to partition to make export more stable during load. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32830"},"https://github.com/apache/doris/pull/32830"))),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Some of MySQL Connector (eg, dotnet MySQL.Data) rely on variable's column type to make connection."),(0,l.yg)("p",{parentName:"li"},"eg, select @",(0,l.yg)("a",{parentName:"p",href:"%5B@autocommit%5D(https://github.com/autocommit)"},"@autocommit")," should with column type BIGINT, not BIT, otherwise it will throw error. So we change column type of @",(0,l.yg)("a",{parentName:"p",href:"https://github.com/autocommit"},"@autocommit")," to BIGINT. "))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33282"},"https://github.com/apache/doris/pull/33282"))),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Auto Partition syntax changes, see ",(0,l.yg)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/table-design/data-partition#%E8%87%AA%E5%8A%A8%E5%88%86%E5%8C%BA"},"https://doris.apache.org/zh-CN/docs/table-design/data-partition#%E8%87%AA%E5%8A%A8%E5%88%86%E5%8C%BA"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32737"},"https://github.com/apache/doris/pull/32737"))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Auto Partition prohibits the simultaneous use of Dynamic Partition on a single table.")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33736"},"https://github.com/apache/doris/pull/33736"))),(0,l.yg)("h2",{id:"upgrade-problem"},"Upgrade problem"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Normal workload group is not created when upgrade from 2.0 or other old versions. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33197"},"https://github.com/apache/doris/pull/33197"))),(0,l.yg)("h2",{id:"new-features"},"New features"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Add processlist table in information_schema database, users could use this table to query active connections. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32511"},"https://github.com/apache/doris/pull/32511"))),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Add a new table valued function ",(0,l.yg)("inlineCode",{parentName:"li"},"LOCAL")," to allow access file system like shared storage. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris-website/pull/494"},"https://github.com/apache/doris-website/pull/494"))),(0,l.yg)("h2",{id:"improvements"},"Improvements"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Skip some useless process to make graceful stop more quickly in K8s env. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33212"},"https://github.com/apache/doris/pull/33212"))),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Add rollup table name in profile to help find the mv selection problem. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33137"},"https://github.com/apache/doris/pull/33137"))),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Add test connection function to DB2 database to allow user check the connection when create DB2 Catalog. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33335"},"https://github.com/apache/doris/pull/33335"))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Add DNS Cache for FQDN to accelerate the connect process among BEs in K8s env. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32869"},"https://github.com/apache/doris/pull/32869"))),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"Refresh external table's rowcount async to make the query plan more stable. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32997"},"https://github.com/apache/doris/pull/32997"))),(0,l.yg)("h2",{id:"bug-fixes"},"Bug fixes"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},'Fix Iceberg Catalog of HMS and Hadoop do not support Iceberg properties like "io.manifest.cache-enabled" to enable manifest cache in Iceberg. ')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33113"},"https://github.com/apache/doris/pull/33113"))),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"The offset params in ",(0,l.yg)("inlineCode",{parentName:"li"},"LEAD"),"/",(0,l.yg)("inlineCode",{parentName:"li"},"LAG")," function could use 0 as offset. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33174"},"https://github.com/apache/doris/pull/33174"))),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Fix some timeout issues with load. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33077"},"https://github.com/apache/doris/pull/33077"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33260"},"https://github.com/apache/doris/pull/33260")))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Fix core problem related with ",(0,l.yg)("inlineCode",{parentName:"li"},"ARRAY"),"/",(0,l.yg)("inlineCode",{parentName:"li"},"MAP"),"/",(0,l.yg)("inlineCode",{parentName:"li"},"STRUCT")," compaction process. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33130"},"https://github.com/apache/doris/pull/33130"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33295"},"https://github.com/apache/doris/pull/33295")))),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"Fix runtime filter wait timeout. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33369"},"https://github.com/apache/doris/pull/33369"))),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"Fix ",(0,l.yg)("inlineCode",{parentName:"li"},"unix_timestamp")," core for string input in auto partition. ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32871"},"https://github.com/apache/doris/pull/32871"))))}c.isMDXComponent=!0}}]);