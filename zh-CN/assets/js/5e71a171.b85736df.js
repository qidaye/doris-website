"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[170599],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>T});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var A=n.createContext({}),i=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(A.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,A=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=i(a),u=l,T=c["".concat(A,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(T,s(s({ref:t},p),{},{components:a})):n.createElement(T,s({ref:t},p))}));function T(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},672888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=a(58168),l=(a(296540),a(15680));const r={title:"ALTER-DATABASE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",id:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",title:"ALTER-DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG"},next:{title:"ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}},A={},i=[{value:"ALTER-DATABASE",id:"alter-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-database"},"ALTER-DATABASE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER DATABASE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u7684\u5c5e\u6027\u3002\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,l.yg)("p",null,"1) \u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d\uff0c\u5355\u4f4d\u4e3aB/K/KB/M/MB/G/GB/T/TB/P/PB"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET DATA QUOTA quota;\n")),(0,l.yg)("p",null,"2) \u91cd\u547d\u540d\u6570\u636e\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name RENAME new_db_name;\n")),(0,l.yg)("p",null,"3) \u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u526f\u672c\u6570\u91cf\u914d\u989d"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET REPLICA QUOTA quota; \n")),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a\n\u91cd\u547d\u540d\u6570\u636e\u5e93\u540e\uff0c\u5982\u9700\u8981\uff0c\u8bf7\u4f7f\u7528 REVOKE \u548c GRANT \u547d\u4ee4\u4fee\u6539\u76f8\u5e94\u7684\u7528\u6237\u6743\u9650\u3002\n\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u6570\u636e\u91cf\u914d\u989d\u4e3a1024GB\uff0c\u9ed8\u8ba4\u526f\u672c\u6570\u91cf\u914d\u989d\u4e3a1073741824\u3002"),(0,l.yg)("p",null,"4) \u5bf9\u5df2\u6709 database \u7684 property \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER DATABASE db_name SET PROPERTIES ("key"="value", ...); \n')),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u6570\u636e\u91cf\u914d\u989d")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\n\u4e0a\u8ff0\u5355\u4f4d\u4e3a\u5b57\u8282,\u7b49\u4ef7\u4e8e\nALTER DATABASE example_db SET DATA QUOTA 10T;\n\nALTER DATABASE example_db SET DATA QUOTA 100G;\n\nALTER DATABASE example_db SET DATA QUOTA 200M;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u5e93 example_db \u91cd\u547d\u540d\u4e3a example_db2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db RENAME example_db2;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u8bbe\u5b9a\u6307\u5b9a\u6570\u636e\u5e93\u526f\u672c\u6570\u91cf\u914d\u989d")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u4fee\u6539db\u4e0btable\u7684\u9ed8\u8ba4\u526f\u672c\u5206\u5e03\u7b56\u7565\uff08\u8be5\u64cd\u4f5c\u4ec5\u5bf9\u65b0\u5efa\u7684table\u751f\u6548\uff0c\u4e0d\u4f1a\u4fee\u6539db\u4e0b\u5df2\u5b58\u5728\u7684table\uff09")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "tag.location.default:2");\n')),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"\u53d6\u6d88db\u4e0btable\u7684\u9ed8\u8ba4\u526f\u672c\u5206\u5e03\u7b56\u7565\uff08\u8be5\u64cd\u4f5c\u4ec5\u5bf9\u65b0\u5efa\u7684table\u751f\u6548\uff0c\u4e0d\u4f1a\u4fee\u6539db\u4e0b\u5df2\u5b58\u5728\u7684table\uff09")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "");\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"ALTER,DATABASE,RENAME\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);