"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[725278],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>E});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),O=a,E=m["".concat(i,".").concat(O)]||m[O]||u[O]||l;return n?r.createElement(E,o(o({ref:t},p),{},{components:n})):r.createElement(E,o({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=O;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},830316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-SYSTEM-DROP-FOLLOWER",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",id:"version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",title:"ALTER-SYSTEM-DROP-FOLLOWER",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-SYSTEM-DROP-FOLLOWER",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},next:{title:"ALTER-SYSTEM-DROP-OBSERVER",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-OBSERVER"}},i={},c=[{value:"ALTER-SYSTEM-DROP-FOLLOWER",id:"alter-system-drop-follower",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-drop-follower"},"ALTER-SYSTEM-DROP-FOLLOWER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM DROP FOLLOWER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is to delete the node of the FOLLOWER role of FRONTEND, (only for administrators!)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP FOLLOWER "follower_host:edit_log_port"\n')),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"host can be a hostname or an ip address"),(0,a.yg)("li",{parentName:"ol"},"edit_log_port : edit_log_port in its configuration file fe.conf")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add a FOLLOWER node"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP FOLLOWER "host_ip:9010"\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, DROP, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);