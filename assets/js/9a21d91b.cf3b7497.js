"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[774338],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||y[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},404135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"BITMAP",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-types/Data-Types/BITMAP",id:"sql-manual/sql-types/Data-Types/BITMAP",title:"BITMAP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-types/Data-Types/BITMAP.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/BITMAP",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/BITMAP",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP",language:"en"},sidebar:"docs",previous:{title:"HLL (HyperLogLog)",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/HLL"},next:{title:"QUANTILE_STATE",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/QUANTILE_STATE"}},s={},p=[{value:"BITMAP",id:"bitmap",level:2},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap"},"BITMAP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"BITMAP"),(0,a.yg)("p",null,"The columns of the BITMAP type can be used in Aggregate table, Unique table or Duplicate table.\nWhen used in a Unique table or Duplicate table, they must be used as non-key columns.\nWhen used in an Aggregate table, they must be used as non-key columns, and the aggregation type is BITMAP_UNION when building the table.\nThe user does not need to specify the length and default value. The length is controlled within the system according to the degree of data aggregation.\nAnd the BITMAP column can only be queried or used by supporting functions such as bitmap_union_count, bitmap_union, bitmap_hash and bitmap_hash64."),(0,a.yg)("p",null,"The use of BITMAP in offline scenarios will affect the import speed. In the case of a large amount of data, the query speed will be slower than HLL and better than Count Distinct.\nNote: If BITMAP does not use a global dictionary in real-time scenarios, using bitmap_hash() may cause an error of about one-thousandth. If the error rate is not tolerable, bitmap_hash64 can be used instead."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Create table example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create table metric_table (\n  datekey int,\n  hour int,\n  device_id bitmap BITMAP_UNION\n)\naggregate key (datekey, hour)\ndistributed by hash(datekey, hour) buckets 1\nproperties(\n  "replication_num" = "1"\n);\n')),(0,a.yg)("p",null,"Insert data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"insert into metric_table values\n(20200622, 1, to_bitmap(243)),\n(20200622, 2, bitmap_from_array([1,2,3,4,5,434543])),\n(20200622, 3, to_bitmap(287667876573));\n")),(0,a.yg)("p",null,"Query data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select hour, BITMAP_UNION_COUNT(pv) over(order by hour) uv from(\n   select hour, BITMAP_UNION(device_id) as pv\n   from metric_table -- Query the accumulated UV per hour\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")),(0,a.yg)("p",null,"When querying, BITMAP can cooperate with ",(0,a.yg)("inlineCode",{parentName:"p"},"return_object_data_as_binary"),". For details, please refer to ",(0,a.yg)("a",{parentName:"p",href:"../../../advanced/variables.md"},"variables"),"."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"BITMAP"))}y.isMDXComponent=!0}}]);