"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[452706],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,g=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},254032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(58168),o=(n(296540),n(15680));const i={title:"Orthogonal BITMAP calculation",language:"en"},r=void 0,l={unversionedId:"advanced/orthogonal-bitmap-manual",id:"version-1.2/advanced/orthogonal-bitmap-manual",title:"Orthogonal BITMAP calculation",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/advanced/orthogonal-bitmap-manual.md",sourceDirName:"advanced",slug:"/advanced/orthogonal-bitmap-manual",permalink:"/docs/1.2/advanced/orthogonal-bitmap-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Orthogonal BITMAP calculation",language:"en"},sidebar:"docs",previous:{title:"Resource management",permalink:"/docs/1.2/advanced/resource"},next:{title:"Approximate deduplication using HLL",permalink:"/docs/1.2/advanced/using-hll"}},s={},u=[{value:"Background",id:"background",level:2},{value:"User guide",id:"user-guide",level:2},{value:"Create table",id:"create-table",level:3},{value:"Data Load",id:"data-load",level:3},{value:"orthogonal_bitmap_intersect",id:"orthogonal_bitmap_intersect",level:4},{value:"orthogonal_bitmap_intersect_count",id:"orthogonal_bitmap_intersect_count",level:4},{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:4},{value:"Suitable for the scene",id:"suitable-for-the-scene",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"orthogonal-bitmap-calculation"},"Orthogonal BITMAP calculation"),(0,o.yg)("h2",{id:"background"},"Background"),(0,o.yg)("p",null,"The original bitmap aggregate function designed by Doris is more general, but it has poor performance for the intersection and union of bitmap large cardinality above 100 million level. There are two main reasons for checking the bitmap aggregate function logic of the back-end be. First, when the bitmap cardinality is large, if the bitmap data size exceeds 1g, the network / disk IO processing time is relatively long; second, after the scan data, all the back-end be instances are transmitted to the top-level node for intersection and union operation, which brings pressure on the top-level single node and becomes the processing bottleneck."),(0,o.yg)("p",null,"The solution is to divide the bitmap column values according to the range, and the values of different ranges are stored in different buckets, so as to ensure that the bitmap values of different buckets are orthogonal and the data distribution is more uniform. In the case of query, the orthogonal bitmap in different buckets is firstly aggregated and calculated, and then the top-level node directly combines and summarizes the aggregated calculated values and outputs them. This will greatly improve the computing efficiency and solve the bottleneck problem of the top single node computing."),(0,o.yg)("h2",{id:"user-guide"},"User guide"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Create a table and add hid column to represent bitmap column value ID range as hash bucket column"),(0,o.yg)("li",{parentName:"ol"},"Usage scenarios")),(0,o.yg)("h3",{id:"create-table"},"Create table"),(0,o.yg)("p",null,"We need to use the aggregation model when building tables. The data type is bitmap, and the aggregation function is bitmap_ union"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "user tag",\n  `hid` smallint(6) NULL COMMENT "Bucket ID",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')),(0,o.yg)("p",null,"The HID column is added to the table schema to indicate the ID range as a hash bucket column."),(0,o.yg)("p",null,"Note: the HID number and buckets should be set reasonably, and the HID number should be set at least 5 times of buckets, so as to make the data hash bucket division as balanced as possible"),(0,o.yg)("h3",{id:"data-load"},"Data Load"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n...\n")),(0,o.yg)("p",null,"Data format:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")),(0,o.yg)("p",null,"Note: the first column represents the user tags, which have been converted from Chinese into numbers"),(0,o.yg)("p",null,"When loading data, vertically cut the bitmap value range of the user. For example, the hid value of the user ID in the range of 1-5000000 is the same, and the row with the same HID value will be allocated into a sub-bucket, so that the bitmap value in each sub-bucket is orthogonal. On the UDAF implementation of bitmap, the orthogonal feature of bitmap value in the bucket can be used to perform intersection union calculation, and the calculation results will be shuffled to the top node for aggregation."),(0,o.yg)("p",null,"Note: The orthogonal bitmap function cannot be used in the partitioned table. Because the partitions of the partitioned table are orthogonal, the data between partitions cannot be guaranteed to be orthogonal, so the calculation result cannot be estimated."),(0,o.yg)("h4",{id:"orthogonal_bitmap_intersect"},"orthogonal_bitmap_intersect"),(0,o.yg)("p",null,"The bitmap intersection function"),(0,o.yg)("p",null,"Syntax:"),(0,o.yg)("p",null,"orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)"),(0,o.yg)("p",null,"Parameters:"),(0,o.yg)("p",null,"the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"),(0,o.yg)("p",null,"Explain:"),(0,o.yg)("p",null,"on the basis of this table schema, this function has two levels of aggregation in query planning. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the bitmaps of all keys are intersected. The results are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, all the bitmap values from the first level nodes are combined circularly"),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n")),(0,o.yg)("h4",{id:"orthogonal_bitmap_intersect_count"},"orthogonal_bitmap_intersect_count"),(0,o.yg)("p",null,"To calculate the bitmap intersection count function, the syntax is the same as the original Intersect_Count, but the implementation is different"),(0,o.yg)("p",null,"Syntax:"),(0,o.yg)("p",null,"orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)"),(0,o.yg)("p",null,"Parameters:"),(0,o.yg)("p",null,"The first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"),(0,o.yg)("p",null,"Explain:"),(0,o.yg)("p",null,"on the basis of this table schema, the query planning aggregation is divided into two layers. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the intersection of bitmaps of all keys is performed, and then the intersection results are counted. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, the sum of all the count values from the first level nodes is calculated circularly"),(0,o.yg)("h4",{id:"orthogonal_bitmap_union_count"},"orthogonal_bitmap_union_count"),(0,o.yg)("p",null,"Figure out the bitmap union count function, syntax with the original bitmap_union_count, but the implementation is different."),(0,o.yg)("p",null,"Syntax:"),(0,o.yg)("p",null,"orthogonal_bitmap_union_count(bitmap_column)"),(0,o.yg)("p",null,"Explain:"),(0,o.yg)("p",null,"on the basis of this table schema, this function is divided into two layers. In the first layer, be nodes (update and serialize) merge all the bitmaps, and then count the resulting bitmaps. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second layer, the be nodes are used to calculate the sum of all the count values from the first level nodes"),(0,o.yg)("h3",{id:"suitable-for-the-scene"},"Suitable for the scene"),(0,o.yg)("p",null,"It is consistent with the scenario of orthogonal calculation of bitmap, such as calculation retention, funnel, user portrait, etc."),(0,o.yg)("p",null,"Crowd selection:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n\nNote: 13080800 and 11110200 represent user labels\n")),(0,o.yg)("p",null,"Calculate the deduplication value for user_id:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n")))}h.isMDXComponent=!0}}]);