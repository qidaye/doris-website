"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[425494],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(n),y=a,d=g["".concat(i,".").concat(y)]||g[y]||s[y]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},899618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"\u6982\u89c8",language:"zh-CN"},o=void 0,p={unversionedId:"compute-storage-decoupled/overview",id:"compute-storage-decoupled/overview",title:"\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/compute-storage-decoupled/overview.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/overview",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"SQL \u65b9\u8a00\u517c\u5bb9",permalink:"/zh-CN/docs/dev/lakehouse/sql-dialect"},next:{title:"\u90e8\u7f72\u524d\u51c6\u5907",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment"}},i={},u=[{value:"\u5b58\u7b97\u4e00\u4f53 VS \u5b58\u7b97\u5206\u79bb",id:"\u5b58\u7b97\u4e00\u4f53-vs-\u5b58\u7b97\u5206\u79bb",level:2},{value:"\u5b58\u7b97\u4e00\u4f53",id:"\u5b58\u7b97\u4e00\u4f53",level:3},{value:"\u5b58\u7b97\u5206\u79bb",id:"\u5b58\u7b97\u5206\u79bb",level:3},{value:"\u5982\u4f55\u9009\u62e9",id:"\u5982\u4f55\u9009\u62e9",level:2},{value:"\u5b58\u7b97\u4e00\u4f53\u7684\u4f18\u70b9",id:"\u5b58\u7b97\u4e00\u4f53\u7684\u4f18\u70b9",level:3},{value:"<strong>\u5b58\u7b97\u4e00\u4f53\u7684</strong>\u9002\u7528\u573a\u666f",id:"\u5b58\u7b97\u4e00\u4f53\u7684\u9002\u7528\u573a\u666f",level:3},{value:"\u5b58\u7b97\u5206\u79bb\u7684\u4f18\u70b9",id:"\u5b58\u7b97\u5206\u79bb\u7684\u4f18\u70b9",level:3},{value:"<strong>\u5b58\u7b97\u5206\u79bb\u7684</strong>\u9002\u7528\u573a\u666f",id:"\u5b58\u7b97\u5206\u79bb\u7684\u9002\u7528\u573a\u666f",level:3},{value:"\u57fa\u4e8e\u5b58\u7b97\u5206\u79bb\u5b9e\u73b0\u591a\u8ba1\u7b97\u96c6\u7fa4\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb",id:"\u57fa\u4e8e\u5b58\u7b97\u5206\u79bb\u5b9e\u73b0\u591a\u8ba1\u7b97\u96c6\u7fa4\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb",level:2}],c={toc:u},g="wrapper";function s(e){let{components:t,...l}=e;return(0,a.yg)(g,(0,r.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5b58\u7b97\u5206\u79bb\u4e0e\u5b58\u7b97\u4e00\u4f53\u4e24\u79cd\u67b6\u6784\u7684\u533a\u522b\u3001\u4f18\u52bf\u548c\u9002\u7528\u573a\u666f\uff0c\u4e3a\u7528\u6237\u7684\u9009\u62e9\u4e0e\u4f7f\u7528\u63d0\u4f9b\u53c2\u8003\u3002\u540e\u6587\u5c06\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u90e8\u7f72\u5e76\u4f7f\u7528 Apache Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u3002\u5982\u9700\u90e8\u7f72\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\uff0c\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/standard-deployment"},"\u96c6\u7fa4\u90e8\u7f72"),"\u3002"),(0,a.yg)("h2",{id:"\u5b58\u7b97\u4e00\u4f53-vs-\u5b58\u7b97\u5206\u79bb"},"\u5b58\u7b97\u4e00\u4f53 VS \u5b58\u7b97\u5206\u79bb"),(0,a.yg)("p",null,"Doris \u7684\u6574\u4f53\u67b6\u6784\u7531\u4e24\u7c7b\u8fdb\u7a0b\u7ec4\u6210\uff1aFrontend (FE) \u548c Backend (BE)\u3002\u5176\u4e2d FE \u4e3b\u8981\u8d1f\u8d23\u7528\u6237\u8bf7\u6c42\u7684\u63a5\u5165\u3001\u67e5\u8be2\u89e3\u6790\u89c4\u5212\u3001\u5143\u6570\u636e\u7684\u7ba1\u7406\u3001\u8282\u70b9\u7ba1\u7406\u76f8\u5173\u5de5\u4f5c\uff1bBE \u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\u3001\u67e5\u8be2\u8ba1\u5212\u7684\u6267\u884c\u3002\uff08",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/get-starting/what-is-apache-doris"},"\u66f4\u591a\u4fe1\u606f"),"\uff09"),(0,a.yg)("h3",{id:"\u5b58\u7b97\u4e00\u4f53"},"\u5b58\u7b97\u4e00\u4f53"),(0,a.yg)("p",null,"\u5728\u5b58\u7b97\u4e00\u4f53\u67b6\u6784\u4e0b\uff0cBE \u8282\u70b9\u4e0a\u5b58\u50a8\u4e0e\u8ba1\u7b97\u7d27\u5bc6\u8026\u5408\uff0c\u6570\u636e\u4e3b\u8981\u5b58\u50a8\u5728 BE \u8282\u70b9\u4e0a\uff0c\u591a BE \u8282\u70b9\u91c7\u7528 MPP \u5206\u5e03\u5f0f\u8ba1\u7b97\u67b6\u6784\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"compute-storage-coupled",src:n(894443).A,width:"2560",height:"1574"})),(0,a.yg)("h3",{id:"\u5b58\u7b97\u5206\u79bb"},"\u5b58\u7b97\u5206\u79bb"),(0,a.yg)("p",null,"BE \u8282\u70b9\u4e0d\u518d\u5b58\u50a8\u4e3b\u6570\u636e\uff0c\u800c\u662f\u5c06\u5171\u4eab\u5b58\u50a8\u5c42\u4f5c\u4e3a\u7edf\u4e00\u7684\u6570\u636e\u4e3b\u5b58\u50a8\u7a7a\u95f4\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u5e94\u5bf9\u5e95\u5c42\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u6027\u80fd\u4e0d\u4f73\u548c\u7f51\u7edc\u4f20\u8f93\u5e26\u6765\u7684\u6027\u80fd\u4e0b\u964d\uff0cDoris \u5f15\u5165\u8ba1\u7b97\u8282\u70b9\u672c\u5730\u9ad8\u901f\u7f13\u5b58\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"compute-storage-decoupled",src:n(523714).A,width:"2560",height:"1668"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5143\u6570\u636e\u5c42\uff1a")),(0,a.yg)("p",null,"FE \u4e3b\u8981\u5b58\u653e\u5e93\u8868\u5143\u6570\u636e\uff0cJob \u4ee5\u53ca\u6743\u9650\u7b49 MySQL \u534f\u8bae\u4f9d\u8d56\u7684\u4fe1\u606f\u3002"),(0,a.yg)("p",null,"Meta Service \u662f Doris \u5b58\u7b97\u5206\u79bb\u5143\u6570\u636e\u670d\u52a1\uff0c\u4e3b\u8981\u8d1f\u8d23\u5904\u7406\u5bfc\u5165\u4e8b\u52a1\uff0cTablet Meta\uff0cRowset Meta \u4ee5\u53ca\u96c6\u7fa4\u8d44\u6e90\u7ba1\u7406\u3002\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u6a2a\u5411\u6269\u5c55\u7684\u65e0\u72b6\u6001\u670d\u52a1\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8ba1\u7b97\u5c42\uff1a")),(0,a.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\u7684 BE \u662f\u65e0\u72b6\u6001\u7684 Doris BE \u8282\u70b9\uff0cBE \u4e0a\u4f1a\u7f13\u5b58\u4e00\u90e8\u5206 Tablet \u5143\u6570\u636e\u548c\u6570\u636e\u4ee5\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u3002"),(0,a.yg)("p",null,"\u8ba1\u7b97\u96c6\u7fa4\uff08Compute Cluster\uff09\u662f\u65e0\u72b6\u6001\u7684 BE \u8282\u70b9\u7ec4\u6210\u7684\u8ba1\u7b97\u8d44\u6e90\u96c6\u5408\uff0c\u591a\u4e2a\u8ba1\u7b97\u96c6\u7fa4\u5171\u4eab\u4e00\u4efd\u6570\u636e\uff0c\u8ba1\u7b97\u96c6\u7fa4\u53ef\u4ee5\u968f\u65f6\u5f39\u6027\u52a0\u51cf\u8282\u70b9\u3002"),(0,a.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u5b58\u7b97\u5206\u79bb\u6587\u6863\u4e2d\u7684\u201c\u8ba1\u7b97\u96c6\u7fa4\u201d\u6982\u5ff5\u6709\u522b\u4e8e Doris \u3010\u96c6\u7fa4\u90e8\u7f72\u3011\u4ee5\u53ca\u540e\u6587\u3010\u521b\u5efa\u96c6\u7fa4\u3011\u4e2d\u7684\u201c\u96c6\u7fa4\u201d\u6982\u5ff5\u3002\u5b58\u7b97\u5206\u79bb\u6587\u6863\u4e2d\u63d0\u53ca\u7684\u201c\u8ba1\u7b97\u96c6\u7fa4\u201d\u7279\u6307\u5728 Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\uff0c\u7531\u65e0\u72b6\u6001 BE \u8282\u70b9\u7ec4\u6210\u7684\u8ba1\u7b97\u8d44\u6e90\u96c6\u5408\uff0c\u800c\u975e\u3010\u96c6\u7fa4\u90e8\u7f72\u3011\u548c\u3010\u521b\u5efa\u96c6\u7fa4\u3011\u4e2d\u6240\u6307\u7684\u7531\u591a\u4e2a Apache Doris \u8282\u70b9\u7ec4\u6210\u7684\u5b8c\u6574\u5206\u5e03\u5f0f\u7cfb\u7edf\u3002")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5171\u4eab\u5b58\u50a8\u5c42\uff1a")),(0,a.yg)("p",null,"\u5171\u4eab\u5b58\u50a8\u4e3b\u8981\u5b58\u653e\u6570\u636e\u6587\u4ef6\uff0c\u5305\u62ec Segment \u6587\u4ef6\u3001\u53cd\u5411\u7d22\u5f15\u7684\u7d22\u5f15\u6587\u4ef6\u7b49\u3002"),(0,a.yg)("h2",{id:"\u5982\u4f55\u9009\u62e9"},"\u5982\u4f55\u9009\u62e9"),(0,a.yg)("h3",{id:"\u5b58\u7b97\u4e00\u4f53\u7684\u4f18\u70b9"},"\u5b58\u7b97\u4e00\u4f53\u7684\u4f18\u70b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u90e8\u7f72\u7b80\u6613\uff1aApache Doris \u4e0d\u9700\u8981\u4f9d\u8d56\u7c7b\u4f3c\u5916\u90e8\u5171\u4eab\u6587\u4ef6\u7cfb\u7edf\u6216\u8005\u5bf9\u8c61\u5b58\u50a8\uff0c\u4ec5\u4f9d\u8d56\u7269\u7406\u670d\u52a1\u5668\u90e8\u7f72 FE \u548c BE \u4e24\u4e2a\u8fdb\u7a0b\u5373\u53ef\u5b8c\u6210\u96c6\u7fa4\u7684\u642d\u5efa\uff0c\u53ef\u4ee5\u4ece\u4e00\u4e2a\u8282\u70b9\u6269\u5c55\u5230\u6570\u767e\u4e2a\u8282\u70b9\uff0c\u540c\u65f6\u4e5f\u589e\u5f3a\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6027\u80fd\u4f18\u5f02\uff1aApache Doris \u6267\u884c\u8ba1\u7b97\u65f6\uff0c\u8ba1\u7b97\u8282\u70b9\u53ef\u76f4\u63a5\u8bbf\u95ee\u672c\u5730\u5b58\u50a8\u6570\u636e\uff0c\u5145\u5206\u5229\u7528\u673a\u5668\u7684 IO\u3001\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u7f51\u7edc\u5f00\u9500\u3001\u83b7\u5f97\u66f4\u6781\u81f4\u7684\u67e5\u8be2\u6027\u80fd\u3002")),(0,a.yg)("h3",{id:"\u5b58\u7b97\u4e00\u4f53\u7684\u9002\u7528\u573a\u666f"},(0,a.yg)("strong",{parentName:"h3"},"\u5b58\u7b97\u4e00\u4f53\u7684"),"\u9002\u7528\u573a\u666f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u7b80\u5355\u4f7f\u7528/\u5feb\u901f\u8bd5\u7528 Doris\uff0c\u6216\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u5177\u5907\u53ef\u9760\u7684\u5171\u4eab\u5b58\u50a8\uff0c\u5982 HDFS\u3001Ceph\u3001\u5bf9\u8c61\u5b58\u50a8\u7b49\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u4e1a\u52a1\u7ebf\u72ec\u7acb\u7ef4\u62a4 Apache Doris\uff0c\u65e0\u4e13\u804c DBA \u6765\u7ef4\u62a4 Doris \u96c6\u7fa4\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u9700\u6781\u81f4\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u4e0d\u9700 K8s \u5bb9\u5668\u5316\uff0c\u4e0d\u9700\u8fd0\u884c\u5728\u516c\u6709\u4e91\u6216\u8005\u79c1\u6709\u4e91\u4e0a\u3002")),(0,a.yg)("h3",{id:"\u5b58\u7b97\u5206\u79bb\u7684\u4f18\u70b9"},"\u5b58\u7b97\u5206\u79bb\u7684\u4f18\u70b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5f39\u6027\u7684\u8ba1\u7b97\u8d44\u6e90\uff1a\u4e0d\u540c\u65f6\u95f4\u70b9\u4f7f\u7528\u4e0d\u540c\u89c4\u6a21\u7684\u8ba1\u7b97\u8d44\u6e90\u670d\u52a1\u4e1a\u52a1\u8bf7\u6c42\uff0c\u6309\u9700\u4f7f\u7528\u8ba1\u7b97\u8d44\u6e90\uff0c\u8282\u7ea6\u6210\u672c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8d1f\u8f7d\uff08\u5b8c\u5168\uff09\u9694\u79bb\uff1a\u4e0d\u540c\u4e1a\u52a1\u4e4b\u95f4\u53ef\u5728\u5171\u4eab\u6570\u636e\u7684\u57fa\u7840\u4e0a\u9694\u79bb\u8ba1\u7b97\u8d44\u6e90\uff0c\u517c\u5177\u7a33\u5b9a\u6027\u548c\u9ad8\u6548\u7387\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4f4e\u5b58\u50a8\u6210\u672c\uff1a\u53ef\u4ee5\u4f7f\u7528\u66f4\u4f4e\u6210\u672c\u7684\u5bf9\u8c61\u5b58\u50a8\uff0cHDFS \u7b49\u4f4e\u6210\u672c\u5b58\u50a8\u3002")),(0,a.yg)("h3",{id:"\u5b58\u7b97\u5206\u79bb\u7684\u9002\u7528\u573a\u666f"},(0,a.yg)("strong",{parentName:"h3"},"\u5b58\u7b97\u5206\u79bb\u7684"),"\u9002\u7528\u573a\u666f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5df2\u4f7f\u7528\u516c\u6709\u4e91\u670d\u52a1"),(0,a.yg)("li",{parentName:"ul"},"\u5177\u5907\u53ef\u9760\u7684\u5171\u4eab\u5b58\u50a8\u7cfb\u7edf\uff0c\u6bd4\u5982 HDFS\u3001Ceph\u3001\u5bf9\u8c61\u5b58\u50a8\u7b49"),(0,a.yg)("li",{parentName:"ul"},"\u9700\u8981\u6781\u81f4\u7684\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u9700\u8981 K8S \u5bb9\u5668\u5316\uff0c\u9700\u8981\u8fd0\u884c\u5728\u79c1\u6709\u4e91\u4e0a"),(0,a.yg)("li",{parentName:"ul"},"\u6709\u4e13\u804c\u56e2\u961f\u7ef4\u62a4\u6574\u4e2a\u516c\u53f8\u7684\u6570\u636e\u4ed3\u5e93\u5e73\u53f0")),(0,a.yg)("h2",{id:"\u57fa\u4e8e\u5b58\u7b97\u5206\u79bb\u5b9e\u73b0\u591a\u8ba1\u7b97\u96c6\u7fa4\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb"},"\u57fa\u4e8e\u5b58\u7b97\u5206\u79bb\u5b9e\u73b0\u591a\u8ba1\u7b97\u96c6\u7fa4\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb"),(0,a.yg)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u4e00\u4e2a\u6216\u591a\u4e2a\u65e0\u72b6\u6001\u7684 BE \u8282\u70b9\u53ef\u4ee5\u7ec4\u6210\u8ba1\u7b97\u96c6\u7fa4\uff0c\u53ef\u4ee5\u8fd0\u7528\u8ba1\u7b97\u96c6\u7fa4\u6307\u5b9a\u8bed\u53e5 (",(0,a.yg)("inlineCode",{parentName:"p"},"use @<cluster_name>"),") \u5c06\u7279\u5b9a\u8d1f\u8f7d\u6307\u5b9a\u5230\u7279\u5b9a\u7684\u8ba1\u7b97\u96c6\u7fa4\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u591a\u5bfc\u5165\u4ee5\u53ca\u67e5\u8be2\u8d1f\u8f7d\u7684\u7269\u7406\u9694\u79bb\u3002"),(0,a.yg)("p",null,"\u5047\u8bbe\u5f53\u524d\u5b58\u5728 2 \u4e2a\u8ba1\u7b97\u96c6\u7fa4\uff1aC1 \u4e0e C2\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bfb\u8bfb\u9694\u79bb"),"\uff1a\u4e24\u4e2a\uff08\u7c7b\uff09\u5927\u67e5\u8be2\u53d1\u8d77\u4e4b\u524d\u5206\u522b\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"use @c1"),"\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"use @c2"),"\u5b9e\u73b0\u4e24\u4e2a\u67e5\u8be2\u4f7f\u7528\u4e0d\u540c\u7684\u8ba1\u7b97\u8282\u70b9\u8fd0\u884c\uff0c\u4f7f\u4e24\u4e2a\u67e5\u8be2\u5728\u8bbf\u95ee\u76f8\u540c\u6570\u636e\u96c6\u65f6\uff0c\u4e0d\u4f1a\u56e0 CPU \u548c\u5185\u5b58\u7b49\u8d44\u6e90\u7684\u7ade\u4e89\u800c\u76f8\u4e92\u5e72\u6270\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bfb\u5199\u9694\u79bb"),"\uff1aDoris \u7684\u5bfc\u5165\u4f1a\u6d88\u8017\u8d44\u6e90\uff0c\u7279\u522b\u662f\u5728\u5927\u6570\u636e\u91cf\u548c\u9ad8\u9891\u5bfc\u5165\u573a\u666f\u3002\u4e3a\u4e86\u907f\u514d\u67e5\u8be2\u548c\u5bfc\u5165\u4e4b\u95f4\u7684\u8d44\u6e90\u7ade\u4e89\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"use @c1"),"\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"use @c2"),"\u6307\u5b9a\u67e5\u8be2\u8bf7\u6c42\u5728 C1 \u4e0a\u6267\u884c\uff0c\u5bfc\u5165\u8bf7\u6c42\u5728 C2 \u4e0a\u6267\u884c\u3002\u540c\u65f6\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"c1"),"\u8ba1\u7b97\u96c6\u7fa4\u53ef\u4ee5\u8bbf\u95ee",(0,a.yg)("inlineCode",{parentName:"p"},"c2"),"\u8ba1\u7b97\u96c6\u7fa4\u4e2d\u65b0\u5bfc\u5165\u7684\u6570\u636e\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5199\u5199\u9694\u79bb"),"\uff1a\u4e0e\u8bfb\u5199\u9694\u79bb\u540c\u7406\uff0c\u5bfc\u5165\u548c\u5bfc\u5165\u4e4b\u95f4\u540c\u6837\u53ef\u4ee5\u8fdb\u884c\u9694\u79bb\u3002\u4f8b\u5982\uff0c\u5f53\u7cfb\u7edf\u4e2d\u5b58\u5728\u9ad8\u9891\u5c0f\u91cf\u5bfc\u5165\u548c\u5927\u6279\u91cf\u5bfc\u5165\u65f6\uff0c\u6279\u91cf\u5bfc\u5165\u5f80\u5f80\u8017\u65f6\u957f\uff0c\u91cd\u8bd5\u6210\u672c\u9ad8\uff0c\u800c\u9ad8\u9891\u5c0f\u91cf\u5bfc\u5165\u5355\u6b21\u8017\u65f6\u77ed\uff0c\u91cd\u8bd5\u6210\u672c\u4f4e\uff0c\u4e3a\u4e86\u907f\u514d\u5c0f\u91cf\u5bfc\u5165\u5bf9\u6279\u91cf\u5bfc\u5165\u9020\u6210\u5e72\u6270\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"use @c1"),"\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"use @c2"),"\uff0c\u5c06\u5c0f\u91cf\u5bfc\u5165\u6307\u5b9a\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"c1")," \u4e0a\u6267\u884c\uff0c\u6279\u91cf\u5bfc\u5165\u6307\u5b9a\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"c2")," \u4e0a\u6267\u884c\u3002"))}s.isMDXComponent=!0},894443:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/compute-storage-coupled-zh-3b5082a0831a5984cfcbdfc56d4b8993.png"},523714:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/compute-storage-decoupled-zh-2c5818eb343cc7191c47318084214e54.png"}}]);