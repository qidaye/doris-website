"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[855022],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>d});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var g=a.createContext({}),i=function(e){var n=a.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=i(e.components);return a.createElement(g.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=i(r),m=t,d=y["".concat(g,".").concat(m)]||y[m]||u[m]||l;return r?a.createElement(d,p(p({ref:n},s),{},{components:r})):a.createElement(d,p({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[y]="string"==typeof e?e:t,p[1]=o;for(var i=2;i<l;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},397079:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(58168),t=(r(296540),r(15680));const l={title:"Release 2.1.3",language:"zh-CN"},p=void 0,o={unversionedId:"releasenotes/release-2.1.3",id:"version-2.1/releasenotes/release-2.1.3",title:"Release 2.1.3",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/release-2.1.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.1.3",permalink:"/zh-CN/docs/2.1/releasenotes/release-2.1.3",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 2.1.3",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 2.1.4",permalink:"/zh-CN/docs/2.1/releasenotes/release-2.1.4"},next:{title:"Release 2.1.2",permalink:"/zh-CN/docs/2.1/releasenotes/release-2.1.2"}},g={},i=[{value:"\u529f\u80fd\u7279\u6027",id:"\u529f\u80fd\u7279\u6027",level:2},{value:"\u4f18\u5316\u6539\u8fdb",id:"\u4f18\u5316\u6539\u8fdb",level:2},{value:"\u884c\u4e3a\u53d8\u66f4",id:"\u884c\u4e3a\u53d8\u66f4",level:2},{value:"\u5347\u7ea7\u95ee\u9898",id:"\u5347\u7ea7\u95ee\u9898",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d",level:2}],s={toc:i},y="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Apache Doris 2.1.3 \u7248\u672c\u5df2\u4e8e 2024 \u5e74 5 \u6708 21 \u65e5\u6b63\u5f0f\u53d1\u5e03"),"\u3002\u8be5\u7248\u672c\u66f4\u65b0\u5e26\u6765\u4e86\u82e5\u5e72\u6539\u8fdb\u9879\uff0c\u5305\u62ec\u652f\u6301\u5411 Hive \u56de\u5199\u6570\u636e\u3001\u7269\u5316\u89c6\u56fe\u3001\u65b0\u51fd\u6570\u7b49\u529f\u80fd\uff0c\u540c\u65f6\u6539\u5584\u6743\u9650\u7ba1\u7406\u5e76\u4fee\u590d\u82e5\u5e72\u95ee\u9898\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u6027\u80fd\u53ca\u7a33\u5b9a\u6027\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\uff1a")," ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d\uff1a")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,t.yg)("h2",{id:"\u529f\u80fd\u7279\u6027"},"\u529f\u80fd\u7279\u6027"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. \u652f\u6301\u901a\u8fc7 Hive Catalog \u5411 Hive \u8868\u4e2d\u56de\u5199\u6570\u636e")),(0,t.yg)("p",null,"\u4ece 2.1.3 \u7248\u672c\u5f00\u59cb\uff0cApache Doris \u652f\u6301\u5bf9 Hive \u7684 DDL \u548c DML \u64cd\u4f5c\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 Apache Doris \u5728 Hive \u4e2d\u521b\u5efa\u5e93\u8868\uff0c\u901a\u8fc7\u6267\u884c",(0,t.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),"\u8bed\u53e5\u6765\u5411 Hive \u8868\u4e2d\u5199\u5165\u6570\u636e\u3002\u901a\u8fc7\u8be5\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Apache Doris \u5bf9 Hive \u8fdb\u884c\u5b8c\u6574\u7684\u6570\u636e\u67e5\u8be2\u548c\u5199\u5165\u64cd\u4f5c\uff0c\u8fdb\u4e00\u6b65\u5e2e\u52a9\u7528\u6237\u7b80\u5316\u6e56\u4ed3\u4e00\u4f53\u67b6\u6784\u3002"),(0,t.yg)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/"},"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. \u652f\u6301\u5728\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4e4b\u4e0a\u6784\u5efa\u65b0\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe")),(0,t.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4e4b\u4e0a\u6765\u521b\u5efa\u65b0\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u76f4\u63a5\u590d\u7528\u8ba1\u7b97\u597d\u7684\u4e2d\u95f4\u7ed3\u679c\u8fdb\u884c\u6570\u636e\u52a0\u5de5\u5904\u7406\uff0c\u7b80\u5316\u590d\u6742\u7684\u805a\u5408\u548c\u8ba1\u7b97\u64cd\u4f5c\u5e26\u6765\u7684\u8d44\u6e90\u6d88\u8017\u548c\u7ef4\u62a4\u6210\u672c\uff0c\u8fdb\u4e00\u6b65\u52a0\u901f\u67e5\u8be2\u6027\u80fd\u3001\u63d0\u5347\u6570\u636e\u53ef\u7528\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"3. \u652f\u6301\u901a\u8fc7\u7269\u5316\u89c6\u56fe\u5d4c\u5957\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u91cd\u5199")),(0,t.yg)("p",null,"\u7269\u5316\u89c6\u56fe\uff08Materialized View\uff0cMV\uff09\u662f\u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u3002\u73b0\u5728\uff0cApache Doris \u652f\u6301\u901a\u8fc7 MV \u5d4c\u5957\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u91cd\u5199\uff0c\u8fd9\u6709\u52a9\u4e8e\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"4. \u65b0\u589e SHOW VIEWS \u8bed\u53e5")),(0,t.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW VIEWS"),"\u8bed\u53e5\u6765\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u7684\u89c6\u56fe\uff0c\u6709\u52a9\u4e8e\u66f4\u597d\u5730\u7ba1\u7406\u548c\u7406\u89e3\u6570\u636e\u5e93\u4e2d\u7684\u89c6\u56fe\u5bf9\u8c61\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"5. Workload Group \u652f\u6301\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684 BE \u8282\u70b9")),(0,t.yg)("p",null,"Workload Group \u53ef\u4ee5\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684 BE \u8282\u70b9\uff0c\u5b9e\u73b0\u67e5\u8be2\u6267\u884c\u7684\u66f4\u7cbe\u7ec6\u5316\u63a7\u5236\uff0c\u4ee5\u4f18\u5316\u8d44\u6e90\u4f7f\u7528\u548c\u63d0\u9ad8\u6027\u80fd\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"6. Broker Load \u652f\u6301\u538b\u7f29\u7684 JSON \u683c\u5f0f")),(0,t.yg)("p",null,"Broker Load \u652f\u6301\u5bfc\u5165\u538b\u7f29\u7684 JSON \u683c\u5f0f\u6570\u636e\uff0c\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u7684\u5e26\u5bbd\u9700\u6c42\u3001\u52a0\u901f\u6570\u636e\u5bfc\u5165\u6027\u80fd\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"7. TRUNCATE \u51fd\u6570\u53ef\u4ee5\u4f7f\u7528\u5217\u4f5c\u4e3a scale \u53c2\u6570")),(0,t.yg)("p",null,"TRUNCATE \u51fd\u6570\u73b0\u5728\u53ef\u4ee5\u63a5\u53d7\u5217\u4f5c\u4e3a scale \u53c2\u6570\uff0c\u8fd9\u4f7f\u5f97\u5728\u5904\u7406\u6570\u503c\u6570\u636e\u65f6\u53ef\u4ee5\u66f4\u52a0\u7075\u6d3b\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"8. \u6dfb\u52a0\u65b0\u7684\u51fd\u6570 ",(0,t.yg)("inlineCode",{parentName:"strong"},"uuid_to_int")," \u548c ",(0,t.yg)("inlineCode",{parentName:"strong"},"int_to_uuid"))),(0,t.yg)("p",null,"\u8fd9\u4e24\u4e2a\u51fd\u6570\u5141\u8bb8\u7528\u6237\u5728 UUID \u548c\u6574\u6570\u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362\uff0c\u5bf9\u4e8e\u9700\u8981\u5904\u7406 UUID \u6570\u636e\u7684\u573a\u666f\u6709\u660e\u663e\u5e2e\u52a9\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"9. \u6dfb\u52a0 ",(0,t.yg)("inlineCode",{parentName:"strong"},"bypass_workload_group")," Session Variable \u4ee5\u7ed5\u8fc7\u67e5\u8be2\u961f\u5217")),(0,t.yg)("p",null,"\u4f1a\u8bdd\u53d8\u91cf ",(0,t.yg)("inlineCode",{parentName:"p"},"bypass_workload_group")," \u5141\u8bb8\u67d0\u4e9b\u67e5\u8be2\u7ed5\u8fc7 Workload Group \u961f\u5217\u76f4\u63a5\u6267\u884c\uff0c\u8fd9\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u9700\u8981\u5feb\u901f\u54cd\u5e94\u7684\u5173\u952e\u67e5\u8be2\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"10. \u6dfb\u52a0 strcmp \u51fd\u6570")),(0,t.yg)("p",null,"strcmp \u51fd\u6570\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u6bd4\u8f83\u7ed3\u679c\uff0c\u5e2e\u52a9\u6587\u672c\u6570\u636e\u7684\u5904\u7406\u66f4\u52a0\u7b80\u6613\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"11. \u652f\u6301 HLL \u51fd\u6570 ",(0,t.yg)("inlineCode",{parentName:"strong"},"hll_from_base64")," \u548c ",(0,t.yg)("inlineCode",{parentName:"strong"},"hll_to_base64"))),(0,t.yg)("p",null,"HLL\uff08HyperLogLog\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u57fa\u6570\u4f30\u8ba1\u7684\u7b97\u6cd5\uff0c\u4ee5\u4e0a\u4e24\u4e2a\u51fd\u6570\u5141\u8bb8\u7528\u6237\u5c06 HLL \u6570\u636e\u4ece Base64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u4e2d\u89e3\u7801\uff0c\u6216\u5c06 HLL \u6570\u636e\u7f16\u7801\u4e3a Base64 \u5b57\u7b26\u4e32\uff0c\u8fd9\u5bf9\u4e8e\u5b58\u50a8\u548c\u4f20\u8f93 HLL \u6570\u636e\u975e\u5e38\u6709\u7528\u3002"),(0,t.yg)("h2",{id:"\u4f18\u5316\u6539\u8fdb"},"\u4f18\u5316\u6539\u8fdb"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. \u66ff\u6362 SipHash \u4e3a XXHash \u4ee5\u6539\u5584 Shuffle \u6027\u80fd")),(0,t.yg)("p",null,"SipHash \u548c XXHash \u90fd\u662f\u54c8\u5e0c\u51fd\u6570\uff0c\u4f46 XXHash \u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u53ef\u80fd\u63d0\u4f9b\u66f4\u5feb\u7684\u54c8\u5e0c\u901f\u5ea6\u548c\u66f4\u597d\u7684\u6027\u80fd\uff0c\u6b64\u4f18\u5316\u65e8\u5728\u901a\u8fc7\u91c7\u7528 XXHash \u6765\u63d0\u9ad8\u6570\u636e Shuffle \u8fc7\u7a0b\u4e2d\u7684\u6027\u80fd\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. \u5f02\u6b65\u7269\u5316\u89c6\u56fe\u652f\u6301 OLAP \u8868\u5206\u533a\u5217\u4e3a\u53ef\u4ee5\u4e3a NULL\uff1a")),(0,t.yg)("p",null,"\u5141\u8bb8\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u652f\u6301 OLAP \u8868\u7684\u5206\u533a\u5217\u53ef\u4ee5\u4e3a NULL\uff0c\u4ece\u800c\u589e\u5f3a\u4e86\u6570\u636e\u5904\u7406\u7684\u7075\u6d3b\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"3. \u6536\u96c6\u5217\u7edf\u8ba1\u4fe1\u606f\u65f6\u9650\u5236\u6700\u5927\u5b57\u7b26\u4e32\u957f\u5ea6\u4e3a 1024 \u4ee5\u63a7\u5236 BE \u5185\u5b58\u4f7f\u7528")),(0,t.yg)("p",null,"\u5728\u6536\u96c6\u5217\u7edf\u8ba1\u4fe1\u606f\u65f6\uff0c\u9650\u5236\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u53ef\u4ee5\u9632\u6b62\u8fc7\u5927\u7684\u6570\u636e\u6d88\u8017\u8fc7\u591a\u7684 BE \u5185\u5b58\uff0c\u6709\u52a9\u4e8e\u4fdd\u6301\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"4. \u652f\u6301\u52a8\u6001\u5220\u9664 Bitmap Cache \u4ee5\u63d0\u9ad8\u6027\u80fd")),(0,t.yg)("p",null,"\u901a\u8fc7\u652f\u6301\u52a8\u6001\u5220\u9664\u4e0d\u518d\u9700\u8981\u7684 Bitmap Cache\uff0c\u53ef\u4ee5\u91ca\u653e\u5185\u5b58\u5e76\u6539\u5584\u7cfb\u7edf\u6027\u80fd\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"5. \u5728 ALTER \u64cd\u4f5c\u4e2d\u51cf\u5c11\u5185\u5b58\u4f7f\u7528")),(0,t.yg)("p",null,"\u51cf\u5c11 ALTER \u64cd\u4f5c\u4e2d\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u8d44\u6e90\u7684\u5229\u7528\u6548\u7387\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"6. \u652f\u6301\u590d\u6742\u7c7b\u578b\u7684\u5e38\u91cf\u6298\u53e0")),(0,t.yg)("p",null,"\u652f\u6301 Array/Map/Struct \u590d\u6742\u7c7b\u578b\u7684\u5e38\u91cf\u6298\u53e0\uff1b"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"7. \u5728 Aggregate Key \u805a\u5408\u6a21\u578b\u4e2d\u589e\u52a0\u5bf9 Variant \u7c7b\u578b\u7684\u652f\u6301")),(0,t.yg)("p",null,"Variant \u6570\u636e\u7c7b\u578b\u80fd\u591f\u5b58\u50a8\u591a\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5728\u6b64\u4f18\u5316\u4e2d\u5141\u8bb8\u5bf9 Variant \u7c7b\u578b\u7684\u6570\u636e\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u4ece\u800c\u589e\u5f3a\u4e86\u534a\u7ed3\u6784\u5316\u6570\u636e\u5206\u6790\u7684\u7075\u6d3b\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"8. \u5728 CCR \u4e2d\u652f\u6301\u65b0\u7684\u5012\u6392\u7d22\u5f15\u683c\u5f0f")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"9. \u4f18\u5316\u5d4c\u5957\u7269\u5316\u89c6\u56fe\u7684\u91cd\u5199\u6027\u80fd")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"10. \u652f\u6301 decimal256 \u7c7b\u578b\u7684\u884c\u5b58\u683c\u5f0f")),(0,t.yg)("p",null,"\u5728\u884c\u5b58\u683c\u5f0f\u4e2d\u652f\u6301 decimal 256 \u7c7b\u578b\uff0c\u4ee5\u4ee5\u6269\u5c55\u7cfb\u7edf\u5bf9\u9ad8\u7cbe\u5ea6\u6570\u503c\u6570\u636e\u7684\u5904\u7406\u80fd\u529b\u3002"),(0,t.yg)("h2",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. \u6388\u6743\uff08Authorization\uff09")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Grant_priv \u6743\u9650\u66f4\u6539"),"\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"Grant_priv"),"\u4e0d\u80fd\u518d\u88ab\u4efb\u610f\u6388\u4e88\u3002\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"GRANT")," \u64cd\u4f5c\u65f6\uff0c\u7528\u6237\u4e0d\u4ec5\u9700\u8981\u5177\u6709",(0,t.yg)("inlineCode",{parentName:"p"},"Grant_priv"),"\uff0c\u8fd8\u9700\u8981\u5177\u6709\u8981\u6388\u4e88\u7684\u6743\u9650\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60f3\u8981\u6388\u4e88\u5bf9",(0,t.yg)("inlineCode",{parentName:"p"},"table1"),"\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT")," \u6743\u9650\uff0c\u90a3\u4e48\u8be5\u7528\u6237\u4e0d\u4ec5\u9700\u8981\u5177\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"GRANT")," \u6743\u9650\uff0c\u8fd8\u9700\u8981\u5177\u6709\u5bf9",(0,t.yg)("inlineCode",{parentName:"p"},"table1"),"\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT")," \u6743\u9650\uff0c\u8fd9\u589e\u52a0\u4e86\u6743\u9650\u7ba1\u7406\u7684\u5b89\u5168\u6027\u548c\u4e00\u81f4\u6027\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Workload Group \u548c Resource \u7684 Usage_priv"),"\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"Usage_priv")," \u5bf9 Workload Group \u548c Resource \u7684\u6743\u9650\u4e0d\u518d\u662f\u5168\u5c40\u7ea7\u522b\u7684\uff0c\u800c\u662f\u4ec5\u9650\u4e8e Resource \u548c Workload Group \u5185\uff0c\u6743\u9650\u7684\u6388\u4e88\u548c\u4f7f\u7528\u5c06\u66f4\u52a0\u5177\u4f53\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u64cd\u4f5c\u7684\u6388\u6743"),"\uff1a\u4e4b\u524d\u672a\u88ab\u6388\u6743\u7684\u64cd\u4f5c\u73b0\u5728\u90fd\u6709\u4e86\u76f8\u5e94\u7684\u6388\u6743\uff0c\u4ee5\u5b9e\u73b0\u66f4\u52a0\u7ec6\u81f4\u548c\u5168\u9762\u5730\u64cd\u4f5c\u6743\u9650\u63a7\u5236\u3002"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. LOG \u76ee\u5f55\u914d\u7f6e")),(0,t.yg)("p",null,"FE \u548c BE \u7684\u65e5\u5fd7\u76ee\u5f55\u914d\u7f6e\u73b0\u5728\u7edf\u4e00\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"LOG_DIR"),"\u73af\u5883\u53d8\u91cf\uff0c\u6240\u6709\u5176\u4ed6\u4e0d\u540c\u7c7b\u578b\u7684\u65e5\u5fd7\u90fd\u5c06\u4ee5",(0,t.yg)("inlineCode",{parentName:"p"},"LOG_DIR"),"\u4f5c\u4e3a\u6839\u76ee\u5f55\u8fdb\u884c\u5b58\u50a8\u3002\u540c\u65f6\u4e3a\u4e86\u4fdd\u6301\u7248\u672c\u95f4\u7684\u517c\u5bb9\u6027\uff0c\u4ee5\u524d\u7684\u914d\u7f6e\u9879",(0,t.yg)("inlineCode",{parentName:"p"},"sys_log_dir"),"\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"3. S3 \u8868\u51fd\u6570\uff08TVF\uff09")),(0,t.yg)("p",null,"\u7531\u4e8e\u4e4b\u524d\u7684\u89e3\u6790\u65b9\u5f0f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u65e0\u6cd5\u6b63\u786e\u8bc6\u522b\u6216\u5904\u7406 S3 \u7684 URL\uff0c\u56e0\u6b64\u5c06\u5bf9\u8c61\u5b58\u50a8\u8def\u5f84\u7684\u89e3\u6790\u903b\u8f91\u8fdb\u884c\u91cd\u6784\u3002\u5bf9\u4e8e S3 \u8868\u51fd\u6570\u4e2d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u9700\u8981\u4f20\u9012",(0,t.yg)("inlineCode",{parentName:"p"},"force_parsing_by_standard_uri"),"\u53c2\u6570\u6765\u786e\u4fdd\u88ab\u6b63\u786e\u89e3\u6790\u3002"),(0,t.yg)("h2",{id:"\u5347\u7ea7\u95ee\u9898"},"\u5347\u7ea7\u95ee\u9898"),(0,t.yg)("p",null,"\u7531\u4e8e\u8bb8\u591a\u7528\u6237\u5c06\u67d0\u4e9b\u5173\u952e\u5b57\u7528\u4f5c\u5217\u540d\u6216\u5c5e\u6027\u503c\uff0c\u56e0\u6b64\u5c06\u5982\u4e0b\u5173\u952e\u5b57\u8bbe\u7f6e\u4e3a\u975e\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u5141\u8bb8\u7528\u6237\u5c06\u5176\u7528\u4f5c\u6807\u8bc6\u7b26\u4f7f\u7528\u3002 "),(0,t.yg)("h2",{id:"\u95ee\u9898\u4fee\u590d"},"\u95ee\u9898\u4fee\u590d"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. \u4fee\u590d\u5728\u817e\u8baf\u4e91 COSN \u4e0a\u8bfb\u53d6 Hive \u8868\u65f6\u7684\u65e0\u6570\u636e\u9519\u8bef")),(0,t.yg)("p",null,"\u89e3\u51b3\u4e86\u5728\u817e\u8baf\u4e91 COSN \u5b58\u50a8\u4e0a\u8bfb\u53d6 Hive \u8868\u65f6\u53ef\u80fd\u9047\u5230\u7684\u65e0\u6570\u636e\u9519\u8bef\uff0c\u589e\u5f3a\u4e86\u4e0e\u817e\u8baf\u4e91\u5b58\u50a8\u670d\u52a1\u7684\u517c\u5bb9\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. \u4fee\u590d milliseconds_diff \u51fd\u6570\u8fd4\u56de\u9519\u8bef\u7ed3\u679c")),(0,t.yg)("p",null,"\u4fee\u590d",(0,t.yg)("inlineCode",{parentName:"p"},"milliseconds_diff"),"\u51fd\u6570\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u8fd4\u56de\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\uff0c\u786e\u4fdd\u4e86\u65f6\u95f4\u5dee\u8ba1\u7b97\u7684\u51c6\u786e\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"3. \u7528\u6237\u5b9a\u4e49\u53d8\u91cf\u5e94\u8f6c\u53d1\u5230 Master \u8282\u70b9")),(0,t.yg)("p",null,"\u786e\u4fdd\u7528\u6237\u5b9a\u4e49\u7684\u53d8\u91cf\u80fd\u591f\u6b63\u786e\u5730\u4f20\u9012\u5230 Master \u8282\u70b9\uff0c\u4ee5\u4fbf\u5728\u6574\u4e2a\u7cfb\u7edf\u4e2d\u4fdd\u6301\u4e00\u81f4\u6027\u548c\u6b63\u786e\u7684\u6267\u884c\u903b\u8f91\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"4. \u4fee\u590d\u6dfb\u52a0\u590d\u6742\u7c7b\u578b\u5217\u65f6\u9047\u5230\u7684 Schema Change \u95ee\u9898")),(0,t.yg)("p",null,"\u5728\u6dfb\u52a0\u590d\u6742\u7c7b\u578b\u5217\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230 Schema Change \u95ee\u9898\uff0c\u6b64\u4fee\u590d\u786e\u4fdd\u4e86 Schema Change \u7684\u6b63\u786e\u6027\u3002"),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"\u4fee\u590d FE master \u8282\u70b9\u66f4\u6539\u65f6 Routine Load \u7684\u6570\u636e\u4e22\u5931\u95ee\u9898"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Routine Load"),"\u5e38\u7528\u4e8e\u8ba2\u9605 Kafka \u6d88\u606f\u961f\u5217\u4e2d\u7684\u6570\u636e\uff0c\u6b64\u4fee\u590d\u89e3\u51b3\u4e86\u5728 FE Master \u8282\u70b9\u66f4\u6539\u65f6\u53ef\u80fd\u5bfc\u81f4\u7684\u6570\u636e\u4e22\u5931\u95ee\u9898\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"6. \u4fee\u590d\u5f53\u627e\u4e0d\u5230 Workload Group \u65f6 Routine Load \u5931\u8d25\u7684\u95ee\u9898")),(0,t.yg)("p",null,"\u4fee\u590d\u4e86\u5f53",(0,t.yg)("inlineCode",{parentName:"p"},"Routine Load"),"\u627e\u4e0d\u5230\u6307\u5b9a Workload Group \u65f6\u5bfc\u81f4\u7684\u5931\u8d25\u95ee\u9898\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"7. \u652f\u6301 column string64\uff0c\u4ee5\u907f\u514d\u5728 string size \u6ea2\u51fa unit32 \u65f6 Join \u5931\u8d25\u7684\u95ee\u9898")),(0,t.yg)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b57\u7b26\u4e32\u7684\u5927\u5c0f\u53ef\u80fd\u4f1a\u8d85\u8fc7 unit32 \u7684\u9650\u5236\uff0c\u652f\u6301",(0,t.yg)("inlineCode",{parentName:"p"},"string64"),"\u7c7b\u578b\u53ef\u4ee5\u786e\u4fdd\u5b57\u7b26\u4e32 JOIN \u64cd\u4f5c\u7684\u6b63\u786e\u6267\u884c\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"8. \u5141\u8bb8 Hadoop \u7528\u6237\u521b\u5efa Paimon Catalog")),(0,t.yg)("p",null,"\u5141\u8bb8\u5177\u6709\u6743\u9650\u7684\u5bf9\u5e94 Hadoop \u7528\u6237\u6765\u521b\u5efa Paimon Catalog\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"9. \u4fee\u590d function_ipxx_cidr \u51fd\u6570\u4e0e\u5e38\u91cf\u53c2\u6570\u7684\u95ee\u9898")),(0,t.yg)("p",null,"\u4fee\u590d\u4e86",(0,t.yg)("inlineCode",{parentName:"p"},"function_ipxx_cidr"),"\u51fd\u6570\u5728\u5904\u7406\u5e38\u91cf\u53c2\u6570\u65f6\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u4fdd\u8bc1\u51fd\u6570\u6267\u884c\u7684\u6b63\u786e\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"10. \u4fee\u590d\u4f7f\u7528 HDFS \u8fdb\u884c\u8fd8\u539f\u65f6\u7684\u6587\u4ef6\u4e0b\u8f7d\u9519\u8bef")),(0,t.yg)("p",null,"\u89e3\u51b3\u4e86\u5728\u4f7f\u7528 HDFS \u8fdb\u884c\u6570\u636e\u8fd8\u539f\u65f6\u9047\u5230\u7684\u201cfailed to download\u201d\u9519\u8bef\uff0c\u786e\u4fdd\u4e86\u6570\u636e\u6062\u590d\u7684\u6b63\u786e\u6027\u548c\u53ef\u9760\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"11. \u4fee\u590d\u9690\u85cf\u5217\u76f8\u5173\u7684\u5217\u6743\u9650\u95ee\u9898")),(0,t.yg)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u9690\u85cf\u5217\u7684\u6743\u9650\u8bbe\u7f6e\u53ef\u80fd\u4e0d\u6b63\u786e\uff0c\u6b64\u4fee\u590d\u786e\u4fdd\u4e86\u5217\u6743\u9650\u8bbe\u7f6e\u7684\u6b63\u786e\u6027\u548c\u5b89\u5168\u6027\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"12. \u4fee\u590d\u5728 K8s \u90e8\u7f72\u4e2d Arrow Flight \u65e0\u6cd5\u83b7\u53d6\u6b63\u786e IP \u7684\u95ee\u9898")),(0,t.yg)("p",null,"\u6b64\u4fee\u590d\u89e3\u51b3\u4e86\u5728 Kubernetes \u90e8\u7f72\u73af\u5883\u4e2d Arrow Flight \u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 IP \u5730\u5740\u7684\u95ee\u9898\u3002"))}u.isMDXComponent=!0}}]);