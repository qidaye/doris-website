"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[868320],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,y=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(y,s(s({ref:t},m),{},{components:a})):n.createElement(y,s({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},959532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-STREAM-LOAD",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD",id:"sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD",title:"SHOW-STREAM-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-STREAM-LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW-TRANSACTION",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION"},next:{title:"SHOW-STATUS",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-STATUS"}},o={},p=[{value:"SHOW-STREAM-LOAD",id:"show-stream-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-stream-load"},"SHOW-STREAM-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW STREAM LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display the execution of the specified Stream Load task"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD\n[FROM db_name]\n[\n  WHERE\n  [LABEL [ = "your_label" | LIKE "label_matcher"]]\n  [STATUS = ["SUCCESS"|"FAIL"]]\n]\n[ORDER BY...]\n[LIMIT limit][OFFSET offset];\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"By default, BE does not record Stream Load records. If you want to view records that need to be enabled on BE, the configuration parameter is: ",(0,r.yg)("inlineCode",{parentName:"li"},"enable_stream_load_record=true"),". For details, please refer to ",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/admin-manual/config/be-config"},"BE Configuration Items")),(0,r.yg)("li",{parentName:"ol"},"If db_name is not specified, the current default db is used"),(0,r.yg)("li",{parentName:"ol"},"If LABEL LIKE is used, it will match the tasks whose label of the Stream Load task contains label_matcher"),(0,r.yg)("li",{parentName:"ol"},"If LABEL = is used, it will match the specified label exactly"),(0,r.yg)("li",{parentName:"ol"},"If STATUS is specified, matches STREAM LOAD status"),(0,r.yg)("li",{parentName:"ol"},"You can use ORDER BY to sort on any combination of columns"),(0,r.yg)("li",{parentName:"ol"},"If LIMIT is specified, limit matching records are displayed. Otherwise show all"),(0,r.yg)("li",{parentName:"ol"},"If OFFSET is specified, the query results are displayed starting at offset offset. By default the offset is 0.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show all Stream Load tasks of the default db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"  SHOW STREAM LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Display the Stream Load task of the specified db, the label contains the string "2014_01_02", and display the oldest 10'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Display the Stream Load task of the specified db and specify the label as "load_example_db_20140102"'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE LABEL = "load_example_db_20140102";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Display the Stream Load task of the specified db, specify the status as "success", and sort by StartTime in descending order'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE STATUS = "success" ORDER BY StartTime DESC;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the import tasks of the specified db and sort them in descending order of StartTime, and display 10 query results starting from offset 5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 5,10;\nSHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 10 offset 5;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, STREAM, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);