"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[339824],{15680:(e,n,i)=>{i.d(n,{xA:()=>c,yg:()=>d});var t=i(296540);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,l=function(e,n){if(null==e)return{};var i,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=t.createContext({}),u=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},c=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var i=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(i),y=l,d=s["".concat(o,".").concat(y)]||s[y]||g[y]||r;return i?t.createElement(d,a(a({ref:n},c),{},{components:i})):t.createElement(d,a({ref:n},c))}));function d(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=y;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:l,a[1]=p;for(var u=2;u<r;u++)a[u]=i[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}y.displayName="MDXCreateElement"},514234:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var t=i(58168),l=(i(296540),i(15680));const r={title:"PipelineX \u6267\u884c\u5f15\u64ce",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},a=void 0,p={unversionedId:"query/pipeline/pipeline-x-execution-engine",id:"query/pipeline/pipeline-x-execution-engine",title:"PipelineX \u6267\u884c\u5f15\u64ce",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query/pipeline/pipeline-x-execution-engine.md",sourceDirName:"query/pipeline",slug:"/query/pipeline/pipeline-x-execution-engine",permalink:"/zh-CN/docs/dev/query/pipeline/pipeline-x-execution-engine",draft:!1,tags:[],version:"current",frontMatter:{title:"PipelineX \u6267\u884c\u5f15\u64ce",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Pipeline \u6267\u884c\u5f15\u64ce",permalink:"/zh-CN/docs/dev/query/pipeline/pipeline-execution-engine"},next:{title:"\u7f13\u5b58\u6982\u89c8",permalink:"/zh-CN/docs/dev/query/query-cache/"}},o={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u9884\u671f\u6548\u679c",id:"\u9884\u671f\u6548\u679c",level:2},{value:"\u7528\u6237\u63a5\u53e3\u53d8\u66f4",id:"\u7528\u6237\u63a5\u53e3\u53d8\u66f4",level:2},{value:"\u8bbe\u7f6e Session \u53d8\u91cf",id:"\u8bbe\u7f6e-session-\u53d8\u91cf",level:3},{value:"enable_pipeline_x_engine",id:"enable_pipeline_x_engine",level:4},{value:"enable_local_shuffle",id:"enable_local_shuffle",level:4},{value:"ignore_storage_data_distribution",id:"ignore_storage_data_distribution",level:4},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3}],c={toc:u},s="wrapper";function g(e){let{components:n,...i}=e;return(0,l.yg)(s,(0,t.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.yg)("p",null,"PipelineX \u6267\u884c\u5f15\u64ce\u7684\u76ee\u6807\u662f\u4e3a\u4e86\u89e3\u51b3 Doris pipeline \u5f15\u64ce\u7684\u56db\u5927\u95ee\u9898\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6267\u884c\u5e76\u53d1\u4e0a\uff0c\u5f53\u524d Doris \u6267\u884c\u5e76\u53d1\u6536\u5230\u4e24\u4e2a\u56e0\u7d20\u7684\u5236\u7ea6\uff0c\u4e00\u4e2a\u662f fe \u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u53e6\u4e00\u4e2a\u662f\u53d7\u5b58\u50a8\u5c42 bucket \u6570\u91cf\u7684\u9650\u5236\uff0c\u8fd9\u6837\u7684\u9759\u6001\u5e76\u53d1\u4f7f\u5f97\u6267\u884c\u5f15\u64ce\u65e0\u6cd5\u5145\u5206\u5229\u7528\u673a\u5668\u8d44\u6e90\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u6267\u884c\u903b\u8f91\u4e0a\uff0c\u5f53\u524d Doris \u6709\u4e00\u4e9b\u56fa\u5b9a\u7684\u989d\u5916\u5f00\u9500\uff0c\u4f8b\u5982\u8868\u8fbe\u5f0f\u90e8\u5206\u5404\u4e2a instance \u5f7c\u6b64\u72ec\u7acb\uff0c\u800c instance \u7684\u521d\u59cb\u5316\u53c2\u6570\u6709\u5f88\u591a\u516c\u5171\u90e8\u5206\uff0c\u6240\u4ee5\u9700\u8981\u989d\u5916\u8fdb\u884c\u5f88\u591a\u91cd\u590d\u7684\u521d\u59cb\u5316\u6b65\u9aa4\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u8c03\u5ea6\u903b\u8f91\u4e0a\uff0c\u5f53\u524d pipeline \u7684\u8c03\u5ea6\u5668\u4f1a\u628a\u963b\u585e task \u5168\u90e8\u653e\u5165\u4e00\u4e2a\u963b\u585e\u961f\u5217\u4e2d\uff0c\u7531\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u8f6e\u8be2\u5e76\u4ece\u963b\u585e\u961f\u5217\u4e2d\u53d6\u51fa\u53ef\u6267\u884c task \u653e\u5165 runnable \u961f\u5217\uff0c\u6240\u4ee5\u5728\u6709\u67e5\u8be2\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u56fa\u5b9a\u6709\u4e00\u4e2a\u6838\u7684\u8d44\u6e90\u4f5c\u4e3a\u8c03\u5ea6\u7684\u5f00\u9500\u3002"),(0,l.yg)("li",{parentName:"ol"},"profile \u65b9\u9762\uff0c\u76ee\u524d pipeline \u65e0\u6cd5\u4e3a\u7528\u6237\u63d0\u4f9b\u7b80\u5355\u6613\u61c2\u7684\u6307\u6807\u3002")),(0,l.yg)("p",null,"\u5b83\u7684\u5177\u4f53\u8bbe\u8ba1\u3001\u5b9e\u73b0\u548c\u6548\u679c\u53ef\u4ee5\u53c2\u9605 ","[DSIP-035]","(",(0,l.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-035%3A+PipelineX+Execution+Engine"},"DSIP-035: PipelineX Execution Engine - DORIS - Apache Software Foundation"),")\u3002"),(0,l.yg)("h2",{id:"\u9884\u671f\u6548\u679c"},"\u9884\u671f\u6548\u679c"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6267\u884c\u5e76\u53d1\u4e0a\uff0c\u4f9d\u8d56 local exchange \u4f7f pipelinex \u5145\u5206\u5e76\u53d1\uff0c\u53ef\u4ee5\u8ba9\u6570\u636e\u88ab\u5747\u5300\u5206\u5e03\u5230\u4e0d\u540c\u7684 task \u4e2d\uff0c\u5c3d\u53ef\u80fd\u51cf\u5c11\u6570\u636e\u503e\u659c\uff0c\u6b64\u5916\uff0cpipelineX \u4e5f\u5c06\u4e0d\u518d\u53d7\u5b58\u50a8\u5c42 tablet \u6570\u91cf\u7684\u5236\u7ea6\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u6267\u884c\u903b\u8f91\u4e0a\uff0c\u591a\u4e2a pipeline task \u5171\u4eab\u540c\u4e00\u4e2a pipeline \u7684\u5168\u90e8\u5171\u4eab\u72b6\u6001\uff0c\u4f8b\u5982\u8868\u8fbe\u5f0f\u548c\u4e00\u4e9b const \u53d8\u91cf\uff0c\u6d88\u9664\u4e86\u989d\u5916\u7684\u521d\u59cb\u5316\u5f00\u9500\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u8c03\u5ea6\u903b\u8f91\u4e0a\uff0c\u6240\u6709 pipeline task \u7684\u963b\u585e\u6761\u4ef6\u90fd\u4f7f\u7528 Dependency \u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u901a\u8fc7\u5916\u90e8\u4e8b\u4ef6\uff08\u4f8b\u5982 rpc \u5b8c\u6210\uff09\u89e6\u53d1 task \u7684\u6267\u884c\u903b\u8f91\u8fdb\u5165 runnable \u961f\u5217\uff0c\u4ece\u800c\u6d88\u9664\u4e86\u963b\u585e\u8f6e\u8be2\u7ebf\u7a0b\u7684\u5f00\u9500\u3002"),(0,l.yg)("li",{parentName:"ol"},"profile\uff1a\u4e3a\u7528\u6237\u63d0\u4f9b\u7b80\u5355\u6613\u61c2\u7684\u6307\u6807\u3002")),(0,l.yg)("h2",{id:"\u7528\u6237\u63a5\u53e3\u53d8\u66f4"},"\u7528\u6237\u63a5\u53e3\u53d8\u66f4"),(0,l.yg)("h3",{id:"\u8bbe\u7f6e-session-\u53d8\u91cf"},"\u8bbe\u7f6e Session \u53d8\u91cf"),(0,l.yg)("h4",{id:"enable_pipeline_x_engine"},"enable_pipeline_x_engine"),(0,l.yg)("p",null,"\u5c06 session \u53d8\u91cf",(0,l.yg)("inlineCode",{parentName:"p"},"enable_pipeline_x_engine")," \u8bbe\u7f6e\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219 BE \u5728\u8fdb\u884c\u67e5\u8be2\u6267\u884c\u65f6\u5c31\u4f1a\u9ed8\u8ba4\u5c06 SQL \u7684\u6267\u884c\u6a21\u578b\u8f6c\u53d8 PipelineX \u7684\u6267\u884c\u65b9\u5f0f\u3002\u5982\u679c Pipeline \u548c PipelineX \u5f15\u64ce\u90fd\u8bbe\u7f6e\u4e3a\u5f00\u542f\uff0cDoris \u5c06\u4f18\u5148\u4f7f\u7528 PipelineX \u5f15\u64ce\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"set enable_pipeline_x_engine = true;\n")),(0,l.yg)("h4",{id:"enable_local_shuffle"},"enable_local_shuffle"),(0,l.yg)("p",null,"\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"enable_local_shuffle"),"\u4e3a true \u5219\u6253\u5f00 local shuffle \u4f18\u5316\u3002local shuffle \u5c06\u5c3d\u53ef\u80fd\u5c06\u6570\u636e\u5747\u5300\u5206\u5e03\u7ed9\u4e0d\u540c\u7684 pipeline task \u4ece\u800c\u5c3d\u53ef\u80fd\u907f\u514d\u6570\u636e\u503e\u659c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"set enable_local_shuffle = true;\n")),(0,l.yg)("h4",{id:"ignore_storage_data_distribution"},"ignore_storage_data_distribution"),(0,l.yg)("p",null,"\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"ignore_storage_data_distribution"),"\u4e3a true \u5219\u8868\u793a\u5ffd\u7565\u5b58\u50a8\u5c42\u7684\u6570\u636e\u5206\u5e03\u3002\u7ed3\u5408 local shuffle \u4e00\u8d77\u4f7f\u7528\uff0c\u5219 pipelineX \u5f15\u64ce\u7684\u5e76\u53d1\u80fd\u529b\u5c06\u4e0d\u518d\u53d7\u5230\u5b58\u50a8\u5c42 tablet \u6570\u91cf\u7684\u5236\u7ea6\uff0c\u4ece\u800c\u5145\u5206\u5229\u7528\u673a\u5668\u8d44\u6e90\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"set ignore_storage_data_distribution = true;\n")),(0,l.yg)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,l.yg)("p",null,"\u5bfc\u5165\u7684\u5f15\u64ce\u9009\u62e9\u8bbe\u7f6e\uff0c\u8be6\u89c1",(0,l.yg)("a",{parentName:"p",href:"../../data-operate/import/load-manual"},"\u5bfc\u5165"),"\u6587\u6863\u3002"))}g.isMDXComponent=!0}}]);