"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[378765],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>s});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),g=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=g(e.components);return n.createElement(d.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),o=g(a),u=r,s=o["".concat(d,".").concat(u)]||o[u]||m[u]||l;return a?n.createElement(s,i(i({ref:t},y),{},{components:a})):n.createElement(s,i({ref:t},y))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},590975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"DBT Doris Adapter",language:"zh-CN"},i=void 0,p={unversionedId:"ecosystem/dbt-doris-adapter",id:"version-2.1/ecosystem/dbt-doris-adapter",title:"DBT Doris Adapter",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/dbt-doris-adapter.md",sourceDirName:"ecosystem",slug:"/ecosystem/dbt-doris-adapter",permalink:"/zh-CN/docs/2.1/ecosystem/dbt-doris-adapter",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DBT Doris Adapter",language:"zh-CN"},sidebar:"docs",previous:{title:"DataX Doriswriter",permalink:"/zh-CN/docs/2.1/ecosystem/datax"},next:{title:"Seatunnel Doris Sink",permalink:"/zh-CN/docs/2.1/ecosystem/seatunnel"}},d={},g=[{value:"\u7248\u672c\u652f\u6301",id:"\u7248\u672c\u652f\u6301",level:2},{value:"dbt-doris adapter \u4f7f\u7528",id:"dbt-doris-adapter-\u4f7f\u7528",level:2},{value:"dbt-doris adapter \u5b89\u88c5",id:"dbt-doris-adapter-\u5b89\u88c5",level:3},{value:"dbt-doris adapter \u521d\u59cb\u5316",id:"dbt-doris-adapter-\u521d\u59cb\u5316",level:3},{value:"dbt-doris adapter \u8fd0\u884c",id:"dbt-doris-adapter-\u8fd0\u884c",level:3},{value:"dbt-doris adapter \u7269\u5316\u65b9\u5f0f",id:"dbt-doris-adapter-\u7269\u5316\u65b9\u5f0f",level:3},{value:"dbt-doris adapter seed",id:"dbt-doris-adapter-seed",level:3}],y={toc:g},o="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(o,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/introduction"},"DBT(Data Build Tool)")," \u662f\u4e13\u6ce8\u4e8e\u505a ELT\uff08\u63d0\u53d6\u3001\u52a0\u8f7d\u3001\u8f6c\u6362\uff09\u4e2d\u7684 T\uff08Transform\uff09\u2014\u2014 \u201c\u8f6c\u6362\u6570\u636e\u201d\u73af\u8282\u7684\u7ec4\u4ef6\n",(0,r.yg)("inlineCode",{parentName:"p"},"dbt-doris")," adapter \u662f\u57fa\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"dbt-core")," 1.5.0 \u5f00\u53d1\uff0c\u4f9d\u8d56\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"mysql-connector-python"),"\u9a71\u52a8\u5bf9 doris \u8fdb\u884c\u6570\u636e\u8f6c\u6362\u3002"),(0,r.yg)("p",null,"\u4ee3\u7801\u4ed3\u5e93\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/dbt-doris"},"https://github.com/apache/doris/tree/master/extension/dbt-doris")),(0,r.yg)("h2",{id:"\u7248\u672c\u652f\u6301"},"\u7248\u672c\u652f\u6301"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"doris"),(0,r.yg)("th",{parentName:"tr",align:null},"python"),(0,r.yg)("th",{parentName:"tr",align:null},"dbt-core"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">=1.2.5"),(0,r.yg)("td",{parentName:"tr",align:null},">=3.8,<=3.10"),(0,r.yg)("td",{parentName:"tr",align:null},">=1.5.0")))),(0,r.yg)("h2",{id:"dbt-doris-adapter-\u4f7f\u7528"},"dbt-doris adapter \u4f7f\u7528"),(0,r.yg)("h3",{id:"dbt-doris-adapter-\u5b89\u88c5"},"dbt-doris adapter \u5b89\u88c5"),(0,r.yg)("p",null,"\u4f7f\u7528 pip \u5b89\u88c5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install dbt-doris\n")),(0,r.yg)("p",null,"\u5b89\u88c5\u884c\u4e3a\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u6240\u6709 dbt \u8fd0\u884c\u7684\u4f9d\u8d56\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u9a8c\u8bc1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"dbt --version\n")),(0,r.yg)("p",null,"\u5982\u679c\u7cfb\u7edf\u672a\u8bc6\u522b dbt \u8fd9\u4e2a\u547d\u4ee4\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u6761\u8f6f\u8fde\u63a5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ln -s /usr/local/python3/bin/dbt /usr/bin/dbt\n")),(0,r.yg)("h3",{id:"dbt-doris-adapter-\u521d\u59cb\u5316"},"dbt-doris adapter \u521d\u59cb\u5316"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"dbt init \n")),(0,r.yg)("p",null,"\u4f1a\u51fa\u73b0\u8be2\u95ee\u5f0f\u547d\u4ee4\u884c\uff0c\u8f93\u5165\u76f8\u5e94\u914d\u7f6e\u5982\u4e0b\u5373\u53ef\u521d\u59cb\u5316\u4e00\u4e2a dbt \u9879\u76ee\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"project"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u9879\u76ee\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5bf9\u5e94\u7f16\u53f7\u9009\u62e9\u9002\u914d\u5668\uff08\u9009\u62e9 doris\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"doris \u7684 host")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"9030"),(0,r.yg)("td",{parentName:"tr",align:null},"doris \u7684 MySQL Protocol Port")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5728 dbt-doris \u4e2d\uff0c\u7b49\u540c\u4e8e database\uff0c\u5e93\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"doris \u7684 username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"doris \u7684 password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"threads"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"dbt-doris \u4e2d\u5e76\u884c\u5ea6\uff08\u8bbe\u7f6e\u4e0e\u96c6\u7fa4\u80fd\u529b\u4e0d\u5339\u914d\u7684\u5e76\u884c\u5ea6\u4f1a\u589e\u52a0 dbt \u8fd0\u884c\u5931\u8d25\u98ce\u9669\uff09")))),(0,r.yg)("h3",{id:"dbt-doris-adapter-\u8fd0\u884c"},"dbt-doris adapter \u8fd0\u884c"),(0,r.yg)("p",null,"\u76f8\u5173 dbt \u8fd0\u884c\u6587\u6863\uff0c\u53ef\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/get-started/run-your-dbt-projects"},"\u6b64\u5904"),"\u3002\n\u8fdb\u5165\u5230\u521a\u521a\u521b\u5efa\u7684\u9879\u76ee\u76ee\u5f55\u4e0b\u9762\uff0c\u6267\u884c\u9ed8\u8ba4\u7684 dbt \u6a21\u578b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"dbt run \n")),(0,r.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd0\u884c\u4e86\u4e24\u4e2a model\uff1amy_first_dbt_model \u548c my_second_dbt_model"),(0,r.yg)("p",null,"\u4ed6\u4eec\u5206\u522b\u662f\u7269\u5316\u8868 table \u548c\u89c6\u56fe view\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u767b\u9646 doris\uff0c\u67e5\u770b my_first_dbt_model \u548c my_second_dbt_model \u7684\u6570\u636e\u7ed3\u679c\u53ca\u5efa\u8868\u8bed\u53e5\u3002"),(0,r.yg)("h3",{id:"dbt-doris-adapter-\u7269\u5316\u65b9\u5f0f"},"dbt-doris adapter \u7269\u5316\u65b9\u5f0f"),(0,r.yg)("p",null,"dbt-doris \u7684 \u7269\u5316\u65b9\u5f0f\uff08Materialization\uff09\u652f\u6301\u4e00\u4e0b\u4e09\u79cd\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"view")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"table")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"incremental"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"View")," "),(0,r.yg)("p",null,"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"view"),"\u4f5c\u4e3a\u7269\u5316\u6a21\u5f0f\uff0c\u5728 Models \u6bcf\u6b21\u8fd0\u884c\u65f6\u90fd\u4f1a\u901a\u8fc7 create view as \u8bed\u53e5\u91cd\u65b0\u6784\u5efa\u4e3a\u89c6\u56fe\u3002(\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cdbt \u7684\u7269\u5316\u65b9\u5f0f\u4e3a view)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u4f18\u70b9\uff1a\u6ca1\u6709\u5b58\u50a8\u989d\u5916\u7684\u6570\u636e\uff0c\u6e90\u6570\u636e\u4e4b\u4e0a\u7684\u89c6\u56fe\u5c06\u59cb\u7ec8\u5305\u542b\u6700\u65b0\u7684\u8bb0\u5f55\u3002\n\u7f3a\u70b9\uff1a\u6267\u884c\u8f83\u5927\u8f6c\u6362\u6216\u5d4c\u5957\u5728\u5176\u4ed6view\u4e4b\u4e0a\u7684view\u67e5\u8be2\u901f\u5ea6\u5f88\u6162\u3002\n\u5efa\u8bae\uff1a\u901a\u5e38\u4ece\u6a21\u578b\u7684\u89c6\u56fe\u5f00\u59cb\uff0c\u53ea\u6709\u5f53\u5b58\u5728\u6027\u80fd\u95ee\u9898\u65f6\u624d\u66f4\u6539\u4e3a\u53e6\u4e00\u4e2a\u7269\u5316\u65b9\u5f0f\u3002view\u6700\u9002\u5408\u4e0d\u8fdb\u884c\u91cd\u5927\u8f6c\u6362\u7684\u6a21\u578b\uff0c\u4f8b\u5982\u91cd\u547d\u540d\uff0c\u5217\u53d8\u66f4\u3002\n")),(0,r.yg)("p",null,"\u914d\u7f6e\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"models:\n  <resource-path>:\n    +materialized: view\n")),(0,r.yg)("p",null,"\u6216\u8005\u5728 model \u6587\u4ef6\u91cc\u9762\u5199"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jinja"},'{{ config(materialized = "view") }}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Table")),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"table")," \u7269\u5316\u6a21\u5f0f\u65f6\uff0c\u60a8\u7684\u6a21\u578b\u5728\u6bcf\u6b21\u8fd0\u884c\u65f6\u90fd\u4f1a\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"create table as select")," \u8bed\u53e5\u91cd\u5efa\u4e3a\u8868\u3002\n\u5bf9\u4e8e dbt \u7684 tablet \u7269\u5316\uff0cdbt-doris \u91c7\u7528\u4ee5\u4e0b\u6b65\u9aa4\u4fdd\u8bc1\u6570\u636e\u66f4\u8fed\u65f6\u5019\u7684\u539f\u5b50\u6027\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"create table this_table_temp as {{ model sql}}"),"\uff0c\u9996\u5148\u521b\u5efa\u4e34\u65f6\u8868\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5224\u65ad ",(0,r.yg)("inlineCode",{parentName:"p"},"this_table")," \u662f\u5426\u4e0d\u5b58\u5728\uff0c\u5373\u662f\u9996\u6b21\u521b\u5efa\uff0c\u6267\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"rename"),"\uff0c\u5c06\u4e34\u65f6\u8868\u53d8\u66f4\u4e3a\u6700\u7ec8\u8868\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u82e5\u5df2\u7ecf\u5b58\u5728\uff0c\u5219 ",(0,r.yg)("inlineCode",{parentName:"p"},"alter table this_table REPLACE WITH TABLE this_table_temp PROPERTIES('swap' = 'False')"),"\uff0c\u6b64\u64cd\u4f5c\u53ef\u4ee5\u4ea4\u6362\u8868\u540d\u5e76\u4e14\u5220\u9664",(0,r.yg)("inlineCode",{parentName:"p"},"this_table_temp"),"\u4e34\u65f6\u8868\uff0c",(0,r.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE"},"\u6b64\u8fc7\u7a0b"),"\u901a\u8fc7 Doris \u5185\u6838\u7684\u4e8b\u52a1\u673a\u5236\u4fdd\u8bc1\u672c\u6b21\u64cd\u4f5c\u539f\u5b50\u6027\u3002"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u4f18\u70b9\uff1atable\u67e5\u8be2\u901f\u5ea6\u4f1a\u6bd4view\u5feb\u3002\n\u7f3a\u70b9\uff1atable\u9700\u8981\u8f83\u957f\u65f6\u95f4\u624d\u80fd\u6784\u5efa\u6216\u91cd\u5efa\uff0c\u4f1a\u989d\u5916\u5b58\u50a8\u6570\u636e\uff0c\u800c\u4e14\u4e0d\u80fd\u591f\u505a\u589e\u91cf\u6570\u636e\u540c\u6b65\u3002\n\u5efa\u8bae\uff1a\u5efa\u8bae\u5bf9 BI \u5de5\u5177\u67e5\u8be2\u7684model\u6216\u4e0b\u6e38\u67e5\u8be2\u3001\u8f6c\u6362\u7b49\u64cd\u4f5c\u8f83\u6162\u7684model\u4f7f\u7528table\u7269\u5316\u65b9\u5f0f\u3002\n")),(0,r.yg)("p",null,"\u914d\u7f6e\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"models:\n  <resource-path>:\n    +materialized: table\n    +duplicate_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n")),(0,r.yg)("p",null,"\u6216\u8005\u5728 model \u6587\u4ef6\u91cc\u9762\u5199"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jinja"},'{{ config(\n    materialized = "table",\n    duplicate_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    ]\n) }}\n')),(0,r.yg)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u9879\u8be6\u60c5\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"materialized")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8be5\u8868\u7684\u7269\u5316\u5f62\u5f0f\uff08\u5bf9\u5e94\u521b\u5efa\u8868\u6a21\u578b\u4e3a\u660e\u7ec6\u6a21\u578b\uff08Duplicate\uff09\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"Required")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"duplicate_key")),(0,r.yg)("td",{parentName:"tr",align:null},"\u660e\u7ec6\u6a21\u578b\u7684\u6392\u5e8f\u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"replication_num")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u526f\u672c\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u5206\u533a\u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_type")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u5206\u533a\u7c7b\u578b\uff0crange \u6216 list .(default: ",(0,r.yg)("inlineCode",{parentName:"td"},"RANGE"),")"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by_init")),(0,r.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u7684\u8868\u5206\u533a"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"distributed_by")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u6876\u533a\u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buckets")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5206\u6876\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"properties")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5efa\u8868\u7684\u5176\u4ed6\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Incremental")),(0,r.yg)("p",null,"\u4ee5\u4e0a\u6b21\u8fd0\u884c dbt \u7684 incremental model \u7ed3\u679c\u4e3a\u57fa\u51c6\uff0c\u589e\u91cf\u7684\u5c06\u8bb0\u5f55\u63d2\u5165\u6216\u66f4\u65b0\u5230\u8868\u4e2d\u3002\ndoris \u7684\u589e\u91cf\u5b9e\u73b0\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u6b64\u9879\u8bbe\u8ba1\u4e24\u79cd\u589e\u91cf\uff08incremental_strategy \u8bbe\u7f6e\uff09\u7684\u7b56\u7565\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"insert_overwrite"),"\uff1a\u4f9d\u8d56\u4e8e unique \u6a21\u578b\uff0c\u5982\u679c\u6709\u589e\u91cf\u9700\u6c42\uff0c\u5728\u521d\u59cb\u5316\u8be5\u6a21\u578b\u7684\u6570\u636e\u65f6\u5c31\u6307\u5b9a\u7269\u5316\u4e3a incremental\uff0c\u901a\u8fc7\u6307\u5b9a\u805a\u5408\u5217\u8fdb\u884c\u805a\u5408\uff0c\u5b9e\u73b0\u589e\u91cf\u6570\u636e\u7684\u8986\u76d6\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"append"),"\uff1a\u4f9d\u8d56\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"duplicate"),"\u6a21\u578b\uff0c\u4ec5\u4ec5\u5bf9\u589e\u91cf\u6570\u636e\u505a\u8ffd\u52a0\uff0c\u4e0d\u6d89\u53ca\u4fee\u6539\u4efb\u4f55\u5386\u53f2\u6570\u636e\u3002\u56e0\u6b64\u4e0d\u9700\u8981\u6307\u5b9a unique_key\u3002"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u4f18\u70b9\uff1a\u53ea\u9700\u8f6c\u6362\u65b0\u8bb0\u5f55\uff0c\u53ef\u663e\u8457\u51cf\u5c11\u6784\u5efa\u65f6\u95f4\u3002\n\u7f3a\u70b9\uff1aincremental\u6a21\u5f0f\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\uff0c\u662f dbt \u7684\u9ad8\u7ea7\u7528\u6cd5\uff0c\u9700\u8981\u590d\u6742\u573a\u666f\u7684\u652f\u6301\u548c\u5bf9\u5e94\u7ec4\u4ef6\u7684\u9002\u914d\u3002\n\u5efa\u8bae\uff1a\u589e\u91cf\u6a21\u578b\u6700\u9002\u5408\u57fa\u4e8e\u4e8b\u4ef6\u76f8\u5173\u7684\u573a\u666f\u6216 dbt \u8fd0\u884c\u53d8\u5f97\u592a\u6162\u65f6\u4f7f\u7528\u589e\u91cf\u6a21\u578b\n")),(0,r.yg)("p",null,"\u914d\u7f6e\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"models:\n  <resource-path>:\n    +materialized: incremental\n    +incremental_strategy: <strategy>\n    +unique_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n")),(0,r.yg)("p",null,"\u6216\u8005\u5728 model \u6587\u4ef6\u91cc\u9762\u5199"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jinja"},'{{ config(\n    materialized = "incremental",\n    incremental_strategy = "<strategy>"\n    unique_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    )\n}}\n')),(0,r.yg)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u9879\u8be6\u60c5\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"materialized")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8be5\u8868\u7684\u7269\u5316\u5f62\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null},"Required")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"incremental_strategy")),(0,r.yg)("td",{parentName:"tr",align:null},"\u589e\u91cf\u7b56\u7565"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"unique_key")),(0,r.yg)("td",{parentName:"tr",align:null},"unique \u8868\u7684 key \u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"replication_num")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u526f\u672c\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u5206\u533a\u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_type")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u5206\u533a\u7c7b\u578b\uff0crange \u6216 list .(default: ",(0,r.yg)("inlineCode",{parentName:"td"},"RANGE"),")"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partition_by_init")),(0,r.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u7684\u8868\u5206\u533a"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"distributed_by")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u6876\u533a\u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buckets")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5206\u6876\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"properties")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5efa\u8868\u7684\u5176\u4ed6\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional")))),(0,r.yg)("h3",{id:"dbt-doris-adapter-seed"},"dbt-doris adapter seed"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.getdbt.com/faqs/seeds/build-one-seed"},(0,r.yg)("inlineCode",{parentName:"a"},"seed"))," \u662f\u7528\u4e8e\u52a0\u8f7d csv \u7b49\u6570\u636e\u6587\u4ef6\u65f6\u7684\u529f\u80fd\u6a21\u5757\uff0c\u5b83\u662f\u4e00\u79cd\u52a0\u8f7d\u6587\u4ef6\u5165\u5e93\u53c2\u4e0e\u6a21\u578b\u6784\u5efa\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u4f46\u6709\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"seed \u4e0d\u5e94\u7528\u4e8e\u52a0\u8f7d\u539f\u59cb\u6570\u636e\uff08\u4f8b\u5982\uff0c\u4ece\u751f\u4ea7\u6570\u636e\u5e93\u5bfc\u51fa\u5927\u578b CSV \u6587\u4ef6\uff09\u3002 ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7531\u4e8e seed \u662f\u53d7\u7248\u672c\u63a7\u5236\u7684\uff0c\u56e0\u6b64\u5b83\u4eec\u6700\u9002\u5408\u5305\u542b\u7279\u5b9a\u4e8e\u4e1a\u52a1\u7684\u903b\u8f91\u7684\u6587\u4ef6\uff0c\u4f8b\u5982\u56fd\u5bb6/\u5730\u533a\u4ee3\u7801\u5217\u8868\u6216\u5458\u5de5\u7684\u7528\u6237 ID\u3002 ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u5927\u6587\u4ef6\uff0c\u4f7f\u7528 dbt \u7684 seed \u529f\u80fd\u52a0\u8f7d CSV \u7684\u6027\u80fd\u4e0d\u4f73\u3002\u5e94\u8be5\u8003\u8651\u4f7f\u7528 streamload \u7b49\u65b9\u5f0f\u5c06\u8fd9\u4e9b CSV \u52a0\u8f7d\u5230 doris \u4e2d\u3002"))),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 dbt project \u7684\u76ee\u5f55\u4e0b\u9762\u770b\u5230 seeds \u7684\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u4e0a\u4f20 csv \u6587\u4ef6\u548c seed \u914d\u7f6e\u6587\u4ef6\u5e76\u8fd0\u884c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," dbt seed --select seed_name\n")),(0,r.yg)("p",null,"\u5e38\u89c1 seed \u914d\u7f6e\u6587\u4ef6\u5199\u6cd5\uff0c\u652f\u6301\u5bf9\u5217\u7c7b\u578b\u7684\u5b9a\u4e49\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seeds:\n  seed_name: # \u79cd\u5b50\u540d\u79f0\uff0c\u5728 seed \u6784\u5efa\u540e\uff0c\u4f1a\u4f5c\u4e3a\u8868\u540d\n    config: \n      schema: demo_seed # \u5728 seed \u6784\u5efa\u540e\uff0c\u4f1a\u4f5c\u4e3a database \u7684\u4e00\u90e8\u5206\n      full_refresh: true\n      replication_num: 1\n      column_types:\n        id: bigint\n        phone: varchar(32)\n        ip: varchar(15)\n        name: varchar(20)\n        cost: DecimalV3(19,10)\n")))}m.isMDXComponent=!0}}]);