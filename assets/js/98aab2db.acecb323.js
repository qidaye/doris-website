"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[509996],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var o=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,i=function(e,n){if(null==e)return{};var r,o,i={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),d=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var r=e.components,i=e.mdxType,t=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=i,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||t;return r?o.createElement(m,a(a({ref:n},u),{},{components:r})):o.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=r.length,a=new Array(t);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<t;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},192432:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=r(58168),i=(r(296540),r(15680));const t={title:"Fe Version Info Action",language:"en"},a=void 0,s={unversionedId:"admin-manual/fe/fe-version-info-action",id:"version-2.1/admin-manual/fe/fe-version-info-action",title:"Fe Version Info Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/fe-version-info-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/fe-version-info-action",permalink:"/docs/2.1/admin-manual/fe/fe-version-info-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Fe Version Info Action",language:"en"},sidebar:"docs",previous:{title:"Extra Basepath Action",permalink:"/docs/2.1/admin-manual/fe/extra-basepath-action"},next:{title:"Get DDL Statement Action",permalink:"/docs/2.1/admin-manual/fe/get-ddl-stmt-action"}},l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,o.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"fe-version-info-action"},"Fe Version Info Action"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/fe_version_info")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Get fe version info from fe host."),(0,i.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,i.yg)("p",null,"None."),(0,i.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,i.yg)("p",null,"None."),(0,i.yg)("h2",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"None."),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'```\nGET /api/fe_version_info\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')))}p.isMDXComponent=!0}}]);