"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[751740],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},551440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(58168),i=(a(296540),a(15680));const o={title:"Data Partition",language:"en"},r=void 0,l={unversionedId:"data-table/data-partition",id:"version-1.2/data-table/data-partition",title:"Data Partition",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-table/data-partition.md",sourceDirName:"data-table",slug:"/data-table/data-partition",permalink:"/docs/1.2/data-table/data-partition",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Data Partition",language:"en"},sidebar:"docs",previous:{title:"Data Model",permalink:"/docs/1.2/data-table/data-model"},next:{title:"Guidelines for Basic Use",permalink:"/docs/1.2/data-table/basic-usage"}},s={},p=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Row &amp; Column",id:"row--column",level:3},{value:"Tablet &amp; Partition",id:"tablet--partition",level:3},{value:"Data Partitioning",id:"data-partitioning-1",level:2},{value:"Definition of Column",id:"definition-of-column",level:3},{value:"Partitioning and Bucketing",id:"partitioning-and-bucketing",level:3},{value:"List Partitioning",id:"list-partitioning",level:4},{value:"Compound Partitioning vs Single Partitioning",id:"compound-partitioning-vs-single-partitioning",level:4},{value:"PROPERTIES",id:"properties",level:3},{value:"ENGINE",id:"engine",level:3},{value:"Other",id:"other",level:3},{value:"FAQ",id:"faq",level:2},{value:"Table Creation",id:"table-creation",level:3},{value:"More Help",id:"more-help",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"data-partitioning"},"Data Partitioning"),(0,i.yg)("p",null,"This topic is about table creation and data partitioning in Doris, including the common problems in table creation and their solutions."),(0,i.yg)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,i.yg)("p",null,"In Doris, data is logically described in the form of table."),(0,i.yg)("h3",{id:"row--column"},"Row & Column"),(0,i.yg)("p",null,"A table contains rows and columns. "),(0,i.yg)("p",null,"Row refers to a row of data about the user. Column is used to describe different fields in a row of data."),(0,i.yg)("p",null,"Columns can be divided into two categories: Key and Value. From a business perspective, Key and Value correspond to dimension columns and metric columns, respectively. In the Aggregate Model, rows with the same values in Key columns will be aggregated into one row. The way how Value columns are aggregated is specified by the user when the table is built. For more information about the Aggregate Model, please see the ",(0,i.yg)("a",{parentName:"p",href:"../table-design/data-model/overview.md"},"Data Model"),"."),(0,i.yg)("h3",{id:"tablet--partition"},"Tablet & Partition"),(0,i.yg)("p",null,"In the Doris storage engine, user data are horizontally divided into data tablets (also known as data buckets). Each tablet contains several rows of data. The data between the individual tablets do not intersect and is physically stored independently."),(0,i.yg)("p",null,"Tablets are logically attributed to different Partitions. One Tablet belongs to only one Partition, and one Partition contains several Tablets. Since the tablets are physically stored independently, the partitions can be seen as physically independent, too. Tablet is the smallest physical storage unit for data operations such as movement and replication."),(0,i.yg)("p",null,"A Table is formed of multiple Partitions. Partition can be thought of as the smallest logical unit of management. Data import and deletion can be performed on only one Partition."),(0,i.yg)("h2",{id:"data-partitioning-1"},"Data Partitioning"),(0,i.yg)("p",null,"The following illustrates on data partitioning in Doris using the example of a CREATE TABLE operation."),(0,i.yg)("p",null,"CREATE TABLE in Doris is a synchronous command. It returns results after the SQL execution is completed. Successful returns indicate successful table creation. For more information on the syntax, please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"),", or input  the ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")," command. "),(0,i.yg)("p",null,"This section introduces how to create tables in Doris."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'-- Range Partition\n\nCREATE TABLE IF NOT EXISTS example_db.example_range_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User ID",\n    `date` DATE NOT NULL COMMENT "Date when the data are imported",\n    `timestamp` DATETIME NOT NULL COMMENT "Timestamp when the data are imported",\n    `city` VARCHAR(20) COMMENT "User location city",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User gender",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "User last visit time",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "Total user consumption",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "Maximum user dwell time",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "Minimum user dwell time"\n)\nENGINE=olap\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01"),\n    PARTITION `p2018` VALUES [("2018-01-01"), ("2019-01-01"))\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2018-01-01 12:00:00"\n);\n\n\n-- List Partition\n\nCREATE TABLE IF NOT EXISTS example_db.example_list_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User ID",\n    `date` DATE NOT NULL COMMENT "Date when the data are imported",\n    `timestamp` DATETIME NOT NULL COMMENT "Timestamp when the data are imported",\n    `city` VARCHAR(20) COMMENT "User location city",\n    `age` SMALLINT COMMENT "User Age",\n    `sex` TINYINT COMMENT "User gender",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "User last visit time",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "Total user consumption",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "Maximum user dwell time",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "Minimum user dwell time"\n)\nENGINE=olap\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY LIST(`city`)\n(\n    PARTITION `p_cn` VALUES IN ("Beijing", "Shanghai", "Hong Kong"),\n    PARTITION `p_usa` VALUES IN ("New York", "San Francisco"),\n    PARTITION `p_jp` VALUES IN ("Tokyo")\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2018-01-01 12:00:00"\n);\n\n')),(0,i.yg)("h3",{id:"definition-of-column"},"Definition of Column"),(0,i.yg)("p",null," See ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/data-table/data-model"},"Doris Data Model")," for more information."),(0,i.yg)("p",null,"You can view the basic types of columns by executing ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")," in MySQL Client."),(0,i.yg)("p",null,"In the AGGREGATE KEY data model, all columns that are specified with an aggregation type (SUM, REPLACE, MAX, or MIN) are Value columns. The rest are the Key columns."),(0,i.yg)("p",null,"A few suggested rules for defining columns include:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The Key columns must precede all Value columns."),(0,i.yg)("li",{parentName:"ol"},"Try to choose the INT type as much as possible. Because calculations and lookups on INT types are much more efficient than those on strings."),(0,i.yg)("li",{parentName:"ol"},"For the lengths of the INT types, follow the ",(0,i.yg)("strong",{parentName:"li"},"good enough")," principle."),(0,i.yg)("li",{parentName:"ol"},"For the lengths of the VARCHAR and STRING types, also follow the ",(0,i.yg)("strong",{parentName:"li"},"good enough")," principle.")),(0,i.yg)("h3",{id:"partitioning-and-bucketing"},"Partitioning and Bucketing"),(0,i.yg)("p",null,"Doris supports two layers of data partitioning. The first level is Partition, including range partitioning and list partitioning. The second is Bucket (Tablet), which only supports hash partitioning."),(0,i.yg)("p",null,"It is also possible to use one layer of data partitioning. In this case, it only supports data bucketing."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Partition"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can specify one or more columns as the partitioning columns, but they have to be KEY columns. The usage of multi-column partitions is described further below. "),(0,i.yg)("li",{parentName:"ul"},"Regardless of the type of the partitioning columns, double quotes are required for partition values."),(0,i.yg)("li",{parentName:"ul"},"There is no theoretical limit on the number of partitions."),(0,i.yg)("li",{parentName:"ul"},"If users create a table without specifying the partitions, the system will automatically generate a Partition with the same name as the table. This Partition contains all data in the table and is neither visible to users nor modifiable."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Partitions should not have overlapping ranges"),".")),(0,i.yg)("h4",{parentName:"li",id:"range-partitioning"},"Range Partitioning"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Partitioning columns are usually time columns for easy management of old and new data.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Range partitioning supports specifying only the upper bound by ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES LESS THAN (...)"),". The system will use the upper bound of the previous partition as the lower bound of the next partition, and generate a left-closed right-open interval. It also supports specifying both the upper and lower bounds by ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES [...)"),", and generate a left-closed right-open interval.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The following takes the ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES [...)")," method as an example since it is more comprehensible. It shows how the partition ranges change as we use the  ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES LESS THAN (...)")," statement to add or delete partitions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"As in the ",(0,i.yg)("inlineCode",{parentName:"p"},"example_range_tbl")," example above, when the table is created, the following 3 partitions are automatically generated:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"P201701: [MIN_VALUE, 2017-02-01)\nP201702: [2017-02-01, 2017-03-01)\nP201703: [2017-03-01, 2017-04-01)\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'If we add Partition p201705 VALUES LESS THAN ("2017-06-01"), the results will be as follows:'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"P201701: [MIN_VALUE, 2017-02-01)\nP201702: [2017-02-01, 2017-03-01)\nP201703: [2017-03-01, 2017-04-01)\nP201705: [2017-04-01, 2017-06-01)\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Then we delete Partition p201703, the results will be as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"p201701: [MIN_VALUE, 2017-02-01)\np201702: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note that the partition range of p201702 and p201705 has not changed, and there is a gap between the two partitions: [2017-03-01, 2017-04-01). That means, if the imported data is within this gap range, the import would fail."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Now we go on and delete Partition p201702, the results will be as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"p201701: [MIN_VALUE, 2017-02-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"The gap range expands to: [2017-02-01, 2017-04-01)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'Then we add Partition p201702new VALUES LESS THAN ("2017-03-01"), the results will be as follows:'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"p201701: [MIN_VALUE, 2017-02-01)\np201702new: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"The gap range shrinks to: [2017-03-01, 2017-04-01)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'Now we delete Partition p201701 and add Partition p201612 VALUES LESS THAN ("2017-01-01"), the partition result is as follows:'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"p201612: [MIN_VALUE, 2017-01-01)\np201702new: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"This results in a new gap range: [2017-01-01, 2017-02-01)")))))),(0,i.yg)("p",{parentName:"li"},"In summary, the deletion of a partition does not change the range of the existing partitions, but might result in gaps. When a partition is added via the ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES LESS THAN")," statement, the lower bound of one partition is the upper bound of its previous partition."),(0,i.yg)("p",{parentName:"li"},"In addition to the single-column partitioning mentioned above, Range Partitioning also supports ",(0,i.yg)("strong",{parentName:"p"},"multi-column partitioning"),". Examples are as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},' PARTITION BY RANGE(`date`, `id`)\n (\n     PARTITION `p201701_1000` VALUES LESS THAN ("2017-02-01", "1000"),\n     PARTITION `p201702_2000` VALUES LESS THAN ("2017-03-01", "2000"),\n     PARTITION `p201703_all` VALUES LESS THAN ("2017-04-01")\n )\n')),(0,i.yg)("p",{parentName:"li"}," In the above example, we specify ",(0,i.yg)("inlineCode",{parentName:"p"},"date")," (DATE type) and ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," (INT type) as the partitioning columns, so the resulting partitions will be as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'*p201701_1000: [(MIN_VALUE, MIN_VALUE), ("2017-02-01", "1000") )\n*p201702_2000: [("2017-02-01", "1000"), ("2017-03-01", "2000") )\n*p201703_all: [("2017-03-01", "2000"), ("2017-04-01", MIN_VALUE))\n')),(0,i.yg)("p",{parentName:"li"},"Note that in the last partition, the user only specifies the partition value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"date")," column, so the system fills in ",(0,i.yg)("inlineCode",{parentName:"p"},"MIN_VALUE")," as the partition value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," column by default. When data are imported, the system will compare them with the partition values in order, and put the data in their corresponding partitions. Examples are as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"* Data --\x3e Partition\n* 2017-01-01, 200   --\x3e p201701_1000\n* 2017-01-01, 2000  --\x3e p201701_1000\n* 2017-02-01, 100   --\x3e p201701_1000\n* 2017-02-01, 2000  --\x3e p201702_2000\n* 2017-02-15, 5000  --\x3e p201702_2000\n* 2017-03-01, 2000  --\x3e p201703_all\n* 2017-03-10, 1     --\x3e p201703_all\n* 2017-04-01, 1000  --\x3e Unable to import\n* 2017-05-01, 1000  --\x3e Unable to import\n")))),(0,i.yg)("version",{since:"1.2.0"},(0,i.yg)("p",null,"Range partitioning also supports batch partitioning. For example, you can create multiple partitions that are divided by day at a time using the ",(0,i.yg)("inlineCode",{parentName:"p"},'FROM ("2022-01-03") TO ("2022-01-06") INTERVAL 1 DAY'),": 2022-01-03 to 2022-01-06 (not including 2022-01-06), the results will be as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"p20220103:    [2022-01-03,  2022-01-04)\np20220104:    [2022-01-04,  2022-01-05)\np20220105:    [2022-01-05,  2022-01-06)\n"))),(0,i.yg)("h4",{id:"list-partitioning"},"List Partitioning"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The partitioning columns support the ",(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME, CHAR, VARCHAR")," data types, and the partition values are enumeration values. Partitions can be only hit if the data is one of the enumeration values in the target partition.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"List partitioning supports using ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES IN (...) ")," to specify the enumeration values contained in each partition.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The following example illustrates how partitions change when adding or deleting a partition."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"As in the ",(0,i.yg)("inlineCode",{parentName:"p"},"example_list_tbl")," example above, when the table is created, the following three partitions are automatically created."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'p_cn: ("Beijing", "Shanghai", "Hong Kong")\np_usa: ("New York", "San Francisco")\np_jp: ("Tokyo")\n')))))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'If we add Partition p_uk VALUES IN ("London"), the results will be as follows:'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'p_cn: ("Beijing", "Shanghai", "Hong Kong")\np_usa: ("New York", "San Francisco")\np_jp: ("Tokyo")\np_uk: ("London")\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Now we delete Partition p_jp, the results will be as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'p_cn: ("Beijing", "Shanghai", "Hong Kong")\np_usa: ("New York", "San Francisco")\np_jp: ("Tokyo")\np_uk: ("London")\n')),(0,i.yg)("p",{parentName:"li"},"List partitioning also supports ",(0,i.yg)("strong",{parentName:"p"},"multi-column partitioning"),". Examples are as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'PARTITION BY LIST(`id`, `city`)\n(\n    PARTITION `p1_city` VALUES IN (("1", "Beijing"), ("1", "Shanghai")),\n    PARTITION `p2_city` VALUES IN (("2", "Beijing"), ("2", "Shanghai")),\n    PARTITION `p3_city` VALUES IN (("3", "Beijing"), ("3", "Shanghai"))\n)\n')),(0,i.yg)("p",{parentName:"li"},"In the above example, we specify ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," (INT type) and ",(0,i.yg)("inlineCode",{parentName:"p"},"city")," (VARCHAR type) as the partitioning columns, so the resulting partitions will be as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},""))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"p1_city: ",'[("1", "Beijing"), ("1", "Shanghai")]')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"p2_city: ",'[("2", "Beijing"), ("2", "Shanghai")]')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"p3_city: ",'[("3", "Beijing"), ("3", "Shanghai")]'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"\nWhen data are imported, the system will compare them with the partition values in order, and put the data in their corresponding partitions. Examples are as follows:\n")),(0,i.yg)("p",{parentName:"li"},"Data ---\x3e Partition\n1, Beijing  ---\x3e p1_city\n1, Shanghai ---\x3e p1_city\n2, Shanghai ---\x3e p2_city\n3, Beijing  ---\x3e p3_city\n1, Tianjin  ---\x3e Unable to import\n4, Beijing  ---\x3e Unable to import"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"")))),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Bucketing"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If you use the Partition method, the ",(0,i.yg)("inlineCode",{parentName:"p"},"DISTRIBUTED ...")," statement will describe how data are divided among partitions. If you do not use the Partition method, that statement will describe how data of the whole table are divided.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can specify multiple columns as the bucketing columns. In Aggregate and Unique Models, bucketing columns must be Key columns; in the Duplicate Model, bucketing columns can be Key columns and Value columns. Bucketing columns can either be partitioning columns or not.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The choice of bucketing columns is a trade-off between ",(0,i.yg)("strong",{parentName:"p"},"query throughput")," and ",(0,i.yg)("strong",{parentName:"p"},"query concurrency"),":"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"If you choose to specify multiple bucketing columns, the data will be more evenly distributed. However, if the query condition does not include the equivalent conditions for all bucketing columns, the system will scan all buckets, largely increasing the query throughput and decreasing the latency of a single query. This method is suitable for high-throughput, low-concurrency query scenarios."),(0,i.yg)("li",{parentName:"ol"},"If you choose to specify only one or a few bucketing columns, point queries might scan only one bucket. Thus, when multiple point queries are preformed concurrently, they might scan various buckets, with no interaction between the IO operations (especially when the buckets are stored on various disks). This approach is suitable for high-concurrency point query scenarios."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"AutoBucket: Calculates the number of partition buckets based on the amount of data. For partitioned tables, you can determine a bucket based on the amount of data, the number of machines, and the number of disks in the historical partition.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"There is no theoretical limit on the number of buckets.")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Recommendations on the number and data volume for Partitions and Buckets."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The total number of tablets in a table is equal to (Partition num * Bucket num)."),(0,i.yg)("li",{parentName:"ul"},"The recommended number of tablets in a table, regardless of capacity expansion, is slightly more than the number of disks in the entire cluster."),(0,i.yg)("li",{parentName:"ul"},"The data volume of a single tablet does not have an upper or lower limit theoretically, but is recommended to be in the range of 1G - 10G. Overly small data volume of a single tablet can impose a stress on data aggregation and metadata management; while overly large data volume can cause trouble in data migration and completion, and increase the cost of Schema Change or Rollup operation failures (These operations are performed on the Tablet level)."),(0,i.yg)("li",{parentName:"ul"},"For the tablets, if you cannot have the ideal data volume and the ideal quantity at the same time, it is recommended to prioritize the ideal data volume."),(0,i.yg)("li",{parentName:"ul"},"Upon table creation, you specify the same number of Buckets for each Partition. However, when dynamically increasing partitions (",(0,i.yg)("inlineCode",{parentName:"li"},"ADD PARTITION"),"), you can specify the number of Buckets for the new partitions separately. This feature can help you cope with data reduction or expansion. "),(0,i.yg)("li",{parentName:"ul"},"Once you have specified the number of Buckets for a Partition, you may not change it afterwards. Therefore, when determining the number of Buckets, you need to consider the need of cluster expansion in advance. For example, if there are only 3 hosts, and each host has only 1 disk, and you have set the number of Buckets is only set to 3 or less, then no amount of newly added machines can increase concurrency."),(0,i.yg)("li",{parentName:"ul"},"For example, suppose that there are 10 BEs and each BE has one disk, if the total size of a table is 500MB, you can consider dividing it into 4-8 tablets; 5GB: 8-16 tablets; 50GB: 32 tablets; 500GB: you may consider dividing it into partitions, with each partition about 50GB in size, and 16-32 tablets per partition; 5TB: divided into partitions of around 50GB and 16-32 tablets per partition.")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note: You can check the data volume of the table using the ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA"},"show data")," command. Divide the returned result by the number of copies, and you will know the data volume of the table."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"About the settings and usage scenarios of Random Distribution:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"If the OLAP table does not have columns of REPLACE type, set the data bucketing mode of the table to RANDOM. This can avoid severe data skew. (When loading data into the partition corresponding to the table, each batch of data in a single load task will be written into a randomly selected tablet)."),(0,i.yg)("li",{parentName:"ul"},"When the bucketing mode of the table is set to RANDOM, since there are no specified bucketing columns, it is impossible to query only a few buckets, so all buckets in the hit partition will be scanned when querying the table. Thus, this setting is only suitable for aggregate query analysis of the table data as a whole, but not for highly concurrent point queries."),(0,i.yg)("li",{parentName:"ul"},"If the data distribution of the OLAP table is Random Distribution, you can set ",(0,i.yg)("inlineCode",{parentName:"li"},"load to single tablet"),"  to true when importing data. In this way, when importing large amounts of data, in one task, data will be only written in one tablet of the corresponding partition. This can improve both the concurrency and throughput of data import and reduce write amplification caused by data import and compaction, and thus, ensure cluster stability.")))),(0,i.yg)("h4",{id:"compound-partitioning-vs-single-partitioning"},"Compound Partitioning vs Single Partitioning"),(0,i.yg)("p",null,"Compound Partitioning"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The first layer of data partitioning is called Partition. Users can specify a dimension column as the partitioning column (currently only supports columns of INT and TIME types), and specify the value range of each partition."),(0,i.yg)("li",{parentName:"ul"},"The second layer is called Distribution, which means bucketing. Users can perform HASH distribution on data by specifying the number of buckets and one or more dimension columns as the bucketing columns, or perform random distribution on data by setting the mode to Random Distribution.")),(0,i.yg)("p",null,"Compound partitioning is recommended for the following scenarios:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Scenarios with time dimensions or similar dimensions with ordered values, which can be used as partitioning columns. The partitioning granularity can be evaluated based on data import frequency, data volume, etc."),(0,i.yg)("li",{parentName:"ul"},"Scenarios with a need to delete historical data: If, for example, you only need to keep the data of the last N days), you can use compound partitioning so you can delete historical partitions. To remove historical data, you can also send a DELETE statement within the specified partition."),(0,i.yg)("li",{parentName:"ul"},"Scenarios with a need to avoid data skew: you can specify the number of buckets individually for each partition. For example, if you choose to partition the data by day, and the data volume per day varies greatly, you can customize the number of buckets for each partition. For the choice of bucketing column, it is recommended to select the column(s) with variety in values.")),(0,i.yg)("p",null,"Users can also choose for single partitioning, which is about HASH distribution."),(0,i.yg)("h3",{id:"properties"},"PROPERTIES"),(0,i.yg)("p",null,"In the ",(0,i.yg)("inlineCode",{parentName:"p"},"PROPERTIES")," section at the last of the CREATE TABLE statement, you can set the relevant parameters. Please see ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," for a detailed introduction."),(0,i.yg)("h3",{id:"engine"},"ENGINE"),(0,i.yg)("p",null,"In this example, the ENGINE is of OLAP type, which is the default ENGINE type. In Doris, only the OALP ENGINE type is managed and stored by Doris. Other ENGINE types, such as MySQL, Broker, ES, are essentially mappings to tables in other external databases or systems to ensure that Doris can read the data. And Doris itself does not create, manage, or store any tables and data of non-OLAP ENGINE type."),(0,i.yg)("h3",{id:"other"},"Other"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"IF NOT EXISTS")," means to create the table if it is non-existent. Note that the system only checks the existence of table based on the table name, but not compare the schema of the newly created table with the existing ones. So if there exists a table of the same name but different schema, the command will also return, but it does not mean that a new table of a new schema has been created."),(0,i.yg)("h2",{id:"faq"},"FAQ"),(0,i.yg)("h3",{id:"table-creation"},"Table Creation"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"If a syntax error occurs in a long CREATE TABLE statement, the error message may be incomplete. Here is a list of possible syntax errors for your reference in manual touble shooting:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Incorrect syntax. Please use ",(0,i.yg)("inlineCode",{parentName:"li"},"HELP CREATE TABLE;"),"to check the relevant syntax."),(0,i.yg)("li",{parentName:"ul"},"Reserved words. Reserved words in user-defined names should be enclosed in backquotes ``. It is recommended that all user-defined names be enclosed in backquotes."),(0,i.yg)("li",{parentName:"ul"},"Chinese characters or full-width characters. Non-UTF8 encoded Chinese characters, or hidden full-width characters (spaces, punctuation, etc.) can cause syntax errors. It is recommended that you check for these characters using a text editor that can display non-printable characters."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"Failed to create partition [xxx] . Timeout")),(0,i.yg)("p",{parentName:"li"},"In Doris, tables are created in the order of the partitioning granularity. This error prompt may appear when a partition creation task fails, but it could also appear in table creation tasks with no partitioning operations, because, as mentioned earlier, Doris will create an unmodifiable default partition for tables with no partitions specified."),(0,i.yg)("p",{parentName:"li"},"This error usually pops up because the tablet creation goes wrong in BE. You can follow the steps below for troubleshooting:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"In fe.log, find the ",(0,i.yg)("inlineCode",{parentName:"li"},"Failed to create partition")," log of the corresponding time point. In that log, find a number pair that looks like ",(0,i.yg)("inlineCode",{parentName:"li"},"{10001-10010}")," . The first number of the pair is the Backend ID and the second number is the Tablet ID. As for ",(0,i.yg)("inlineCode",{parentName:"li"},"{10001-10010}"),", it means that on Backend ID 10001, the creation of Tablet ID 10010 failed."),(0,i.yg)("li",{parentName:"ol"},"After finding the target Backend, go to the corresponding be.INFO log and find the log of the target tablet, and then check the error message."),(0,i.yg)("li",{parentName:"ol"},"A few common tablet creation failures include but not limited to:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The task is not received by BE. In this case, the tablet ID related information will be found in be.INFO, or the creation is successful in BE but it still reports a failure. To solve the above problems, see ",(0,i.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/install/standard-deployment/"},"Installation and Deployment")," about how to check the connectivity of FE and BE."),(0,i.yg)("li",{parentName:"ul"},"Pre-allocated memory failure. It may be that the length of a row in the table exceeds 100KB."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Too many open files"),". The number of open file descriptors exceeds the Linux system limit. In this case, you need to change the open file descriptor limit of the Linux system.")))),(0,i.yg)("p",{parentName:"li"},"If it is a timeout error, you can set ",(0,i.yg)("inlineCode",{parentName:"p"},"tablet_create_timeout_second=xxx")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"max_create_table_timeout_second=xxx")," in fe.conf. The default value of ",(0,i.yg)("inlineCode",{parentName:"p"},"tablet_create_timeout_second=xxx")," is 1 second, and that of ",(0,i.yg)("inlineCode",{parentName:"p"},"max_create_table_timeout_second=xxx"),"  is 60 seconds. The overall timeout would be min(tablet_create_timeout_second * replication_num, max_create_table_timeout_second). For detailed parameter settings, please check ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/admin-manual/config/fe-config/"},"FE Configuration"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The build table command does not return results for a long time."),(0,i.yg)("p",{parentName:"li"},"Doris's table creation command is a synchronous command. The timeout of this command is currently set to be relatively simple, ie (tablet num * replication num) seconds. If you create more data fragments and have fragment creation failed, it may cause an error to be returned after waiting for a long timeout."),(0,i.yg)("p",{parentName:"li"},"Under normal circumstances, the statement will return in a few seconds or ten seconds. If it is more than one minute, it is recommended to cancel this operation directly and go to the FE or BE log to view the related errors."))),(0,i.yg)("h2",{id:"more-help"},"More Help"),(0,i.yg)("p",null,"For more detailed instructions on data partitioning, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," command manual, or enter ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")," in MySQL Client."))}d.isMDXComponent=!0}}]);