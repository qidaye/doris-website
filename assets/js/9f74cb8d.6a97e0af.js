"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[245868],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const o={title:"Import Analysis",language:"en"},s=void 0,i={unversionedId:"query/query-analysis/import-analysis",id:"version-3.0/query/query-analysis/import-analysis",title:"Import Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query/query-analysis/import-analysis.md",sourceDirName:"query/query-analysis",slug:"/query/query-analysis/import-analysis",permalink:"/docs/query/query-analysis/import-analysis",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Import Analysis",language:"en"},sidebar:"docs",previous:{title:"Query Analysis",permalink:"/docs/query/query-analysis/"},next:{title:"Java UDF",permalink:"/docs/query/udf/java-user-defined-function"}},l={},c=[{value:"Import Plan Tree",id:"import-plan-tree",level:2},{value:"View import Profile",id:"view-import-profile",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"import-analysis"},"Import Analysis"),(0,r.yg)("p",null,"Doris provides a graphical command to help users analyze a specific import more easily. This article describes how to use this feature."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This function is currently only for Broker Load analysis.")),(0,r.yg)("h2",{id:"import-plan-tree"},"Import Plan Tree"),(0,r.yg)("p",null,"If you don't know much about Doris' query plan tree, please read the previous article ",(0,r.yg)("a",{parentName:"p",href:"/docs/query/query-analysis/"},"DORIS/best practices/query analysis"),"."),(0,r.yg)("p",null,"The execution process of a ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/import/broker-load-manual"},"Broker Load")," request is also based on Doris' query framework. A Broker Load job will be split into multiple subtasks based on the number of DATA INFILE clauses in the import request. Each subtask can be regarded as an independent import execution plan. An import plan consists of only one Fragment, which is composed as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502OlapTableSink\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502BrokerScanNode\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",null,"BrokerScanNode is mainly responsible for reading the source data and sending it to OlapTableSink, and OlapTableSink is responsible for sending data to the corresponding node according to the partition and bucketing rules, and the corresponding node is responsible for the actual data writing."),(0,r.yg)("p",null,"The Fragment of the import execution plan will be divided into one or more Instances according to the number of imported source files, the number of BE nodes and other parameters. Each Instance is responsible for part of the data import."),(0,r.yg)("p",null,"The execution plans of multiple subtasks are executed concurrently, and multiple instances of an execution plan are also executed in parallel."),(0,r.yg)("h2",{id:"view-import-profile"},"View import Profile"),(0,r.yg)("p",null,"The user can open the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"is_report_success")," with the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,r.yg)("p",null,"Then submit a Broker Load import request and wait until the import execution completes. Doris will generate a Profile for this import. Profile contains the execution details of importing each subtask and Instance, which helps us analyze import bottlenecks."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Viewing profiles of unsuccessful import jobs is currently not supported.")),(0,r.yg)("p",null,"We can get the Profile list first with the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n                 JobId: 20010\n               QueryId: 980014623046410a-af5d36f23381017f\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: LOAD LABEL xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:48:24\n               EndTime: 2023-03-07 19:50:45\n             TotalTime: 2m21s\n            QueryState: N/A\n               TraceId:\n          AnalysisTime: NULL\n              PlanTime: NULL\n          ScheduleTime: NULL\n       FetchResultTime: NULL\n       WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n                 JobId: N/A\n               QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: insert into xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:49:15\n               EndTime: 2023-03-07 19:49:15\n             TotalTime: 102ms\n            QueryState: OK\n               TraceId:\n          AnalysisTime: 825.277us\n              PlanTime: 4.126ms\n          ScheduleTime: N/A\n       FetchResultTime: 0ns\n       WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n')),(0,r.yg)("p",null,"This command will list all currently saved import profiles. Each line corresponds to one import. where the QueryId column is the ID of the import job. This ID can also be viewed through the SHOW LOAD statement. We can select the QueryId corresponding to the Profile we want to see to see the specific situation."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Viewing a Profile is divided into 3 steps:")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the subtask overview"),(0,r.yg)("p",{parentName:"li"},"View an overview of subtasks with imported jobs by running the following command:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n')),(0,r.yg)("p",null,"As shown in the figure above, it means that the import job ",(0,r.yg)("inlineCode",{parentName:"p"},"980014623046410a-af5d36f23381017f")," has a total of one subtask, in which ActiveTime indicates the execution time of the longest instance in this subtask."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the Instance overview of the specified subtask"),(0,r.yg)("p",{parentName:"li"},"When we find that a subtask takes a long time, we can further check the execution time of each instance of the subtask:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n')),(0,r.yg)("p",null,"This shows the time-consuming of four instances of the subtask 980014623046410a-af5d36f23381017f, and also shows the execution node where the instance is located."),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the specific Instance"),(0,r.yg)("p",{parentName:"li"},"We can continue to view the detailed profile of each operator on a specific Instance:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/980014623046410a-88e260f0c43031f5"\\G\n**************************** 1. row ******************** ******\nInstance:\n      \u250c-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink] \u2502\n      \u2502(Active: 2m17s, non-child: 70.91) \u2502\n      \u2502 - Counters: \u2502\n      \u2502 - CloseWaitTime: 1m53s \u2502\n      \u2502 - ConvertBatchTime: 0ns \u2502\n      \u2502 - MaxAddBatchExecTime: 1m46s \u2502\n      \u2502 - NonBlockingSendTime: 3m11s \u2502\n      \u2502 - NumberBatchAdded: 782 \u2502\n      \u2502 - NumberNodeChannels: 1 \u2502\n      \u2502 - OpenTime: 743.822us \u2502\n      \u2502 - RowsFiltered: 0 \u2502\n      \u2502 - RowsRead: 1.599729M (1599729) \u2502\n      \u2502 - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502 - SendDataTime: 11s761ms \u2502\n      \u2502 - TotalAddBatchExecTime: 1m46s \u2502\n      \u2502 - ValidateDataTime: 9s802ms \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250c------------------------------------------------- ----\u2510\n\u2502[0: BROKER_SCAN_NODE] \u2502\n\u2502(Active: 56s537ms, non-child: 29.06) \u2502\n\u2502 - Counters: \u2502\n\u2502 - BytesDecompressed: 0.00 \u2502\n\u2502 - BytesRead: 5.77 GB \u2502\n\u2502 - DecompressTime: 0ns \u2502\n\u2502 - FileReadTime: 34s263ms \u2502\n\u2502 - MaterializeTupleTime(*): 45s54ms \u2502\n\u2502 - NumDiskAccess: 0 \u2502\n\u2502 - PeakMemoryUsage: 33.03 MB \u2502\n\u2502 - RowsRead: 1.599729M (1599729) \u2502\n\u2502 - RowsReturned: 1.599729M (1599729) \u2502\n\u2502 - RowsReturnedRate: 28.295K /sec \u2502\n\u2502 - TotalRawReadTime(*): 1m20s \u2502\n\u2502 - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502 - WaitScannerTime: 56s528ms \u2502\n\u2514------------------------------------------------- ----\u2518\n')),(0,r.yg)("p",null,"The figure above shows the specific profiles of each operator of Instance 980014623046410a-af5d36f23381017f in subtask 980014623046410a-88e260f0c43031f5."),(0,r.yg)("p",null,"Through the above three steps, we can gradually check the execution bottleneck of an import task."))}m.isMDXComponent=!0}}]);