"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[250578],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},652198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"Bootstrap Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/fe/bootstrap-action",id:"version-2.0/admin-manual/fe/bootstrap-action",title:"Bootstrap Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/fe/bootstrap-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/bootstrap-action",permalink:"/docs/2.0/admin-manual/fe/bootstrap-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Bootstrap Action",language:"en"},sidebar:"docs",previous:{title:"Backends Action",permalink:"/docs/2.0/admin-manual/fe/backends-action"},next:{title:"Cancel Load Action",permalink:"/docs/2.0/admin-manual/fe/cancel-load-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bootstrap-action"},"Bootstrap Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/bootstrap")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"It is used to judge whether the FE has started. When no parameters are provided, only whether the startup is successful is returned. If ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")," are provided, more detailed information is returned."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"none"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("p",{parentName:"li"},"  The cluster id. It can be viewed in the file ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION"),".\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"token")),(0,a.yg)("p",{parentName:"li"},"  Cluster token. It can be viewed in the file ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION"),"."))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"none"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"No parameters provided"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')),(0,a.yg)("p",{parentName:"li"},"  A code of 0 means that the FE node has started successfully. Error codes other than 0 indicate other errors.\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Provide ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"queryPort")," is the MySQL protocol port of the FE node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rpcPort")," is the thrift RPC port of the FE node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"maxReplayedJournal")," represents the maximum metadata journal id currently played back by the FE node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"arrowFlightSqlPort")," is the Arrow Flight SQL port of the FE node.")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"No parameters"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/bootstrap\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Provide ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);