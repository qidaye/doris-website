"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[399122],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>y});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=t.createContext({}),o=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},s=function(e){var a=o(e.components);return t.createElement(m.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=o(n),c=l,y=g["".concat(m,".").concat(c)]||g[c]||d[c]||r;return n?t.createElement(y,p(p({ref:a},s),{},{components:n})):t.createElement(y,p({ref:a},s))}));function y(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[g]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46556:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=n(58168),l=(n(296540),n(15680));const r={title:"RECOVER",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/RECOVER",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",title:"RECOVER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/RECOVER.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",draft:!1,tags:[],version:"2.0",frontMatter:{title:"RECOVER",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CLEAN-TRASH",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH"},next:{title:"KILL",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL"}},m={},o=[{value:"RECOVER",id:"recover",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:o},g="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(g,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"recover"},"RECOVER"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"RECOVER"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6062\u590d\u4e4b\u524d\u5220\u9664\u7684 database\u3001table \u6216\u8005 partition\u3002\u652f\u6301\u901a\u8fc7name\u3001id\u6765\u6062\u590d\u6307\u5b9a\u7684\u5143\u4fe1\u606f\uff0c\u5e76\u4e14\u652f\u6301\u5c06\u6062\u590d\u7684\u5143\u4fe1\u606f\u91cd\u547d\u540d\u3002"),(0,l.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW CATALOG RECYCLE BIN")," \u6765\u67e5\u8be2\u5f53\u524d\u53ef\u6062\u590d\u7684\u5143\u4fe1\u606f\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d database"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d table"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d partition"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name FROM [db_name.]table_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d database"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name db_id;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d table"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name table_id;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d partition"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name partition_id FROM [db_name.]table_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d database \u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name AS new_db_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d table \u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name table_id AS new_db_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d partition \u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name partition_id AS new_db_name FROM [db_name.]table_name;\n")))),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8be5\u64cd\u4f5c\u4ec5\u80fd\u6062\u590d\u4e4b\u524d\u4e00\u6bb5\u65f6\u95f4\u5185\u5220\u9664\u7684\u5143\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\uff08\u53ef\u901a\u8fc7fe.conf\u4e2d",(0,l.yg)("inlineCode",{parentName:"li"},"catalog_trash_expire_second"),"\u53c2\u6570\u914d\u7f6e\uff09"),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u6062\u590d\u5143\u4fe1\u606f\u65f6\u6ca1\u6709\u6307\u5b9aid\uff0c\u5219\u9ed8\u8ba4\u6062\u590d\u6700\u540e\u4e00\u4e2a\u5220\u9664\u7684\u540c\u540d\u5143\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"li"},"SHOW CATALOG RECYCLE BIN")," \u6765\u67e5\u8be2\u5f53\u524d\u53ef\u6062\u590d\u7684\u5143\u4fe1\u606f\u3002")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u540d\u4e3a example_db \u7684 database")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u540d\u4e3a example_tbl \u7684 table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 FROM example_tbl;\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d example_db_id \u4e14\u540d\u4e3a example_db \u7684 database")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db example_db_id;\n")),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d example_tbl_id \u4e14\u540d\u4e3a example_tbl \u7684 table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl example_tbl_id;\n")),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u8868 example_tbl \u4e2d p1_id \u4e14\u540d\u4e3a p1 \u7684 partition")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 p1_id FROM example_tbl;\n")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d example_db_id \u4e14\u540d\u4e3a example_db \u7684 database\uff0c\u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57 new_example_db")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db example_db_id AS new_example_db;\n")),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u540d\u4e3a example_tbl \u7684 table\uff0c\u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57 new_example_tbl")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl AS new_example_tbl;\n")),(0,l.yg)("ol",{start:9},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u8868 example_tbl \u4e2d p1_id \u4e14\u540d\u4e3a p1 \u7684 partition\uff0c\u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57 new_p1")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 p1_id AS new_p1 FROM example_tbl;\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"RECOVER\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);