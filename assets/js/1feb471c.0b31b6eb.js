"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[412192],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},817985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const s={title:"SHOW-BACKENDS",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS",title:"SHOW-BACKENDS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-BACKENDS",language:"en"},sidebar:"docs",previous:{title:"SHOW-BACKUP",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-BACKUP"},next:{title:"SHOW-BROKER",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-BROKER"}},l={},c=[{value:"SHOW-BACKENDS",id:"show-backends",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-backends"},"SHOW-BACKENDS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW BACKENDS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to view the BE nodes in the cluster"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKENDS;\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    1. LastStartTime indicates the last BE start time.\n    2. LastHeartbeat indicates the last heartbeat.\n    3. Alive indicates whether the node is alive or not.\n    4. If SystemDecommissioned is true, it means that the node is being safely decommissioned.\n    5. If ClusterDecommissioned is true, it means that the node is going offline in the current cluster.\n    6. TabletNum represents the number of shards on the node.\n    7. DataUsedCapacity Indicates the space occupied by the actual user data.\n    8. AvailCapacity Indicates the available space on the disk.\n    9. TotalCapacity represents the total disk space. TotalCapacity = AvailCapacity + DataUsedCapacity + other non-user data files occupy space.\n   10. UsedPct Indicates the percentage of disk used.\n   11. ErrMsg is used to display the error message when the heartbeat fails.\n   12. Status is used to display some status information of BE in JSON format, including the time information of the last time BE reported its tablet.\n   13. HeartbeatFailureCounter: The current number of heartbeats that have failed consecutively. If the number exceeds the `max_backend_heartbeat_failure_tolerance_count` configuration, the isAlive will be set to false.\n   14. NodeRole is used to display the role of Backend node. Now there are two roles: mix and computation. Mix node represent the origin Backend node and computation Node represent the compute only node.\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, BACKENDS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);