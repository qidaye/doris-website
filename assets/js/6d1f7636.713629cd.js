"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[701956],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},569483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"TPCH",language:"en"},i=void 0,c={unversionedId:"lakehouse/datalake-analytics/tpch",id:"version-3.0/lakehouse/datalake-analytics/tpch",title:"TPCH",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/datalake-analytics/tpch.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/tpch",permalink:"/docs/lakehouse/datalake-analytics/tpch",draft:!1,tags:[],version:"3.0",frontMatter:{title:"TPCH",language:"en"},sidebar:"docs",previous:{title:"Alibaba Cloud DLF",permalink:"/docs/lakehouse/datalake-analytics/dlf"},next:{title:"TPCDS",permalink:"/docs/lakehouse/datalake-analytics/tpcds"}},l={},s=[{value:"Usage Notes",id:"usage-notes",level:2},{value:"Compiling the TPCH Connector",id:"compiling-the-tpch-connector",level:2},{value:"Deploying the TPCH Connector",id:"deploying-the-tpch-connector",level:2},{value:"Creating the TPCH Catalog",id:"creating-the-tpch-catalog",level:2},{value:"Using the TPCH Catalog",id:"using-the-tpch-catalog",level:2},{value:"Best Practices",id:"best-practices",level:3},{value:"Quickly Build TPCH Test Dataset",id:"quickly-build-tpch-test-dataset",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"usage-notes"},"Usage Notes"),(0,a.yg)("p",null,"TPCH Catalog uses the ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/trino-connector-developer-guide"},"Trino Connector")," compatibility framework and the ",(0,a.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/tpch.html"},"TPCH Connector")," to quickly build TPCH test sets."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This feature is supported starting from Doris version 3.0.0.")),(0,a.yg)("h2",{id:"compiling-the-tpch-connector"},"Compiling the TPCH Connector"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"JDK 17 is required.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/trinodb/trino.git\ngit checkout 435\ncd trino/plugin/trino-tpch\nmvn clean install -DskipTest\n")),(0,a.yg)("p",null,"After compiling, you will find the ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpch-435/")," directory under ",(0,a.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-tpch/target/"),"."),(0,a.yg)("p",null,"You can also directly download the precompiled ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/morningman/trino-connectors/releases/download/trino-connectors/trino-tpch-435.tar.gz"},"trino-tpch-435.tar.gz")," and extract it."),(0,a.yg)("h2",{id:"deploying-the-tpch-connector"},"Deploying the TPCH Connector"),(0,a.yg)("p",null,"Place the ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpch-435/")," directory under the ",(0,a.yg)("inlineCode",{parentName:"p"},"connectors/")," directory in the deployment paths of all FE and BE nodes. (If it does not exist, you can create it manually)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502\xa0\xa0 \u251c\u2500\u2500 trino-tpch-435\n...\n")),(0,a.yg)("p",null,"After deployment, it is recommended to restart the FE and BE nodes to ensure the Connector is loaded correctly."),(0,a.yg)("h2",{id:"creating-the-tpch-catalog"},"Creating the TPCH Catalog"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `tpch` PROPERTIES (\n    "type" = "trino-connector",\n    "trino.connector.name" = "tpch",\n    "trino.tpch.column-naming" = "STANDARD",\n    "trino.tpch.splits-per-node" = "32"\n);\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"tpch.splits-per-node")," property sets the level of concurrency. It is recommended to set it to twice the number of cores per BE node to achieve optimal concurrency and improve data generation efficiency."),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},'"tpch.column-naming" = "STANDARD"'),", the column names in the TPCH table will start with the abbreviation of the table name, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"l_orderkey"),", otherwise, it is ",(0,a.yg)("inlineCode",{parentName:"p"},"orderkey"),"."),(0,a.yg)("h2",{id:"using-the-tpch-catalog"},"Using the TPCH Catalog"),(0,a.yg)("p",null,"The TPCH Catalog includes pre-configured TPCH datasets of different scale factors, which can be viewed using the ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," commands."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SWITCH tpch;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| sf1                |\n| sf100              |\n| sf1000             |\n| sf10000            |\n| sf100000           |\n| sf300              |\n| sf3000             |\n| sf30000            |\n| tiny               |\n+--------------------+\n11 rows in set (0.00 sec)\n\nmysql> USE sf1;\nmysql> SHOW TABLES;\n+---------------+\n| Tables_in_sf1 |\n+---------------+\n| customer      |\n| lineitem      |\n| nation        |\n| orders        |\n| part          |\n| partsupp      |\n| region        |\n| supplier      |\n+---------------+\n8 rows in set (0.00 sec)\n")),(0,a.yg)("p",null,"You can directly query these tables using the SELECT statement."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The data in these pre-configured datasets is not actually stored but generated in real-time during queries. Therefore, these datasets are not suitable for direct benchmarking. They are more appropriate for writing to other target tables (such as Doris internal tables, Hive, Iceberg, and other data sources supported by Doris) via ",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),", after which performance tests can be conducted on the target tables.")),(0,a.yg)("h3",{id:"best-practices"},"Best Practices"),(0,a.yg)("h4",{id:"quickly-build-tpch-test-dataset"},"Quickly Build TPCH Test Dataset"),(0,a.yg)("p",null,"You can quickly build a TPCH test dataset using the CTAS (Create Table As Select) statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE hive.tpch100.customer PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.customer  ;\nCREATE TABLE hive.tpch100.lineitem PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.lineitem  ;\nCREATE TABLE hive.tpch100.nation   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.nation    ;\nCREATE TABLE hive.tpch100.orders   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.orders    ;\nCREATE TABLE hive.tpch100.part     PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.part      ;\nCREATE TABLE hive.tpch100.partsupp PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.partsupp  ;\nCREATE TABLE hive.tpch100.region   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.region    ;\nCREATE TABLE hive.tpch100.supplier PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.supplier  ;\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"On a Doris cluster with 3 BE nodes, each with 16 cores, creating a TPCH 1000 dataset in Hive takes approximately 25 minutes, and TPCH 10000 takes about 4 to 5 hours.")))}d.isMDXComponent=!0}}]);