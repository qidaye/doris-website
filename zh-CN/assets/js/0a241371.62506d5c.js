"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59560],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=u(t),y=l,c=g["".concat(p,".").concat(y)]||g[y]||s[y]||r;return t?a.createElement(c,o(o({ref:n},d),{},{components:t})):a.createElement(c,o({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},304075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(58168),l=(t(296540),t(15680));const r={title:"\u4ee3\u7801\u6253\u6869",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/fe/debug-point-action",id:"version-2.0/admin-manual/fe/debug-point-action",title:"\u4ee3\u7801\u6253\u6869",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/debug-point-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/debug-point-action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/debug-point-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u4ee3\u7801\u6253\u6869",language:"zh-CN"},sidebar:"docs",previous:{title:"Meta Info Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/meta-info-action-V2"},next:{title:"Statistic Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/statistic-action"}},p={},u=[{value:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b",id:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u603b\u5f00\u5173",id:"\u603b\u5f00\u5173",level:2},{value:"\u6253\u5f00\u6728\u6869",id:"\u6253\u5f00\u6728\u6869",level:2},{value:"API",id:"api",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"\u5173\u95ed\u6728\u6869",id:"\u5173\u95ed\u6728\u6869",level:2},{value:"API",id:"api-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"\u6e05\u9664\u6240\u6709\u6728\u6869",id:"\u6e05\u9664\u6240\u6709\u6728\u6869",level:2},{value:"API",id:"api-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3}],d={toc:u},g="wrapper";function s(e){let{components:n,...t}=e;return(0,l.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u4ee3\u7801\u6253\u6869\u662f\u4ee3\u7801\u6d4b\u8bd5\u4f7f\u7528\u7684\u3002\u6fc0\u6d3b\u6728\u6869\u540e\uff0c\u53ef\u4ee5\u6267\u884c\u6728\u6869\u4ee3\u7801\u3002\u6728\u6869\u7684\u540d\u5b57\u662f\u4efb\u610f\u53d6\u7684\u3002"),(0,l.yg)("p",null,"FE \u548c BE \u90fd\u652f\u6301\u4ee3\u7801\u6253\u6869\u3002"),(0,l.yg)("h2",{id:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b"},"\u6728\u6869\u4ee3\u7801\u793a\u4f8b"),(0,l.yg)("p",null,"FE \u6869\u5b50\u793a\u4f8b\u4ee3\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'private Status foo() {  \n    // dbug_fe_foo_do_nothing \u662f\u4e00\u4e2a\u6728\u6869\u540d\u5b57\uff0c\n    // \u6253\u5f00\u8fd9\u4e2a\u6728\u6869\u4e4b\u540e\uff0cDebugPointUtil.isEnable("dbug_fe_foo_do_nothing") \u5c06\u4f1a\u8fd4\u56de true\n    if (DebugPointUtil.isEnable("dbug_fe_foo_do_nothing")) {\n        return Status.Nothing;\n    }\n        \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,l.yg)("p",null,"BE \u6869\u5b50\u793a\u4f8b\u4ee3\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c++"},'void Status foo() {\n\n     // dbug_be_foo_do_nothing \u662f\u4e00\u4e2a\u6728\u6869\u540d\u5b57\uff0c\n     // \u6253\u5f00\u8fd9\u4e2a\u6728\u6869\u4e4b\u540e\uff0cDEBUG_EXECUTE_IF \u5c06\u4f1a\u6267\u884c\u5b8f\u53c2\u6570\u4e2d\u7684\u4ee3\u7801\u5757\n     DEBUG_EXECUTE_IF("dbug_be_foo_do_nothing",  { return Status.Nothing; });\n   \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,l.yg)("h2",{id:"\u603b\u5f00\u5173"},"\u603b\u5f00\u5173"),(0,l.yg)("p",null,"\u9700\u8981\u628a\u6728\u6869\u603b\u5f00\u5173 ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," \u6253\u5f00\u4e4b\u540e\uff0c\u624d\u80fd\u6fc0\u6d3b\u6728\u6869\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6728\u6869\u603b\u5f00\u5173\u662f\u5173\u95ed\u7684\u3002"),(0,l.yg)("p",null,"\u603b\u5f00\u5173",(0,l.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," \u5206\u522b\u5728 FE \u7684 fe.conf \u548c BE \u7684 be.conf \u4e2d\u914d\u7f6e\u3002"),(0,l.yg)("h2",{id:"\u6253\u5f00\u6728\u6869"},"\u6253\u5f00\u6728\u6869"),(0,l.yg)("h3",{id:"api"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    POST /api/debug_point/add/{debug_point_name}[?timeout=<int>&execute=<int>]\n")),(0,l.yg)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"debug_point_name"),"\n\u6728\u6869\u540d\u5b57\u3002\u5fc5\u586b\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"timeout"),"\n\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u8d85\u65f6\u4e4b\u540e\uff0c\u6728\u6869\u5931\u6d3b\u3002\u9ed8\u8ba4\u503c -1 \u8868\u793a\u6c38\u8fdc\u4e0d\u8d85\u65f6\u3002\u53ef\u586b\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"execute"),"\n\u6728\u6869\u6700\u5927\u6fc0\u6d3b\u6b21\u6570\u3002\u9ed8\u8ba4\u503c -1 \u8868\u793a\u4e0d\u9650\u6fc0\u6d3b\u6b21\u6570\u3002\u53ef\u586b\u3002       "))),(0,l.yg)("h3",{id:"request-body"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n')),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,"\u6253\u5f00\u6728\u6869 ",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u6700\u591a\u6fc0\u6d3b 5 \u6b21\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?execute=5"\n\n```\n')),(0,l.yg)("h2",{id:"\u5173\u95ed\u6728\u6869"},"\u5173\u95ed\u6728\u6869"),(0,l.yg)("h3",{id:"api-1"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    POST /api/debug_point/remove/{debug_point_name}\n")),(0,l.yg)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"debug_point_name"),"\n\u6728\u6869\u540d\u5b57\u3002\u5fc5\u586b\u3002     ")),(0,l.yg)("h3",{id:"request-body-1"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response-1"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'    {\n        msg: "OK",\n        code: 0\n    }\n')),(0,l.yg)("h3",{id:"examples-1"},"Examples"),(0,l.yg)("p",null,"\u5173\u95ed\u6728\u6869",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/remove/foo"\n\n```\n')),(0,l.yg)("h2",{id:"\u6e05\u9664\u6240\u6709\u6728\u6869"},"\u6e05\u9664\u6240\u6709\u6728\u6869"),(0,l.yg)("h3",{id:"api-2"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    POST /api/debug_point/clear\n")),(0,l.yg)("h3",{id:"request-body-2"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response-2"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n')),(0,l.yg)("h3",{id:"examples-2"},"Examples"),(0,l.yg)("p",null,"\u6e05\u9664\u6240\u6709\u6728\u6869\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/clear"\n```\n')))}s.isMDXComponent=!0}}]);