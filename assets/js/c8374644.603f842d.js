"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65418],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},591659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(58168),r=(t(296540),t(15680));const o={title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},a=void 0,l={unversionedId:"query/pipeline-execution-engine",id:"version-2.0/query/pipeline-execution-engine",title:"Pipeline Execution Engine",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/query/pipeline-execution-engine.md",sourceDirName:"query",slug:"/query/pipeline-execution-engine",permalink:"/docs/2.0/query/pipeline-execution-engine",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Statistics",permalink:"/docs/2.0/query/nereids/statistics"},next:{title:"Query Caches Overview",permalink:"/docs/2.0/query/query-cache/"}},s={},c=[{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Query",id:"query",level:3},{value:"Load",id:"load",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...o}=e;return(0,r.yg)(u,(0,i.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"pipeline-execution-engine"},"Pipeline Execution Engine"),(0,r.yg)("admonition",{title:"Note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This feature is supported since version 2.0.0.")),(0,r.yg)("p",null,"Pipeline execution engine is an experimental feature added by Doris in version 2.0. The goal is to replace the current execution engine of Doris's volcano model, fully release the computing power of multi-core CPUs, and limit the number of Doris's query threads to solve the problem of Doris's execution thread bloat."),(0,r.yg)("p",null,"Its specific design, implementation and effects can be found in ","[DSIP-027]","(",(0,r.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-027%3A+Support+Pipeline+Exec+Engine"},"DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation"),")\u3002"),(0,r.yg)("h2",{id:"principle"},"Principle"),(0,r.yg)("p",null,"The current Doris SQL execution engine is designed based on the traditional volcano model, which has the following problems in a single multi-core scenario:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Inability to take full advantage of multi-core computing power to improve query performance,",(0,r.yg)("strong",{parentName:"p"},"most scenarios require manual setting of parallelism")," for performance tuning, which is almost difficult to set in production environments.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Each instance of a standalone query corresponds to one thread of the thread pool, which introduces two additional problems."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Once the thread pool is hit full. ",(0,r.yg)("strong",{parentName:"li"},"Doris' query engine will enter a pseudo-deadlock")," and will not respond to subsequent queries. ",(0,r.yg)("strong",{parentName:"li"},"At the same time there is a certain probability of entering a logical deadlock")," situation: for example, all threads are executing an instance's probe task."),(0,r.yg)("li",{parentName:"ul"},"Blocking arithmetic will take up thread resources,",(0,r.yg)("strong",{parentName:"li"},"blocking thread resources can not be yielded to instances that can be scheduled"),", the overall resource utilization does not go up."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Blocking arithmetic relies on the OS thread scheduling mechanism, ",(0,r.yg)("strong",{parentName:"p"},"thread switching overhead (especially in the scenario of system mixing))")))),(0,r.yg)("p",null,"The resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs."),(0,r.yg)("p",null,"And as shown in the figure below (quoted from","[Push versus pull-based loop fusion in query engines]","(",(0,r.yg)("a",{parentName:"p",href:"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D67AE4899E87F4B5102F859B0FC02045/S0956796818000102a.pdf/div-class-title-push-versus-pull-based-loop-fusion-in-query-engines-div.pdf"},"jfp_1800010a (cambridge.org)"),")\uff09\uff0cThe resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs.\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image.png",src:t(340524).A,width:"2560",height:"1060"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Transformation of the traditional pull pull logic-driven execution process into a data-driven execution engine for the push model"),(0,r.yg)("li",{parentName:"ol"},"Blocking operations are asynchronous, reducing the execution overhead caused by thread switching and thread blocking and making more efficient use of the CPU"),(0,r.yg)("li",{parentName:"ol"},"Controls the number of threads to be executed and reduces the resource congestion of large queries on small queries in mixed load scenarios by controlling time slice switching")),(0,r.yg)("p",null,"This improves the efficiency of CPU execution on mixed-load SQL and enhances the performance of SQL queries."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"query"},"Query"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"enable_pipeline_engine")),(0,r.yg)("p",null,"Setting the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_engine")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," will make BE to use the Pipeline execution engine when performing query execution."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_pipeline_engine = true;\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"parallel_pipeline_task_num")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," represents the number of Pipeline Tasks for a SQL query to be queried concurrently.The default configuration of Doris is ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),", in which case the number of Pipeline Tasks will be automatically set to half of the minimum number of CPUs in the current cluster machine. You can also adjust it according to your own situation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set parallel_pipeline_task_num = 0;\n")),(0,r.yg)("p",null,"You can limit the automatically configured concurrency by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"max_instance_num"),"\uff08The default value is 64)"),(0,r.yg)("h3",{id:"load"},"Load"),(0,r.yg)("p",null,"The engine selected for import are detailed in the ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/import/load-manual"},"Import")," documentation."))}g.isMDXComponent=!0},340524:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pipeline-execution-engine-85f911b7c7e47dc429f39213654957d5.png"}}]);