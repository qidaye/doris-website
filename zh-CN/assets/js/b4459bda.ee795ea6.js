"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[823644],{15680:(e,a,r)=>{r.d(a,{xA:()=>c,yg:()=>h});var t=r(296540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),s=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},c=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),y=n,h=g["".concat(o,".").concat(y)]||g[y]||u[y]||i;return r?t.createElement(h,p(p({ref:a},c),{},{components:r})):t.createElement(h,p({ref:a},c))}));function h(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=y;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[g]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<i;s++)p[s]=r[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},344054:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(58168),n=(r(296540),r(15680));const i={title:"Apache Doris \u7b80\u4ecb",language:"zh-CN"},p=void 0,l={unversionedId:"get-starting/what-is-apache-doris",id:"version-3.0/get-starting/what-is-apache-doris",title:"Apache Doris \u7b80\u4ecb",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/get-starting/what-is-apache-doris.md",sourceDirName:"get-starting",slug:"/get-starting/what-is-apache-doris",permalink:"/zh-CN/docs/get-starting/what-is-apache-doris",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Apache Doris \u7b80\u4ecb",language:"zh-CN"},sidebar:"docs",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/get-starting/quick-start/"}},o={},s=[{value:"Apache Doris \u7684\u53d1\u5c55",id:"apache-doris-\u7684\u53d1\u5c55",level:2},{value:"Apache Doris \u7684\u4f7f\u7528\u573a\u666f",id:"apache-doris-\u7684\u4f7f\u7528\u573a\u666f",level:2},{value:"\u6574\u4f53\u67b6\u6784\u548c\u6280\u672f\u7279\u70b9",id:"\u6574\u4f53\u67b6\u6784\u548c\u6280\u672f\u7279\u70b9",level:2},{value:"\u4f7f\u7528\u63a5\u53e3",id:"\u4f7f\u7528\u63a5\u53e3",level:3},{value:"\u5b58\u50a8\u5f15\u64ce",id:"\u5b58\u50a8\u5f15\u64ce",level:3},{value:"\u67e5\u8be2\u5f15\u64ce",id:"\u67e5\u8be2\u5f15\u64ce",level:3}],c={toc:s},g="wrapper";function u(e){let{components:a,...i}=e;return(0,n.yg)(g,(0,t.A)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"apache-doris-\u7684\u53d1\u5c55"},"Apache Doris \u7684\u53d1\u5c55"),(0,n.yg)("p",null,"Apache Doris \u662f\u4e00\u6b3e\u57fa\u4e8e MPP \u67b6\u6784\u7684\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u7684\u5206\u6790\u578b\u6570\u636e\u5e93\uff0c\u4ee5\u9ad8\u6548\u3001\u7b80\u5355\u3001\u7edf\u4e00\u7684\u7279\u70b9\u88ab\u4eba\u4eec\u6240\u719f\u77e5\uff0c\u4ec5\u9700\u4e9a\u79d2\u7ea7\u54cd\u5e94\u65f6\u95f4\u5373\u53ef\u8fd4\u56de\u6d77\u91cf\u6570\u636e\u4e0b\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u652f\u6301\u9ad8\u5e76\u53d1\u7684\u70b9\u67e5\u8be2\u573a\u666f\uff0c\u4e5f\u80fd\u652f\u6301\u9ad8\u541e\u5410\u7684\u590d\u6742\u5206\u6790\u573a\u666f\u3002\u57fa\u4e8e\u6b64\uff0cApache Doris \u80fd\u591f\u8f83\u597d\u7684\u6ee1\u8db3\u62a5\u8868\u5206\u6790\u3001\u5373\u5e2d\u67e5\u8be2\u3001\u7edf\u4e00\u6570\u4ed3\u6784\u5efa\u3001\u6e56\u4ed3\u4e00\u4f53\u7b49\u4f7f\u7528\u573a\u666f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u4e4b\u4e0a\u6784\u5efa\u5927\u5c4f\u770b\u677f\u3001\u7528\u6237\u884c\u4e3a\u5206\u6790\u3001AB \u5b9e\u9a8c\u5e73\u53f0\u3001\u65e5\u5fd7\u68c0\u7d22\u5206\u6790\u3001\u7528\u6237\u753b\u50cf\u5206\u6790\u3001\u8ba2\u5355\u5206\u6790\u7b49\u5e94\u7528\u3002"),(0,n.yg)("p",null,"Apache Doris \u6700\u65e9\u662f\u8bde\u751f\u4e8e\u767e\u5ea6\u5e7f\u544a\u62a5\u8868\u4e1a\u52a1\u7684 Palo \u9879\u76ee\uff0c2017 \u5e74\u6b63\u5f0f\u5bf9\u5916\u5f00\u6e90\uff0c2018 \u5e74 7 \u6708\u7531\u767e\u5ea6\u6350\u8d60\u7ed9 Apache \u57fa\u91d1\u4f1a\u8fdb\u884c\u5b75\u5316\uff0c\u4e4b\u540e\u5728 Apache \u5bfc\u5e08\u7684\u6307\u5bfc\u4e0b\u7531\u5b75\u5316\u5668\u9879\u76ee\u7ba1\u7406\u59d4\u5458\u4f1a\u6210\u5458\u8fdb\u884c\u5b75\u5316\u548c\u8fd0\u8425\u30022022 \u5e74 6 \u6708\uff0cApache Doris \u6210\u529f\u4ece Apache \u5b75\u5316\u5668\u6bd5\u4e1a\uff0c\u6b63\u5f0f\u6210\u4e3a Apache \u9876\u7ea7\u9879\u76ee\uff08Top-Level Project\uff0cTLP\uff09\u3002\u76ee\u524d Apache Doris \u793e\u533a\u5df2\u7ecf\u805a\u96c6\u4e86\u6765\u81ea\u4e0d\u540c\u884c\u4e1a\u6570\u767e\u5bb6\u4f01\u4e1a\u7684 600 \u4f59\u4f4d\u8d21\u732e\u8005\uff0c\u5e76\u4e14\u6bcf\u6708\u6d3b\u8dc3\u8d21\u732e\u8005\u4eba\u6570\u4e5f\u8d85\u8fc7 120 \u4f4d\u3002"),(0,n.yg)("p",null,"Apache Doris \u5982\u4eca\u5728\u4e2d\u56fd\u4e43\u81f3\u5168\u7403\u8303\u56f4\u5185\u90fd\u62e5\u6709\u7740\u5e7f\u6cdb\u7684\u7528\u6237\u7fa4\u4f53\uff0c\u622a\u6b62\u76ee\u524d\uff0cApache Doris \u5df2\u7ecf\u5728\u5168\u7403\u8d85\u8fc7 4000 \u5bb6\u4e2d\u5927\u578b\u4f01\u4e1a\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u5f97\u5230\u5e94\u7528\uff0c\u5728\u4e2d\u56fd\u5e02\u503c\u6216\u4f30\u503c\u6392\u884c\u524d 50 \u7684\u4e92\u8054\u7f51\u516c\u53f8\u4e2d\uff0c\u6709\u8d85\u8fc7 80% \u957f\u671f\u4f7f\u7528 Apache Doris\uff0c\u5305\u62ec\u767e\u5ea6\u3001\u7f8e\u56e2\u3001\u5c0f\u7c73\u3001\u4eac\u4e1c\u3001\u5b57\u8282\u8df3\u52a8\u3001\u963f\u91cc\u5df4\u5df4\u3001\u817e\u8baf\u3001\u7f51\u6613\u3001\u5feb\u624b\u3001\u5fae\u535a\u7b49\u3002\u540c\u65f6\u5728\u4e00\u4e9b\u4f20\u7edf\u884c\u4e1a\u5982\u91d1\u878d\u3001\u6d88\u8d39\u3001\u7535\u4fe1\u3001\u5de5\u4e1a\u5236\u9020\u3001\u80fd\u6e90\u3001\u533b\u7597\u3001\u653f\u52a1\u7b49\u9886\u57df\u4e5f\u6709\u7740\u4e30\u5bcc\u7684\u5e94\u7528\u3002\u5728\u4e2d\u56fd\u51e0\u4e4e\u6240\u6709\u7684\u4e91\u5546\u5382\u6bd4\u5982\u963f\u91cc\u4e91\u3001\u534e\u4e3a\u4e91\u3001\u5929\u7ffc\u4e91\u3001\u817e\u8baf\u4e91\u3001\u767e\u5ea6\u4e91\u3001\u706b\u5c71\u5f15\u64ce\u7b49\u90fd\u5728\u63d0\u4f9b\u6258\u7ba1\u7684 Apache Doris \u7684\u4e91\u670d\u52a1\u3002"),(0,n.yg)("h2",{id:"apache-doris-\u7684\u4f7f\u7528\u573a\u666f"},"Apache Doris \u7684\u4f7f\u7528\u573a\u666f"),(0,n.yg)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6570\u636e\u6e90\u7ecf\u8fc7\u5404\u79cd\u6570\u636e\u96c6\u6210\u548c\u52a0\u5de5\u5904\u7406\u540e\uff0c\u901a\u5e38\u4f1a\u5165\u5e93\u5230\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93 Apache Doris \u548c\u79bb\u7ebf\u6e56\u4ed3\uff08Hive, Iceberg, Hudi \u4e2d\uff09\uff0cApache Doris \u88ab\u5e7f\u6cdb\u5e94\u7528\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Apache Doris \u7684\u4f7f\u7528\u573a\u666f",src:r(608939).A,width:"2560",height:"1496"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u62a5\u8868\u5206\u6790")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5b9e\u65f6\u770b\u677f\uff08Dashboards\uff09")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u9762\u5411\u4f01\u4e1a\u5185\u90e8\u5206\u6790\u5e08\u548c\u7ba1\u7406\u8005\u7684\u62a5\u8868")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u9762\u5411\u7528\u6237\u6216\u8005\u5ba2\u6237\u7684\u9ad8\u5e76\u53d1\u62a5\u8868\u5206\u6790\uff08Customer Facing Analytics\uff09\u3002\u6bd4\u5982\u9762\u5411\u7f51\u7ad9\u4e3b\u7684\u7ad9\u70b9\u5206\u6790\u3001\u9762\u5411\u5e7f\u544a\u4e3b\u7684\u5e7f\u544a\u62a5\u8868\uff0c\u5e76\u53d1\u901a\u5e38\u8981\u6c42\u6210\u5343\u4e0a\u4e07\u7684 QPS\uff0c\u67e5\u8be2\u5ef6\u65f6\u8981\u6c42\u6beb\u79d2\u7ea7\u54cd\u5e94\u3002\u8457\u540d\u7684\u7535\u5546\u516c\u53f8\u4eac\u4e1c\u5728\u5e7f\u544a\u62a5\u8868\u4e2d\u4f7f\u7528 Apache Doris\uff0c\u6bcf\u5929\u5199\u5165 100 \u4ebf\u884c\u6570\u636e\uff0c\u67e5\u8be2\u5e76\u53d1 QPS \u4e0a\u4e07\uff0c99 \u5206\u4f4d\u7684\u67e5\u8be2\u5ef6\u65f6 150ms\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5373\u5e2d\u67e5\u8be2\uff08Ad-hoc Query\uff09\uff1a\u9762\u5411\u5206\u6790\u5e08\u7684\u81ea\u52a9\u5206\u6790\uff0c\u67e5\u8be2\u6a21\u5f0f\u4e0d\u56fa\u5b9a\uff0c\u8981\u6c42\u8f83\u9ad8\u7684\u541e\u5410\u3002\u5c0f\u7c73\u516c\u53f8\u57fa\u4e8e Apache Doris \u6784\u5efa\u4e86\u589e\u957f\u5206\u6790\u5e73\u53f0\uff08Growing Analytics\uff0cGA\uff09\uff0c\u5229\u7528\u7528\u6237\u884c\u4e3a\u6570\u636e\u5bf9\u4e1a\u52a1\u8fdb\u884c\u589e\u957f\u5206\u6790\uff0c\u5e73\u5747\u67e5\u8be2\u5ef6\u65f6 10s\uff0c95 \u5206\u4f4d\u7684\u67e5\u8be2\u5ef6\u65f6 30s \u4ee5\u5185\uff0c\u6bcf\u5929\u7684 SQL \u67e5\u8be2\u91cf\u4e3a\u6570\u4e07\u6761\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6e56\u4ed3\u4e00\u4f53\uff08Data Lakehouse\uff09\uff1a\u901a\u8fc7\u5916\u8868\u7684\u65b9\u5f0f\u8054\u90a6\u5206\u6790\u4f4d\u4e8e Hive\u3001Iceberg\u3001Hudi \u7b49\u79bb\u7ebf\u6e56\u4ed3\u4e2d\u7684\u6570\u636e\uff0c\u5728\u907f\u514d\u6570\u636e\u62f7\u8d1d\u7684\u524d\u63d0\u4e0b\uff0c\u67e5\u8be2\u6027\u80fd\u5927\u5e45\u63d0\u5347\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u65e5\u5fd7\u68c0\u7d22\u5206\u6790\uff1a\u5728 Apache Doris 2.0 \u7248\u672c\u4e2d\uff0c\u652f\u6301\u4e86\u5012\u6392\u7d22\u5f15\u548c\u5168\u6587\u68c0\u7d22\uff0c\u80fd\u591f\u5f88\u597d\u7684\u6ee1\u8db3\u65e5\u5fd7\u68c0\u7d22\u5206\u6790\u7684\u573a\u666f\uff0c\u5e76\u4e14\u4f9d\u8d56\u5176\u9ad8\u6548\u7684\u67e5\u8be2\u5f15\u64ce\u548c\u5b58\u50a8\u5f15\u64ce\uff0c\u76f8\u6bd4\u4f20\u7edf\u7684\u65e5\u5fd7\u68c0\u7d22\u5206\u6790\u7684\u65b9\u6848\u53ef\u4ee5\u6709 10 \u500d\u6027\u4ef7\u6bd4\u7684\u4f18\u52bf\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u7edf\u4e00\u6570\u4ed3\u6784\u5efa\uff1a\u4e00\u4e2a\u5e73\u53f0\u6ee1\u8db3\u7edf\u4e00\u7684\u6570\u636e\u4ed3\u5e93\u5efa\u8bbe\u9700\u6c42\uff0c\u7b80\u5316\u7e41\u7410\u7684\u5927\u6570\u636e\u8f6f\u4ef6\u6808\u3002\u6d77\u5e95\u635e\u57fa\u4e8e Apache Doris \u6784\u5efa\u7684\u7edf\u4e00\u6570\u4ed3\uff0c\u66ff\u6362\u4e86\u539f\u6765\u7531 Spark\u3001Hive\u3001Kudu\u3001Hbase\u3001Phoenix \u7ec4\u6210\u7684\u65e7\u67b6\u6784\uff0c\u67b6\u6784\u5927\u5927\u7b80\u5316\u3002"))),(0,n.yg)("h2",{id:"\u6574\u4f53\u67b6\u6784\u548c\u6280\u672f\u7279\u70b9"},"\u6574\u4f53\u67b6\u6784\u548c\u6280\u672f\u7279\u70b9"),(0,n.yg)("p",null,"Apache Doris \u7684",(0,n.yg)("strong",{parentName:"p"},"\u6574\u4f53\u67b6\u6784"),"\u975e\u5e38\u7b80\u5355\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u53ea\u6709\u4e24\u7c7b\u8fdb\u7a0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Frontend\uff08FE\uff09"),"\uff1a\u4e3b\u8981\u8d1f\u8d23\u7528\u6237\u8bf7\u6c42\u7684\u63a5\u5165\u3001\u67e5\u8be2\u89e3\u6790\u89c4\u5212\u3001\u5143\u6570\u636e\u7684\u7ba1\u7406\u3001\u8282\u70b9\u7ba1\u7406\u76f8\u5173\u5de5\u4f5c\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Backend\uff08BE\uff09"),"\uff1a\u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\u3001\u67e5\u8be2\u8ba1\u5212\u7684\u6267\u884c\u3002")),(0,n.yg)("p",null,"\u8fd9\u4e24\u7c7b\u8fdb\u7a0b\u90fd\u662f\u53ef\u4ee5\u6a2a\u5411\u6269\u5c55\u7684\uff0c\u5355\u96c6\u7fa4\u53ef\u4ee5\u652f\u6301\u5230\u6570\u767e\u53f0\u673a\u5668\uff0c\u6570\u5341 PB \u7684\u5b58\u50a8\u5bb9\u91cf\u3002\u5e76\u4e14\u8fd9\u4e24\u7c7b\u8fdb\u7a0b\u901a\u8fc7\u4e00\u81f4\u6027\u534f\u8bae\u6765\u4fdd\u8bc1\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u548c\u6570\u636e\u7684\u9ad8\u53ef\u9760\u3002\u8fd9\u79cd\u9ad8\u5ea6\u96c6\u6210\u7684\u67b6\u6784\u8bbe\u8ba1\u6781\u5927\u5730\u964d\u4f4e\u4e86\u4e00\u6b3e\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u8fd0\u7ef4\u6210\u672c\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"\u6574\u4f53\u67b6\u6784\u548c\u6280\u672f\u7279\u70b9",src:r(464350).A,width:"2560",height:"1224"})),(0,n.yg)("h3",{id:"\u4f7f\u7528\u63a5\u53e3"},"\u4f7f\u7528\u63a5\u53e3"),(0,n.yg)("p",null,"Apache Doris \u91c7\u7528 MySQL \u534f\u8bae\uff0c\u9ad8\u5ea6\u517c\u5bb9 MySQL \u8bed\u6cd5\uff0c\u652f\u6301\u6807\u51c6 SQL\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5404\u7c7b\u5ba2\u6237\u7aef\u5de5\u5177\u6765\u8bbf\u95ee Apache Doris\uff0c\u5e76\u652f\u6301\u4e0e BI \u5de5\u5177\u7684\u65e0\u7f1d\u5bf9\u63a5\u3002Apache Doris \u5f53\u524d\u652f\u6301\u591a\u79cd\u4e3b\u6d41\u7684 BI \u4ea7\u54c1\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e Smartbi\u3001DataEase\u3001FineBI\u3001Tableau\u3001Power BI\u3001Apache Superset \u7b49\uff0c\u53ea\u8981\u652f\u6301 MySQL \u534f\u8bae\u7684 BI \u5de5\u5177\uff0cApache Doris \u5c31\u53ef\u4ee5\u4f5c\u4e3a\u6570\u636e\u6e90\u63d0\u4f9b\u67e5\u8be2\u652f\u6301\u3002"),(0,n.yg)("h3",{id:"\u5b58\u50a8\u5f15\u64ce"},"\u5b58\u50a8\u5f15\u64ce"),(0,n.yg)("p",null,"\u5728",(0,n.yg)("strong",{parentName:"p"},"\u5b58\u50a8\u5f15\u64ce"),"\u65b9\u9762\uff0cApache Doris \u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u6309\u5217\u8fdb\u884c\u6570\u636e\u7684\u7f16\u7801\u538b\u7f29\u548c\u8bfb\u53d6\uff0c\u80fd\u591f\u5b9e\u73b0\u6781\u9ad8\u7684\u538b\u7f29\u6bd4\uff0c\u540c\u65f6\u51cf\u5c11\u5927\u91cf\u975e\u76f8\u5173\u6570\u636e\u7684\u626b\u63cf\uff0c\u4ece\u800c\u66f4\u52a0\u6709\u6548\u5229\u7528 IO \u548c CPU \u8d44\u6e90\u3002"),(0,n.yg)("p",null,"Apache Doris \u4e5f\u652f\u6301\u6bd4\u8f83\u4e30\u5bcc\u7684",(0,n.yg)("strong",{parentName:"p"},"\u7d22\u5f15\u7ed3\u6784"),"\uff0c\u6765\u51cf\u5c11\u6570\u636e\u7684\u626b\u63cf\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sorted Compound Key Index\uff0c\u53ef\u4ee5\u6700\u591a\u6307\u5b9a\u4e09\u4e2a\u5217\u7ec4\u6210\u590d\u5408\u6392\u5e8f\u952e\uff0c\u901a\u8fc7\u8be5\u7d22\u5f15\uff0c\u80fd\u591f\u6709\u6548\u8fdb\u884c\u6570\u636e\u88c1\u526a\uff0c\u4ece\u800c\u80fd\u591f\u66f4\u597d\u652f\u6301\u9ad8\u5e76\u53d1\u7684\u62a5\u8868\u573a\u666f")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Min/Max Index\uff1a\u6709\u6548\u8fc7\u6ee4\u6570\u503c\u7c7b\u578b\u7684\u7b49\u503c\u548c\u8303\u56f4\u67e5\u8be2")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BloomFilter Index\uff1a\u5bf9\u9ad8\u57fa\u6570\u5217\u7684\u7b49\u503c\u8fc7\u6ee4\u88c1\u526a\u975e\u5e38\u6709\u6548")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Inverted Index\uff1a\u80fd\u591f\u5bf9\u4efb\u610f\u5b57\u6bb5\u5b9e\u73b0\u5feb\u901f\u68c0\u7d22"))),(0,n.yg)("p",null,"\u5728",(0,n.yg)("strong",{parentName:"p"},"\u5b58\u50a8\u6a21\u578b"),"\u65b9\u9762\uff0cApache Doris \u652f\u6301\u591a\u79cd\u5b58\u50a8\u6a21\u578b\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\u505a\u4e86\u9488\u5bf9\u6027\u7684\u4f18\u5316\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u805a\u5408\u6a21\u578b\uff08Aggregate Key Model\uff09\uff1a\u76f8\u540c Key \u7684 Value \u5217\u5408\u5e76\uff0c\u901a\u8fc7\u63d0\u524d\u805a\u5408\u5927\u5e45\u63d0\u5347\u6027\u80fd")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4e3b\u952e\u6a21\u578b\uff08Unique Key Model\uff09\uff1aKey \u552f\u4e00\uff0c\u76f8\u540c Key \u7684\u6570\u636e\u8986\u76d6\uff0c\u5b9e\u73b0\u884c\u7ea7\u522b\u6570\u636e\u66f4\u65b0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u660e\u7ec6\u6a21\u578b\uff08Duplicate Key Model\uff09\uff1a\u660e\u7ec6\u6570\u636e\u6a21\u578b\uff0c\u6ee1\u8db3\u4e8b\u5b9e\u8868\u7684\u660e\u7ec6\u5b58\u50a8"))),(0,n.yg)("p",null,"Apache Doris \u4e5f\u652f\u6301",(0,n.yg)("strong",{parentName:"p"},"\u5f3a\u4e00\u81f4\u7684\u7269\u5316\u89c6\u56fe"),"\uff0c\u7269\u5316\u89c6\u56fe\u7684\u66f4\u65b0\u548c\u9009\u62e9\u90fd\u5728\u7cfb\u7edf\u5185\u81ea\u52a8\u8fdb\u884c\uff0c\u4e0d\u9700\u8981\u7528\u6237\u624b\u52a8\u9009\u62e9\uff0c\u4ece\u800c\u5927\u5e45\u51cf\u5c11\u4e86\u7269\u5316\u89c6\u56fe\u7ef4\u62a4\u7684\u4ee3\u4ef7\u3002"),(0,n.yg)("h3",{id:"\u67e5\u8be2\u5f15\u64ce"},"\u67e5\u8be2\u5f15\u64ce"),(0,n.yg)("p",null,"\u5728",(0,n.yg)("strong",{parentName:"p"},"\u67e5\u8be2\u5f15\u64ce"),"\u65b9\u9762\uff0cApache Doris \u91c7\u7528 MPP \u7684\u6a21\u578b\uff0c\u8282\u70b9\u95f4\u548c\u8282\u70b9\u5185\u90fd\u5e76\u884c\u6267\u884c\uff0c\u4e5f\u652f\u6301\u591a\u4e2a\u5927\u8868\u7684\u5206\u5e03\u5f0f Shuffle Join\uff0c\u4ece\u800c\u80fd\u591f\u66f4\u597d\u5e94\u5bf9\u590d\u6742\u67e5\u8be2\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"\u67e5\u8be2\u5f15\u64ce",src:r(826792).A,width:"2560",height:"1492"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Apache Doris \u67e5\u8be2\u5f15\u64ce\u662f\u5411\u91cf\u5316"),"\u7684\u67e5\u8be2\u5f15\u64ce\uff0c\u6240\u6709\u7684\u5185\u5b58\u7ed3\u6784\u80fd\u591f\u6309\u7167\u5217\u5f0f\u5e03\u5c40\uff0c\u80fd\u591f\u8fbe\u5230\u5927\u5e45\u51cf\u5c11\u865a\u51fd\u6570\u8c03\u7528\u3001\u63d0\u5347 Cache \u547d\u4e2d\u7387\uff0c\u9ad8\u6548\u5229\u7528 SIMD \u6307\u4ee4\u7684\u6548\u679c\u3002\u5728\u5bbd\u8868\u805a\u5408\u573a\u666f\u4e0b\u6027\u80fd\u662f\u975e\u5411\u91cf\u5316\u5f15\u64ce\u7684 5-10 \u500d\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Doris \u67e5\u8be2\u5f15\u64ce\u662f\u5411\u91cf\u5316",src:r(688771).A,width:"2560",height:"864"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Apache Doris \u91c7\u7528\u4e86\u81ea\u9002\u5e94\u67e5\u8be2\u6267\u884c\uff08Adaptive Query Execution\uff09\u6280\u672f\uff0c"),"\u53ef\u4ee5\u6839\u636e Runtime Statistics \u6765\u52a8\u6001\u8c03\u6574\u6267\u884c\u8ba1\u5212\uff0c\u6bd4\u5982\u901a\u8fc7 Runtime Filter \u6280\u672f\u80fd\u591f\u5728\u8fd0\u884c\u65f6\u751f\u6210 Filter \u63a8\u5230 Probe \u4fa7\uff0c\u5e76\u4e14\u80fd\u591f\u5c06 Filter \u81ea\u52a8\u7a7f\u900f\u5230 Probe \u4fa7\u6700\u5e95\u5c42\u7684 Scan \u8282\u70b9\uff0c\u4ece\u800c\u5927\u5e45\u51cf\u5c11 Probe \u7684\u6570\u636e\u91cf\uff0c\u52a0\u901f Join \u6027\u80fd\u3002Apache Doris \u7684 Runtime Filter \u652f\u6301 In/Min/Max/Bloom Filter\u3002"),(0,n.yg)("p",null,"\u5728",(0,n.yg)("strong",{parentName:"p"},"\u4f18\u5316\u5668"),"\u65b9\u9762\uff0cApache Doris \u4f7f\u7528 CBO \u548c RBO \u7ed3\u5408\u7684\u4f18\u5316\u7b56\u7565\uff0cRBO \u652f\u6301\u5e38\u91cf\u6298\u53e0\u3001\u5b50\u67e5\u8be2\u6539\u5199\u3001\u8c13\u8bcd\u4e0b\u63a8\u7b49\uff0cCBO \u652f\u6301 Join Reorder\u3002\u76ee\u524d CBO \u8fd8\u5728\u6301\u7eed\u4f18\u5316\u4e2d\uff0c\u4e3b\u8981\u96c6\u4e2d\u5728\u66f4\u52a0\u7cbe\u51c6\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u548c\u63a8\u5bfc\uff0c\u66f4\u52a0\u7cbe\u51c6\u7684\u4ee3\u4ef7\u6a21\u578b\u9884\u4f30\u7b49\u65b9\u9762\u3002"))}u.isMDXComponent=!0},826792:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/apache-doris-query-engine-1-9e2beb07704b905a1c44dae1c5b3bd04.png"},688771:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/apache-doris-query-engine-2-92a7d1bd709c09e437e90dfedf559803.png"},464350:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/apache-doris-technical-overview-b8c5cb11b57d2f6559fa397d9fd0a8a0.png"},608939:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/apache-doris-usage-scenarios-pipeline-a492c2b680f32df2aac535b91cb0e485.png"}}]);