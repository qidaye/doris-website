"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[862482],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>d});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),i=s(a),y=l,d=i["".concat(p,".").concat(y)]||i[y]||g[y]||r;return a?t.createElement(d,o(o({ref:n},c),{},{components:a})):t.createElement(d,o({ref:n},c))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=y;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[i]="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},602977:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var t=a(58168),l=(a(296540),a(15680));const r={title:"\u4e3b\u952e\u6a21\u578b\u7684\u66f4\u65b0\u4e8b\u52a1",language:"zh-CN"},o=void 0,u={unversionedId:"data-operate/update/unique-update-transaction",id:"data-operate/update/unique-update-transaction",title:"\u4e3b\u952e\u6a21\u578b\u7684\u66f4\u65b0\u4e8b\u52a1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/update/unique-update-transaction.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/unique-update-transaction",permalink:"/zh-CN/docs/dev/data-operate/update/unique-update-transaction",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e3b\u952e\u6a21\u578b\u7684\u66f4\u65b0\u4e8b\u52a1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u805a\u5408\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0",permalink:"/zh-CN/docs/dev/data-operate/update/update-of-aggregate-model"},next:{title:"Delete \u64cd\u4f5c",permalink:"/zh-CN/docs/dev/data-operate/delete/delete-manual"}},p={},s=[{value:"Update \u5e76\u53d1\u63a7\u5236",id:"update-\u5e76\u53d1\u63a7\u5236",level:2},{value:"Sequence \u5217",id:"sequence-\u5217",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:3},{value:"\u4f7f\u7528\u8bed\u6cd5",id:"\u4f7f\u7528\u8bed\u6cd5",level:3},{value:"\u542f\u7528 sequence column \u652f\u6301",id:"\u542f\u7528-sequence-column-\u652f\u6301",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}],c={toc:s},i="wrapper";function g(e){let{components:n,...a}=e;return(0,l.yg)(i,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"update-\u5e76\u53d1\u63a7\u5236"},"Update \u5e76\u53d1\u63a7\u5236"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u4e0d\u5141\u8bb8\u540c\u4e00\u65f6\u95f4\u5bf9\u540c\u4e00\u5f20\u8868\u5e76\u53d1\u8fdb\u884c\u591a\u4e2a Update \u64cd\u4f5c\u3002"),(0,l.yg)("p",null,"\u4e3b\u8981\u539f\u56e0\u662f\uff0cDoris \u76ee\u524d\u652f\u6301\u7684\u662f\u884c\u66f4\u65b0\uff0c\u8fd9\u610f\u5473\u7740\uff0c\u5373\u4f7f\u7528\u6237\u58f0\u660e\u7684\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"SET v2 = 1"),"\uff0c\u5b9e\u9645\u4e0a\uff0c\u5176\u4ed6\u6240\u6709\u7684 Value \u5217\u4e5f\u4f1a\u88ab\u8986\u76d6\u4e00\u904d\uff08\u5c3d\u7ba1\u503c\u6ca1\u6709\u53d8\u5316\uff09\u3002"),(0,l.yg)("p",null,"\u8fd9\u5c31\u4f1a\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u5982\u679c\u540c\u65f6\u6709\u4e24\u4e2a Update \u64cd\u4f5c\u5bf9\u540c\u4e00\u884c\u8fdb\u884c\u66f4\u65b0\uff0c\u90a3\u4e48\u5176\u884c\u4e3a\u53ef\u80fd\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u4e5f\u5c31\u662f\u53ef\u80fd\u5b58\u5728\u810f\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u4f46\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u5982\u679c\u7528\u6237\u81ea\u5df1\u53ef\u4ee5\u4fdd\u8bc1\u5373\u4f7f\u5e76\u53d1\u66f4\u65b0\uff0c\u4e5f\u4e0d\u4f1a\u540c\u65f6\u5bf9\u540c\u4e00\u884c\u8fdb\u884c\u64cd\u4f5c\u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u624b\u52a8\u6253\u5f00\u5e76\u53d1\u9650\u5236\u3002\u901a\u8fc7\u4fee\u6539 FE \u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_concurrent_update"),"\uff0c\u5f53\u914d\u7f6e\u503c\u4e3a true \u65f6\uff0c\u5219\u5bf9\u66f4\u65b0\u5e76\u53d1\u65e0\u9650\u5236\u3002"),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u5f00\u542f ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_concurrent_update")," \u914d\u7f6e\u540e\uff0c\u4f1a\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u98ce\u9669")),(0,l.yg)("h2",{id:"sequence-\u5217"},"Sequence \u5217"),(0,l.yg)("p",null,"Uniq \u6a21\u578b\u4e3b\u8981\u9488\u5bf9\u9700\u8981\u552f\u4e00\u4e3b\u952e\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4e3b\u952e\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u5728\u540c\u4e00\u6279\u6b21\u4e2d\u5bfc\u5165\u6216\u8005\u4e0d\u540c\u6279\u6b21\u4e2d\u5bfc\u5165\u7684\u6570\u636e\uff0c\u66ff\u6362\u987a\u5e8f\u4e0d\u505a\u4fdd\u8bc1\u3002\u66ff\u6362\u987a\u5e8f\u65e0\u6cd5\u4fdd\u8bc1\u5219\u65e0\u6cd5\u786e\u5b9a\u6700\u7ec8\u5bfc\u5165\u5230\u8868\u4e2d\u7684\u5177\u4f53\u6570\u636e\uff0c\u5b58\u5728\u4e86\u4e0d\u786e\u5b9a\u6027\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cDoris \u652f\u6301\u4e86 sequence \u5217\uff0c\u901a\u8fc7\u7528\u6237\u5728\u5bfc\u5165\u65f6\u6307\u5b9a sequence \u5217\uff0c\u76f8\u540c key \u5217\u4e0b\uff0c\u6309\u7167 sequence \u5217\u7684\u503c\u8fdb\u884c\u66ff\u6362\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u53cd\u4e4b\u5219\u65e0\u6cd5\u66ff\u6362\u3002\u8be5\u65b9\u6cd5\u5c06\u987a\u5e8f\u7684\u786e\u5b9a\u4ea4\u7ed9\u4e86\u7528\u6237\uff0c\u7531\u7528\u6237\u63a7\u5236\u66ff\u6362\u987a\u5e8f\u3002"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"sequence \u5217\u76ee\u524d\u53ea\u652f\u6301 Uniq \u6a21\u578b\u3002")),(0,l.yg)("h3",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,l.yg)("p",null,"\u901a\u8fc7\u589e\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,l.yg)("strong",{parentName:"p"},"**DORIS_SEQUENCE_COL"),"**\u5b9e\u73b0\uff0c\u8be5\u5217\u7684\u7c7b\u578b\u7531\u7528\u6237\u5728\u5efa\u8868\u65f6\u6307\u5b9a\uff0c\u5728\u5bfc\u5165\u65f6\u786e\u5b9a\u8be5\u5217\u5177\u4f53\u503c\uff0c\u5e76\u4f9d\u636e\u8be5\u503c\u51b3\u5b9a\u76f8\u540c Key \u5217\u4e0b\uff0c\u54ea\u4e00\u884c\u751f\u6548\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5efa\u8868")),(0,l.yg)("p",null,"\u521b\u5efa Uniq \u8868\u65f6\uff0c\u5c06\u6309\u7167\u7528\u6237\u6307\u5b9a\u7c7b\u578b\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,l.yg)("strong",{parentName:"p"},"**DORIS_SEQUENCE_COL"),"**\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5bfc\u5165")),(0,l.yg)("p",null,"\u5bfc\u5165\u65f6\uff0cfe \u5728\u89e3\u6790\u7684\u8fc7\u7a0b\u4e2d\u5c06\u9690\u85cf\u5217\u7684\u503c\u8bbe\u7f6e\u6210 ",(0,l.yg)("inlineCode",{parentName:"p"},"order by")," \u8868\u8fbe\u5f0f\u7684\u503c (broker load \u548c routine load)\uff0c\u6216\u8005",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u8868\u8fbe\u5f0f\u7684\u503c (stream load)\uff0cvalue \u5217\u5c06\u6309\u7167\u8be5\u503c\u8fdb\u884c\u66ff\u6362\u3002\u9690\u85cf\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"DORIS_SEQUENCE_COL"),"\u7684\u503c\u65e2\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6570\u636e\u6e90\u4e2d\u4e00\u5217\uff0c\u4e5f\u53ef\u4ee5\u662f\u8868\u7ed3\u6784\u4e2d\u7684\u4e00\u5217\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u8bfb\u53d6")),(0,l.yg)("p",null,"\u8bf7\u6c42\u5305\u542b value \u5217\u65f6\u9700\u8981\u989d\u5916\u8bfb\u53d6",(0,l.yg)("inlineCode",{parentName:"p"},"DORIS_SEQUENCE_COL"),"\u5217\uff0c\u8be5\u5217\u7528\u4e8e\u5728\u76f8\u540c key \u5217\u4e0b\uff0cREPLACE \u805a\u5408\u51fd\u6570\u66ff\u6362\u987a\u5e8f\u7684\u4f9d\u636e\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u53cd\u4e4b\u5219\u4e0d\u80fd\u66ff\u6362\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Cumulative Compaction")),(0,l.yg)("p",null,"Cumulative Compaction \u65f6\u548c\u8bfb\u53d6\u8fc7\u7a0b\u539f\u7406\u76f8\u540c\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Base Compaction")),(0,l.yg)("p",null,"Base Compaction \u65f6\u8bfb\u53d6\u8fc7\u7a0b\u539f\u7406\u76f8\u540c\u3002"),(0,l.yg)("h3",{id:"\u4f7f\u7528\u8bed\u6cd5"},"\u4f7f\u7528\u8bed\u6cd5"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Sequence \u5217\u5efa\u8868\u65f6\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u5efa\u8868\u65f6\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"strong"},"sequence_col"),"\u5c5e\u6027\uff0c\u4e00\u79cd\u662f\u5efa\u8868\u65f6\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"strong"},"sequence_type"),"\u5c5e\u6027\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u8bbe\u7f6e**"),(0,l.yg)("inlineCode",{parentName:"p"},"sequence_col"),"\uff08\u63a8\u8350\uff09**"),(0,l.yg)("p",null,"\u521b\u5efa Uniq \u8868\u65f6\uff0c\u6307\u5b9a sequence \u5217\u5230\u8868\u4e2d\u5176\u4ed6 column \u7684\u6620\u5c04"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"PROPERTIES (\n    \"function_column.sequence_col\" = 'column_name',\n);\n")),(0,l.yg)("p",null,"sequence_col \u7528\u6765\u6307\u5b9a sequence \u5217\u5230\u8868\u4e2d\u67d0\u4e00\u5217\u7684\u6620\u5c04\uff0c\u8be5\u5217\u53ef\u4ee5\u4e3a\u6574\u578b\u548c\u65f6\u95f4\u7c7b\u578b\uff08DATE\u3001DATETIME\uff09\uff0c\u521b\u5efa\u540e\u4e0d\u80fd\u66f4\u6539\u8be5\u5217\u7684\u7c7b\u578b\u3002"),(0,l.yg)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u548c\u6ca1\u6709 sequence \u5217\u65f6\u4e00\u6837\uff0c\u4f7f\u7528\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\uff0c\u63a8\u8350\u4f7f\u7528\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u8bbe\u7f6e**"),(0,l.yg)("inlineCode",{parentName:"p"},"sequence_type"),"**"),(0,l.yg)("p",null,"\u521b\u5efa Uniq \u8868\u65f6\uff0c\u6307\u5b9a sequence \u5217\u7c7b\u578b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n")),(0,l.yg)("p",null,"sequence_type \u7528\u6765\u6307\u5b9a sequence \u5217\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a\u6574\u578b\u548c\u65f6\u95f4\u7c7b\u578b\uff08DATE\u3001DATETIME\uff09\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5bfc\u5165\u65f6\u9700\u8981\u6307\u5b9a sequence \u5217\u5230\u5176\u4ed6\u5217\u7684\u6620\u5c04\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Stream Load")),(0,l.yg)("p",null,"stream load \u7684\u5199\u6cd5\u662f\u5728 header \u4e2d\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u5b57\u6bb5\u6dfb\u52a0\u9690\u85cf\u5217\u5bf9\u5e94\u7684 source_sequence \u7684\u6620\u5c04\uff0c\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. Broker Load")),(0,l.yg)("p",null,"\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"ORDER BY")," \u5904\u8bbe\u7f6e\u9690\u85cf\u5217\u6620\u5c04\u7684 source_sequence \u5b57\u6bb5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. Routine Load")),(0,l.yg)("p",null,"\u6620\u5c04\u65b9\u5f0f\u540c\u4e0a\uff0c\u793a\u4f8b\u5982\u4e0b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1  100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')),(0,l.yg)("h3",{id:"\u542f\u7528-sequence-column-\u652f\u6301"},"\u542f\u7528 sequence column \u652f\u6301"),(0,l.yg)("p",null,"\u5728\u65b0\u5efa\u8868\u65f6\u5982\u679c\u8bbe\u7f6e\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u6216\u8005",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_type")," \uff0c\u5219\u65b0\u5efa\u8868\u5c06\u652f\u6301 sequence column\u3002 "),(0,l.yg)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u4e0d\u652f\u6301 sequence column \u7684\u8868\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\uff1a ",(0,l.yg)("inlineCode",{parentName:"p"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")')," \u6765\u542f\u7528\u3002 "),(0,l.yg)("p",null,"\u5982\u679c\u4e0d\u786e\u5b9a\u4e00\u4e2a\u8868\u662f\u5426\u652f\u6301 sequence column\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e00\u4e2a session variable \u6765\u663e\u793a\u9690\u85cf\u5217 ",(0,l.yg)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true")," \uff0c\u4e4b\u540e\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"desc tablename"),"\uff0c\u5982\u679c\u8f93\u51fa\u4e2d\u6709",(0,l.yg)("inlineCode",{parentName:"p"},"DORIS_SEQUENCE_COL")," \u5217\u5219\u652f\u6301\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e0d\u652f\u6301\u3002"),(0,l.yg)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("p",null,"\u4e0b\u9762\u4ee5 Stream Load \u4e3a\u4f8b\u4e3a\u793a\u4f8b\u6765\u5c55\u793a\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u521b\u5efa\u652f\u6301 sequence col \u7684\u8868")),(0,l.yg)("p",null,"\u521b\u5efa unique \u6a21\u578b\u7684 test_table \u6570\u636e\u8868\uff0c\u5e76\u6307\u5b9a sequence \u5217\u6620\u5c04\u5230\u8868\u4e2d\u7684 modify_date \u5217\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test.test_table\n(\n    user_id bigint,\n    date date,\n    group_id bigint,\n    modify_date date,\n    keyword VARCHAR(128)\n)\nUNIQUE KEY(user_id, date, group_id)\nDISTRIBUTED BY HASH (user_id) BUCKETS 32\nPROPERTIES(\n    "function_column.sequence_col" = \'modify_date\',\n    "replication_num" = "1",\n    "in_memory" = "false"\n);\n')),(0,l.yg)("p",null,"\u8868\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL  desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u6b63\u5e38\u5bfc\u5165\u6570\u636e\uff1a")),(0,l.yg)("p",null,"\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"1       2020-02-22      1       2020-02-21      a\n1       2020-02-22      1       2020-02-22      b\n1       2020-02-22      1       2020-03-05      c\n1       2020-02-22      1       2020-02-26      d\n1       2020-02-22      1       2020-02-23      e\n1       2020-02-22      1       2020-02-24      b\n")),(0,l.yg)("p",null,"\u6b64\u5904\u4ee5 stream load \u4e3a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},"curl --location-trusted -u root: -T testData http://host:port/api/test/test_table/_stream_load\n")),(0,l.yg)("p",null,"\u7ed3\u679c\u4e3a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL  select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.yg)("p",null,"\u5728\u8fd9\u6b21\u5bfc\u5165\u4e2d\uff0c\u56e0 sequence column \u7684\u503c\uff08\u4e5f\u5c31\u662f modify_date \u4e2d\u7684\u503c\uff09\u4e2d'2020-03-05'\u4e3a\u6700\u5927\u503c\uff0c\u6240\u4ee5 keyword \u5217\u4e2d\u6700\u7ec8\u4fdd\u7559\u4e86 c\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. \u66ff\u6362\u987a\u5e8f\u7684\u4fdd\u8bc1")),(0,l.yg)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u5b8c\u6210\u540e\uff0c\u63a5\u7740\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-23      b\n")),(0,l.yg)("p",null,"\u67e5\u8be2\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [test] select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.yg)("p",null,"\u5728\u8fd9\u6b21\u5bfc\u5165\u7684\u6570\u636e\u4e2d\uff0c\u4f1a\u6bd4\u8f83\u6240\u6709\u5df2\u5bfc\u5165\u6570\u636e\u7684 sequence column (\u4e5f\u5c31\u662f modify_date)\uff0c\u5176\u4e2d'2020-03-05'\u4e3a\u6700\u5927\u503c\uff0c\u6240\u4ee5 keyword \u5217\u4e2d\u6700\u7ec8\u4fdd\u7559\u4e86 c\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"4. \u518d\u5c1d\u8bd5\u5bfc\u5165\u5982\u4e0b\u6570\u636e")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-03-23      w\n")),(0,l.yg)("p",null,"\u67e5\u8be2\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [test] select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.yg)("p",null,"\u6b64\u65f6\u5c31\u53ef\u4ee5\u66ff\u6362\u8868\u4e2d\u539f\u6709\u7684\u6570\u636e\u3002\u7efc\u4e0a\uff0c\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u6bd4\u8f83\u6240\u6709\u6279\u6b21\u7684 sequence \u5217\u503c\uff0c\u9009\u62e9\u503c\u6700\u5927\u7684\u8bb0\u5f55\u5bfc\u5165 Doris \u8868\u4e2d\u3002"),(0,l.yg)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4e3a\u9632\u6b62\u8bef\u7528\uff0c\u5728 StreamLoad/BrokerLoad \u7b49\u5bfc\u5165\u4efb\u52a1\u4ee5\u53ca\u884c\u66f4\u65b0 insert \u8bed\u53e5\u4e2d\uff0c\u7528\u6237\u5fc5\u987b\u663e\u793a\u6307\u5b9a sequence \u5217 (\u9664\u975e sequence \u5217\u7684\u9ed8\u8ba4\u503c\u4e3a CURRENT_TIMESTAMP)\uff0c\u4e0d\u7136\u4f1a\u6536\u5230\u4ee5\u4e0b\u62a5\u9519\u4fe1\u606f\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"Table test_tbl has sequence column, need to specify the sequence column\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u81ea\u7248\u672c 2.0 \u8d77\uff0cDoris \u5bf9 Unique Key \u8868\u7684 Merge-on-Write \u5b9e\u73b0\u652f\u6301\u4e86\u90e8\u5206\u5217\u66f4\u65b0\u80fd\u529b\uff0c\u5728\u90e8\u5206\u5217\u66f4\u65b0\u5bfc\u5165\u4e2d\uff0c\u7528\u6237\u6bcf\u6b21\u53ef\u4ee5\u53ea\u66f4\u65b0\u4e00\u90e8\u5206\u5217\uff0c\u56e0\u6b64\u5e76\u4e0d\u662f\u5fc5\u987b\u8981\u5305\u542b sequence \u5217\u3002\u82e5\u7528\u6237\u63d0\u4ea4\u7684\u5bfc\u5165\u4efb\u52a1\u4e2d\uff0c\u5305\u542b sequence \u5217\uff0c\u5219\u884c\u4e3a\u65e0\u5f71\u54cd\uff1b\u82e5\u7528\u6237\u63d0\u4ea4\u7684\u5bfc\u5165\u4efb\u52a1\u4e0d\u5305\u542b sequence \u5217\uff0cDoris \u4f1a\u4f7f\u7528\u5339\u914d\u7684\u5386\u53f2\u6570\u636e\u4e2d\u7684 sequence \u5217\u4f5c\u4e3a\u66f4\u65b0\u540e\u8be5\u884c\u7684 sequence \u5217\u7684\u503c\u3002\u5982\u679c\u5386\u53f2\u6570\u636e\u4e2d\u4e0d\u5b58\u5728\u76f8\u540c key \u7684\u5217\uff0c\u5219\u4f1a\u81ea\u52a8\u7528 null \u6216\u9ed8\u8ba4\u503c\u586b\u5145\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u51fa\u73b0\u5e76\u53d1\u5bfc\u5165\u65f6\uff0cDoris \u4f1a\u5229\u7528 MVCC \u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u7684\u6b63\u786e\u6027\u3002\u5982\u679c\u4e24\u6279\u6570\u636e\u5bfc\u5165\u90fd\u66f4\u65b0\u4e86\u4e00\u4e2a\u76f8\u540c key \u7684\u4e0d\u540c\u5217\uff0c\u5219\u5176\u4e2d\u7cfb\u7edf\u7248\u672c\u8f83\u9ad8\u7684\u5bfc\u5165\u4efb\u52a1\u4f1a\u5728\u7248\u672c\u8f83\u4f4e\u7684\u5bfc\u5165\u4efb\u52a1\u6210\u529f\u540e\uff0c\u4f7f\u7528\u7248\u672c\u8f83\u4f4e\u7684\u5bfc\u5165\u4efb\u52a1\u5199\u5165\u7684\u76f8\u540c key \u7684\u6570\u636e\u884c\u91cd\u65b0\u8fdb\u884c\u8865\u9f50\u3002"))))}g.isMDXComponent=!0}}]);