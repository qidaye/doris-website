"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[579066],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},329002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"Show Proc Action",language:"en"},i=void 0,p={unversionedId:"admin-manual/http-actions/fe/show-proc-action",id:"version-1.2/admin-manual/http-actions/fe/show-proc-action",title:"Show Proc Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/show-proc-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/show-proc-action",permalink:"/docs/1.2/admin-manual/http-actions/fe/show-proc-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Show Proc Action",language:"en"},sidebar:"docs",previous:{title:"Show Meta Info Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/show-meta-info-action"},next:{title:"Show Runtime Info Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/show-runtime-info-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"show-proc-action"},"Show Proc Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/show_proc")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to obtain PROC information."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"path"),(0,a.yg)("p",{parentName:"li"},"  Specify Proc Path\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"forward"),(0,a.yg)("p",{parentName:"li"},"  Whether to forward to Master FE for execution"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        proc infos ...\n    ],\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View ",(0,a.yg)("inlineCode",{parentName:"p"},"/statistic")," information"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/show_proc?path=/statistic\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        ["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n        ["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n        ["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n    ],\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Forward to Master for execution"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/show_proc?path=/statistic&forward=true\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        ["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n        ["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n        ["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n    ],\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);