"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[776350],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>h});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,h=u["".concat(l,".").concat(y)]||u[y]||g[y]||o;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},515570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"TPCH",language:"zh-CN"},i=void 0,p={unversionedId:"lakehouse/datalake-analytics/tpch",id:"version-3.0/lakehouse/datalake-analytics/tpch",title:"TPCH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/tpch.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/tpch",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/tpch",draft:!1,tags:[],version:"3.0",frontMatter:{title:"TPCH",language:"zh-CN"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91 DLF",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/dlf"},next:{title:"TPCDS",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/tpcds"}},l={},c=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u7f16\u8bd1 TPCH Connector",id:"\u7f16\u8bd1-tpch-connector",level:2},{value:"\u90e8\u7f72 TPCH Connector",id:"\u90e8\u7f72-tpch-connector",level:2},{value:"\u521b\u5efa TPCH Catalog",id:"\u521b\u5efa-tpch-catalog",level:2},{value:"\u4f7f\u7528 TPCH Catalog",id:"\u4f7f\u7528-tpch-catalog",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u5feb\u901f\u6784\u5efa TPCH \u6d4b\u8bd5\u6570\u636e\u96c6",id:"\u5feb\u901f\u6784\u5efa-tpch-\u6d4b\u8bd5\u6570\u636e\u96c6",level:4}],s={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,a.yg)("p",null,"TPCH Catalog \u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/trino-connector-developer-guide"},"Trino Connector")," \u517c\u5bb9\u6846\u67b6\uff0c\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/tpch.html"},"TPCH Connector")," \u6765\u5feb\u901f\u6784\u5efa TPCH \u6d4b\u8bd5\u96c6\u3002"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u81ea Doris 3.0.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,a.yg)("h2",{id:"\u7f16\u8bd1-tpch-connector"},"\u7f16\u8bd1 TPCH Connector"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9700\u8981 JDK 17 \u7248\u672c\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/trinodb/trino.git\ngit checkout 435\ncd trino/plugin/trino-tpch\nmvn clean install -DskipTest\n")),(0,a.yg)("p",null,"\u5b8c\u6210\u7f16\u8bd1\u540e\uff0c\u4f1a\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-tpch/target/")," \u4e0b\u5f97\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpch-435/")," \u76ee\u5f55\u3002"),(0,a.yg)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/morningman/trino-connectors/releases/download/trino-connectors/trino-tpch-435.tar.gz"},"trino-tpch-435.tar.gz")," \u5e76\u89e3\u538b\u3002"),(0,a.yg)("h2",{id:"\u90e8\u7f72-tpch-connector"},"\u90e8\u7f72 TPCH Connector"),(0,a.yg)("p",null,"\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpch-435/")," \u76ee\u5f55\u653e\u5230\u6240\u6709 FE \u548c BE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"connectors/")," \u76ee\u5f55\u4e0b\u3002\uff08\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\uff09\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502\xa0\xa0 \u251c\u2500\u2500 trino-tpch-435\n...\n")),(0,a.yg)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5efa\u8bae\u91cd\u542f FE\u3001BE \u8282\u70b9\u4ee5\u786e\u4fdd Connector \u53ef\u4ee5\u88ab\u6b63\u786e\u52a0\u8f7d\u3002"),(0,a.yg)("h2",{id:"\u521b\u5efa-tpch-catalog"},"\u521b\u5efa TPCH Catalog"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `tpch` PROPERTIES (\n    "type" = "trino-connector",\n    "trino.connector.name" = "tpch",\n    "trino.tpch.column-naming" = "STANDARD",\n    "trino.tpch.splits-per-node" = "32"\n);\n')),(0,a.yg)("p",null,"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"tpch.splits-per-node")," \u4e3a\u5e76\u53d1\u6570\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a BE \u5355\u673a\u6838\u6570\u7684 2 \u500d\uff0c\u53ef\u4ee5\u83b7\u5f97\u6700\u4f18\u7684\u5e76\u53d1\u5ea6\u3002\u63d0\u5347\u6570\u636e\u751f\u6210\u6548\u7387\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'"tpch.column-naming" = "STANDARD"')," \u65f6\uff0cTPCH \u8868\u4e2d\u7684\u5217\u540d\uff0c\u90fd\u4f1a\u4ee5\u8868\u540d\u7f29\u5199\u5f00\u5934\uff0c\u6bd4\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},"l_orderkey"),"\uff0c\u5426\u5219\uff0c\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"orderkey"),"\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528-tpch-catalog"},"\u4f7f\u7528 TPCH Catalog"),(0,a.yg)("p",null,"TPCH Catalog \u4e2d\u9884\u5236\u4e86\u4e0d\u540c Scale Factor \u7684 TPCH \u6570\u636e\u96c6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u547d\u4ee4\u67e5\u770b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SWITCH tpch;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| sf1                |\n| sf100              |\n| sf1000             |\n| sf10000            |\n| sf100000           |\n| sf300              |\n| sf3000             |\n| sf30000            |\n| tiny               |\n+--------------------+\n11 rows in set (0.00 sec)\n\nmysql> USE sf1;\nmysql> SHOW TABLES;\n+---------------+\n| Tables_in_sf1 |\n+---------------+\n| customer      |\n| lineitem      |\n| nation        |\n| orders        |\n| part          |\n| partsupp      |\n| region        |\n| supplier      |\n+---------------+\n8 rows in set (0.00 sec)\n")),(0,a.yg)("p",null,"\u901a\u8fc7 SELECT \u8bed\u53e5\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2\u8fd9\u4e9b\u8868\u3002"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u9884\u5236\u6570\u636e\u96c6\u7684\u6570\u636e\uff0c\u5e76\u6ca1\u6709\u5b9e\u9645\u5b58\u50a8\uff0c\u800c\u662f\u5728\u67e5\u8be2\u65f6\u5b9e\u65f6\u751f\u6210\u7684\u3002\u6240\u4ee5\u8fd9\u4e9b\u9884\u5236\u6570\u636e\u96c6\u4e0d\u9002\u5408\u7528\u6765\u76f4\u63a5\u8fdb\u884c Benchmark \u6d4b\u8bd5\u3002\u9002\u7528\u4e8e\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT")," \u5c06\u6570\u636e\u96c6\u5199\u5165\u5230\u5176\u4ed6\u76ee\u7684\u8868\uff08\u5982 Doris \u5185\u8868\u3001Hive\u3001Iceberg \u7b49\u6240\u6709 Doris \u652f\u6301\u5199\u5165\u7684\u6570\u636e\u6e90\uff09\u540e\uff0c\u5bf9\u76ee\u7684\u8868\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5\u3002")),(0,a.yg)("h3",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.yg)("h4",{id:"\u5feb\u901f\u6784\u5efa-tpch-\u6d4b\u8bd5\u6570\u636e\u96c6"},"\u5feb\u901f\u6784\u5efa TPCH \u6d4b\u8bd5\u6570\u636e\u96c6"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 CTAS \u8bed\u53e5\u5feb\u901f\u6784\u5efa\u4e00\u4e2a TPCH \u6d4b\u8bd5\u6570\u636e\u96c6\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE hive.tpch100.customer PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.customer  ;\nCREATE TABLE hive.tpch100.lineitem PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.lineitem  ;\nCREATE TABLE hive.tpch100.nation   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.nation    ;\nCREATE TABLE hive.tpch100.orders   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.orders    ;\nCREATE TABLE hive.tpch100.part     PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.part      ;\nCREATE TABLE hive.tpch100.partsupp PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.partsupp  ;\nCREATE TABLE hive.tpch100.region   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.region    ;\nCREATE TABLE hive.tpch100.supplier PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.supplier  ;\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5728\u5305\u542b 3 \u4e2a 16C BE \u8282\u70b9\u7684 Doris \u96c6\u7fa4\u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a TPCH 1000 \u7684 Hive \u6570\u636e\u96c6\uff0c\u5927\u7ea6\u9700\u8981 25 \u5206\u949f\uff0cTPCH 10000 \u5927\u7ea6\u9700\u8981 4 \u5230 5 \u4e2a\u5c0f\u65f6\u3002")))}g.isMDXComponent=!0}}]);