"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[394854],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),E=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=E(e.components);return t.createElement(o.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),s=E(a),u=l,y=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return a?t.createElement(y,i(i({ref:n},g),{},{components:a})):t.createElement(y,i({ref:n},g))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var E=2;E<r;E++)i[E]=a[E];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},245472:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>E});var t=a(58168),l=(a(296540),a(15680));const r={title:"CREATE-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",title:"CREATE-ASYNC-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CREATE-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-STORAGE-VAULT",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT"},next:{title:"CREATE-JOB",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB"}},o={},E=[{value:"CREATE-ASYNC-MATERIALIZED-VIEW",id:"create-async-materialized-view",level:2},{value:"\u540d\u79f0",id:"\u540d\u79f0",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:4},{value:"Property",id:"property",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:3}],g={toc:E},s="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(s,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"create-async-materialized-view"},"CREATE-ASYNC-MATERIALIZED-VIEW"),(0,l.yg)("h3",{id:"\u540d\u79f0"},"\u540d\u79f0"),(0,l.yg)("p",null,"CREATE ASYNC MATERIALIZED VIEW"),(0,l.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u3002"),(0,l.yg)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        ((DUPLICATE)? KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN mvPartition RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        PropertyClause?\n        AS query\n")),(0,l.yg)("h4",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"simpleColumnDefs")),(0,l.yg)("p",null,"\u7528\u6765\u5b9a\u4e49\u7269\u5316\u89c6\u56fe Column \u4fe1\u606f\uff0c\u5982\u679c\u4e0d\u5b9a\u4e49\uff0c\u5c06\u81ea\u52a8\u63a8\u5bfc\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"simpleColumnDefs\n: cols+=simpleColumnDef (COMMA cols+=simpleColumnDef)*\n    ;\n\nsimpleColumnDef\n: colName=identifier (COMMENT comment=STRING_LITERAL)?\n    ;\n")),(0,l.yg)("p",null,'\u4f8b\u5982:\u5b9a\u4e49\u4e24\u5217 aa \u548c bb\uff0c\u5176\u4e2d aa \u7684\u6ce8\u91ca\u4e3a"name"'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1\n(aa comment "name",bb)\n')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"buildMode")),(0,l.yg)("p",null,"\u7528\u6765\u5b9a\u4e49\u7269\u5316\u89c6\u56fe\u662f\u5426\u521b\u5efa\u5b8c\u6210\u7acb\u5373\u5237\u65b0\uff0c\u9ed8\u8ba4 IMMEDIATE"),(0,l.yg)("p",null,"IMMEDIATE\uff1a\u7acb\u5373\u5237\u65b0"),(0,l.yg)("p",null,"DEFERRED\uff1a\u5ef6\u8fdf\u5237\u65b0"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"buildMode\n: BUILD (IMMEDIATE | DEFERRED)\n;\n")),(0,l.yg)("p",null,"\u4f8b\u5982\uff1a\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u7acb\u5373\u5237\u65b0"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nBUILD IMMEDIATE\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"refreshMethod")),(0,l.yg)("p",null,"\u7528\u6765\u5b9a\u4e49\u7269\u5316\u89c6\u56fe\u5237\u65b0\u65b9\u5f0f\uff0c\u9ed8\u8ba4 AUTO"),(0,l.yg)("p",null,"COMPLETE\uff1a\u5168\u91cf\u5237\u65b0"),(0,l.yg)("p",null,"AUTO\uff1a\u5c3d\u91cf\u589e\u91cf\u5237\u65b0\uff0c\u5982\u679c\u4e0d\u80fd\u5206\u533a\u589e\u91cf\u5237\u65b0\uff0c\u5c31\u5168\u91cf\u5237\u65b0"),(0,l.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u7684 SQL \u5b9a\u4e49\u548c\u5206\u533a\u5b57\u6bb5\u9700\u8981\u6ee1\u8db3\u5982\u4e0b\u6761\u4ef6\uff0c\u624d\u53ef\u4ee5\u8fdb\u884c\u5206\u533a\u589e\u91cf\u66f4\u65b0\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u4f7f\u7528\u7684 Base Table \u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u662f\u5206\u533a\u8868\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u4f7f\u7528\u7684 Base Table \u5206\u533a\u8868\uff0c\u5fc5\u987b\u4f7f\u7528 List \u6216\u8005 Range \u5206\u533a\u7b56\u7565\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u5b9a\u4e49 SQL \u4e2d Partition By \u5206\u533a\u5217\u53ea\u80fd\u6709\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u7684 SQL \u4e2d Partition By \u7684\u5206\u533a\u5217\uff0c\u8981\u5728 Select \u540e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u5b9a\u4e49 SQL\uff0c\u5982\u679c\u4f7f\u7528\u4e86 Group By\uff0c\u5206\u533a\u5217\u7684\u5b57\u6bb5\u4e00\u5b9a\u8981\u5728 Group By \u540e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u5b9a\u4e49 SQL\uff0c\u5982\u679c\u4f7f\u7528\u4e86 Window \u51fd\u6570\uff0c\u5206\u533a\u5217\u7684\u5b57\u6bb5\u4e00\u5b9a\u8981\u5728 Partition By \u540e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6570\u636e\u53d8\u66f4\u5e94\u53d1\u751f\u5728\u5206\u533a\u8868\u4e0a\uff0c\u5982\u679c\u53d1\u751f\u5728\u975e\u5206\u533a\u8868\uff0c\u7269\u5316\u89c6\u56fe\u9700\u8981\u5168\u91cf\u6784\u5efa\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u4f7f\u7528 Join \u7684 NULL \u4ea7\u751f\u7aef\u7684\u5b57\u6bb5\u4f5c\u4e3a\u5206\u533a\u5b57\u6bb5\uff0c\u4e0d\u80fd\u5206\u533a\u589e\u91cf\u66f4\u65b0\uff0c\u4f8b\u5982\u5bf9\u4e8e LEFT OUTER JOIN \u5206\u533a\u5b57\u6bb5\u9700\u8981\u5728\u5de6\u4fa7\uff0c\u5728\u53f3\u4fa7\u5219\u4e0d\u884c\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"refreshMethod\n: COMPLETE | AUTO\n;\n")),(0,l.yg)("p",null,"\u4f8b\u5982\uff1a\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u5168\u91cf\u5237\u65b0"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nREFRESH COMPLETE\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"refreshTrigger")),(0,l.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u5237\u65b0\u6570\u636e\u7684\u89e6\u53d1\u65b9\u5f0f\uff0c\u9ed8\u8ba4 MANUAL"),(0,l.yg)("p",null,"MANUAL\uff1a\u624b\u52a8\u5237\u65b0"),(0,l.yg)("p",null,"SCHEDULE\uff1a\u5b9a\u65f6\u5237\u65b0"),(0,l.yg)("p",null,"COMMIT\uff1a\u89e6\u53d1\u5f0f\u5237\u65b0\uff0c\u57fa\u8868\u6570\u636e\u53d8\u66f4\u65f6\uff0c\u81ea\u52a8\u751f\u6210\u5237\u65b0\u7269\u5316\u89c6\u56fe\u7684\u4efb\u52a1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"refreshTrigger\n: ON MANUAL\n| ON SCHEDULE refreshSchedule\n| ON COMMIT\n;\n    \nrefreshSchedule\n: EVERY INTEGER_VALUE mvRefreshUnit (STARTS STRING_LITERAL)?\n;\n    \nmvRefreshUnit\n: MINUTE | HOUR | DAY | WEEK\n;    \n")),(0,l.yg)("p",null,"\u4f8b\u5982\uff1a\u6bcf2\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\uff0c\u4ece2023-12-13 21:07:09\u5f00\u59cb"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1\nREFRESH ON SCHEDULE EVERY 2 HOUR STARTS "2023-12-13 21:07:09"\n')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"key"),"\n\u7269\u5316\u89c6\u56fe\u4e3a Duplicate Key \u6a21\u578b\uff0c\u56e0\u6b64\u6307\u5b9a\u7684\u5217\u4e3a\u6392\u5e8f\u5217"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"identifierList\n: LEFT_PAREN identifierSeq RIGHT_PAREN\n    ;\n\nidentifierSeq\n: ident+=errorCapturingIdentifier (COMMA ident+=errorCapturingIdentifier)*\n;\n")),(0,l.yg)("p",null,"\u4f8b\u5982\uff1a\u6307\u5b9ak1\uff0ck2\u4e3a\u6392\u5e8f\u5217"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nKEY(k1,k2)\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"partition"),"\n\u7269\u5316\u89c6\u56fe\u6709\u4e24\u79cd\u5206\u533a\u65b9\u5f0f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u9ed8\u8ba4\u53ea\u6709\u4e00\u4e2a\u5206\u533a\uff0c\u5982\u679c\u6307\u5b9a\u5206\u533a\u5b57\u6bb5\uff0c\u4f1a\u81ea\u52a8\u63a8\u5bfc\u51fa\u5b57\u6bb5\u6765\u81ea\u54ea\u4e2a\u57fa\u8868\u5e76\u540c\u6b65\u57fa\u8868(\u5f53\u524d\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"OlapTable")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"hive"),")\u7684\u6240\u6709\u5206\u533a\uff08\u9650\u5236\u6761\u4ef6\uff1a\u57fa\u8868\u5982\u679c\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"OlapTable"),"\uff0c\u90a3\u4e48\u53ea\u80fd\u6709\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\uff09\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982\uff1a\u57fa\u8868\u662f Range \u5206\u533a\uff0c\u5206\u533a\u5b57\u6bb5\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"create_time")," \u5e76\u6309\u5929\u5206\u533a\uff0c\u521b\u5efa\u7269\u5316\u89c6\u56fe\u65f6\u6307\u5b9a ",(0,l.yg)("inlineCode",{parentName:"p"},"partition by(ct) as select create_time as ct from t1"),"\uff0c\u90a3\u4e48\u7269\u5316\u89c6\u56fe\u4e5f\u4f1a\u662f Range \u5206\u533a\uff0c\u5206\u533a\u5b57\u6bb5\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"ct"),"\uff0c\u5e76\u4e14\u6309\u5929\u5206\u533a\u3002"),(0,l.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5206\u533a\u4e0a\u5377\u7684\u65b9\u5f0f\u51cf\u5c11\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u6570\u91cf\uff0c\u76ee\u524d\u5206\u533a\u4e0a\u5377\u51fd\u6570\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"date_trunc"),",\u4e0a\u5377\u7684\u5355\u4f4d\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"year"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"month"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"day")),(0,l.yg)("p",null,"\u5206\u533a\u5b57\u6bb5\u7684\u9009\u62e9\u548c\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u4e49\u9700\u8981\u6ee1\u8db3\u5206\u533a\u589e\u91cf\u66f4\u65b0\u7684\u6761\u4ef6\uff0c\u7269\u5316\u89c6\u56fe\u624d\u53ef\u4ee5\u521b\u5efa\u6210\u529f\uff0c\u5426\u5219\u4f1a\u62a5\u9519 ",(0,l.yg)("inlineCode",{parentName:"p"},"Unable to find a suitable base table for partitioning")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mvPartition\n    : partitionKey = identifier\n    | partitionExpr = functionCallExpression\n    ;\n")),(0,l.yg)("p",null,"\u4f8b\u5982\u57fa\u8868\u6309\u5929\u5206\u533a\uff0c\u7269\u5316\u89c6\u56fe\u540c\u6837\u6309\u5929\u5206\u533a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"partition by (`k2`)\n")),(0,l.yg)("p",null,"\u4f8b\u5982\u57fa\u8868\u6309\u5929\u5206\u533a\uff0c\u7269\u5316\u89c6\u56fe\u6309\u6708\u5206\u533a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"partition by (date_trunc(`k2`,'month'))\n")),(0,l.yg)("h4",{id:"property"},"Property"),(0,l.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u65e2\u53ef\u4ee5\u6307\u5b9a Table \u7684 Property\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u7279\u6709\u7684 Property\u3002"),(0,l.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u7279\u6709\u7684 Property \u5305\u62ec\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"grace_period"),"\uff1a\u67e5\u8be2\u6539\u5199\u65f6\u5141\u8bb8\u7269\u5316\u89c6\u56fe\u6570\u636e\u7684\u6700\u5927\u5ef6\u8fdf\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002\u5982\u679c\u5206\u533a A \u548c\u57fa\u8868\u7684\u6570\u636e\u4e0d\u4e00\u81f4\uff0c\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a A \u4e0a\u6b21\u5237\u65b0\u65f6\u95f4\u4e3a 1\uff0c\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4\u4e3a 2\uff0c\u90a3\u4e48\u8be5\u5206\u533a\u4e0d\u4f1a\u88ab\u900f\u660e\u6539\u5199\u3002\u4f46\u662f\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"p"},"grace_period")," \u5927\u4e8e\u7b49\u4e8e1\uff0c\u8be5\u5206\u533a\u5c31\u4f1a\u88ab\u7528\u4e8e\u900f\u660e\u6539\u5199\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"excluded_trigger_tables"),"\uff1a\u6570\u636e\u5237\u65b0\u65f6\u5ffd\u7565\u7684\u8868\u540d\uff0c\u9017\u53f7\u5206\u5272\u3002\u4f8b\u5982",(0,l.yg)("inlineCode",{parentName:"p"},"table1,table2")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"refresh_partition_num"),"\uff1a\u5355\u6b21 Insert \u8bed\u53e5\u5237\u65b0\u7684\u5206\u533a\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a 1\u3002\u7269\u5316\u89c6\u56fe\u5237\u65b0\u65f6\u4f1a\u5148\u8ba1\u7b97\u8981\u5237\u65b0\u7684\u5206\u533a\u5217\u8868\uff0c\u7136\u540e\u6839\u636e\u8be5\u914d\u7f6e\u62c6\u5206\u6210\u591a\u4e2a Insert \u8bed\u53e5\u987a\u5e8f\u6267\u884c\u3002\u9047\u5230\u5931\u8d25\u7684 Insert \u8bed\u53e5\uff0c\u6574\u4e2a\u4efb\u52a1\u5c06\u505c\u6b62\u6267\u884c\u3002\u7269\u5316\u89c6\u56fe\u4fdd\u8bc1\u5355\u4e2a Insert \u8bed\u53e5\u7684\u4e8b\u52a1\u6027\uff0c\u5931\u8d25\u7684 Insert \u8bed\u53e5\u4e0d\u4f1a\u5f71\u54cd\u5230\u5df2\u7ecf\u5237\u65b0\u6210\u529f\u7684\u5206\u533a\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"workload_group"),"\uff1a\u7269\u5316\u89c6\u56fe\u6267\u884c\u5237\u65b0\u4efb\u52a1\u65f6\u4f7f\u7528\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"workload_group")," \u540d\u79f0\u3002\u7528\u6765\u9650\u5236\u7269\u5316\u89c6\u56fe\u5237\u65b0\u6570\u636e\u4f7f\u7528\u7684\u8d44\u6e90\uff0c\u907f\u514d\u5f71\u54cd\u5230\u5176\u5b83\u4e1a\u52a1\u7684\u8fd0\u884c\u3002\u5173\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"workload_group")," \u7684\u521b\u5efa\u53ca\u4f7f\u7528\uff0c\u53ef\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"../../../../admin-manual/workload-group.md"},"Workload Group")," \u6587\u6863\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"partition_sync_limit"),"\uff1a\u5f53\u57fa\u8868\u7684\u5206\u533a\u5b57\u6bb5\u4e3a\u65f6\u95f4\u65f6\uff08\u5982\u679c\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_date_format"),"\uff09\uff0c\u53ef\u4ee5\u7528\u6b64\u5c5e\u6027\u914d\u7f6e\u540c\u6b65\u57fa\u8868\u7684\u5206\u533a\u8303\u56f4\uff0c\u914d\u5408 ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_sync_time_unit")," \u4e00\u8d77\u4f7f\u7528\u3002\n\u4f8b\u5982\u8bbe\u7f6e\u4e3a 2\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"partition_sync_time_unit")," \u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"MONTH"),"\uff0c\u4ee3\u8868\u4ec5\u540c\u6b65\u57fa\u8868\u8fd1 2 \u4e2a\u6708\u7684\u5206\u533a\u548c\u6570\u636e\u3002\u6700\u5c0f\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"1"),"\u3002\n\u968f\u7740\u65f6\u95f4\u7684\u53d8\u5316\u7269\u5316\u89c6\u56fe\u6bcf\u6b21\u5237\u65b0\u65f6\u90fd\u4f1a\u81ea\u52a8\u589e\u5220\u5206\u533a\uff0c\u4f8b\u5982\u7269\u5316\u89c6\u56fe\u73b0\u5728\u6709 2,3 \u4e24\u4e2a\u6708\u7684\u6570\u636e\uff0c\u4e0b\u4e2a\u6708\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u5220\u9664 2 \u6708\u7684\u6570\u636e\uff0c\u589e\u52a0 4 \u6708\u7684\u6570\u636e\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"partition_sync_time_unit"),"\uff1a\u65f6\u95f4\u5355\u4f4d\uff0c\u652f\u6301 DAY/MONTH/YEAR\uff08\u9ed8\u8ba4DAY\uff09"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"partition_date_format"),'\uff1a\u5206\u533a\u5b57\u6bb5\u7684\u65f6\u95f4\u683c\u5f0f\uff0c\u4f8b\u5982"%Y-%m-%d"'),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"enable_nondeterministic_function"),"\uff1a\u7269\u5316\u89c6\u56fe\u5b9a\u4e49 SQL \u662f\u5426\u5141\u8bb8\u5305\u542b nondeterministic \u51fd\u6570\uff0c\u6bd4\u5982 current_date(), now(), random()\u7b49\uff0c\u5982\u679c\n\u662f true, \u5141\u8bb8\u5305\u542b\uff0c\u5426\u5219\u4e0d\u5141\u8bb8\u5305\u542b, \u9ed8\u8ba4\u4e0d\u5141\u8bb8\u5305\u542b\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"query"),"\uff1a\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5176\u7ed3\u679c\u5373\u4e3a\u7269\u5316\u89c6\u56fe\u4e2d\u7684\u6570\u636e"),(0,l.yg)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u5237\u65b0\uff0c\u4e4b\u540e\u6bcf\u5468\u5237\u65b0\u4e00\u6b21\u7684\u7269\u5316\u89c6\u56fe ",(0,l.yg)("inlineCode",{parentName:"p"},"mv1"),"\uff0c\u6570\u636e\u6e90\u4e3a Hive Catalog"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS SELECT * FROM hive_catalog.db1.user;\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u591a\u8868 Join \u7684\u7269\u5316\u89c6\u56fe"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS select user.k1,user.k3,com.k4 from user join com on user.k1=com.k1;\n')))),(0,l.yg)("h3",{id:"\u5173\u952e\u8bcd"},"\u5173\u952e\u8bcd"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"CREATE, ASYNC, MATERIALIZED, VIEW\n")))}m.isMDXComponent=!0}}]);