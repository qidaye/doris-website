"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[855942],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,m=s["".concat(d,".").concat(c)]||s[c]||p[c]||o;return a?r.createElement(m,l(l({ref:t},g),{},{components:a})):r.createElement(m,l({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(58168),n=(a(296540),a(15680));const o={title:"Updating Data on Aggregate Key Model",language:"en"},l=void 0,i={unversionedId:"data-operate/update/update-of-aggregate-model",id:"version-2.1/data-operate/update/update-of-aggregate-model",title:"Updating Data on Aggregate Key Model",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/update/update-of-aggregate-model.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/update-of-aggregate-model",permalink:"/docs/2.1/data-operate/update/update-of-aggregate-model",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Updating Data on Aggregate Key Model",language:"en"},sidebar:"docs",previous:{title:"Updating Data on Unique Key Model",permalink:"/docs/2.1/data-operate/update/update-of-unique-model"},next:{title:"Updating Transaction",permalink:"/docs/2.1/data-operate/update/unique-update-transaction"}},d={},u=[{value:"Update all columns",id:"update-all-columns",level:2},{value:"Partial column update for Aggregate Key model",id:"partial-column-update-for-aggregate-key-model",level:2},{value:"Note",id:"note",level:2}],g={toc:u},s="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(s,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"update-for-aggregate-load"},"Update for Aggregate Load"),(0,n.yg)("p",null,"This guide is about ingestion-based data updates for the Aggregate Key model in Doris."),(0,n.yg)("h2",{id:"update-all-columns"},"Update all columns"),(0,n.yg)("p",null,"When importing data into an Aggregate Key model in Doris by methods like Stream Load, Broker Load, Routine Load, and Insert Into, the new values are combined with the old values to produce new aggregated values based on the column's aggregation function. These values might be generated during insertion or produced asynchronously during compaction. However, when querying, users will always receive the same returned values."),(0,n.yg)("h2",{id:"partial-column-update-for-aggregate-key-model"},"Partial column update for Aggregate Key model"),(0,n.yg)("p",null,"Tables in the Aggregate Key model are primarily used in cases with pre-aggregation requirements rather than data updates, but Doris allows partial column updates for them, too. Simply set the aggregation function to ",(0,n.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Create table")),(0,n.yg)("p",null,"For the columns that need to be updated, set the aggregation function to ",(0,n.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE TABLE order_tbl (\n  order_id int(11) NULL,\n  order_amount int(11) REPLACE_IF_NOT_NULL NULL,\n  order_status varchar(100) REPLACE_IF_NOT_NULL NULL\n) ENGINE=OLAP\nAGGREGATE KEY(order_id)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(order_id) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n+----------+--------------+-----------------+\n| order_id | order_amount | order_status    |\n+----------+--------------+-----------------+\n| 1        |          100 | Pending Payment |\n+----------+--------------+-----------------+\n1 row in set (0.01 sec)\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Ingest data")),(0,n.yg)("p",null,"For Stream Load, Broker Load, Routine Load, or INSERT INTO, you can directly write the updates to the fields."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("p",null,"Using the same example as above, the corresponding Stream Load command would be (no additional headers required):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'curl  --location-trusted -u root: -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,n.yg)("p",null,"The corresponding ",(0,n.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," statement would be (no additional session variables required):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},"INSERT INTO order_tbl (order_id, order_status) values (1,'Delivery Pending');\n")),(0,n.yg)("h2",{id:"note"},"Note"),(0,n.yg)("p",null,"The Aggregate Key model does not perform additional data processing during data writing, so the writing performance in this model is the same as other models. However, aggregation during queries can result in performance loss. Typical aggregation queries can be 5~10 times slower than queries on Merge-on-Write tables in the Unique Key model."),(0,n.yg)("p",null,"Under this circumstance, users cannot set a field from non-NULL to NULL, because NULL values written will be automatically neglected by the REPLACE_IF_NOT_NULL aggregation function."))}p.isMDXComponent=!0}}]);