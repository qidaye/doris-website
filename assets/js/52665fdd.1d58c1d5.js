"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[161131],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},687121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(58168),l=(n(296540),n(15680));const o={title:"Approximate Deduplication Using HLL",language:"en"},i=void 0,r={unversionedId:"query/duplicate/using-hll",id:"version-3.0/query/duplicate/using-hll",title:"Approximate Deduplication Using HLL",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query/duplicate/using-hll.md",sourceDirName:"query/duplicate",slug:"/query/duplicate/using-hll",permalink:"/docs/query/duplicate/using-hll",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Approximate Deduplication Using HLL",language:"en"},sidebar:"docs",previous:{title:"Orthogonal BITMAP Calculation",permalink:"/docs/query/duplicate/orthogonal-bitmap-manual"},next:{title:"High-Concurrency Point Query",permalink:"/docs/query/high-concurrent-point-query"}},s={},u=[{value:"HLL approximate deduplication",id:"hll-approximate-deduplication",level:2},{value:"What is HyperLogLog",id:"what-is-hyperloglog",level:2},{value:"Doris HLL Function",id:"doris-hll-function",level:2},{value:"How to use Doris HLL",id:"how-to-use-doris-hll",level:2},{value:"Create a table with hll column",id:"create-a-table-with-hll-column",level:3},{value:"Import Data",id:"import-data",level:3},{value:"Query data",id:"query-data",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hll-approximate-deduplication"},"HLL approximate deduplication"),(0,l.yg)("p",null,"In actual business scenarios, with the increasing amount of business data, the pressure on data deduplication is also increasing. When the data reaches a certain scale, the cost of using accurate deduplication is also increasing. If it is acceptable, it is a very good way to achieve fast deduplication and reduce computational pressure through approximate algorithms. This article mainly introduces HyperLogLog (HLL for short) provided by Doris as an approximate deduplication algorithm."),(0,l.yg)("p",null,"The characteristic of HLL is that it has excellent space complexity O(mloglogn), time complexity is O(n), and the error of the calculation result can be controlled at about 1%-2%. The error is related to the size of the data set and the ha related to the Hierarchy function."),(0,l.yg)("h2",{id:"what-is-hyperloglog"},"What is HyperLogLog"),(0,l.yg)("p",null,"It is an upgraded version of the LogLog algorithm, and its role is to provide imprecise deduplication counts. Its mathematical basis is the ",(0,l.yg)("strong",{parentName:"p"},"Bernoulli test"),"."),(0,l.yg)("p",null,"Assuming that the coin has both heads and tails, the probability of the coin being flipped up and down is 50%. Keep flipping the coin until it comes up heads, which we record as a full trial."),(0,l.yg)("p",null,"Then for multiple Bernoulli trials, assume that the number of times is n. It means that there are n times of heads. Suppose the number of tosses experienced per Bernoulli trial is k. For the first Bernoulli trial, the number of times is set to k1, and so on, the nth time corresponds to kn."),(0,l.yg)("p",null,"Among them, for these n Bernoulli trials, there must be a maximum number of tosses k. For example, after 12 tosses, a head will appear, then this is called k_max, which represents the maximum number of tosses."),(0,l.yg)("p",null,"Bernoulli's experiment can easily draw the following conclusions:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"No number of throws for n Bernoulli processes is greater than k_max."),(0,l.yg)("li",{parentName:"ul"},"n Bernoulli processes with at least one throw equal to k_max")),(0,l.yg)("p",null,"Finally, combined with the method of maximum likelihood estimation, it is found that there is an estimated correlation between n and k_max: n = 2^k_max. ",(0,l.yg)("strong",{parentName:"p"},"When we only record k_max, we can estimate how many pieces of data there are in total, that is, the cardinality. ")),(0,l.yg)("p",null,"Suppose the test results are as follows:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"1st trial: 3 tosses before it turns heads, at this time k=3, n=1"),(0,l.yg)("li",{parentName:"ul"},"2nd trial: Heads appear after 2 tosses, at this time k=2, n=2"),(0,l.yg)("li",{parentName:"ul"},"The 3rd trial: 6 tosses before the heads appear, at this time k=6, n=3"),(0,l.yg)("li",{parentName:"ul"},"The nth trial: it took 12 tosses to get heads, at this point we estimate, n = 2^12")),(0,l.yg)("p",null,"Take the first three groups of experiments in the above example, then k_max = 6, and finally n=3, we put it into the estimation formula, obviously: 3 \u2260 2^6 . That is to say, when the number of trials is small, the error of this estimation method is very large."),(0,l.yg)("p",null,"These three sets of trials, we call one round of estimation. If only one round is performed, when n is large enough, the estimated error rate will be relatively reduced, but still not small enough."),(0,l.yg)("h2",{id:"doris-hll-function"},"Doris HLL Function"),(0,l.yg)("p",null,"HLL is an engineering implementation based on the HyperLogLog algorithm. It is used to save the intermediate results of the HyperLogLog calculation process. It can only be used as the value column type of the table to continuously reduce the amount of data through aggregation."),(0,l.yg)("p",null,"To achieve the purpose of speeding up the query, based on it is an estimated result, the error is about 1%, the hll column is generated by other columns or the data in the imported data, and the hll_hash function is used when importing"),(0,l.yg)("p",null,"To specify which column in the data is used to generate the hll column, it is often used to replace count distinct, and is used to quickly calculate uv in business by combining rollup"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,l.yg)("p",null,"This function is an aggregate function that computes a cardinality estimate for all data that satisfies the condition."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HLL_CARDINALITY(hll)")),(0,l.yg)("p",null,"This function is used to calculate the cardinality estimate for a single hll column"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HLL_HASH(column_name)")),(0,l.yg)("p",null,"Generate HLL column type for insert or import, see related instructions for import usage"),(0,l.yg)("h2",{id:"how-to-use-doris-hll"},"How to use Doris HLL"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"When using HLL to deduplicate, you need to set the target column type to HLL and the aggregate function to HLL_UNION in the table creation statement"),(0,l.yg)("li",{parentName:"ol"},"Columns of HLL type cannot be used as Key columns"),(0,l.yg)("li",{parentName:"ol"},"The user does not need to specify the length and default value, the length is controlled within the system according to the degree of data aggregation")),(0,l.yg)("h3",{id:"create-a-table-with-hll-column"},"Create a table with hll column"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'create table test_hll(\n    dt date,\n    id int,\n    name char(10),\n    province char(10),\n    os char(10),\n    pv hll hll_union\n)\nAggregate KEY (dt,id,name,province,os)\ndistributed by hash(id) buckets 10\nPROPERTIES(\n    "replication_num" = "1",\n    "in_memory"="false"\n);\n')),(0,l.yg)("h3",{id:"import-data"},"Import Data"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Stream load Import"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "label:label_test_hll_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://fe_IP:8030/api/demo/test_hll/_stream_load\n')),(0,l.yg)("p",{parentName:"li"}," The sample data is as follows (test_hll.csv):"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"2022-05-05,10001,Testing01,Beijing,Windows  \n2022-05-05,10002,Testing01,Beijing,Linux  \n2022-05-05,10003,Testing01,Beijing,MacOS  \n2022-05-05,10004,Testing01,Hebei,Windows  \n2022-05-06,10001,Testing01,Shanghai,Windows  \n2022-05-06,10002,Testing01,Shanghai,Linux  \n2022-05-06,10003,Testing01,Jiangsu,MacOS  \n2022-05-06,10004,Testing01,Shaanxi,Windows\n")),(0,l.yg)("p",{parentName:"li"}," The import result is as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},'# curl --location-trusted -u root: -H "label:label_test_hll_load"     -H "column_separator:,"     -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://127.0.0.1:8030/api/demo/test_hll/_stream_load\n\n{\n    "TxnId": 693,\n    "Label": "label_test_hll_load",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 8,\n    "NumberLoadedRows": 8,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 320,\n    "LoadTimeMs": 23,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 9,\n    "CommitAndPublishTimeMs": 11\n}\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Broker Load"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'LOAD LABEL demo.test_hlllabel\n (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris_test_hll/data/input/file")\n    INTO TABLE `test_hll`\n    COLUMNS TERMINATED BY ","\n    (dt,id,name,province,os)\n    SET (\n      pv = HLL_HASH(id)\n    )\n );\n')),(0,l.yg)("h3",{id:"query-data"},"Query data"),(0,l.yg)("p",null,"HLL columns do not allow direct query of the original value, but can only be queried through the HLL aggregate function."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Find the total PV")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select HLL_UNION_AGG(pv) from test_hll;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n+---------------------+\n1 row in set (0.00 sec)\n")),(0,l.yg)("p",null,"Equivalent to:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT COUNT(DISTINCT pv) FROM test_hll;\n+----------------------+\n| count(DISTINCT `pv`) |\n+----------------------+\n|                    4 |\n+----------------------+\n1 row in set (0.01 sec)\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Find the PV of each day")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select HLL_UNION_AGG(pv) from test_hll group by dt;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n|                   4 |\n+---------------------+\n2 rows in set (0.01 sec)\n")))}h.isMDXComponent=!0}}]);