"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8506],{15680:(e,n,r)=>{r.d(n,{xA:()=>L,yg:()=>c});var a=r(296540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,l=function(e,n){if(null==e)return{};var r,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},L=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,l=e.mdxType,t=e.originalType,i=e.parentName,L=s(e,["components","mdxType","originalType","parentName"]),m=p(r),y=l,c=m["".concat(i,".").concat(y)]||m[y]||d[y]||t;return r?a.createElement(c,o(o({ref:n},L),{},{components:r})):a.createElement(c,o({ref:n},L))}));function c(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=r.length,o=new Array(t);o[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<t;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},771571:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var a=r(58168),l=(r(296540),r(15680));const t={title:"EXPLODE_JSON_ARRAY",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/explode-json-array",id:"sql-manual/sql-functions/table-functions/explode-json-array",title:"EXPLODE_JSON_ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/explode-json-array.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-json-array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPLODE_JSON_ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHA2",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sha2"},next:{title:"EXPLODE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode"}},i={},p=[{value:"explode_json_array",id:"explode_json_array",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],L={toc:p},m="wrapper";function d(e){let{components:n,...r}=e;return(0,l.yg)(m,(0,a.A)({},L,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"explode_json_array"},"explode_json_array"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u9700\u914d\u5408 Lateral View \u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u5c55\u5f00\u4e00\u4e2a json \u6570\u7ec4\u3002\u6839\u636e\u6570\u7ec4\u5143\u7d20\u7c7b\u578b\uff0c\u6709\u4e09\u79cd\u51fd\u6570\u540d\u79f0\u3002\u5206\u522b\u5bf9\u5e94\u6574\u578b\u3001\u6d6e\u70b9\u548c\u5b57\u7b26\u4e32\u6570\u7ec4\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"explode_json_array_int(json_str)\nexplode_json_array_double(json_str)\nexplode_json_array_string(json_str)\nexplode_json_array_json(json_str)\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("p",null,"\u539f\u8868\u6570\u636e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'mysql> select k1, e1 from example1 lateral view explode_json_array_int(\'[]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'[1,2,3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 |    1 |\n|    1 |    3 |\n|    2 | NULL |\n|    2 |    1 |\n|    2 |    3 |\n|    3 | NULL |\n|    3 |    1 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'["a","b","c"]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'{"a": 3}\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1,2,3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1.0,2.0,3.0]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'["a","b","c"]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'{"a": 3}\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'[]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'[1.0,2.0,3.0]\') tmp1 as e1 order by k1, e1;\n+------+----------+\n| k1   | e1       |\n+------+----------+\n|    1 | 1.000000 |\n|    1 | 2.000000 |\n|    1 | 3.000000 |\n|    2 | 1.000000 |\n|    2 | 2.000000 |\n|    2 | 3.000000 |\n|    3 | 1.000000 |\n|    3 | 2.000000 |\n|    3 | 3.000000 |\n+------+----------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | 1    |\n|    1 | 3    |\n|    1 | b    |\n|    2 | 1    |\n|    2 | 3    |\n|    2 | b    |\n|    3 | 1    |\n|    3 | 3    |\n|    3 | b    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'["a","b","c"]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | a    |\n|    1 | b    |\n|    1 | c    |\n|    2 | a    |\n|    2 | b    |\n|    2 | c    |\n|    3 | a    |\n|    3 | b    |\n|    3 | c    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'{"a": 3}\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_json(\'[{"id":1,"name":"John"},{"id":2,"name":"Mary"},{"id":3,"name":"Bob"}]\') tmp1 as e1 order by k1, e1;\n+------+------------------------+\n| k1   | e1                     |\n+------+------------------------+\n|    1 | {"id":1,"name":"John"} |\n|    1 | {"id":2,"name":"Mary"} |\n|    1 | {"id":3,"name":"Bob"}  |\n|    2 | {"id":1,"name":"John"} |\n|    2 | {"id":2,"name":"Mary"} |\n|    2 | {"id":3,"name":"Bob"}  |\n|    3 | {"id":1,"name":"John"} |\n|    3 | {"id":2,"name":"Mary"} |\n|    3 | {"id":3,"name":"Bob"}  |\n+------+------------------------+\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"explode,json,array,json_array,explode_json,explode_json_array"))}d.isMDXComponent=!0}}]);