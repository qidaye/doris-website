"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[932511],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},268251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-TRANSACTION",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",id:"sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",title:"SHOW-TRANSACTION",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-TRANSACTION",language:"en"},sidebar:"docs",previous:{title:"SHOW-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-VIEW"},next:{title:"SHOW-STREAM-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD"}},s={},p=[{value:"SHOW-TRANSACTION",id:"show-transaction",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-transaction"},"SHOW-TRANSACTION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW TRANSACTION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This syntax is used to view transaction details for the specified transaction id or label."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id=transaction_id]\n[label = label_name];\n")),(0,r.yg)("p",null,"Example of returned result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"TransactionId: transaction id"),(0,r.yg)("li",{parentName:"ul"},"Label: the label corresponding to the import task"),(0,r.yg)("li",{parentName:"ul"},"Coordinator: The node responsible for transaction coordination"),(0,r.yg)("li",{parentName:"ul"},"TransactionStatus: transaction status",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"PREPARE: preparation stage"),(0,r.yg)("li",{parentName:"ul"},"COMMITTED: The transaction succeeded, but the data was not visible"),(0,r.yg)("li",{parentName:"ul"},"VISIBLE: The transaction succeeded and the data is visible"),(0,r.yg)("li",{parentName:"ul"},"ABORTED: Transaction failed"))),(0,r.yg)("li",{parentName:"ul"},"LoadJobSourceType: Type of import job."),(0,r.yg)("li",{parentName:"ul"},"PrepareTime: transaction start time"),(0,r.yg)("li",{parentName:"ul"},"CommitTime: The time when the transaction was successfully committed"),(0,r.yg)("li",{parentName:"ul"},"FinishTime: The time when the data is visible"),(0,r.yg)("li",{parentName:"ul"},"Reason: error message"),(0,r.yg)("li",{parentName:"ul"},"ErrorReplicasCount: The number of replicas with errors"),(0,r.yg)("li",{parentName:"ul"},"ListenerId: The id of the related import job"),(0,r.yg)("li",{parentName:"ul"},"TimeoutMs: Transaction timeout, in milliseconds")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the transaction with id 4005:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE ID=4005;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the specified db, view the transaction with id 4005:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION FROM db WHERE ID=4005;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the transaction whose label is label_name:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE LABEL = 'label_name';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, TRANSACTION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);