"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[862622],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var l=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=l.createContext({}),s=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(a.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,y=p["".concat(a,".").concat(d)]||p[d]||g[d]||o;return n?l.createElement(y,c(c({ref:t},u),{},{components:n})):l.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},584933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(58168),r=(n(296540),n(15680));const o={title:"COLLECT_LIST",language:"zh-CN"},c=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/collect-list",id:"sql-manual/sql-functions/aggregate-functions/collect-list",title:"COLLECT_LIST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/collect-list.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/collect-list",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect-list",draft:!1,tags:[],version:"current",frontMatter:{title:"COLLECT_LIST",language:"zh-CN"},sidebar:"docs",previous:{title:"COLLECT_SET",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect-set"},next:{title:"RETENTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/retention"}},a={},s=[{value:"COLLECT_LIST",id:"collect_list",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,l.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"collect_list"},"COLLECT_LIST"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ARRAY<T> collect_list(expr[,max_size])")),(0,r.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b expr \u4e2d\u6240\u6709\u5143\u7d20(\u4e0d\u5305\u62ecNULL)\u7684\u6570\u7ec4\uff0c\u53ef\u9009\u53c2\u6570",(0,r.yg)("inlineCode",{parentName:"p"},"max_size"),"\uff0c\u901a\u8fc7\u8bbe\u7f6e\u8be5\u53c2\u6570\u80fd\u591f\u5c06\u7ed3\u679c\u6570\u7ec4\u7684\u5927\u5c0f\u9650\u5236\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"max_size")," \u4e2a\u5143\u7d20\u3002\n\u5f97\u5230\u7684\u7ed3\u679c\u6570\u7ec4\u4e2d\u4e0d\u5305\u542bNULL\u5143\u7d20\uff0c\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u987a\u5e8f\u4e0d\u56fa\u5b9a\u3002\u8be5\u51fd\u6570\u5177\u6709\u522b\u540d",(0,r.yg)("inlineCode",{parentName:"p"},"group_array"),"\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select k1,k2,k3 from collect_list_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-02 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | sql   |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n\nmysql> select collect_list(k1),collect_list(k1,3) from collect_list_test;\n+-------------------------+--------------------------+\n| collect_list(`k1`)      | collect_list(`k1`,3)     |\n+-------------------------+--------------------------+\n| [1,2,2,3,3,4,4]         | [1,2,2]                  |\n+-------------------------+--------------------------+\n\nmysql> select k1,collect_list(k2),collect_list(k3,1) from collect_list_test group by k1 order by k1;\n+------+-------------------------+--------------------------+\n| k1   | collect_list(`k2`)      | collect_list(`k3`,1)     |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-02,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"COLLECT_LIST,GROUP_ARRAY,COLLECT_SET,ARRAY"))}g.isMDXComponent=!0}}]);