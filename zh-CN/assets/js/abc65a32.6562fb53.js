"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[315984],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),O=a,y=u["".concat(s,".").concat(O)]||u[O]||m[O]||l;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=O;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},278131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"ALTER-WORKLOAD-GROUP",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",title:"ALTER-WORKLOAD-GROUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-WORKLOAD-GROUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-COLOCATE-GROUP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP"},next:{title:"ALTER-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"}},s={},c=[{value:"ALTER-WORKLOAD-GROUP",id:"alter-workload-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-workload-group"},"ALTER-WORKLOAD-GROUP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER WORKLOAD GROUP "),(0,a.yg)("version",{since:"dev"}),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u8d44\u6e90\u7ec4\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER WORKLOAD GROUP  "rg_name"\nPROPERTIES (\n    property_list\n);\n')),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4fee\u6539 memory_limit \u5c5e\u6027\u65f6\u4e0d\u53ef\u4f7f\u6240\u6709 memory_limit \u503c\u7684\u603b\u548c\u8d85\u8fc7100%\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u4fee\u6539\u90e8\u5206\u5c5e\u6027\uff0c\u4f8b\u5982\u53ea\u4fee\u6539cpu_share\u7684\u8bdd\uff0cproperties\u91cc\u53ea\u586bcpu_share\u5373\u53ef\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4fee\u6539\u540d\u4e3a g1 \u7684\u8d44\u6e90\u7ec4\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'alter workload group g1\nproperties (\n    "cpu_share"="30",\n    "memory_limit"="30%"\n);\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER, WORKLOAD , GROUP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);