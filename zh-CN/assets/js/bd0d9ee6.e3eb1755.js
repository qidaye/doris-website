"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[547566],{15680:(e,l,n)=>{n.d(l,{xA:()=>s,yg:()=>g});var a=n(296540);function r(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function t(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?t(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function p(e,l){if(null==e)return{};var n,a,r=function(e,l){if(null==e)return{};var n,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var l=a.useContext(i),n=l;return e&&(n="function"==typeof e?e(l):o(o({},l),e)),n},s=function(e){var l=u(e.components);return a.createElement(i.Provider,{value:l},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},y=a.forwardRef((function(e,l){var n=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),y=r,g=m["".concat(i,".").concat(y)]||m[y]||c[y]||t;return n?a.createElement(g,o(o({ref:l},s),{},{components:n})):a.createElement(g,o({ref:l},s))}));function g(e,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var t=n.length,o=new Array(t);o[0]=y;var p={};for(var i in l)hasOwnProperty.call(l,i)&&(p[i]=l[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<t;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},104569:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const t={title:"ALTER-TABLE-ROLLUP",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",title:"ALTER-TABLE-ROLLUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-TABLE-ROLLUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},next:{title:"ALTER-TABLE-RENAME",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME"}},i={},u=[{value:"ALTER-TABLE-ROLLUP",id:"alter-table-rollup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:u},m="wrapper";function c(e){let{components:l,...n}=e;return(0,r.yg)(m,(0,a.A)({},s,n,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-table-rollup"},"ALTER-TABLE-ROLLUP"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER TABLE ROLLUP"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u8fdb\u884c rollup \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002rollup \u662f\u5f02\u6b65\u64cd\u4f5c\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,r.yg)("p",null,"rollup \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa rollup index")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,r.yg)("p",null," properties: \u652f\u6301\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a1\u5929\u3002"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u6279\u91cf\u521b\u5efa rollup index")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n')),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a from_index_name\uff0c\u5219\u9ed8\u8ba4\u4ece base index \u521b\u5efa"),(0,r.yg)("li",{parentName:"ul"},"rollup \u8868\u4e2d\u7684\u5217\u5fc5\u987b\u662f from_index \u4e2d\u5df2\u6709\u7684\u5217"),(0,r.yg)("li",{parentName:"ul"},"\u5728 properties \u4e2d\uff0c\u53ef\u4ee5\u6307\u5b9a\u5b58\u50a8\u683c\u5f0f\u3002\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664 rollup index"),(0,r.yg)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664 rollup index")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n')),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664 base index")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index\uff0c\u57fa\u4e8e base index\uff08k1,k2,k3,v1,v2\uff09\u3002\u5217\u5f0f\u5b58\u50a8\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2);\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index2\uff0c\u57fa\u4e8e example_rollup_index\uff08k1,k3,v1,v2\uff09")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index3, \u57fa\u4e8e base index (k1,k2,k3,v1), \u81ea\u5b9a\u4e49 rollup \u8d85\u65f6\u65f6\u95f4\u4e00\u5c0f\u65f6\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1)\nPROPERTIES("timeout" = "3600");\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u5220\u9664 index: example_rollup_index2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664Rollup")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2,example_rollup_index3;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, ROLLUP, ALTER TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);