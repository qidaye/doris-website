"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[753789],{15680:(e,n,a)=>{a.d(n,{xA:()=>o,yg:()=>c});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},o=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),y=u(a),d=r,c=y["".concat(s,".").concat(d)]||y[d]||m[d]||l;return a?t.createElement(c,i(i({ref:n},o),{},{components:a})):t.createElement(c,i({ref:n},o))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},980003:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=a(58168),r=(a(296540),a(15680));const l={title:"Meta Info Action",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/http-actions/fe/meta-info-action",id:"version-1.2/admin-manual/http-actions/fe/meta-info-action",title:"Meta Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/meta-info-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/meta-info-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/meta-info-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Meta Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Health Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/health-action"},next:{title:"Meta Replay State Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/meta-replay-state-action"}},s={},u=[{value:"\u6570\u636e\u5e93\u5217\u8868",id:"\u6570\u636e\u5e93\u5217\u8868",level:2},{value:"Request",id:"request",level:3},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"\u8868\u5217\u8868",id:"\u8868\u5217\u8868",level:2},{value:"Request",id:"request-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"\u8868\u7ed3\u6784\u4fe1\u606f",id:"\u8868\u7ed3\u6784\u4fe1\u606f",level:2},{value:"Request",id:"request-2",level:3},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3}],o={toc:u},y="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(y,(0,t.A)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"meta-action"},"Meta Action"),(0,r.yg)("p",null,"Meta Info Action \u7528\u4e8e\u83b7\u53d6\u96c6\u7fa4\u5185\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002\u5982\u6570\u636e\u5e93\u5217\u8868\uff0c\u8868\u7ed3\u6784\u7b49\u3002"),(0,r.yg)("h2",{id:"\u6570\u636e\u5e93\u5217\u8868"},"\u6570\u636e\u5e93\u5217\u8868"),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases\n")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868\uff0c\u6309\u5b57\u6bcd\u5e8f\u6392\u5217\u3002"),(0,r.yg)("h3",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"limit")),(0,r.yg)("p",{parentName:"li"},"  \u9650\u5236\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"offset")),(0,r.yg)("p",{parentName:"li"},"  \u5206\u9875\u4fe1\u606f\uff0c\u9700\u8981\u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"limit")," \u4e00\u8d77\u4f7f\u7528"))),(0,r.yg)("h3",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": [\n       "db1", "db2", "db3", ...  \n    ],\n    "count": 3\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"data \u5b57\u6bb5\u8fd4\u56de\u6570\u636e\u5e93\u540d\u5217\u8868\u3002")),(0,r.yg)("h2",{id:"\u8868\u5217\u8868"},"\u8868\u5217\u8868"),(0,r.yg)("h3",{id:"request-1"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables\n")),(0,r.yg)("h3",{id:"description-1"},"Description"),(0,r.yg)("p",null,"\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u8868\u5217\u8868\uff0c\u6309\u5b57\u6bcd\u5e8f\u6392\u5217\u3002"),(0,r.yg)("h3",{id:"path-parameters-1"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0"))),(0,r.yg)("h3",{id:"query-parameters-1"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"limit")),(0,r.yg)("p",{parentName:"li"},"  \u9650\u5236\u8fd4\u56de\u7684\u7ed3\u679c\u884c\u6570\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"offset")),(0,r.yg)("p",{parentName:"li"},"  \u5206\u9875\u4fe1\u606f\uff0c\u9700\u8981\u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"limit")," \u4e00\u8d77\u4f7f\u7528"))),(0,r.yg)("h3",{id:"request-body-1"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h3",{id:"response-1"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": [\n       "tbl1", "tbl2", "tbl3", ...  \n    ],\n    "count": 0\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"data \u5b57\u6bb5\u8fd4\u56de\u8868\u540d\u79f0\u5217\u8868\u3002")),(0,r.yg)("h2",{id:"\u8868\u7ed3\u6784\u4fe1\u606f"},"\u8868\u7ed3\u6784\u4fe1\u606f"),(0,r.yg)("h3",{id:"request-2"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables/<tbl_name>/schema\n")),(0,r.yg)("h3",{id:"description-2"},"Description"),(0,r.yg)("p",null,"\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\uff0c\u6307\u5b9a\u8868\u7684\u8868\u7ed3\u6784\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"path-parameters-2"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl_name>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u8868\u540d\u79f0"))),(0,r.yg)("h3",{id:"query-parameters-2"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"with_mv")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u9879\uff0c\u5982\u679c\u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u8fd4\u56de base \u8868\u7684\u8868\u7ed3\u6784\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u8fd8\u4f1a\u8fd4\u56de\u6240\u6709rollup\u7684\u4fe1\u606f\u3002"))),(0,r.yg)("h3",{id:"request-body-2"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h3",{id:"response-2"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": {\n            "schema": [{\n                    "Field": "k1",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                },\n                {\n                    "Field": "k2",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                }\n            ],\n            "is_base": true\n        }\n    },\n    "count": 0\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema?with_mv?=1\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": {\n            "schema": [{\n                    "Field": "k1",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                },\n                {\n                    "Field": "k2",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                }\n            ],\n            "is_base": true\n        },\n        "rollup1": {\n            "schema": [{\n                "Field": "k1",\n                "Type": "INT",\n                "Null": "Yes",\n                "Extra": "",\n                "Default": null,\n                "Key": "true"\n            }],\n            "is_base": false\n        }\n    },\n    "count": 0\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"data \u5b57\u6bb5\u8fd4\u56de base \u8868\u6216 rollup \u8868\u7684\u8868\u7ed3\u6784\u4fe1\u606f\u3002")))}m.isMDXComponent=!0}}]);