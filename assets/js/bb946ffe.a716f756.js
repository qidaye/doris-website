"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[670883],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>m});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),u=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=u(e.components);return t.createElement(p.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(n),c=l,m=g["".concat(p,".").concat(c)]||g[c]||y[c]||r;return n?t.createElement(m,i(i({ref:a},s),{},{components:n})):t.createElement(m,i({ref:a},s))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},441763:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=n(58168),l=(n(296540),n(15680));const r={title:"Apache Doris announced the official release of version 1.2.2",description:"Dear community, Apache Doris 1.2.2 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-02-15",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.2-release.png"},i=void 0,o={permalink:"/blog/release-note-1.2.2",source:"@site/blog/release-note-1.2.2.md",title:"Apache Doris announced the official release of version 1.2.2",description:"Dear community, Apache Doris 1.2.2 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.2",description:"Dear community, Apache Doris 1.2.2 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-02-15",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.2-release.png"},prevItem:{title:"Best practice in Duyansoft, improving query speed to make the most out of your data",permalink:"/blog/Improving-Query-Speed-to-Make-the-Most-out-of-Your-Data"},nextItem:{title:"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down",permalink:"/blog/linkedcare"}},p={authorsImageUrls:[void 0]},u=[{value:"New Features",id:"new-features",level:2},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Auto Bucket",id:"auto-bucket",level:3},{value:"New Functions",id:"new-functions",level:3},{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Compaction",id:"compaction",level:3},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Other",id:"other",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Other",id:"other-1",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],s={toc:u},g="wrapper";function y(e){let{components:a,...n}=e;return(0,l.yg)(g,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"new-features"},"New Features"),(0,l.yg)("h3",{id:"lakehouse"},"Lakehouse"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support automatic synchronization of Hive metastore.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support reading the Iceberg Snapshot, and viewing the Snapshot history.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JDBC Catalog supports PostgreSQL, Clickhouse, Oracle, SQLServer")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JDBC Catalog supports Insert operation"))),(0,l.yg)("p",null,"Reference: ",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/")),(0,l.yg)("h3",{id:"auto-bucket"},"Auto Bucket"),(0,l.yg)("p",null," Set and scale the number of buckets for different partitions to keep the number of tablet in a relatively appropriate range."),(0,l.yg)("h3",{id:"new-functions"},"New Functions"),(0,l.yg)("p",null,"Add the new function ",(0,l.yg)("inlineCode",{parentName:"p"},"width_bucket"),". "),(0,l.yg)("p",null,"Reference: ",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description"},"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description")),(0,l.yg)("h2",{id:"behavior-changes"},"Behavior Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Disable BE's page cache by default: ",(0,l.yg)("inlineCode",{parentName:"li"},"disable_storage_page_cache=true"))),(0,l.yg)("p",null,"Turn off this configuration to optimize memory usage and reduce the risk of memory OOM.\nBut it will reduce the query latency of some small queries.\nIf you are sensitive to query latency, or have high concurrency and small query scenarios, you can configure ",(0,l.yg)("em",{parentName:"p"},"disable_storage_page_cache=false")," to enable page cache again."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add new session variable ",(0,l.yg)("inlineCode",{parentName:"li"},"group_by_and_having_use_alias_first"),", used to control whether the group and having clauses use alias.")),(0,l.yg)("p",null,"Reference: ",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/variables"},"https://doris.apache.org/docs/dev/advanced/variables")),(0,l.yg)("h2",{id:"improvements"},"Improvements"),(0,l.yg)("h3",{id:"compaction"},"Compaction"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support ",(0,l.yg)("inlineCode",{parentName:"p"},"Vertical Compaction"),". To optimize the compaction overhead and efficiency of wide tables.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support ",(0,l.yg)("inlineCode",{parentName:"p"},"Segment ompaction"),". Fix -238 and -235 issues with high frequency imports."))),(0,l.yg)("h3",{id:"lakehouse-1"},"Lakehouse"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Hive Catalog can be compatible with Hive version 1/2/3")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Hive Catalog can access JuiceFS based HDFS with Broker.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Iceberg Catalog Support Hive Metastore and Rest Catalog type.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"ES Catalog support _id column mapping\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Optimize Iceberg V2 read performance with large number of delete rows.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support for reading Iceberg tables after Schema Evolution")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Parquet Reader handles column name case correctly."))),(0,l.yg)("h3",{id:"other"},"Other"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support for accessing Hadoop KMS-encrypted HDFS.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Support to cancel the Export export task in progress.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Optimize the performance of ",(0,l.yg)("inlineCode",{parentName:"p"},"explode_split")," with 1x.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Optimize the read performance of nullable columns with 3x.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Optimize some problems of Memtracker, improve memory management accuracy, and optimize memory application."))),(0,l.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed memory leak when loading data with Doris Flink Connector.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the possible thread scheduling problem of BE and reduce the ",(0,l.yg)("inlineCode",{parentName:"p"},"Fragment sent timeout")," error caused by BE thread exhaustion.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed various correctness and precision issues of column type datetimev2/decimalv3.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem data correctness issue with Unique Key Merge-on-Read table.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed various known issues with the Light Schema Change feature.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed various data correctness issues of bitmap type Runtime Filter.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem of poor reading performance of csv reader introduced in version 1.2.1.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem of BE OOM caused by Spark Load data download phase. ")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed possible metadata compatibility issues when upgrading from version 1.1 to version 1.2. ")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the metadata problem when creating JDBC Catalog with Resource.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem of high CPU usage caused by load operation.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem of FE OOM caused by a large number of failed Broker Load jobs.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem of precision loss when loading floating-point types.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fixed the problem of memory leak when useing 2PC stream load"))),(0,l.yg)("h2",{id:"other-1"},"Other"),(0,l.yg)("p",null,"Add metrics to view the total rowset and segment numbers on BE"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"doris_be_all_rowsets_num and doris_be_all_segments_num")),(0,l.yg)("h2",{id:"big-thanks"},"Big Thanks"),(0,l.yg)("p",null,"Thanks to ALL who contributed to this release!"),(0,l.yg)("p",null,"@adonis0147"),(0,l.yg)("p",null,"@AshinGau"),(0,l.yg)("p",null,"@BePPPower"),(0,l.yg)("p",null,"@BiteTheDDDDt"),(0,l.yg)("p",null,"@ByteYue"),(0,l.yg)("p",null,"@caiconghui"),(0,l.yg)("p",null,"@cambyzju"),(0,l.yg)("p",null,"@chenlinzhong"),(0,l.yg)("p",null,"@DarvenDuan"),(0,l.yg)("p",null,"@dataroaring"),(0,l.yg)("p",null,"@Doris-Extras"),(0,l.yg)("p",null,"@dutyu"),(0,l.yg)("p",null,"@englefly"),(0,l.yg)("p",null,"@freemandealer"),(0,l.yg)("p",null,"@Gabriel39"),(0,l.yg)("p",null,"@HappenLee"),(0,l.yg)("p",null,"@Henry2SS"),(0,l.yg)("p",null,"@htyoung"),(0,l.yg)("p",null,"@isHuangXin"),(0,l.yg)("p",null,"@JackDrogon"),(0,l.yg)("p",null,"@jacktengg"),(0,l.yg)("p",null,"@Jibing-Li"),(0,l.yg)("p",null,"@kaka11chen"),(0,l.yg)("p",null,"@Kikyou1997"),(0,l.yg)("p",null,"@Lchangliang"),(0,l.yg)("p",null,"@LemonLiTree"),(0,l.yg)("p",null,"@liaoxin01"),(0,l.yg)("p",null,"@liqing-coder"),(0,l.yg)("p",null,"@luozenglin"),(0,l.yg)("p",null,"@morningman"),(0,l.yg)("p",null,"@morrySnow"),(0,l.yg)("p",null,"@mrhhsg"),(0,l.yg)("p",null,"@nextdreamblue"),(0,l.yg)("p",null,"@qidaye"),(0,l.yg)("p",null,"@qzsee"),(0,l.yg)("p",null,"@spaces-X"),(0,l.yg)("p",null,"@stalary"),(0,l.yg)("p",null,"@starocean999"),(0,l.yg)("p",null,"@weizuo93"),(0,l.yg)("p",null,"@wsjz"),(0,l.yg)("p",null,"@xiaokang"),(0,l.yg)("p",null,"@xinyiZzz"),(0,l.yg)("p",null,"@xy720"),(0,l.yg)("p",null,"@yangzhg"),(0,l.yg)("p",null,"@yiguolei"),(0,l.yg)("p",null,"@yixiutt"),(0,l.yg)("p",null,"@Yukang-Lian"),(0,l.yg)("p",null,"@Yulei-Yang"),(0,l.yg)("p",null,"@zclllyybb"),(0,l.yg)("p",null,"@zddr"),(0,l.yg)("p",null,"@zhangstar333"),(0,l.yg)("p",null,"@zhannngchen"),(0,l.yg)("p",null,"@zy-kkk"))}y.isMDXComponent=!0}}]);