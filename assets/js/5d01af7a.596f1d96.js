"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[955928],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>y});var l=t(296540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},a=Object.keys(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=l.createContext({}),s=function(n){var e=l.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},c=function(n){var e=s(n.components);return l.createElement(i.Provider,{value:e},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},f=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),m=s(t),f=r,y=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return t?l.createElement(y,u(u({ref:e},c),{},{components:t})):l.createElement(y,u({ref:e},c))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,u=new Array(a);u[0]=f;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o[m]="string"==typeof n?n:r,u[1]=o;for(var s=2;s<a;s++)u[s]=t[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},710738:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=t(58168),r=(t(296540),t(15680));const a={title:"COUNT_BY_ENUM",language:"en"},u=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/count-by-enum",id:"sql-manual/sql-functions/aggregate-functions/count-by-enum",title:"COUNT_BY_ENUM",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/count-by-enum.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/count-by-enum",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/count-by-enum",draft:!1,tags:[],version:"current",frontMatter:{title:"COUNT_BY_ENUM",language:"en"},sidebar:"docs",previous:{title:"COUNT",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/count"},next:{title:"APPROX_COUNT_DISTINCT",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"}},i={},s=[{value:"COUNT_BY_ENUM",id:"count_by_enum",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},m="wrapper";function p(n){let{components:e,...t}=n;return(0,r.yg)(m,(0,l.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"count_by_enum"},"COUNT_BY_ENUM"),(0,r.yg)("p",null,"COUNT_BY_ENUM"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"count_by_enum(expr1, expr2, ... , exprN);")),(0,r.yg)("p",null,"Treats the data in a column as an enumeration and counts the number of values in each enumeration. Returns the number of enumerated values for each column, and the number of non-null values versus the number of null values."),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"expr1")," \u2014 At least one input must be specified. The value is a column of type ",(0,r.yg)("inlineCode",{parentName:"p"},"STRING"),"."),(0,r.yg)("h5",{id:"returned-value"},"Returned value"),(0,r.yg)("p",null,"Returns a JSONArray string."),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[{\n  "cbe": {\n    "F": 100,\n    "M": 99\n  },\n  "notnull": 199,\n  "null": 1,\n  "all": 200\n}, {\n  "cbe": {\n    "20": 10,\n    "30": 5,\n    "35": 1\n  },\n  "notnull": 16,\n  "null": 184,\n  "all": 200\n}, {\n  "cbe": {\n    "China": 10,\n    "United States": 9,\n    "England": 20,\n    "Germany": 30\n  },\n  "notnull": 69,\n  "null": 131,\n  "all": 200\n}]\n')),(0,r.yg)("p",null,"Description: The return value is a JSON array string and the order of the internal objects is the order of the input parameters."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"cbe: count of non-null values based on enumeration values"),(0,r.yg)("li",{parentName:"ul"},"notnull: number of non-null values."),(0,r.yg)("li",{parentName:"ul"},"null: number of null values"),(0,r.yg)("li",{parentName:"ul"},"all: total number, including both null and non-null values.")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'DROP TABLE IF EXISTS count_by_enum_test;\n\nCREATE TABLE count_by_enum_test(\n                                   `id` varchar(1024) NULL,\n                                   `f1` text REPLACE_IF_NOT_NULL NULL,\n                                   `f2` text REPLACE_IF_NOT_NULL NULL,\n                                   `f3` text REPLACE_IF_NOT_NULL NULL\n)\nAGGREGATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    "replication_num" = "1"\n);\n\nINSERT into count_by_enum_test (id, f1, f2, f3) values\n                                                    (1, "F", "10", "China"),\n                                                    (2, "F", "20", "China"),\n                                                    (3, "M", NULL, "United States"),\n                                                    (4, "M", NULL, "United States"),\n                                                    (5, "M", NULL, "England");\n\nSELECT * from count_by_enum_test;\n\n+------+------+------+---------------+\n| id   | f1   | f2   | f3            |\n+------+------+------+---------------+\n| 1    | F    | 10   | China         |\n| 2    | F    | 20   | China         |\n| 3    | M    | NULL | United States |\n| 4    | M    | NULL | United States |\n| 5    | M    | NULL | England       |\n+------+------+------+---------------+\n\nselect count_by_enum(f1) from count_by_enum_test;\n\n+------------------------------------------------------+\n| count_by_enum(`f1`)                                  |\n+------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5}] |\n+------------------------------------------------------+\n\nselect count_by_enum(f2) from count_by_enum_test;\n\n+--------------------------------------------------------+\n| count_by_enum(`f2`)                                    |\n+--------------------------------------------------------+\n| [{"cbe":{"10":1,"20":1},"notnull":2,"null":3,"all":5}] |\n+--------------------------------------------------------+\n\nselect count_by_enum(f1,f2,f3) from count_by_enum_test;\n\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| count_by_enum(`f1`, `f2`, `f3`)                                                                                                                                                          |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5},{"cbe":{"20":1,"10":1},"notnull":2,"null":3,"all":5},{"cbe":{"England":1,"United States":2,"China":2},"notnull":5,"null":0,"all":5}] |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n    \n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"COUNT_BY_ENUM"))}p.isMDXComponent=!0}}]);