"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[381550],{15680:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>o});var a=n(296540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var y=a.createContext({}),p=function(t){var e=a.useContext(y),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(y.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),N=r,o=d["".concat(y,".").concat(N)]||d[N]||m[N]||l;return n?a.createElement(o,g(g({ref:e},u),{},{components:n})):a.createElement(o,g({ref:e},u))}));function o(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=N;var i={};for(var y in e)hasOwnProperty.call(e,y)&&(i[y]=e[y]);i.originalType=t,i[d]="string"==typeof t?t:r,g[1]=i;for(var p=2;p<l;p++)g[p]=n[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},969487:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"\u6570\u636e\u7c7b\u578b",language:"zh-CN"},g=void 0,i={unversionedId:"table-design/data-type",id:"version-3.0/table-design/data-type",title:"\u6570\u636e\u7c7b\u578b",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/data-type.md",sourceDirName:"table-design",slug:"/table-design/data-type",permalink:"/zh-CN/docs/table-design/data-type",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u6570\u636e\u7c7b\u578b",language:"zh-CN"},sidebar:"docs",previous:{title:"\u57fa\u4e8e Arrow Flight SQL \u7684\u9ad8\u901f\u6570\u636e\u4f20\u8f93\u94fe\u8def",permalink:"/zh-CN/docs/db-connect/arrow-flight-sql-connect"},next:{title:"\u6a21\u578b\u6982\u8ff0",permalink:"/zh-CN/docs/table-design/data-model/overview"}},y={},p=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2}],u={toc:p},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.yg)(d,(0,a.A)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache Doris \u652f\u6301\u6807\u51c6 SQL \u8bed\u6cd5\uff0c\u91c7\u7528 MySQL \u7f51\u7edc\u8fde\u63a5\u534f\u8bae\uff0c\u9ad8\u5ea6\u517c\u5bb9 MySQL \u76f8\u5173\u751f\u6001\u3002\u56e0\u6b64\uff0c\u5728\u6570\u636e\u7c7b\u578b\u652f\u6301\u65b9\u9762\uff0c\u5c3d\u53ef\u80fd\u5bf9\u9f50 MySQL \u76f8\u5173\u6570\u636e\u7c7b\u578b\u3002"),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("p",null,"Apache Doris \u5df2\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5b58\u50a8\u7a7a\u95f4\uff08\u5b57\u8282\uff09"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u503c\uff0c0 \u4ee3\u8868 false\uff0c1 \u4ee3\u8868 true\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 ","[-128, 127]","\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 ","[-32768, 32767]","\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 ","[-2147483648, 2147483647]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 ","[-9223372036854775808, 9223372036854775807]","\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 ","[-2^127 + 1 ~ 2^127 - 1]","\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d6e\u70b9\u6570\uff0c\u8303\u56f4 ","[-3.4",(0,r.yg)("em",{parentName:"td"},"10^38 ~ 3.4"),"10^38]","\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d6e\u70b9\u6570\uff0c\u8303\u56f4 ","[-1.79",(0,r.yg)("em",{parentName:"td"},"10^308 ~ 1.79"),"10^308]","\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"4/8/16"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0c\u683c\u5f0f\uff1aDECIMAL(M","[,D]",")\u3002\u5176\u4e2d\uff0cM \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57\uff08precision\uff09\uff0cD \u4ee3\u8868\u5c0f\u6570\u4f4d\u6709\u591a\u5c11\u6570\u5b57\uff08scale\uff09\u3002\u6709\u6548\u6570\u5b57 M \u7684\u8303\u56f4\u662f ","[1, 38]","\uff0c\u5c0f\u6570\u4f4d\u6570\u5b57\u6570\u91cf D \u7684\u8303\u56f4\u662f ","[0, precision]","\u3002 ",(0,r.yg)("p",null,"0 < precision <= 9 \u7684\u573a\u5408\uff0c\u5360\u7528 4 \u5b57\u8282\u3002")," ",(0,r.yg)("p",null,"9 < precision <= 18 \u7684\u573a\u5408\uff0c\u5360\u7528 8 \u5b57\u8282\u3002")," ",(0,r.yg)("p",null,"16 < precision <= 38 \u7684\u573a\u5408\uff0c\u5360\u7528 16 \u5b57\u8282\u3002"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e5\u671f\u7c7b\u578b\uff0c\u76ee\u524d\u7684\u53d6\u503c\u8303\u56f4\u662f ","['0000-01-01', '9999-12-31']","\uff0c\u9ed8\u8ba4\u7684\u6253\u5370\u5f62\u5f0f\u662f 'yyyy-MM-dd'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u683c\u5f0f\uff1aDATETIME(","[P]",")\u3002\u53ef\u9009\u53c2\u6570 P \u8868\u793a\u65f6\u95f4\u7cbe\u5ea6\uff0c\u53d6\u503c\u8303\u56f4\u662f ","[0, 6]","\uff0c\u5373\u6700\u591a\u652f\u6301 6 \u4f4d\u5c0f\u6570\uff08\u5fae\u79d2\uff09\u3002\u4e0d\u8bbe\u7f6e\u65f6\u4e3a 0\u3002",(0,r.yg)("p",null,"\u53d6\u503c\u8303\u56f4\u662f ['0000-01-01 00:00:00","[.000000]","', '9999-12-31 23:59:59","[.999999]","']\u3002\u6253\u5370\u7684\u5f62\u5f0f\u662f 'yyyy-MM-dd HH:mm:ss.SSSSSS'\u3002 "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b9a\u957f\u5b57\u7b26\u4e32\uff0cM \u4ee3\u8868\u7684\u662f\u5b9a\u957f\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u957f\u5ea6\u3002M \u7684\u8303\u56f4\u662f 1-255\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d8\u957f\u5b57\u7b26\u4e32\uff0cM \u4ee3\u8868\u7684\u662f\u53d8\u957f\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u957f\u5ea6\u3002M \u7684\u8303\u56f4\u662f 1-65533\u3002\u53d8\u957f\u5b57\u7b26\u4e32\u662f\u4ee5 UTF-8 \u7f16\u7801\u5b58\u50a8\u7684\uff0c\u56e0\u6b64\u901a\u5e38\u82f1\u6587\u5b57\u7b26\u5360 1 \u4e2a\u5b57\u8282\uff0c\u4e2d\u6587\u5b57\u7b26\u5360 3 \u4e2a\u5b57\u8282\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d8\u957f\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u652f\u6301 1048576 \u5b57\u8282\uff081MB\uff09\uff0c\u53ef\u8c03\u5927\u5230 2147483643 \u5b57\u8282\uff082GB\uff09\u3002\u53ef\u901a\u8fc7 BE \u914d\u7f6e string_type_length_soft_limit_bytes \u8c03\u6574\u3002String \u7c7b\u578b\u53ea\u80fd\u7528\u5728 Value \u5217\uff0c\u4e0d\u80fd\u7528\u5728 Key \u5217\u548c\u5206\u533a\u5206\u6876\u5217\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7531 T \u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728 Duplicate \u548c Unique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7531 K, V \u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684 map\uff0c\u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728 Duplicate \u548c Unique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7531\u591a\u4e2a Field \u7ec4\u6210\u7684\u7ed3\u6784\u4f53\uff0c\u4e5f\u53ef\u88ab\u7406\u89e3\u4e3a\u591a\u4e2a\u5217\u7684\u96c6\u5408\u3002\u4e0d\u80fd\u4f5c\u4e3a Key \u4f7f\u7528\uff0c\u76ee\u524d STRUCT \u4ec5\u652f\u6301\u5728 Duplicate \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002\u4e00\u4e2a Struct \u4e2d\u7684 Field \u7684\u540d\u5b57\u548c\u6570\u91cf\u56fa\u5b9a\uff0c\u603b\u662f\u4e3a Nullable\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236 JSON \u7c7b\u578b\uff0c\u91c7\u7528\u4e8c\u8fdb\u5236 JSON \u683c\u5f0f\u5b58\u50a8\uff0c\u901a\u8fc7 JSON \u51fd\u6570\u8bbf\u95ee JSON \u5185\u90e8\u5b57\u6bb5\u3002\u957f\u5ea6\u9650\u5236\u548c\u914d\u7f6e\u65b9\u5f0f\u4e0e String \u76f8\u540c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARIANT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u52a8\u6001\u53ef\u53d8\u6570\u636e\u7c7b\u578b\uff0c\u4e13\u4e3a\u534a\u7ed3\u6784\u5316\u6570\u636e\u5982 JSON \u8bbe\u8ba1\uff0c\u53ef\u4ee5\u5b58\u5165\u4efb\u610f JSON\uff0c\u81ea\u52a8\u5c06 JSON \u4e2d\u7684\u5b57\u6bb5\u62c6\u5206\u6210\u5b50\u5217\u5b58\u50a8\uff0c\u63d0\u5347\u5b58\u50a8\u6548\u7387\u548c\u67e5\u8be2\u5206\u6790\u6027\u80fd\u3002\u957f\u5ea6\u9650\u5236\u548c\u914d\u7f6e\u65b9\u5f0f\u4e0e String \u76f8\u540c\u3002Variant \u7c7b\u578b\u53ea\u80fd\u7528\u5728 Value \u5217\uff0c\u4e0d\u80fd\u7528\u5728 Key \u5217\u548c\u5206\u533a\u5206\u6876\u5217\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HLL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL \u662f\u6a21\u7cca\u53bb\u91cd\uff0c\u5728\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5\u6027\u80fd\u4f18\u4e8e Count Distinct\u3002HLL \u7684\u8bef\u5dee\u901a\u5e38\u5728 1% \u5de6\u53f3\uff0c\u6709\u65f6\u4f1a\u8fbe\u5230 2%\u3002HLL \u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u914d\u5408\u805a\u5408\u7c7b\u578b\u4e3a HLL_UNION\u3002",(0,r.yg)("p",null,"\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002HLL \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 hll_union_agg\u3001hll_raw_agg\u3001hll_cardinality\u3001hll_hash \u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"Bitmap \u7c7b\u578b\u7684\u5217\u53ef\u4ee5\u5728 Aggregate \u8868\u3001Unique \u8868\u6216 Duplicate \u8868\u4e2d\u4f7f\u7528\u3002\u5728 Unique \u8868\u6216 Duplicate \u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u5176\u5fc5\u987b\u4f5c\u4e3a\u975e Key \u5217\u4f7f\u7528\u3002\u5728 Aggregate \u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u5176\u5fc5\u987b\u4f5c\u4e3a\u975e Key \u5217\u4f7f\u7528\uff0c\u4e14\u5efa\u8868\u65f6\u914d\u5408\u7684\u805a\u5408\u7c7b\u578b\u4e3a BITMAP_UNION\u3002",(0,r.yg)("p",null,"\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002BITMAP \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 bitmap_union_count\u3001bitmap_union\u3001bitmap_hash\u3001bitmap_hash64 \u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"QUANTILE_STATE"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"QUANTILE_STATE \u662f\u4e00\u79cd\u8ba1\u7b97\u5206\u4f4d\u6570\u8fd1\u4f3c\u503c\u7684\u7c7b\u578b\uff0c\u5728\u5bfc\u5165\u65f6\u4f1a\u5bf9\u76f8\u540c\u7684 Key\uff0c\u4e0d\u540c Value \u8fdb\u884c\u9884\u805a\u5408\uff0c\u5f53 value \u6570\u91cf\u4e0d\u8d85\u8fc7 2048 \u65f6\u91c7\u7528\u660e\u7ec6\u8bb0\u5f55\u6240\u6709\u6570\u636e\uff0c\u5f53 Value \u6570\u91cf\u5927\u4e8e 2048 \u65f6\u91c7\u7528 TDigest \u7b97\u6cd5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\uff08\u805a\u7c7b\uff09\u4fdd\u5b58\u805a\u7c7b\u540e\u7684\u8d28\u5fc3\u70b9\u3002QUANTILE_STATE \u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u914d\u5408\u805a\u5408\u7c7b\u578b\u4e3a QUANTILE_UNION\u3002",(0,r.yg)("p",null,"\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002QUANTILE_STATE \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AGG_STATE"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u5b9a\u957f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u805a\u5408\u51fd\u6570\uff0c\u53ea\u80fd\u914d\u5408 state/merge/union \u51fd\u6570\u7ec4\u5408\u5668\u4f7f\u7528\u3002AGG_STATE \u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u9700\u8981\u540c\u65f6\u58f0\u660e\u805a\u5408\u51fd\u6570\u7684\u7b7e\u540d\u3002\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u5b9e\u9645\u5b58\u50a8\u7684\u6570\u636e\u5927\u5c0f\u4e0e\u51fd\u6570\u5b9e\u73b0\u6709\u5173\u3002")))),(0,r.yg)("p",null,"\u60a8\u4e5f\u53ef\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW DATA TYPES;"),"\u8bed\u53e5\u67e5\u770b Apache Doris \u652f\u6301\u7684\u6240\u6709\u6570\u636e\u7c7b\u578b\u3002"))}m.isMDXComponent=!0}}]);