"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[865161],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var r=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(g,n(n({ref:t},d),{},{components:a})):r.createElement(g,n({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,n[1]=s;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},883844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(58168),o=(a(296540),a(15680));const i={title:"Migrating Data from Other OLAP",language:"en"},n=void 0,s={unversionedId:"data-operate/import/migrate-data-from-other-olap",id:"version-2.1/data-operate/import/migrate-data-from-other-olap",title:"Migrating Data from Other OLAP",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/import/migrate-data-from-other-olap.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/migrate-data-from-other-olap",permalink:"/docs/2.1/data-operate/import/migrate-data-from-other-olap",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Migrating Data from Other OLAP",language:"en"},sidebar:"docs",previous:{title:"Loading Data in JSON Format",permalink:"/docs/2.1/data-operate/import/load-json-format"},next:{title:"Group Commit",permalink:"/docs/2.1/data-operate/import/group-commit-manual"}},l={},p=[{value:"X2Doris",id:"x2doris",level:2},{value:"Support multiple data sources",id:"support-multiple-data-sources",level:3},{value:"Auto table creation",id:"auto-table-creation",level:3},{value:"High speed &amp; stability",id:"high-speed--stability",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,o.yg)(c,(0,r.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To migrate data from other OLAP systems to Doris, you have a variety of options:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},'For systems like Hive/Iceberg/Hudi, you can leverage Multi-Catalog to map them as external tables and then use "Insert Into" to import the data into Doris.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"You can export data from the OLAP system into formats like CSV, and then import the data files into Doris.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"You can also leverage the connectors of the OLAP systems, use tools like Spark / Flink, and then call the corresponding Doris Connector to write data into Doris."))),(0,o.yg)("p",null,"In addition to the above methods, ",(0,o.yg)("a",{parentName:"p",href:"https://www.velodb.io"},"VeloDB"),", the commercial supporter of Apache Doris, provides a free visual data migration tool: X2Doris. Developed by VeloDB, X2Doris is designed to migrate various offline data into Apache Doris. It combines the funtionalities of automatic table creation and data migration. Currently, it supports migrating data to Doris from databases including Apache Doris/Hive/Kudu and StarRocks. The entire process is performed through a visual platform, making data migration simple and easy."),(0,o.yg)("h2",{id:"x2doris"},"X2Doris"),(0,o.yg)("h3",{id:"support-multiple-data-sources"},"Support multiple data sources"),(0,o.yg)("p",null,"As a one-stop data migration tool, X2Doris supports Apache Hive, Apache Kudu, StarRocks, and Apache Doris itself as data source. What's more, there are more data sources such as Greenplum and Druid that are under development and will be released subsequently. Among them, the Hive version already supports Hive 1.x and 2.x, while Doris, StarRocks, Kudu, and other data sources also support multiple different versions."),(0,o.yg)("p",null,"Now, X2Doris is supported migrating data to Apache Doris and VeloDB, including VeloDB Cloud and VeloDB Enterprise. With X2Doris, users can build a complete database migration link from other OLAP systems to Apache Doris, and can also achieve data backup and recovery between different Doris clusters."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"x2doris-Support multiple data sources",src:a(627615).A,width:"3600",height:"2016"})),(0,o.yg)("h3",{id:"auto-table-creation"},"Auto table creation"),(0,o.yg)("p",null,"One of the biggest challenges in data migration is how to create corresponding target tables in Apache Doris for the source tables that need to be migrated. In real business scenarios, there are often thousands of tables stored in Hive, and it would be extremely inefficient and impractical for users to manually create tables and convert corresponding DDL statements."),(0,o.yg)("p",null,"X2Doris has been adapted for this scenario. Taking Hive table migration as an example, when migrating Hive tables, X2Doris automatically creates Duplicate Key model tables (which can also be manually modified) in Apache Doris and reads the metadata information of Hive tables. It automatically identifies partition fields based on field names and types, and if partitions are detected, it prompts for partition mapping. Finally, it directly generates the corresponding Doris target table DDL."),(0,o.yg)("p",null,"When the upstream data source is Doris/StarRocks, X2Doris automatically parses the table model based on the source table information, maps the source table field types to the corresponding target field types, and identifies and processes upstream properties parameters, converting them into attribute parameters for the corresponding target table. In addition, X2Doris has also enhanced support for complex types, enabling data migration for Array, Map, and Bitmap types."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Auto table creation",src:a(171423).A,width:"2546",height:"1642"})),(0,o.yg)("h3",{id:"high-speed--stability"},"High speed & stability"),(0,o.yg)("p",null,"For data writing, X2Doris has specifically optimized the reading process. By optimizing the data batching logic, it further reduces memory usage. Additionally, significant improvements and enhancements have been made to Stream Load write requests, optimizing memory usage and release, further enhancing the speed and stability of data migration."),(0,o.yg)("p",null,"Compared to other similar migration tools, X2Doris offers a performance advantage of approximately 2-10 times. For example, when using a single machine with 1G of memory, other tools take approximately 90 seconds to synchronize 50 million rows of data in full, while X2Doris completes the task in less than 50 seconds, achieving a nearly 100% performance improvement."),(0,o.yg)("p",null,"In a practical large-scale log data migration scenario, with individual data records averaging 1KB in size, a single table containing nearly 100 million records, and a total storage space of approximately 90 GB, X2Doris can complete the full table migration in just 2 minutes, with an average write speed of nearly 800 MB/s."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"High speed &amp; stability",src:a(230641).A,width:"2552",height:"1722"})))}m.isMDXComponent=!0},171423:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/auto-table-creation-ac06668f030ba1420b2f8ef996d50836.jpeg"},230641:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/high-speed-stability-189feb02fa1647afc592b5ed6a98ec59.jpeg"},627615:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/x2doris-22675e76bb657219b9ba926061ec38e5.jpg"}}]);