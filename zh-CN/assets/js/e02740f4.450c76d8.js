"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[775415],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=a.createContext({}),i=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=i(r),g=t,m=y["".concat(u,".").concat(g)]||y[g]||s[g]||l;return r?a.createElement(m,c(c({ref:n},p),{},{components:r})):a.createElement(m,c({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,c=new Array(l);c[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[y]="string"==typeof e?e:t,c[1]=o;for(var i=2;i<l;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},953231:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(58168),t=(r(296540),r(15680));const l={title:"SQL Cache",language:"zh-CN"},c=void 0,o={unversionedId:"query/query-cache/sql-cache-manual",id:"version-3.0/query/query-cache/sql-cache-manual",title:"SQL Cache",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query/query-cache/sql-cache-manual.md",sourceDirName:"query/query-cache",slug:"/query/query-cache/sql-cache-manual",permalink:"/zh-CN/docs/query/query-cache/sql-cache-manual",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SQL Cache",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7f13\u5b58\u6982\u89c8",permalink:"/zh-CN/docs/query/query-cache/"},next:{title:"\u903b\u8f91\u89c6\u56fe",permalink:"/zh-CN/docs/query/view-materialized-view/create-view"}},u={},i=[{value:"\u9700\u6c42\u573a\u666f &amp; \u89e3\u51b3\u65b9\u6848",id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8bbe\u8ba1\u539f\u7406",id:"\u8bbe\u8ba1\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u7f13\u5b58\u6761\u4ef6",id:"\u7f13\u5b58\u6761\u4ef6",level:2},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],p={toc:i},y="wrapper";function s(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"SQL \u8bed\u53e5\u5b8c\u5168\u4e00\u81f4\u65f6\u5c06\u547d\u4e2d\u7f13\u5b58\u3002"),(0,t.yg)("h2",{id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848"},"\u9700\u6c42\u573a\u666f & \u89e3\u51b3\u65b9\u6848"),(0,t.yg)("p",null,"\u89c1 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/query/query-cache/"},"\u7f13\u5b58\u6982\u89c8")," \u6587\u6863\u3002"),(0,t.yg)("h2",{id:"\u8bbe\u8ba1\u539f\u7406"},"\u8bbe\u8ba1\u539f\u7406"),(0,t.yg)("p",null,"SQLCache \u6309 SQL \u7684\u7b7e\u540d\u3001\u67e5\u8be2\u7684\u8868\u7684\u5206\u533a ID\u3001\u5206\u533a\u6700\u65b0\u7248\u672c\u6765\u5b58\u50a8\u548c\u83b7\u53d6\u7f13\u5b58\u3002\u4e09\u8005\u7ec4\u5408\u786e\u5b9a\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u96c6\uff0c\u4efb\u4f55\u4e00\u4e2a\u53d8\u5316\u4e86\uff0c\u5982 SQL \u6709\u53d8\u5316\uff0c\u5982\u67e5\u8be2\u5b57\u6bb5\u6216\u6761\u4ef6\u4e0d\u4e00\u6837\uff0c\u6216\u6570\u636e\u66f4\u65b0\u540e\u7248\u672c\u53d8\u5316\u4e86\uff0c\u4f1a\u5bfc\u81f4\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,t.yg)("p",null,"\u5982\u679c\u591a\u5f20\u8868 Join\uff0c\u4f7f\u7528\u6700\u8fd1\u66f4\u65b0\u7684\u5206\u533a ID \u548c\u6700\u65b0\u7684\u7248\u672c\u53f7\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u5f20\u8868\u66f4\u65b0\u4e86\uff0c\u4f1a\u5bfc\u81f4\u5206\u533a ID \u6216\u7248\u672c\u53f7\u4e0d\u4e00\u6837\uff0c\u4e5f\u4e00\u6837\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,t.yg)("p",null,"SQLCache\uff0c\u66f4\u9002\u5408 T+1 \u66f4\u65b0\u7684\u573a\u666f\uff0c\u51cc\u6668\u6570\u636e\u66f4\u65b0\uff0c\u9996\u6b21\u67e5\u8be2\u4ece BE \u4e2d\u83b7\u53d6\u7ed3\u679c\u653e\u5165\u5230\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u76f8\u540c\u67e5\u8be2\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u3002\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u4e5f\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u662f\u53ef\u80fd\u5b58\u5728\u547d\u4e2d\u7387\u4f4e\u7684\u95ee\u9898\u3002"),(0,t.yg)("p",null,"\u5f53\u524d\u652f\u6301 OlapTable \u5185\u8868 \u548c Hive \u5916\u8868\u3002"),(0,t.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,t.yg)("p",null,"\u786e\u4fdd fe.conf \u7684 cache_enable_sql_mode=true\uff08\u9ed8\u8ba4\u662f true\uff09"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")),(0,t.yg)("p",null,"\u5728 MySQL \u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_sql_cache=true;\n")),(0,t.yg)("p",null,"\u6ce8\uff1aglobal \u662f\u5168\u5c40\u53d8\u91cf\uff0c\u4e0d\u52a0\u6307\u5f53\u524d\u4f1a\u8bdd\u53d8\u91cf"),(0,t.yg)("p",null,"\u57282.1.3\u53ca\u4ee5\u4e0a\u7248\u672c\uff0cNereids\u4f18\u5316\u5668\u5728fe\u7684\u5185\u5b58\u4e2d\u4fdd\u5b58\u7f13\u5b58\u7684\u5173\u952e\u4fe1\u606f\uff0c\u6bd4\u5982\u975e\u786e\u5b9a\u51fd\u6570\u53ca\u5176\u8bc4\u4f30\u503c\uff0c\u5728\u5173\u952e\u4fe1\u606f\u672a\u53d1\u751f\u53d8\u5316\u65f6\u53ef\u4ee5\u8df3\u8fc7sql\u89e3\u6790\uff0c\u4f18\u5316\u4e86sql cache\u7684\u67e5\u8be2\u901f\u5ea6\u3002"),(0,t.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7fe\u914d\u7f6e\u9879sql_cache_manage_num\u548cexpire_sql_cache_in_fe_second\u6765\u63a7\u5236\u8fd9\u4e9b\u5173\u952e\u4fe1\u606f\u7684\u4e2a\u6570\u4ee5\u53ca\u6dd8\u6c70\u65f6\u95f4\u6765\u51cf\u5c11\u5bf9fe\u7684\u5185\u5b58\u6d88\u8017\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> ADMIN SET FRONTEND CONFIG ('sql_cache_manage_num' = '100');\nMySQL [(none)]> ADMIN SET FRONTEND CONFIG ('expire_sql_cache_in_fe_second' = '300');\n")),(0,t.yg)("h2",{id:"\u7f13\u5b58\u6761\u4ef6"},"\u7f13\u5b58\u6761\u4ef6"),(0,t.yg)("p",null,"\u7b2c\u4e00\u6b21\u67e5\u8be2\u540e\uff0c\u5982\u679c\u6ee1\u8db3\u4e0b\u9762\u4e09\u4e2a\u6761\u4ef6\uff0c\u67e5\u8be2\u7ed3\u679c\u5c31\u4f1a\u88ab\u7f13\u5b58\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"(\u5f53\u524d\u65f6\u95f4 - \u67e5\u8be2\u7684\u5206\u533a\u6700\u540e\u66f4\u65b0\u65f6\u95f4) \u5927\u4e8e fe.conf \u4e2d\u7684 cache_last_version_interval_second\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c\u884c\u6570 \u5c0f\u4e8e fe.conf \u4e2d\u7684 cache_result_max_row_count\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c bytes \u5c0f\u4e8e fe.conf \u4e2d\u7684 cache_result_max_data_size\u3002"))),(0,t.yg)("p",null,"\u5177\u4f53\u53c2\u6570\u4ecb\u7ecd\u548c\u672a\u5c3d\u4e8b\u9879\u89c1 query-cache.md\u3002"),(0,t.yg)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"SQL \u4e2d\u5305\u542b\u4ea7\u751f\u968f\u673a\u503c\u7684\u51fd\u6570\uff0c\u6bd4\u5982 random()\uff0c\u4f7f\u7528 QueryCache \u4f1a\u5bfc\u81f4\u67e5\u8be2\u7ed3\u679c\u5931\u53bb\u968f\u673a\u6027\uff0c\u6bcf\u6b21\u6267\u884c\u5c06\u5f97\u5230\u76f8\u540c\u7684\u7ed3\u679c\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u7c7b\u4f3c\u7684 SQL\uff0c\u4e4b\u524d\u67e5\u8be2\u4e86 2 \u4e2a\u6307\u6807\uff0c\u73b0\u5728\u67e5\u8be2 3 \u4e2a\u6307\u6807\uff0c\u662f\u5426\u53ef\u4ee5\u5229\u7528 2 \u4e2a\u6307\u6807\u7684\u7f13\u5b58\uff1f\u76ee\u524d\u4e0d\u652f\u6301"))))}s.isMDXComponent=!0}}]);