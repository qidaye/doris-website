"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82339],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},968417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-TRANSACTION",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",title:"SHOW-TRANSACTION",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-TRANSACTION",language:"en"},sidebar:"docs",previous:{title:"SHOW-VIEW",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-VIEW"},next:{title:"SHOW-STREAM-LOAD",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD"}},s={},c=[{value:"SHOW-TRANSACTION",id:"show-transaction",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-transaction"},"SHOW-TRANSACTION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW TRANSACTION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This syntax is used to view transaction details for the specified transaction id or label."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id=transaction_id]\n[label = label_name];\n")),(0,r.yg)("p",null,"Example of returned result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"TransactionId: transaction id"),(0,r.yg)("li",{parentName:"ul"},"Label: the label corresponding to the import task"),(0,r.yg)("li",{parentName:"ul"},"Coordinator: The node responsible for transaction coordination"),(0,r.yg)("li",{parentName:"ul"},"TransactionStatus: transaction status",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"PREPARE: preparation stage"),(0,r.yg)("li",{parentName:"ul"},"COMMITTED: The transaction succeeded, but the data was not visible"),(0,r.yg)("li",{parentName:"ul"},"VISIBLE: The transaction succeeded and the data is visible"),(0,r.yg)("li",{parentName:"ul"},"ABORTED: Transaction failed"))),(0,r.yg)("li",{parentName:"ul"},"LoadJobSourceType: Type of import job."),(0,r.yg)("li",{parentName:"ul"},"PrepareTime: transaction start time"),(0,r.yg)("li",{parentName:"ul"},"CommitTime: The time when the transaction was successfully committed"),(0,r.yg)("li",{parentName:"ul"},"FinishTime: The time when the data is visible"),(0,r.yg)("li",{parentName:"ul"},"Reason: error message"),(0,r.yg)("li",{parentName:"ul"},"ErrorReplicasCount: The number of replicas with errors"),(0,r.yg)("li",{parentName:"ul"},"ListenerId: The id of the related import job"),(0,r.yg)("li",{parentName:"ul"},"TimeoutMs: Transaction timeout, in milliseconds")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the transaction with id 4005:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE ID=4005;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the specified db, view the transaction with id 4005:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION FROM db WHERE ID=4005;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the transaction whose label is label_name:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE LABEL = 'label_name';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, TRANSACTION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);