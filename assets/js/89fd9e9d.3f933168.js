"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[517285],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>c});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(t),y=r,c=d["".concat(p,".").concat(y)]||d[y]||m[y]||l;return t?n.createElement(c,i(i({ref:a},u),{},{components:t})):n.createElement(c,i({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},705229:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=t(58168),r=(t(296540),t(15680));const l={title:"Meta Info Action",language:"en"},i=void 0,s={unversionedId:"admin-manual/fe/meta-info-action",id:"version-2.1/admin-manual/fe/meta-info-action",title:"Meta Info Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/meta-info-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/meta-info-action",permalink:"/docs/2.1/admin-manual/fe/meta-info-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Meta Info Action",language:"en"},sidebar:"docs",previous:{title:"Health Action",permalink:"/docs/2.1/admin-manual/fe/health-action"},next:{title:"Meta Replay State Action",permalink:"/docs/2.1/admin-manual/fe/meta-replay-state-action"}},p={},o=[{value:"List Database",id:"list-database",level:2},{value:"Request",id:"request",level:3},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"List Table",id:"list-table",level:2},{value:"Request",id:"request-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Schema Info",id:"schema-info",level:2},{value:"Request",id:"request-2",level:3},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3}],u={toc:o},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"meta-action"},"Meta Action"),(0,r.yg)("p",null,"Meta Info Action is used to obtain metadata information in the cluster. Such as database list, table structure, etc."),(0,r.yg)("h2",{id:"list-database"},"List Database"),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases\n")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Get a list of all database names, arranged in alphabetical order."),(0,r.yg)("h3",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"limit")),(0,r.yg)("p",{parentName:"li"},"  Limit the number of result rows returned\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"offset")),(0,r.yg)("p",{parentName:"li"},"  Pagination information, need to be used with ",(0,r.yg)("inlineCode",{parentName:"p"},"limit"),"\n"))),(0,r.yg)("h3",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": [\n       "db1", "db2", "db3", ...  \n    ],\n    "count": 3\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The data field returns a list of database names.")),(0,r.yg)("h2",{id:"list-table"},"List Table"),(0,r.yg)("h3",{id:"request-1"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables\n")),(0,r.yg)("h3",{id:"description-1"},"Description"),(0,r.yg)("p",null,"Get a list of tables in the specified database, arranged in alphabetical order."),(0,r.yg)("h3",{id:"path-parameters-1"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  Specify database"))),(0,r.yg)("h3",{id:"query-parameters-1"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"limit")),(0,r.yg)("p",{parentName:"li"},"  Limit the number of result rows returned\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"offset")),(0,r.yg)("p",{parentName:"li"},"  Pagination information, need to be used with ",(0,r.yg)("inlineCode",{parentName:"p"},"limit")))),(0,r.yg)("h3",{id:"request-body-1"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h3",{id:"response-1"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": [\n       "tbl1", "tbl2", "tbl3", ...  \n    ],\n    "count": 0\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The data field returns a list of table names.")),(0,r.yg)("h2",{id:"schema-info"},"Schema Info"),(0,r.yg)("h3",{id:"request-2"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables/<tbl_name>/schema\n")),(0,r.yg)("h3",{id:"description-2"},"Description"),(0,r.yg)("p",null,"Get the table structure information of the specified table in the specified database."),(0,r.yg)("h3",{id:"path-parameters-2"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  Specify the database name\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl_name>")),(0,r.yg)("p",{parentName:"li"},"  Specify table name"))),(0,r.yg)("h3",{id:"query-parameters-2"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"with_mv")),(0,r.yg)("p",{parentName:"li"},"  Optional. If not specified, the table structure of the base table is returned by default. If specified, all rollup index will also be returned."))),(0,r.yg)("h3",{id:"request-body-2"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h3",{id:"response-2"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": {\n            "schema": [{\n                    "Field": "k1",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                },\n                {\n                    "Field": "k2",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                }\n            ],\n            "is_base": true\n        }\n    },\n    "count": 0\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema?with_mv?=1\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": {\n            "schema": [{\n                    "Field": "k1",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                },\n                {\n                    "Field": "k2",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                }\n            ],\n            "is_base": true\n        },\n        "rollup1": {\n            "schema": [{\n                "Field": "k1",\n                "Type": "INT",\n                "Null": "Yes",\n                "Extra": "",\n                "Default": null,\n                "Key": "true"\n            }],\n            "is_base": false\n        }\n    },\n    "count": 0\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The data field returns the table structure information of the base table or rollup table.")))}m.isMDXComponent=!0}}]);