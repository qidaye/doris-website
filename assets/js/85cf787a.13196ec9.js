"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[514424],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var l=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return n?l.createElement(d,i(i({ref:t},c),{},{components:n})):l.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},944675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=n(58168),a=(n(296540),n(15680));const r={title:"Sql Interception",language:"en"},i=void 0,o={unversionedId:"admin-manual/sql-interception",id:"version-1.2/admin-manual/sql-interception",title:"Sql Interception",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/sql-interception.md",sourceDirName:"admin-manual",slug:"/admin-manual/sql-interception",permalink:"/docs/1.2/admin-manual/sql-interception",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Sql Interception",language:"en"},sidebar:"docs",previous:{title:"Data Recover",permalink:"/docs/1.2/admin-manual/data-admin/delete-recover"},next:{title:"Statistics of query execution",permalink:"/docs/1.2/admin-manual/query-profile"}},s={},u=[{value:"Rule",id:"rule",level:2},{value:"User bind rules",id:"user-bind-rules",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,l.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sql-block-rule"},"SQL Block Rule"),(0,a.yg)("p",null,"This function is only used to limit the query statement, and does not limit the execution of the explain statement.\nSupport SQL block rule by user level:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"by regex way to deny specify SQL")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"by setting partition_num, tablet_num, cardinality, check whether a sql reaches one of the limitations"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality could be set together, and once reach one of them, the sql will be blocked.")))),(0,a.yg)("h2",{id:"rule"},"Rule"),(0,a.yg)("p",null,"SQL block rule CRUD"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"create SQL block rule,For more creation syntax see",(0,a.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},"CREATE SQL BLOCK RULE"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'sql\uff1aRegex pattern\uff0cSpecial characters need to be translated, "NULL" by default'),(0,a.yg)("li",{parentName:"ul"},'sqlHash: Sql hash value, Used to match exactly, We print it in fe.audit.log, This parameter is the only choice between sql and sql, "NULL" by default'),(0,a.yg)("li",{parentName:"ul"},"partition_num: Max number of partitions will be scanned by a scan node, 0L by default"),(0,a.yg)("li",{parentName:"ul"},"tablet_num: Max number of tablets will be scanned by a scan node, 0L by default"),(0,a.yg)("li",{parentName:"ul"},"cardinality: An inaccurate number of scan rows of a scan node, 0L by default"),(0,a.yg)("li",{parentName:"ul"},"global: Whether global(all users)is in effect, false by default"),(0,a.yg)("li",{parentName:"ul"},"enable\uff1aWhether to enable block rule\uff0ctrue by default")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis",\n  "global"="false",\n  "enable"="true",\n  "sqlHash"=""\n)\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Notes:"),(0,a.yg)("p",{parentName:"blockquote"},"That the sql statement here does not end with a semicolon")),(0,a.yg)("p",null,"When we execute the sql that we defined in the rule just now, an exception error will be returned. An example is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"create test_rule2, limits the maximum number of scanning partitions to 30 and the maximum scanning cardinality to 10 billion rows. As shown in the following example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "30", "cardinality"="10000000000","global"="false","enable"="true")\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"show configured SQL block rules, or show all rules if you do not specify a rule name,Please see the specific grammar ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE"},"SHOW SQL BLOCK RULE"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME]\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"alter SQL block rule\uff0cAllows changes sql/sqlHash/global/enable/partition_num/tablet_num/cardinality anyone,Please see the specific grammar",(0,a.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"},"ALTER SQL BLOCK  RULE"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"sql and sqlHash cannot be set both. It means if sql or sqlHash is set in a rule, another property will never be allowed to be altered"),(0,a.yg)("li",{parentName:"ul"},"sql/sqlHash and partition_num/tablet_num/cardinality cannot be set together. For example, partition_num is set in a rule, then sql or sqlHash will never be allowed to be altered.")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"drop SQL block rule\uff0cSupport multiple rules, separated by ",(0,a.yg)("inlineCode",{parentName:"li"},","),",Please see the specific grammar",(0,a.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"},"DROP SQL BLOCK RULR"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP SQL_BLOCK_RULE test_rule1,test_rule2\n")),(0,a.yg)("h2",{id:"user-bind-rules"},"User bind rules"),(0,a.yg)("p",null,"If global=false is configured, the rules binding for the specified user needs to be configured, with multiple rules separated by ', '"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'jack'] 'sql_block_rules' = 'test_rule1,test_rule2'\n")))}m.isMDXComponent=!0}}]);