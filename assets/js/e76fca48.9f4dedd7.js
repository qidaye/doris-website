"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[206191],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var o=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,h=c["".concat(l,".").concat(p)]||c[p]||g[p]||i;return a?o.createElement(h,r(r({ref:t},d),{},{components:a})):o.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},192408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=a(58168),n=(a(296540),a(15680));const i={title:"Best practice in Duyansoft, improving query speed to make the most out of your data",description:"This is about how Duyansoft improved its overall data processing efficiency by optimizing the choice and usage of data warehouses.",date:"2023-02-27",author:"Junfei Liu",tags:["Best Practice"],image:"/images/best-practice-in-duyansoft.png"},r=void 0,s={permalink:"/blog/Improving-Query-Speed-to-Make-the-Most-out-of-Your-Data",source:"@site/blog/Improving-Query-Speed-to-Make-the-Most-out-of-Your-Data.md",title:"Best practice in Duyansoft, improving query speed to make the most out of your data",description:"This is about how Duyansoft improved its overall data processing efficiency by optimizing the choice and usage of data warehouses.",date:"2023-02-27T00:00:00.000Z",formattedDate:"February 27, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Junfei Liu"}],frontMatter:{title:"Best practice in Duyansoft, improving query speed to make the most out of your data",description:"This is about how Duyansoft improved its overall data processing efficiency by optimizing the choice and usage of data warehouses.",date:"2023-02-27",author:"Junfei Liu",tags:["Best Practice"],image:"/images/best-practice-in-duyansoft.png"},prevItem:{title:"Tencent data engineer: why we went from ClickHouse to Apache Doris?",permalink:"/blog/Tencent-Data-Engineers-Why-We-Went-from-ClickHouse-to-Apache-Doris"},nextItem:{title:"Apache Doris announced the official release of version 1.2.2",permalink:"/blog/release-note-1.2.2"}},l={authorsImageUrls:[void 0]},u=[{value:"<strong>Data Model:</strong>",id:"data-model",level:2},{value:"<strong>Data Ingestion:</strong>",id:"data-ingestion",level:2},{value:"<strong>Data Management:</strong>",id:"data-management",level:2},{value:"<strong>Monitoring and Alerting:</strong>",id:"monitoring-and-alerting",level:2}],d={toc:u},c="wrapper";function g(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,o.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Author: Junfei Liu, Senior Architect of Duyansoft")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Duyansoft-use-case-of-Apache-Doris",src:a(565911).A,width:"900",height:"383"})),(0,n.yg)("p",null,"The world is getting more and more value out of data, as exemplified by the currently much-talked-about ChatGPT, which I believe is a robotic data analyst. However, in today\u2019s era, what\u2019s more important than the data itself is the ability to locate your wanted information among all the overflowing data quickly. So in this article, I will talk about how I improved overall data processing efficiency by optimizing the choice and usage of data warehouses."),(0,n.yg)("h1",{id:"too-much-data-on-my-plate"},"Too Much Data on My Plate"),(0,n.yg)("p",null,"The choice of data warehouses was never high on my worry list until 2021. I have been working as a data engineer for a Fintech SaaS provider since its incorporation in 2014. In the company\u2019s infancy, we didn\u2019t have too much data to juggle. We only needed a simple tool for OLTP and business reporting, and the traditional databases would cut the mustard."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"data-processing-pipeline-Duyansoft",src:a(584419).A,width:"1466",height:"590"})),(0,n.yg)("p",null,"But as the company grew, the data we received became overwhelmingly large in volume and increasingly diversified in sources. Every day, we had tons of user accounts logging in and sending myriads of requests. It was like collecting water from a thousand taps to put out a million scattered pieces of fire in a building, except that you must bring the exact amount of water needed for each fire spot. Also, we got more and more emails from our colleagues asking if we could make data analysis easier for them. That\u2019s when the company assembled a big data team to tackle the beast."),(0,n.yg)("p",null,"The first thing we did was to revolutionize our data processing architecture. We used DataHub to collect all our transactional or log data and ingest it into an offline data warehouse for data processing (analyzing, computing. etc.). Then the results would be exported to MySQL and then forwarded to QuickBI to display the reports visually. We also replaced MongoDB with a real-time data warehouse for business queries."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Data-ingestion-ETL-ELT-application",src:a(247560).A,width:"1564",height:"704"})),(0,n.yg)("p",null,"This new architecture worked, but there remained a few pebbles in our shoes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"We wanted faster responses.")," MySQL could be slow in aggregating large tables, but our product guys requested a query response time of fewer than five seconds. So first, we tried to optimize MySQL. Then we also tried to skip MySQL and directly connect the offline data warehouse with QuickBI, hoping that the combination of query acceleration capability of the former and caching of the latter would do the magic. Still, that five-second goal seemed to be unreachable. There was a time when I believed the only perfect solution was for the product team to hire people with more patience."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"We wanted less pain in maintaining dimension tables.")," The offline data warehouse conducted data synchronization every five minutes, making it not applicable for frequent data updates or deletions scenarios. If we needed to maintain dimension tables in it, we would have to filter and deduplicate the data regularly to ensure data consistency. Out of our trouble-averse instinct, we chose not to do so."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"We wanted support for point queries of high concurrency.")," The real-time database that we previously used required up to 500ms to respond to highly concurrent point queries in both columnar storage and row storage, even after optimization. That was not good enough.")),(0,n.yg)("h1",{id:"hit-it-where-it-hurts-most"},"Hit It Where It Hurts Most"),(0,n.yg)("p",null,"In March, 2022, we started our hunt for a better data warehouse. To our disappointment, there was no one-size-fits-all solution. Most of the tools we looked into were only good at one or a few of the tasks, but if we gathered the best performer for each usage scenario, that would add up to a heavy and messy toolkit, which was against instinct."),(0,n.yg)("p",null,"So we decided to solve our biggest headache first: slow response, as it was hurting both the experience of our users and our internal work efficiency."),(0,n.yg)("p",null,"To begin with, we tried to move the largest tables from MySQL to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris"),", a real-time analytical database that supports MySQL protocol. That reduced the query execution time by a factor of eight. Then we tried and used Doris to accommodate more data."),(0,n.yg)("p",null,"As for now, we are using two Doris clusters: one to handle point queries (high QPS) from our users and the other for internal ad-hoc queries and reporting. As a result, users have reported smoother experience and we can provide more features that are used to be bottlenecked by slow query execution. Moving our dimension tables to Doris also brought less data errors and higher development efficiency."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Data-ingestion-ETL-ELT-Doris-application",src:a(487505).A,width:"1356",height:"864"})),(0,n.yg)("p",null,"Both the FE and BE processes of Doris can be scaled out, so tens of PBs of data stored in hundreds of devices can be put into one single cluster. In addition, the two types of processes implement a consistency protocol to ensure service availability and data reliability. This removes dependency on Hadoop and thus saves us the cost of deploying Hadoop clusters."),(0,n.yg)("h1",{id:"tips"},"Tips"),(0,n.yg)("p",null,"Here are a few of our practices to share with you:"),(0,n.yg)("h2",{id:"data-model"},(0,n.yg)("strong",{parentName:"h2"},"Data Model:")),(0,n.yg)("p",null,"Out of the three Doris data models, we find the Unique Model and the Aggregate Model suit our needs most. For example, we use the Unique Model to ensure data consistency while ingesting dimension tables and original tables and the Aggregate Model to import report data."),(0,n.yg)("h2",{id:"data-ingestion"},(0,n.yg)("strong",{parentName:"h2"},"Data Ingestion:")),(0,n.yg)("p",null,"For real-time data ingestion, we use the Flink-Doris-Connector: After our business data, the MySQL-based binlogs, is written into Kafka, it will be parsed by Flink and then loaded into Doris in a real-time manner."),(0,n.yg)("p",null,"For offline data ingestion, we use DataX: This mainly involves the computed report data in our offline data warehouse."),(0,n.yg)("h2",{id:"data-management"},(0,n.yg)("strong",{parentName:"h2"},"Data Management:")),(0,n.yg)("p",null,"We back up our cluster data in a remote storage system via Broker. Then, it can restore the data from the backups to any Doris cluster if needed via the restore command."),(0,n.yg)("h2",{id:"monitoring-and-alerting"},(0,n.yg)("strong",{parentName:"h2"},"Monitoring and Alerting:")),(0,n.yg)("p",null,"In addition to the various monitoring metrics of Doris, we deployed an audit log plugin to keep a closer eye on certain slow SQL of certain users for optimization."),(0,n.yg)("p",null,"Slow SQL queries:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"slow-SQL-queries-monitoring",src:a(651390).A,width:"1080",height:"437"})),(0,n.yg)("p",null,"Some of our often-used monitoring metrics:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"monitoring-metrics",src:a(39079).A,width:"1080",height:"451"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Tradeoff Between Resource Usage and Real-Time Availability:")),(0,n.yg)("p",null,"It turned out that using Flink-Doris-Connector for data ingestion can result in high cluster resource usage, so we increased the interval between each data writing from 3s to 10 or 20s, compromising a little bit on the real-time availability of data in exchange for much less resource usage."),(0,n.yg)("h1",{id:"communication-with-developers"},"Communication with Developers"),(0,n.yg)("p",null,"We have been in close contact with the open source Doris community all the way from our investigation to our adoption of the data warehouse, and we\u2019ve provided a few suggestions to the developers:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Enable Flink-Doris-Connector to support simultaneous writing of multiple tables in a single sink."),(0,n.yg)("li",{parentName:"ul"},"Enable Materialized Views to support Join of multiple tables."),(0,n.yg)("li",{parentName:"ul"},"Optimize the underlying compaction of data and reduce resource usage as much as possible."),(0,n.yg)("li",{parentName:"ul"},"Provide optimization suggestions for slow SQL and warnings for abnormal table creation behaviors.")),(0,n.yg)("p",null,"If the perfect data warehouse is not there to be found, I think providing feedback for the second best is a way to help make one. We are also looking into its commercialized version called SelectDB to see if more custom-tailored advanced features can grease the wheels."),(0,n.yg)("h1",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"As we set out to find a single data warehouse that could serve all our needs, we ended up finding something less than perfect but good enough to improve our query speed by a wide margin and discovered some surprising features of it along the way. So if you wiggle between different choices, you may bet on the one with the thing you want most badly, and taking care of the rest wouldn\u2019t be so hard."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Try")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},(0,n.yg)("strong",{parentName:"a"},"Apache Doris"))," ",(0,n.yg)("strong",{parentName:"p"},"out!")),(0,n.yg)("p",null,"It is an open source real-time analytical database based on MPP architecture. It supports both high-concurrency point queries and high-throughput complex analysis."))}g.isMDXComponent=!0},584419:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/Duyan_1-be681a0c4e3b94cdca6f6476698be732.png"},247560:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/Duyan_2-e87f8780d1f9b74df15d81a94718b378.png"},487505:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/Duyan_3-0abe8037381914932a2d763843a2ed34.png"},651390:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/Duyan_4-4c0a444296e8e0489a68597c56a23c51.png"},39079:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/Duyan_5-fab738ac780df0ae000a0a7238093e35.png"},565911:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/Duyansoft-338cbc4c47491d4110145175cfa2d0ba.png"}}]);