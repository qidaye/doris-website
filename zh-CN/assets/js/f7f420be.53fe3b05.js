"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[296733],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),O=a,d=u["".concat(s,".").concat(O)]||u[O]||m[O]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},467958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-BROKER",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-BROKER",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-BROKER",title:"SHOW-BROKER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-BROKER.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-BROKER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BROKER",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-BROKER",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-BACKENDS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS"},next:{title:"SHOW-CATALOGS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS"}},s={},c=[{value:"SHOW-BROKER",id:"show-broker",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-broker"},"SHOW-BROKER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW BROKER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u5f53\u524d\u5b58\u5728\u7684 broker"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW BROKER;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"   1. LastStartTime \u8868\u793a\u6700\u8fd1\u4e00\u6b21 BE \u542f\u52a8\u65f6\u95f4\u3002\n   2. LastHeartbeat \u8868\u793a\u6700\u8fd1\u4e00\u6b21\u5fc3\u8df3\u3002\n   3. Alive \u8868\u793a\u8282\u70b9\u662f\u5426\u5b58\u6d3b\u3002\n   4. ErrMsg \u7528\u4e8e\u663e\u793a\u5fc3\u8df3\u5931\u8d25\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u3002\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, BROKER\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);