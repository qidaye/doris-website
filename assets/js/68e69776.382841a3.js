"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[704419],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>T});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,T=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(T,s(s({ref:t},p),{},{components:n})):a.createElement(T,s({ref:t},p))}));function T(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},627168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const i={title:"SHOW TABLET DIAGNOSIS",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",id:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",title:"SHOW TABLET DIAGNOSIS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW TABLET DIAGNOSIS",language:"en"},sidebar:"docs",previous:{title:"ADMIN-CHECK-TABLET",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET"},next:{title:"ADMIN-COPY-TABLET",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-COPY-TABLET"}},o={},c=[{value:"SHOW TABLET DIAGNOSIS",id:"show-tablet-diagnosis",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-tablet-diagnosis"},"SHOW TABLET DIAGNOSIS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"This statement is used to diagnose the specified tablet. The results will show information about the tablet and some potential problems.\n\ngrammar:\n\n    SHOW TABLET DIAGNOSE TABLET tablet_id\n\nillustrate:\n\n    The lines of information in the result are as follows:\n    1. TabletExist:                         Whether the Tablet exists\n    2. TabletId:                            Tablet ID\n    3. Database:                            The DB to which the Tablet belongs and its ID\n    4. Table:                               The Table to which Tablet belongs and its ID\n    5. Partition:                           The Partition to which the Tablet belongs and its ID\n    6. MaterializedIndex:                   The materialized view to which the Tablet belongs and its ID\n    7. Replicas(ReplicaId -> BackendId):    Tablet replicas and their BE.\n    8. ReplicasNum:                         Whether the number of replicas is correct.\n    9. ReplicaBackendStatus:                Whether the BE node where the replica is located is normal.\n    10.ReplicaVersionStatus:                Whether the version number of the replica is normal.\n    11.ReplicaStatus:                       Whether the replica status is normal.\n    12.ReplicaCompactionStatus:             Whether the replica Compaction status is normal.\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"1. Diagnose tablet 10001\n\n    SHOW TABLET DIAGNOSE TABLET 10001;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, DIAGNOSIS, TABLET\n")))}d.isMDXComponent=!0}}]);