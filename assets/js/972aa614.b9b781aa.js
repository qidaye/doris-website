"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[728878],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>p});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,p=c["".concat(s,".").concat(d)]||c[d]||f[d]||i;return a?t.createElement(p,l(l({ref:n},u),{},{components:a})):t.createElement(p,l({ref:n},u))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},947093:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=a(58168),r=(a(296540),a(15680));const i={title:"MV_INFOS",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/table-functions/mv_infos",id:"sql-manual/sql-functions/table-functions/mv_infos",title:"MV_INFOS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/mv_infos.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/mv_infos",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/mv_infos",draft:!1,tags:[],version:"current",frontMatter:{title:"MV_INFOS",language:"en"},sidebar:"docs",previous:{title:"JOBS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/jobs"},next:{title:"TASKS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/tasks"}},s={},m=[{value:"<code>mv_infos</code>",id:"mv_infos",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:m},c="wrapper";function f(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"mv_infos"},(0,r.yg)("inlineCode",{parentName:"h2"},"mv_infos")),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"mv_infos"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"Table function, generating temporary tables for asynchronous materialized views, which can view information about asynchronous materialized views created in a certain database."),(0,r.yg)("p",null,"This function is used in the from clause."),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'mv_infos("database"="")')),(0,r.yg)("p",null,"mv_infos() Table structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function mv_infos("database"="tpch100");\n+--------------------+---------+------+-------+---------+-------+\n| Field              | Type    | Null | Key   | Default | Extra |\n+--------------------+---------+------+-------+---------+-------+\n| Id                 | BIGINT  | No   | false | NULL    | NONE  |\n| Name               | TEXT    | No   | false | NULL    | NONE  |\n| JobName            | TEXT    | No   | false | NULL    | NONE  |\n| State              | TEXT    | No   | false | NULL    | NONE  |\n| SchemaChangeDetail | TEXT    | No   | false | NULL    | NONE  |\n| RefreshState       | TEXT    | No   | false | NULL    | NONE  |\n| RefreshInfo        | TEXT    | No   | false | NULL    | NONE  |\n| QuerySql           | TEXT    | No   | false | NULL    | NONE  |\n| EnvInfo            | TEXT    | No   | false | NULL    | NONE  |\n| MvProperties       | TEXT    | No   | false | NULL    | NONE  |\n| MvPartitionInfo    | TEXT    | No   | false | NULL    | NONE  |\n| SyncWithBaseTables | BOOLEAN | No   | false | NULL    | NONE  |\n+--------------------+---------+------+-------+---------+-------+\n12 rows in set (0.01 sec)\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Id: Materialized View ID"),(0,r.yg)("li",{parentName:"ul"},"Name: Materialized View Name"),(0,r.yg)("li",{parentName:"ul"},"JobName: The job name corresponding to the materialized view"),(0,r.yg)("li",{parentName:"ul"},"State: Materialized View State"),(0,r.yg)("li",{parentName:"ul"},"SchemaChangeDetail: The reason why the materialized view State becomes a SchemeChange"),(0,r.yg)("li",{parentName:"ul"},"RefreshState: Materialized view refresh status"),(0,r.yg)("li",{parentName:"ul"},"RefreshInfo: Refreshing strategy information defined by materialized views"),(0,r.yg)("li",{parentName:"ul"},"QuerySql: Query statements defined by materialized views"),(0,r.yg)("li",{parentName:"ul"},"EnvInfo: Environmental information during the creation of materialized views"),(0,r.yg)("li",{parentName:"ul"},"MvProperties: Materialized visual attributes"),(0,r.yg)("li",{parentName:"ul"},"MvPartitionInfo: Partition information of materialized views"),(0,r.yg)("li",{parentName:"ul"},"SyncWithBaseTables\uff1aIs it synchronized with the base table data? To see which partition is not synchronized, please use ",(0,r.yg)("a",{parentName:"li",href:"../sql-reference/Show-Statements/SHOW-PARTITIONS.md"},"SHOW PARTITIONS"))),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"View all materialized views under db1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from mv_infos("database"="db1");\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"View the materialized view named mv1 under db1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from mv_infos("database"="db1") where Name = "mv1";\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"View the status of the materialized view named mv1 under db1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select State from mv_infos("database"="db1") where Name = "mv1";\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mv, infos\n")))}f.isMDXComponent=!0}}]);