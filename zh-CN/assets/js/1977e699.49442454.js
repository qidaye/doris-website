"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[927920],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),m=l,y=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},979461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=t(58168),l=(t(296540),t(15680));const a={title:"WIDTH_BUCKET",language:"zh-CN"},i=void 0,u={unversionedId:"sql-manual/sql-functions/width-bucket",id:"version-2.0/sql-manual/sql-functions/width-bucket",title:"WIDTH_BUCKET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/width-bucket.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/width-bucket",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/width-bucket",draft:!1,tags:[],version:"2.0",frontMatter:{title:"WIDTH_BUCKET",language:"zh-CN"},sidebar:"docs",previous:{title:"DIGITAL_MASKING",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/digital-masking"},next:{title:"ALTER-SYSTEM-ADD-FOLLOWER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER"}},o={},p=[{value:"width_bucket",id:"width_bucket",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"width_bucket"},"width_bucket"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u6784\u9020\u7b49\u5bbd\u76f4\u65b9\u56fe\uff0c\u5176\u4e2d\u76f4\u65b9\u56fe\u8303\u56f4\u88ab\u5212\u5206\u4e3a\u76f8\u540c\u5927\u5c0f\u7684\u533a\u95f4\uff0c\u5e76\u5728\u8ba1\u7b97\u540e\u8fd4\u56de\u8868\u8fbe\u5f0f\u7684\u503c\u6240\u5728\u7684\u6876\u53f7\u3002\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u503c\u6216\u7a7a\u503c\uff08\u5982\u679c\u4efb\u4f55\u8f93\u5165\u4e3a\u7a7a\u503c\u5219\u8fd4\u56de\u7a7a\u503c\uff09\u3002"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"INT width_bucket(Expr expr, T min_value, T max_value, INT num_buckets)")),(0,l.yg)("h4",{id:"arguments"},"Arguments"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"expr")," -\n\u521b\u5efa\u76f4\u65b9\u56fe\u7684\u8868\u8fbe\u5f0f\u3002\u6b64\u8868\u8fbe\u5f0f\u5fc5\u987b\u8ba1\u7b97\u4e3a\u6570\u503c\u6216\u53ef\u9690\u5f0f\u8f6c\u6362\u4e3a\u6570\u503c\u7684\u503c\u3002"),(0,l.yg)("p",null,"\u6b64\u503c\u7684\u8303\u56f4\u5fc5\u987b\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"-(2^53 - 1)")," \u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"2^53 - 1")," (\u542b)."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"min_value")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"max_value")," -\n\u8868\u8fbe\u5f0f\u53ef\u63a5\u53d7\u8303\u56f4\u7684\u6700\u4f4e\u503c\u70b9\u548c\u6700\u9ad8\u503c\u70b9\u3002\u8fd9\u4e24\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u6570\u503c\u5e76\u4e14\u4e0d\u76f8\u7b49\u3002"),(0,l.yg)("p",null,"\u6700\u4f4e\u503c\u70b9\u548c\u6700\u9ad8\u503c\u70b9\u7684\u8303\u56f4\u5fc5\u987b\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"-(2^53 - 1)")," to ",(0,l.yg)("inlineCode",{parentName:"p"},"2^53 - 1")," (\u542b)). \u6b64\u5916\uff0c\u6700\u9ad8\u503c\u70b9\u4e0e\u6700\u4f4e\u503c\u70b9\u7684\u5dee\u5fc5\u987b\u5c0f\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"2^53")," (\u4f8b\u5982\uff1a ",(0,l.yg)("inlineCode",{parentName:"p"},"abs(max_value - min_value) < 2^53)"),"."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"num_buckets")," -\n\u5206\u6876\u7684\u6570\u91cf\uff0c\u5fc5\u987b\u662f\u6b63\u6574\u6570\u503c\u3002\u5c06\u8868\u8fbe\u5f0f\u4e2d\u7684\u4e00\u4e2a\u503c\u5206\u914d\u7ed9\u6bcf\u4e2a\u5b58\u50a8\u6876\uff0c\u7136\u540e\u8be5\u51fd\u6570\u8fd4\u56de\u76f8\u5e94\u7684\u5b58\u50a8\u6876\u7f16\u53f7\u3002"),(0,l.yg)("h4",{id:"returned-value"},"Returned value"),(0,l.yg)("p",null,"\u8fd4\u56de\u8868\u8fbe\u5f0f\u503c\u6240\u5728\u7684\u6876\u53f7\u3002"),(0,l.yg)("p",null,"\u5f53\u8868\u8fbe\u5f0f\u8d85\u51fa\u8303\u56f4\u65f6\uff0c\u51fd\u6570\u8fd4\u56de\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.yg)("p",null,"\u5982\u679c\u8868\u8fbe\u5f0f\u7684\u503c\u5c0f\u4e8e",(0,l.yg)("inlineCode",{parentName:"p"},"min_value"),"\u8fd4\u56de",(0,l.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,l.yg)("p",null,"\u5982\u679c\u8868\u8fbe\u5f0f\u7684\u503c\u5927\u4e8e\u6216\u7b49\u4e8e",(0,l.yg)("inlineCode",{parentName:"p"},"max_value"),"\u8fd4\u56de",(0,l.yg)("inlineCode",{parentName:"p"},"num_buckets + 1"),"."),(0,l.yg)("p",null,"\u5982\u679c\u4efb\u610f\u53c2\u6570\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"null"),"\u8fd4\u56de",(0,l.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DROP TABLE IF EXISTS width_bucket_test;\n\nCREATE TABLE IF NOT EXISTS width_bucket_test (\n              `k1` int NULL COMMENT "",\n              `v1` date NULL COMMENT "",\n              `v2` double NULL COMMENT "",\n              `v3` bigint NULL COMMENT ""\n            ) ENGINE=OLAP\n            DUPLICATE KEY(`k1`)\n            DISTRIBUTED BY HASH(`k1`) BUCKETS 1\n            PROPERTIES (\n            "replication_allocation" = "tag.location.default: 1",\n            "storage_format" = "V2"\n            );\n\nINSERT INTO width_bucket_test VALUES (1, "2022-11-18", 290000.00, 290000),\n                                      (2, "2023-11-18", 320000.00, 320000),\n                                      (3, "2024-11-18", 399999.99, 399999), \n                                      (4, "2025-11-18", 400000.00, 400000), \n                                      (5, "2026-11-18", 470000.00, 470000), \n                                      (6, "2027-11-18", 510000.00, 510000), \n                                      (7, "2028-11-18", 610000.00, 610000), \n                                      (8, null, null, null);\n\nSELECT * FROM width_bucket_test ORDER BY k1;                                      \n\n+------+------------+-----------+--------+\n| k1   | v1         | v2        | v3     |\n+------+------------+-----------+--------+\n|    1 | 2022-11-18 |    290000 | 290000 |\n|    2 | 2023-11-18 |    320000 | 320000 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |\n|    4 | 2025-11-18 |    400000 | 400000 |\n|    5 | 2026-11-18 |    470000 | 470000 |\n|    6 | 2027-11-18 |    510000 | 510000 |\n|    7 | 2028-11-18 |    610000 | 610000 |\n|    8 | NULL       |      NULL |   NULL |\n+------+------------+-----------+--------+\n\nSELECT k1, v1, v2, v3, width_bucket(v1, date(\'2023-11-18\'), date(\'2027-11-18\'), 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    0 |\n|    2 | 2023-11-18 |    320000 | 320000 |    1 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    4 |\n|    6 | 2027-11-18 |    510000 | 510000 |    5 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\nSELECT k1, v1, v2, v3, width_bucket(v2, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\nSELECT k1, v1, v2, v3, width_bucket(v3, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"WIDTH_BUCKET"))}d.isMDXComponent=!0}}]);