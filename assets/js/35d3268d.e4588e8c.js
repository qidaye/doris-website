"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[757004],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var o=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,y=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return a?o.createElement(y,r(r({ref:t},d),{},{components:a})):o.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},335787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=a(58168),n=(a(296540),a(15680));const i={title:"Cold hot separation",language:"en"},r=void 0,l={unversionedId:"advanced/cold_hot_separation",id:"version-1.2/advanced/cold_hot_separation",title:"Cold hot separation",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/advanced/cold_hot_separation.md",sourceDirName:"advanced",slug:"/advanced/cold_hot_separation",permalink:"/docs/1.2/advanced/cold_hot_separation",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Cold hot separation",language:"en"},sidebar:"docs",previous:{title:"File Manager",permalink:"/docs/1.2/advanced/small-file-mgr"},next:{title:"Compute Node",permalink:"/docs/1.2/advanced/compute_node"}},c={},s=[{value:"Demand scenario",id:"demand-scenario",level:2},{value:"Solution",id:"solution",level:2},{value:"Storage policy",id:"storage-policy",level:2},{value:"Some restrictions",id:"some-restrictions",level:3},{value:"Show size of objects occupied by cold data",id:"show-size-of-objects-occupied-by-cold-data",level:2},{value:"cold data cache",id:"cold-data-cache",level:2},{value:"Unfinished Matters",id:"unfinished-matters",level:2}],d={toc:s},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"experimental-cold-hot-separation"},"[Experimental]"," Cold hot separation"),(0,n.yg)("h2",{id:"demand-scenario"},"Demand scenario"),(0,n.yg)("p",null,"A big usage scenario in the future is similar to the es log storage. In the log scenario, the data will be cut by date. Many data are cold data, with few queries. Therefore, the storage cost of such data needs to be reduced. From the perspective of saving storage costs"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The price of ordinary cloud disks of cloud manufacturers is higher than that of object storage"),(0,n.yg)("li",{parentName:"ol"},"In the actual online use of the doris cluster, the utilization rate of ordinary cloud disks cannot reach 100%"),(0,n.yg)("li",{parentName:"ol"},"Cloud disk is not paid on demand, but object storage can be paid on demand"),(0,n.yg)("li",{parentName:"ol"},"High availability based on ordinary cloud disks requires multiple replicas, and a replica migration is required for a replica exception. This problem does not exist when data is placed on the object store, because the object store is shared\u3002")),(0,n.yg)("h2",{id:"solution"},"Solution"),(0,n.yg)("p",null,"Set the freeze time on the partition level to indicate how long the partition will be frozen, and define the location of remote storage stored after the freeze. On the be, the daemon thread will periodically determine whether the table needs to be frozen. If it does, it will upload the data to s3."),(0,n.yg)("p",null,"The cold and hot separation supports all doris functions, but only places some data on object storage to save costs without sacrificing functions. Therefore, it has the following characteristics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"When cold data is stored on object storage, users need not worry about data consistency and data security"),(0,n.yg)("li",{parentName:"ul"},"Flexible freeze policy, cooling remote storage property can be applied to table and partition levels"),(0,n.yg)("li",{parentName:"ul"},"Users query data without paying attention to the data distribution location. If the data is not local, they will pull the data on the object and cache it to be local"),(0,n.yg)("li",{parentName:"ul"},"Optimization of replica clone. If the stored data is on the object, the replica clone does not need to pull the stored data locally"),(0,n.yg)("li",{parentName:"ul"},"Remote object space recycling recycler. If the table and partition are deleted, or the space is wasted due to abnormal conditions in the cold and hot separation process, the recycler thread will periodically recycle, saving storage resources"),(0,n.yg)("li",{parentName:"ul"},"Cache optimization, which caches the accessed cold data to be local, achieving the query performance of non cold and hot separation"),(0,n.yg)("li",{parentName:"ul"},"Be thread pool optimization, distinguish whether the data source is local or object storage, and prevent the delay of reading objects from affecting query performance"),(0,n.yg)("li",{parentName:"ul"},"newly created materialized view would inherit storage policy from it's base table's correspoding partition")),(0,n.yg)("h2",{id:"storage-policy"},"Storage policy"),(0,n.yg)("p",null,"The storage policy is the entry to use the cold and hot separation function. Users only need to associate a storage policy with a table or partition during table creation or doris use. that is, they can use the cold and hot separation function."),(0,n.yg)("version",{since:"dev"})," When creating an S3 RESOURCE, the S3 remote link verification will be performed to ensure that the RESOURCE is created correctly.",(0,n.yg)("p",null,"In addition, fe configuration needs to be added: ",(0,n.yg)("inlineCode",{parentName:"p"},"enable_storage_policy=true")),(0,n.yg)("p",null,"For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "AWS_ENDPOINT" = "bj.s3.com",\n    "AWS_REGION" = "bj",\n    "AWS_BUCKET" = "test-bucket",\n    "AWS_ROOT_PATH" = "path/to/root",\n    "AWS_ACCESS_KEY" = "bbb",\n    "AWS_SECRET_KEY" = "aaaa",\n    "AWS_MAX_CONNECTIONS" = "50",\n    "AWS_REQUEST_TIMEOUT_MS" = "3000",\n    "AWS_CONNECTION_TIMEOUT_MS" = "1000"\n);\n\nCREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "storage_policy" = "test_policy"\n);\n')),(0,n.yg)("p",null,"Or for an existing table, associate the storage policy"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n')),(0,n.yg)("p",null,"Or associate a storage policy with an existing partition"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n')),(0,n.yg)("p",null,"For details, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"resource"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},"policy"),", create table, alter and other documents in the docs directory"),(0,n.yg)("h3",{id:"some-restrictions"},"Some restrictions"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A single table or a single partition can only be associated with one storage policy. After association, the storage policy cannot be dropped"),(0,n.yg)("li",{parentName:"ul"},"The object information associated with the storage policy does not support modifying the data storage path information, such as bucket, endpoint, and root_ Path and other information"),(0,n.yg)("li",{parentName:"ul"},"Currently, the storage policy only supports creation and modification, not deletion")),(0,n.yg)("h2",{id:"show-size-of-objects-occupied-by-cold-data"},"Show size of objects occupied by cold data"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Through show proc '/backends', you can view the size of each object being uploaded to, and the RemoteUsedCapacity item.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Through show tables from tableName, you can view the object size occupied by each table, and the RemoteDataSize item."))),(0,n.yg)("h2",{id:"cold-data-cache"},"cold data cache"),(0,n.yg)("p",null,"As above, cold data introduces the cache in order to optimize query performance. After the first hit after cooling, Doris will reload the cooled data to be's local disk. The cache has the following characteristics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The cache is actually stored on the be local disk and does not occupy memory."),(0,n.yg)("li",{parentName:"ul"},"the cache can limit expansion and clean up data through LRU"),(0,n.yg)("li",{parentName:"ul"},"The be parameter ",(0,n.yg)("inlineCode",{parentName:"li"},"file_cache_alive_time_sec")," can set the maximum storage time of the cache data after it has not been accessed. The default is 604800, which is one week."),(0,n.yg)("li",{parentName:"ul"},"The be parameter ",(0,n.yg)("inlineCode",{parentName:"li"},"file_cache_max_size_per_disk")," can set the disk size occupied by the cache. Once this setting is exceeded, the cache that has not been accessed for the longest time will be deleted. The default is 0, means no limit to the size, unit: byte."),(0,n.yg)("li",{parentName:"ul"},"The be parameter ",(0,n.yg)("inlineCode",{parentName:"li"},"file_cache_type")," is optional ",(0,n.yg)("inlineCode",{parentName:"li"},"sub_file_cache")," (segment the remote file for local caching) and ",(0,n.yg)("inlineCode",{parentName:"li"},"whole_file_cache"),' (the entire remote file for local caching), the default is "", means no file is cached, please set it when caching is required this parameter.')),(0,n.yg)("h2",{id:"unfinished-matters"},"Unfinished Matters"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"After the data is frozen, there are new data updates or imports, etc. The compression has not been processed at present."),(0,n.yg)("li",{parentName:"ul"},"The schema change operation after the data is frozen is not supported at present.")))}h.isMDXComponent=!0}}]);