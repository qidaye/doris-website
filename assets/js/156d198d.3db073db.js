"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[600493],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},310374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"CANCEL-ALTER-SYSTEM",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",id:"version-2.0/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",title:"CANCEL-ALTER-SYSTEM",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",permalink:"/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CANCEL-ALTER-SYSTEM",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DROP-BROKER",permalink:"/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER"},next:{title:"CREATE-ROLE",permalink:"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE"}},i={},c=[{value:"CANCEL-ALTER-SYSTEM",id:"cancel-alter-system",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cancel-alter-system"},"CANCEL-ALTER-SYSTEM"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CANCEL DECOMMISSION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to undo a node offline operation. (Administrator only!)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Find backend through host and port")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Find backend through backend_id")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "id1","id2","id3...";\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Cancel the offline operation of both nodes:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "host1:port", "host2:port";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Cancel the offline operation of the node with backend_id 1:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'    CANCEL DECOMMISSION BACKEND "1","2";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CANCEL, DECOMMISSION, CANCEL ALTER\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);