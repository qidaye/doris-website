"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[283252],{15680:(e,t,l)=>{l.d(t,{xA:()=>y,yg:()=>N});var a=l(296540);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function g(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):g(g({},t),e)),l},y=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,y=u(e,["components","mdxType","originalType","parentName"]),d=p(l),m=n,N=d["".concat(i,".").concat(m)]||d[m]||o[m]||r;return l?a.createElement(N,g(g({ref:t},y),{},{components:l})):a.createElement(N,g({ref:t},y))}));function N(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,g=new Array(r);g[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:n,g[1]=u;for(var p=2;p<r;p++)g[p]=l[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},517033:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>g,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=l(58168),n=(l(296540),l(15680));const r={title:"\u4f5c\u4e1a\u8c03\u5ea6",language:"zh-CN"},g=void 0,u={unversionedId:"data-operate/scheduler/job-scheduler",id:"version-2.1/data-operate/scheduler/job-scheduler",title:"\u4f5c\u4e1a\u8c03\u5ea6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/scheduler/job-scheduler.md",sourceDirName:"data-operate/scheduler",slug:"/data-operate/scheduler/job-scheduler",permalink:"/zh-CN/docs/2.1/data-operate/scheduler/job-scheduler",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u4f5c\u4e1a\u8c03\u5ea6",language:"zh-CN"},sidebar:"docs",previous:{title:"MySQL Dump",permalink:"/zh-CN/docs/2.1/data-operate/export/export-with-mysql-dump"},next:{title:"MySQL \u517c\u5bb9\u6027",permalink:"/zh-CN/docs/2.1/query/query-data/mysql-compatibility"}},i={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"Job Scheduler",id:"job-scheduler",level:2},{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u57fa\u4e8e Catalog \u4e0e Job Scheduler \u7684\u6570\u636e\u81ea\u52a8\u540c\u6b65",id:"\u57fa\u4e8e-catalog-\u4e0e-job-scheduler-\u7684\u6570\u636e\u81ea\u52a8\u540c\u6b65",level:2},{value:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",id:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",level:2},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",level:2}],y={toc:p},d="wrapper";function o(e){let{components:t,...l}=e;return(0,n.yg)(d,(0,a.A)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.yg)("p",null,"\u5728\u6570\u636e\u7ba1\u7406\u6108\u52a0\u7cbe\u7ec6\u5316\u7684\u9700\u6c42\u80cc\u666f\u4e0b\uff0c\u5b9a\u65f6\u8c03\u5ea6\u5728\u5176\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u7684\u89d2\u8272\u3002\u5b83\u901a\u5e38\u88ab\u5e94\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5b9a\u671f\u6570\u636e\u66f4\u65b0\uff0c\u5982\u5468\u671f\u6027\u6570\u636e\u5bfc\u5165\u548c ETL \u64cd\u4f5c\uff0c\u51cf\u5c11\u4eba\u5de5\u5e72\u9884\uff0c\u63d0\u9ad8\u6570\u636e\u5904\u7406\u7684\u6548\u7387\u548c\u51c6\u786e\u6027\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u7ed3\u5408 Catalog \u5b9e\u73b0\u5916\u90e8\u6570\u636e\u6e90\u6570\u636e\u5b9a\u671f\u540c\u6b65\uff0c\u786e\u4fdd\u591a\u6e90\u6570\u636e\u9ad8\u6548\u3001\u51c6\u786e\u7684\u6574\u5408\u5230\u76ee\u6807\u7cfb\u7edf\u4e2d\uff0c\u6ee1\u8db3\u590d\u6742\u7684\u4e1a\u52a1\u5206\u6790\u9700\u6c42\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5b9a\u671f\u6e05\u7406\u8fc7\u671f/\u65e0\u6548\u6570\u636e\uff0c\u91ca\u653e\u5b58\u50a8\u7a7a\u95f4\uff0c\u907f\u514d\u8fc7\u591a\u8fc7\u671f/\u65e0\u6548\u6570\u636e\u5bf9\u7cfb\u7edf\u6027\u80fd\u4ea7\u751f\u5f71\u54cd\u3002")),(0,n.yg)("p",null,"\u5728 Apache Doris \u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u901a\u5e38\u9700\u8981\u4f9d\u8d56\u4e8e\u5916\u90e8\u8c03\u5ea6\u7cfb\u7edf\uff0c\u5982\u901a\u8fc7\u4e1a\u52a1\u4ee3\u7801\u5b9a\u65f6\u8c03\u5ea6\u6216\u8005\u5f15\u5165\u7b2c\u4e09\u65b9\u8c03\u5ea6\u5de5\u5177\u3001\u5206\u5e03\u5f0f\u8c03\u5ea6\u5e73\u53f0\u6765\u6ee1\u8db3\u4e0a\u8ff0\u9700\u6c42\u3002\u7136\u800c\uff0c\u56e0\u53d7\u9650\u4e8e\u5916\u90e8\u7cfb\u7edf\u81ea\u8eab\u80fd\u529b\uff0c\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3 Doris \u5bf9\u8c03\u5ea6\u7b56\u7565\u53ca\u8d44\u6e90\u7ba1\u7406\u7075\u6d3b\u6027\u7684\u8981\u6c42\u3002\u6b64\u5916\uff0c\u5982\u679c\u5916\u90e8\u8c03\u5ea6\u7cfb\u7edf\u51fa\u73b0\u6545\u969c\uff0c\u8fd9\u4e0d\u4ec5\u4f1a\u589e\u52a0\u4e1a\u52a1\u98ce\u9669\uff0c\u8fd8\u9700\u6295\u5165\u989d\u5916\u7684\u8fd0\u7ef4\u65f6\u95f4\u548c\u4eba\u529b\u6765\u5e94\u5bf9\u3002"),(0,n.yg)("h2",{id:"job-scheduler"},"Job Scheduler"),(0,n.yg)("p",null,"\u4e3a\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0cApache Doris \u5728 2.1 \u7248\u672c\u4e2d\u5f15\u5165\u4e86 Job Scheduler \u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u81ea\u4e3b\u4efb\u52a1\u8c03\u5ea6\u80fd\u529b\uff0c\u8c03\u5ea6\u7684\u7cbe\u51c6\u5ea6\u53ef\u8fbe\u5230\u79d2\u7ea7\u3002\u8be5\u529f\u80fd\u7684\u63a8\u51fa\u4e0d\u4ec5\u4fdd\u969c\u4e86\u6570\u636e\u5bfc\u5165\u7684\u5b8c\u6574\u6027\u548c\u4e00\u81f4\u6027\uff0c\u66f4\u8ba9\u7528\u6237\u80fd\u591f\u7075\u6d3b\u3001\u4fbf\u6377\u8c03\u6574\u8c03\u5ea6\u7b56\u7565\u3002\u540c\u65f6\uff0c\u56e0\u51cf\u5c11\u4e86\u5bf9\u5916\u90e8\u7cfb\u7edf\u7684\u4f9d\u8d56\uff0c\u4e5f\u964d\u4f4e\u4e86\u7cfb\u7edf\u6545\u969c\u7684\u98ce\u9669\u548c\u8fd0\u7ef4\u6210\u672c\uff0c\u4e3a\u793e\u533a\u7528\u6237\u5e26\u6765\u66f4\u52a0\u7edf\u4e00\u3001\u53ef\u9760\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"),(0,n.yg)("p",null,"Doris Job Scheduler \u662f\u4e00\u79cd\u57fa\u4e8e\u9884\u8bbe\u8ba1\u5212\u8fd0\u884c\u7684\u4efb\u52a1\u7ba1\u7406\u7cfb\u7edf\uff0c\u80fd\u591f\u5728\u7279\u5b9a\u65f6\u95f4\u70b9\u6216\u6309\u7167\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u89e6\u53d1\u9884\u5b9a\u4e49\u64cd\u4f5c\uff0c\u5b9e\u73b0\u4efb\u52a1\u7684\u81ea\u52a8\u5316\u6267\u884c\u3002Job Scheduler \u5177\u5907\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u9ad8\u6548\u8c03\u5ea6\uff1aJob Scheduler \u53ef\u4ee5\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u5b89\u6392\u4efb\u52a1\u548c\u4e8b\u4ef6\uff0c\u786e\u4fdd\u6570\u636e\u5904\u7406\u7684\u9ad8\u6548\u6027\u3002\u91c7\u7528\u65f6\u95f4\u8f6e\u7b97\u6cd5\u4fdd\u8bc1\u4e8b\u4ef6\u80fd\u591f\u7cbe\u51c6\u505a\u5230\u79d2\u7ea7\u89e6\u53d1\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u7075\u6d3b\u8c03\u5ea6\uff1aJob Scheduler \u63d0\u4f9b\u4e86\u591a\u79cd\u8c03\u5ea6\u9009\u9879\uff0c\u5982\u6309 \u5206\u3001\u5c0f\u65f6\u3001\u5929\u6216\u5468\u7684\u95f4\u9694\u8fdb\u884c\u8c03\u5ea6\uff0c\u540c\u65f6\u652f\u6301\u4e00\u6b21\u6027\u8c03\u5ea6\u4ee5\u53ca\u5faa\u73af\uff08\u5468\u671f\uff09\u4e8b\u4ef6\u8c03\u5ea6\uff0c\u5e76\u4e14\u5468\u671f\u8c03\u5ea6\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5f00\u59cb\u65f6\u95f4\u3001\u7ed3\u675f\u65f6\u95f4\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6c60\u548c\u9ad8\u6027\u80fd\u5904\u7406\u961f\u5217\uff1aJob Scheduler \u91c7\u7528 Disruptor \u5b9e\u73b0\u9ad8\u6027\u80fd\u7684\u751f\u4ea7\u6d88\u8d39\u8005\u6a21\u578b\uff0c\u6700\u5927\u53ef\u80fd\u7684\u907f\u514d\u4efb\u52a1\u6267\u884c\u8fc7\u8f7d\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u8c03\u5ea6\u8bb0\u5f55\u53ef\u8ffd\u6eaf\uff1aJob Scheduler \u4f1a\u5b58\u50a8\u6700\u65b0\u7684 Task \u6267\u884c\u8bb0\u5f55\uff08\u53ef\u914d\u7f6e\uff09\uff0c\u901a\u8fc7\u7b80\u5355\u7684\u547d\u4ee4\u5373\u53ef\u67e5\u770b\u4efb\u52a1\u6267\u884c\u8bb0\u5f55\uff0c\u786e\u4fdd\u8fc7\u7a0b\u53ef\u8ffd\u6eaf\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u9ad8\u53ef\u7528\uff1a\u4f9d\u6258\u4e8e Doris \u81ea\u8eab\u7684\u9ad8\u53ef\u7528\u673a\u5236\uff0cJob Schedule \u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u505a\u5230\u81ea\u6062\u590d\u3001\u9ad8\u53ef\u7528\u3002")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u76f8\u5173\u6587\u6863:")," ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB"},"CREATE-JOB")),(0,n.yg)("h2",{id:"\u8bed\u6cd5\u8bf4\u660e"},"\u8bed\u6cd5\u8bf4\u660e"),(0,n.yg)("p",null,"\u4e00\u6761\u6709\u6548\u7684 Job \u8bed\u53e5\u9700\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5173\u952e\u5b57 CREATE JOB \u9700\u52a0\u4f5c\u4e1a\u540d\u79f0\uff0c\u5b83\u5728\u6570\u636e\u5e93\u4e2d\u6807\u8bc6\u552f\u4e00\u4e8b\u4ef6\u3002"),(0,n.yg)("li",{parentName:"ul"},"ON SCHEDULE \u5b50\u53e5\u7528\u4e8e\u6307\u5b9a Job \u4f5c\u4e1a\u7684\u7c7b\u578b\u3001\u89e6\u53d1\u65f6\u95f4\u548c\u9891\u7387\u3002",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"AT timestamp\u7528\u4e8e\u4e00\u6b21\u6027\u4e8b\u4ef6\u3002\u5b83\u6307\u5b9a JOB \u4ec5\u5728\u7ed9\u5b9a\u7684\u65e5\u671f\u548c\u65f6\u95f4\u6267\u884c\u4e00\u6b21\uff0cAT current_timestamp  \u6307\u5b9a\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\u3002\u56e0 JOB \u4e00\u65e6\u521b\u5efa\u5219\u4f1a\u7acb\u5373\u8fd0\u884c\uff0c\u4e5f\u53ef\u7528\u4e8e\u5f02\u6b65\u4efb\u52a1\u521b\u5efa\u3002"),(0,n.yg)("li",{parentName:"ul"},"EVERY\uff1a\u7528\u4e8e\u5468\u671f\u6027\u4f5c\u4e1a\uff0c\u53ef\u6307\u5b9a\u4f5c\u4e1a\u7684\u6267\u884c\u9891\u7387\uff0c\u5173\u952e\u5b57\u540e\u9700\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\uff08\u5468\u3001\u5929\u3001\u5c0f\u65f6\u3001\u5206\u949f\uff09\u3002",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Interval\uff1a\u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u6267\u884c\u9891\u7387\u30021 DAY \u8868\u793a\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c 1 HOUR\u8868\u793a\u6bcf\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\uff0c 1 MINUTE \u8868\u793a\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c 1 WEEK \u8868\u793a\u6bcf\u5468\u6267\u884c\u4e00\u6b21\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5b50\u53e5EVERY\u5305\u542b\u53ef\u9009 STARTS\u5b50\u53e5\u3002STARTS\u540e\u9762\u4e3atimestamp\u503c\uff0c\u8be5\u503c\u7528\u4e8e\u5b9a\u4e49\u5f00\u59cb\u91cd\u590d\u7684\u65f6\u95f4\uff0cCURRENT_TIMESTAMP  \u7528\u4e8e\u6307\u5b9a\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\u3002JOB \u4e00\u65e6\u521b\u5efa\u5219\u4f1a\u7acb\u5373\u8fd0\u884c\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5b50\u53e5EVERY\u5305\u542b\u53ef\u9009 ENDS\u5b50\u53e5\u3002ENDS \u5173\u952e\u5b57\u540e\u9762\u4e3atimestamp \u503c\uff0c\u8be5\u503c\u5b9a\u4e49 JOB \u4e8b\u4ef6\u505c\u6b62\u8fd0\u884c\u7684\u65f6\u95f4\u3002"))))),(0,n.yg)("li",{parentName:"ul"},"DO \u5b50\u53e5\u7528\u4e8e\u6307\u5b9a Job \u4f5c\u4e1a\u89e6\u53d1\u65f6\u6240\u9700\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u76ee\u524d\u4ec5\u652f\u6301 Insert \u8bed\u53e5\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE\nJOB\n  job_name\n  ON SCHEDULE schedule\n  [COMMENT 'string']\n  DO execute_sql;\n\nschedule: {\n    AT timestamp\n    | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\ninterval:\n    quantity { WEEK |DAY | HOUR | MINUTE}\n")),(0,n.yg)("p",null,"\u4e0b\u65b9\u4e3a\u7b80\u5355\u7684\u793a\u4f8b\uff1a\nCREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n\u8be5\u8bed\u53e5\u8868\u793a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_job \u7684\u4f5c\u4e1a\uff0c\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,n.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,n.yg)("p",null,"\u521b\u5efa\u4e00\u6b21\u6027\u7684 Job\uff1a\u5728 2025-01-01 00:00:00 \u65f6\u6267\u884c\u4e00\u6b21\uff0c\u5c06 db2.tbl2 \u4e2d\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE AT '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,n.yg)("p",null,"\u521b\u5efa\u5468\u671f\u6027\u7684 Job\uff0c\u672a\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\uff1a\u5728 22025-01-01 00:00:00 \u65f6\u5f00\u59cb\u6bcf\u5929\u6267\u884c 1 \u6b21\uff0c\u5c06 db2.tbl2 \u4e2d\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time >=  days_add(now(),-1);\n")),(0,n.yg)("p",null,"\u521b\u5efa\u5468\u671f\u6027\u7684 Job\uff0c\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4\uff1a\u5728 2025-01-01 00:00:00 \u65f6\u5f00\u59cb\u6bcf\u5929\u6267\u884c 1 \u6b21\uff0c\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\uff0c\u5728 2026-01-01 00:10:00 \u65f6\u7ed3\u675f\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULER EVERY 1 DAY STARTS '2025-01-01 00:00:00' ENDS '2026-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 create_time >=  days_add(now(),-1);\n")),(0,n.yg)("p",null,"\u501f\u52a9 Job \u5b9e\u73b0\u5f02\u6b65\u6267\u884c\uff1a\u7531\u4e8e Job \u5728 Doris \u4e2d\u662f\u4ee5\u540c\u6b65\u4efb\u52a1\u7684\u5f62\u5f0f\u521b\u5efa\u7684\uff0c\u4f46\u5176\u6267\u884c\u8fc7\u7a0b\u5374\u662f\u5f02\u6b65\u8fdb\u884c\u7684\uff0c\u8fd9\u4e00\u7279\u6027\u4f7f\u5f97 Job \u975e\u5e38\u9002\u5408\u7528\u4e8e\u5b9e\u73b0\u5f02\u6b65\u4efb\u52a1\uff0c\u4f8b\u5982\u5e38\u89c1\u7684 insert into select \u4efb\u52a1\u3002"),(0,n.yg)("p",null,"\u5047\u8bbe\u9700\u8981\u5c06db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\uff0c\u8fd9\u91cc\u53ea\u9700\u8981\u6307\u5b9a JOB \u4e3a\u4e00\u6b21\u6027\u4efb\u52a1\uff0c\u4e14\u5f00\u59cb\u65f6\u95f4\u8bbe\u7f6e\u4e3a\u5f53\u524d\u65f6\u95f4\u5373\u53ef\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE AT current_timestamp DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,n.yg)("h2",{id:"\u57fa\u4e8e-catalog-\u4e0e-job-scheduler-\u7684\u6570\u636e\u81ea\u52a8\u540c\u6b65"},"\u57fa\u4e8e Catalog \u4e0e Job Scheduler \u7684\u6570\u636e\u81ea\u52a8\u540c\u6b65"),(0,n.yg)("p",null,"\u4ee5\u67d0\u7535\u5546\u573a\u666f\u4e3a\u4f8b\uff0c\u7528\u6237\u5e38\u5e38\u9700\u8981\u4ece MySQL \u4e2d\u63d0\u53d6\u4e1a\u52a1\u6570\u636e\uff0c\u5e76\u5c06\u8fd9\u4e9b\u6570\u636e\u540c\u6b65\u5230 Doris \u4e2d\u8fdb\u884c\u6570\u636e\u5206\u6790\uff0c\u4ece\u800c\u652f\u6301\u7cbe\u51c6\u7684\u8425\u9500\u6d3b\u52a8\u3002\u800c Job Scheduler \u53ef\u4e0e\u6570\u636e\u6e56\u80fd\u529b Multi Catalog \u914d\u5408\uff0c\u9ad8\u6548\u5b8c\u6210\u8de8\u6570\u636e\u6e90\u7684\u5b9a\u671f\u6570\u636e\u540c\u6b65\u3002"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"user_id"),(0,n.yg)("th",{parentName:"tr",align:null},"date"),(0,n.yg)("th",{parentName:"tr",align:null},"city"),(0,n.yg)("th",{parentName:"tr",align:null},"age"),(0,n.yg)("th",{parentName:"tr",align:null},"sex"),(0,n.yg)("th",{parentName:"tr",align:null},"last_visit_date"),(0,n.yg)("th",{parentName:"tr",align:null},"cost"),(0,n.yg)("th",{parentName:"tr",align:null},"max_dwell_time"),(0,n.yg)("th",{parentName:"tr",align:null},"min_dwell_time"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10000"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5317\u4eac"),(0,n.yg)("td",{parentName:"tr",align:null},"20"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1 6:00"),(0,n.yg)("td",{parentName:"tr",align:null},"20"),(0,n.yg)("td",{parentName:"tr",align:null},"10"),(0,n.yg)("td",{parentName:"tr",align:null},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10000"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5317\u4eac"),(0,n.yg)("td",{parentName:"tr",align:null},"20"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1 7:00"),(0,n.yg)("td",{parentName:"tr",align:null},"15"),(0,n.yg)("td",{parentName:"tr",align:null},"2"),(0,n.yg)("td",{parentName:"tr",align:null},"2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10001"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5317\u4eac"),(0,n.yg)("td",{parentName:"tr",align:null},"30"),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1 17:05"),(0,n.yg)("td",{parentName:"tr",align:null},"2"),(0,n.yg)("td",{parentName:"tr",align:null},"22"),(0,n.yg)("td",{parentName:"tr",align:null},"22")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10002"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/2"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4e0a\u6d77"),(0,n.yg)("td",{parentName:"tr",align:null},"20"),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/2 12:59"),(0,n.yg)("td",{parentName:"tr",align:null},"200"),(0,n.yg)("td",{parentName:"tr",align:null},"5"),(0,n.yg)("td",{parentName:"tr",align:null},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10003"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/2"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5e7f\u5dde"),(0,n.yg)("td",{parentName:"tr",align:null},"32"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/2 11:20"),(0,n.yg)("td",{parentName:"tr",align:null},"30"),(0,n.yg)("td",{parentName:"tr",align:null},"11"),(0,n.yg)("td",{parentName:"tr",align:null},"11")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10004"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6df1\u5733"),(0,n.yg)("td",{parentName:"tr",align:null},"35"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/1 10:00"),(0,n.yg)("td",{parentName:"tr",align:null},"100"),(0,n.yg)("td",{parentName:"tr",align:null},"3"),(0,n.yg)("td",{parentName:"tr",align:null},"3")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10004"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/3"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6df1\u5733"),(0,n.yg)("td",{parentName:"tr",align:null},"35"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"2017/10/3 10:20"),(0,n.yg)("td",{parentName:"tr",align:null},"11"),(0,n.yg)("td",{parentName:"tr",align:null},"6"),(0,n.yg)("td",{parentName:"tr",align:null},"6")))),(0,n.yg)("p",null,"\u4ee5\u4e0a\u8868\u4e3a\u4f8b\uff0c\u7528\u6237\u5e0c\u671b\u67e5\u8be2\u7b26\u5408\u603b\u6d88\u8d39\u91d1\u989d\u3001\u6700\u540e\u4e00\u6b21\u8bbf\u95ee\u65f6\u95f4\u3001\u6027\u522b\u3001\u6240\u5728\u57ce\u5e02\u8fd9\u51e0\u4e2a\u6570\u503c\u6761\u4ef6\u7684\u7528\u6237\uff0c\u5e76\u5c06\u6ee1\u8db3\u6761\u4ef6\u7684\u7528\u6237\u4fe1\u606f\u5bfc\u5165\u5230 Doris \u4e2d\uff0c\u4ee5\u4fbf\u540e\u7eed\u7684\u5b9a\u5411\u63a8\u9001\u3002"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u5f20 Doris \u8868")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},' CREATE TABLE IF NOT EXISTS user_activity\n   (\n   `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237id",\n   `date` DATE NOT NULL COMMENT "\u6570\u636e\u704c\u5165\u65e5\u671f\u65f6\u95f4",\n   `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57ce\u5e02",\n   `age` SMALLINT COMMENT "\u7528\u6237\u5e74\u9f84",\n   `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522b",\n   `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "\u7528\u6237\u6700\u540e\u4e00\u6b21\u8bbf\u95ee\u65f6\u95f4",\n   `cost` BIGINT SUM DEFAULT "0" COMMENT "\u7528\u6237\u603b\u6d88\u8d39",\n   `max_dwell_time` INT MAX DEFAULT "0" COMMENT "\u7528\u6237\u6700\u5927\u505c\u7559\u65f6\u95f4",\n   `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "\u7528\u6237\u6700\u5c0f\u505c\u7559\u65f6\u95f4"\n   )\n   AGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\n   DISTRIBUTED BY HASH(`user_id`) BUCKETS 1\n   PROPERTIES (\n   "replication_allocation" = "tag.location.default: 1"\n   );\n')),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u5176\u6b21\uff0c\u521b\u5efa\u5bf9\u5e94 MySQL \u5e93\u7684 Catalog")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG activity PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "jdbc_url" = "jdbc:mysql://127.0.0.1:9734/user?useSSL=false",\n   "driver_url" = "mysql-connector-java-5.1.49.jar",\n   "driver_class" = "com.mysql.jdbc.Driver"\n   );\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u5c06 MySQL \u6570\u636e\u5bfc\u5165\u5230 Doris \u4e2d\u3002\u91c7\u7528 Catalog + Insert Into \u7684\u65b9\u5f0f\u6765\u5bfc\u5165\u5168\u91cf\u6570\u636e\uff0c\u7531\u4e8e\u5168\u91cf\u5bfc\u5165\u64cd\u4f5c\u53ef\u80fd\u4f1a\u5f15\u53d1\u7cfb\u7edf\u670d\u52a1\u6ce2\u52a8\uff0c\u901a\u5e38\u9009\u62e9\u5728\u4e1a\u52a1\u95f2\u6687\u65f6\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u8c03\u5ea6\uff1a\u5982\u4e0b\u65b9\u4ee3\u7801\u6240\u793a\uff0c\u4f7f\u7528\u4e00\u6b21\u6027\u4efb\u52a1\u6765\u5b9a\u65f6\u89e6\u53d1\u5168\u91cf\u5bfc\u5165\u4efb\u52a1\uff0c\u89e6\u53d1\u65f6\u95f4\u4e3a\u51cc\u6668 3:00\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB one_time_load_job\n  ON SCHEDULE\n  AT '2024-8-10 03:00:00'\n  DO\n  INSERT INTO user_activity FROM SELECT * FROM activity.user.activity\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5468\u671f\u8c03\u5ea6\uff1a\u7528\u6237\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5468\u671f\u6027\u7684\u8c03\u5ea6\u4efb\u52a1\uff0c\u5b9a\u671f\u66f4\u65b0\u6700\u65b0\u7684\u6570\u636e\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB schedule_load\n  ON SCHEDULE EVERY 1 DAY\n  DO\n  INSERT INTO user_activity FROM SELECT * FROM activity.user.activity where create_time >=  days_add(now(),-1)\n")),(0,n.yg)("h2",{id:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"},"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"),(0,n.yg)("p",null,"\u9ad8\u6548\u7684\u8c03\u5ea6\u901a\u5e38\u4f34\u968f\u7740\u5927\u91cf\u7684\u8d44\u6e90\u6d88\u8017\uff0c\u9ad8\u7cbe\u5ea6\u7684\u8c03\u5ea6\u66f4\u662f\u5982\u6b64\u3002\u4f20\u7edf\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u76f4\u63a5\u4f7f\u7528 Java \u5185\u7f6e\u7684\u5b9a\u65f6\u8c03\u5ea6\u80fd\u529b\u2014\u2014\u5b9a\u65f6\u8c03\u5ea6\u7ebf\u7a0b\u5468\u671f\u8bbf\u95ee\uff0c\u6216\u91c7\u7528\u4e00\u4e9b\u5b9a\u65f6\u8c03\u5ea6\u7684\u5de5\u5177\u7c7b\u5e93\uff0c\u4f46\u5176\u5728\u7cbe\u5ea6\u4ee5\u53ca\u5185\u5b58\u5360\u7528\u4e0a\u5b58\u5728\u8f83\u5927\u7684\u95ee\u9898\u3002\u4e3a\u66f4\u597d\u4fdd\u969c\u6027\u80fd\u7684\u524d\u63d0\u4e0b\u964d\u4f4e\u8d44\u6e90\u7684\u5360\u7528\uff0c\u6211\u4eec\u9009\u62e9 TimingWheel \u7b97\u6cd5\u4e0e Disruptor \u7ed3\u5408\uff0c\u5b9e\u73b0\u79d2\u7ea7\u522b\u7684\u4efb\u52a1\u8c03\u5ea6\u3002"),(0,n.yg)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5229\u7528 Netty \u7684 HashedWheelTimer \u5b9e\u73b0\u65f6\u95f4\u8f6e\u7b97\u6cd5\uff0cJob Manager \u4f1a\u5468\u671f\u6027\uff08\u9ed8\u8ba4\u5341\u5206\u949f\uff09\u5730\u5c06\u672a\u6765\u4e8b\u4ef6\u653e\u5165\u65f6\u95f4\u8f6e\u4e2d\u8c03\u5ea6\u3002\u4e3a\u4e86\u4fdd\u8bc1\u4efb\u52a1\u9ad8\u6548\u89e6\u53d1\u5e76\u907f\u514d\u8d44\u6e90\u8fc7\u5ea6\u5360\u7528\uff0c\u91c7\u7528 Disruptor \u6784\u5efa\u5355\u751f\u4ea7\u8005\u591a\u6d88\u8d39\u8005\u6a21\u578b\u3002\u65f6\u95f4\u8f6e\u4ec5\u8d1f\u8d23\u89e6\u53d1\uff0c\u5e76\u4e0d\u76f4\u63a5\u6267\u884c\u4efb\u52a1\u3002\u5bf9\u4e8e\u5230\u671f\u9700\u89e6\u53d1\u7684\u4efb\u52a1\u65f6\uff0c\u4f1a\u5c06\u5176\u653e\u5165 Diapatch \u7ebf\u7a0b\uff0c\u7531\u5176\u8d1f\u8d23\u5c06\u4efb\u52a1\u5206\u53d1\u81f3\u76f8\u5e94\u7684\u6267\u884c\u7ebf\u7a0b\u6c60\uff0c\u5bf9\u4e8e\u9700\u7acb\u5373\u6267\u884c\u7684\u4efb\u52a1\uff0c\u5219\u76f4\u63a5\u5c06\u5176\u6295\u9012\u81f3\u76f8\u5e94\u7684\u4efb\u52a1\u6267\u884c\u7ebf\u7a0b\u6c60\u4e2d\u3002"),(0,n.yg)("p",null,"\u5bf9\u4e8e\u5355\u6b21\u6267\u884c\u4e8b\u4ef6\uff0c\u5c06\u5728\u8c03\u5ea6\u5b8c\u6210\u540e\u5220\u9664\u4e8b\u4ef6\u5b9a\u4e49\uff1b\u5bf9\u4e8e\u5468\u671f\u6027\u4e8b\u4ef6\uff0c\u65f6\u95f4\u8f6e\u4e2d\u7684\u7cfb\u7edf\u4e8b\u4ef6\u5c06\u5b9a\u671f\u62c9\u53d6\u4e0b\u4e00\u4e2a\u5468\u671f\u7684\u6267\u884c\u4efb\u52a1\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u4efb\u52a1\u96c6\u4e2d\u5728\u4e00\u4e2a Bucket \u4e2d\uff0c\u51cf\u5c11\u65e0\u610f\u4e49\u7684\u904d\u5386\u3001\u63d0\u9ad8\u5904\u7406\u6548\u7387\u3002"),(0,n.yg)("p",null,"\u800c\u5bf9\u4e8e\u4e8b\u52a1\u578b\u4efb\u52a1\uff0cJob Scheduler \u80fd\u591f\u901a\u8fc7\u4e0e\u4e8b\u52a1\u7684\u5f3a\u5173\u8054\u4ee5\u53ca\u4e8b\u52a1\u56de\u8c03\u673a\u5236\uff0c\u786e\u4fdd\u4e8b\u52a1\u578b\u4efb\u52a1\u7684\u6267\u884c\u7ed3\u679c\u4e0e\u9884\u671f\u4e00\u81f4\uff0c\u4ece\u800c\u4fdd\u8bc1\u6570\u636e\u7684\u5b8c\u6574\u6027\u548c\u4e00\u81f4\u6027\u3002"),(0,n.yg)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,n.yg)("p",null,"Doris Job Scheduler \u662f\u4e00\u6b3e\u5f3a\u5927\u4e14\u7075\u6d3b\u7684\u4efb\u52a1\u8c03\u5ea6\u5de5\u5177\uff0c\u662f\u6570\u636e\u5904\u7406\u4e2d\u5fc5\u4e0d\u53ef\u5c11\u7684\u529f\u80fd\u4e4b\u4e00\u3002\u9664\u4e86\u5728\u6570\u636e\u6e56\u5206\u6790\u3001\u5185\u90e8 ETL \u7b49\u5e38\u89c1\u573a\u666f\u7684\u5e94\u7528\u5916\uff0cJob Scheduler \u5bf9\u4e8e\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u5b9e\u73b0\u4e5f\u8d77\u5230\u5173\u952e\u7684\u4f5c\u7528\u3002\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u662f\u4e00\u4e2a\u9884\u5148\u8ba1\u7b97\u5e76\u5b58\u50a8\u7684\u7ed3\u679c\u96c6\uff0c\u5176\u6570\u636e\u66f4\u65b0\u7684\u9891\u7387\u4e0e\u6e90\u8868\u7684\u53d8\u52a8\u7d27\u5bc6\u76f8\u5173\u3002\u5f53\u6e90\u8868\u6570\u636e\u66f4\u65b0\u9891\u7e41\u65f6\uff0c\u4e3a\u786e\u4fdd\u7269\u5316\u89c6\u56fe\u4e2d\u6570\u636e\u4fdd\u6301\u6700\u65b0\u72b6\u6001\uff0c\u5c31\u9700\u8981\u5bf9\u7269\u5316\u89c6\u56fe\u5b9a\u671f\u5237\u65b0\u3002\u56e0\u6b64\u5728 2.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5de7\u5999\u5730\u5229\u7528 JOB \u5b9a\u65f6\u8c03\u5ea6\u529f\u80fd\uff0c\u4fdd\u969c\u4e86\u7269\u5316\u89c6\u56fe\u4e0e\u6e90\u8868\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c\u5927\u5e45\u964d\u4f4e\u4e86\u4eba\u5de5\u5e72\u9884\u7684\u6210\u672c\u3002\n\u672a\u6765\uff0cDoris Job Scheduler \u8fd8\u4f1a\u652f\u6301\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 UI \u754c\u9762\u67e5\u770b\u4e0d\u540c\u65f6\u6bb5\u6267\u884c\u7684\u4efb\u52a1\u5206\u5e03\u60c5\u51b5\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u652f\u6301 JOB \u6d41\u7a0b\u7f16\u6392\uff0c\u5373 DAG JOB\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u5728\u5185\u90e8\u5b9e\u73b0\u6570\u4ed3\u4efb\u52a1\u7f16\u6392\uff0c\u4e0e Catalog \u529f\u80fd\u53e0\u52a0\u5c06\u4f1a\u66f4\u9ad8\u6548\u5730\u5b8c\u6210\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u5de5\u4f5c\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u652f\u6301\u5bf9\u5bfc\u5165\u4efb\u52a1\u3001UPDATE\u3001DELETE \u64cd\u4f5c\u8fdb\u884c\u5b9a\u65f6\u8c03\u5ea6\u3002")))}o.isMDXComponent=!0}}]);