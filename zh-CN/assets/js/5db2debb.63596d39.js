"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[639401],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>b});var n=t(296540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=i(t),d=o,b=y["".concat(c,".").concat(d)]||y[d]||p[d]||u;return t?n.createElement(b,a(a({ref:r},s),{},{components:t})):n.createElement(b,a({ref:r},s))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[y]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<u;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},831266:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var n=t(58168),o=(t(296540),t(15680));const u={title:"\u5b50\u67e5\u8be2",language:"zh-CN"},a=void 0,l={unversionedId:"query/query-data/subquery",id:"query/query-data/subquery",title:"\u5b50\u67e5\u8be2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query/query-data/subquery.md",sourceDirName:"query/query-data",slug:"/query/query-data/subquery",permalink:"/zh-CN/docs/dev/query/query-data/subquery",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5b50\u67e5\u8be2",language:"zh-CN"},sidebar:"docs",previous:{title:"\u590d\u6742\u7c7b\u578b\u67e5\u8be2",permalink:"/zh-CN/docs/dev/query/query-data/complex-type"},next:{title:"\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09",permalink:"/zh-CN/docs/dev/query/query-data/cte"}},c={},i=[{value:"Where \u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b",id:"where-\u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b",level:2},{value:"Join \u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b",id:"join-\u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b",level:2}],s={toc:i},y="wrapper";function p(e){let{components:r,...t}=e;return(0,o.yg)(y,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u5b50\u67e5\u8be2\u662f\u4e00\u79cd\u5d4c\u5957\u5728\u5176\u4ed6 ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u4e2d\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u3002\u5d4c\u5957\u5b50\u67e5\u8be2\u901a\u5e38\u79f0\u4e3a\u67e5\u8be2\u5185\u8bed\u53e5\uff0c\u800c\u5305\u542b\u67e5\u8be2\u901a\u5e38\u79f0\u4e3a\u67e5\u8be2\u8bed\u53e5\u6216\u5916\u67e5\u8be2\u5757\u3002\u5b50\u67e5\u8be2\u8fd4\u56de\u5916\u67e5\u8be2\u7528\u4f5c\u6761\u4ef6\u7684\u6570\u636e\uff0c\u4ee5\u786e\u5b9a\u9700\u8981\u68c0\u7d22\u54ea\u4e9b\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u521b\u5efa\u7684\u5d4c\u5957\u5b50\u67e5\u8be2\u7684\u6570\u91cf\u6ca1\u6709\u9650\u5236\u3002"),(0,o.yg)("p",null,"\u4e0e\u4efb\u4f55\u67e5\u8be2\u4e00\u6837\uff0c\u5b50\u67e5\u8be2\u8fd4\u56de\uff08\u5355\u5217\u5355\u8bb0\u5f55\u3001\u5355\u5217\u591a\u8bb0\u5f55\u6216\u591a\u5217\u591a\u8bb0\u5f55\uff09\u8868\u4e2d\u7684\u8bb0\u5f55\u3002"),(0,o.yg)("h2",{id:"where-\u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b"},"Where \u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"SELECT * FROM sub_query_correlated_subquery1 WHERE k1 > (SELECT AVG(k1) FROM sub_query_correlated_subquery3) OR k1 < 10 order by k1, k2;\nselect * from sub_query_correlated_subquery1 where sub_query_correlated_subquery1.k1 not in (select sub_query_correlated_subquery3.k3 from sub_query_correlated_subquery3 where sub_query_correlated_subquery3.v2 = sub_query_correlated_subquery1.k2) or k1 < 10 order by k1, k2\n")),(0,o.yg)("h2",{id:"join-\u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b"},"Join \u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u4e3e\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plaintext"},"select t1.* from t1 left join t2 on t1.k2 = t2.k3 and t1.k1 in ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\nselect t1.* from t1 left join t2 on t1.k2 = t2.k3 and exists ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\n")))}p.isMDXComponent=!0}}]);