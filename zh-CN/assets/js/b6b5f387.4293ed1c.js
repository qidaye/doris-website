"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[294634],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>y});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=t.createContext({}),o=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),u=l,y=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return a?t.createElement(y,i(i({ref:n},p),{},{components:a})):t.createElement(y,i({ref:n},p))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71325:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=a(58168),l=(a(296540),a(15680));const r={title:"\u4e8b\u52a1",language:"zh-CN"},i=void 0,s={unversionedId:"data-operate/transaction",id:"data-operate/transaction",title:"\u4e8b\u52a1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/transaction.md",sourceDirName:"data-operate",slug:"/data-operate/transaction",permalink:"/zh-CN/docs/dev/data-operate/transaction",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8b\u52a1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f5c\u4e1a\u8c03\u5ea6",permalink:"/zh-CN/docs/dev/data-operate/scheduler/job-scheduler"},next:{title:"MySQL \u517c\u5bb9\u6027",permalink:"/zh-CN/docs/dev/query/query-data/mysql-compatibility"}},d={},o=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u663e\u5f0f\u4e8b\u52a1",id:"\u663e\u5f0f\u4e8b\u52a1",level:3},{value:"\u9690\u5f0f\u4e8b\u52a1",id:"\u9690\u5f0f\u4e8b\u52a1",level:3},{value:"\u9694\u79bb\u7ea7\u522b",id:"\u9694\u79bb\u7ea7\u522b",level:3},{value:"\u4e0d\u91cd\u4e0d\u4e22",id:"\u4e0d\u91cd\u4e0d\u4e22",level:3},{value:"Label \u673a\u5236",id:"label-\u673a\u5236",level:4},{value:"StreamLoad 2PC",id:"streamload-2pc",level:4},{value:"\u663e\u5f0f\u4e8b\u52a1\u64cd\u4f5c",id:"\u663e\u5f0f\u4e8b\u52a1\u64cd\u4f5c",level:2},{value:"\u5f00\u542f\u4e8b\u52a1",id:"\u5f00\u542f\u4e8b\u52a1",level:3},{value:"\u63d0\u4ea4\u4e8b\u52a1",id:"\u63d0\u4ea4\u4e8b\u52a1",level:3},{value:"\u56de\u6eda\u4e8b\u52a1",id:"\u56de\u6eda\u4e8b\u52a1",level:3},{value:"\u591a\u6761 SQL \u8bed\u53e5\u5199\u5165",id:"\u591a\u6761-sql-\u8bed\u53e5\u5199\u5165",level:2},{value:"\u5355\u8868\u591a\u6b21<code>INSERT INTO VALUES</code>\u5199\u5165",id:"\u5355\u8868\u591a\u6b21insert-into-values\u5199\u5165",level:3},{value:"\u591a\u8868\u591a\u6b21<code>INSERT INTO SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>\u5199\u5165",id:"\u591a\u8868\u591a\u6b21insert-into-select-update-delete\u5199\u5165",level:3},{value:"\u9694\u79bb\u7ea7\u522b",id:"\u9694\u79bb\u7ea7\u522b-1",level:4},{value:"\u4e8b\u52a1\u4e2d\u6267\u884c\u5931\u8d25\u7684\u8bed\u53e5",id:"\u4e8b\u52a1\u4e2d\u6267\u884c\u5931\u8d25\u7684\u8bed\u53e5",level:4},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:4},{value:"Stream Load 2PC",id:"stream-load-2pc",level:2},{value:"Broker Load \u591a\u8868\u4e8b\u52a1",id:"broker-load-\u591a\u8868\u4e8b\u52a1",level:2}],p={toc:o},m="wrapper";function c(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u4e8b\u52a1\u662f\u6307\u4e00\u4e2a\u64cd\u4f5c\uff0c\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2aSQL\u8bed\u53e5\uff0c\u8fd9\u4e9b\u8bed\u53e5\u7684\u6267\u884c\u8981\u4e48\u5b8c\u5168\u6210\u529f\uff0c\u8981\u4e48\u5b8c\u5168\u5931\u8d25\uff0c\u662f\u4e00\u4e2a\u4e0d\u53ef\u5206\u5272\u7684\u5de5\u4f5c\u5355\u4f4d\u3002"),(0,l.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.yg)("p",null,"\u67e5\u8be2\u548c DDL \u5355\u4e2a\u8bed\u53e5\u662f\u4e00\u4e2a\u9690\u5f0f\u4e8b\u52a1\uff0c\u4e0d\u652f\u6301\u591a\u8bed\u53e5\u4e8b\u52a1\u4e2d\u5305\u542b\u67e5\u8be2\u548c DDL\u3002\u6bcf\u4e2a\u5355\u72ec\u7684\u5199\u5165\u9ed8\u8ba4\u662f\u4e00\u4e2a\u9690\u5f0f\u7684\u4e8b\u52a1\uff0c\u591a\u4e2a\u5199\u5165\u53ef\u4ee5\u7ec4\u6210\u4e00\u4e2a\u663e\u5f0f\u4e8b\u52a1\u3002\u76ee\u524d Doris \u4e0d\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\u3002"),(0,l.yg)("h3",{id:"\u663e\u5f0f\u4e8b\u52a1"},"\u663e\u5f0f\u4e8b\u52a1"),(0,l.yg)("p",null,"\u663e\u5f0f\u4e8b\u52a1\u9700\u8981\u7528\u6237\u4e3b\u52a8\u5f00\u542f\u3001\u63d0\u4ea4\u6216\u56de\u6eda\u4e8b\u52a1\uff0c\u76ee\u524d\u4e0d\u652f\u6301 DDL \u548c\u67e5\u8be2\u8bed\u53e5\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"```sql\nBEGIN; \n[INSERT, UPDATE, DELETE statement]\nCOMMIT; / ROLLBACK;\n```\n")),(0,l.yg)("h3",{id:"\u9690\u5f0f\u4e8b\u52a1"},"\u9690\u5f0f\u4e8b\u52a1"),(0,l.yg)("p",null,"\u9690\u5f0f\u4e8b\u52a1\u662f\u6307\u7528\u6237\u5728\u6240\u6267\u884c\u7684\u4e00\u6761\u6216\u591a\u6761SQL\u8bed\u53e5\u7684\u524d\u540e\uff0c\u6ca1\u6709\u663e\u5f0f\u6dfb\u52a0\u5f00\u542f\u4e8b\u52a1\u548c\u63d0\u4ea4\u4e8b\u52a1\u7684\u8bed\u53e5\u3002"),(0,l.yg)("p",null,"\u5728 Doris \u4e2d\uff0c\u9664",(0,l.yg)("a",{parentName:"p",href:"import/group-commit-manual.md"},"Group Commit"),"\u5916\uff0c\u6bcf\u4e2a\u5bfc\u5165\u8bed\u53e5\u5728\u5f00\u59cb\u6267\u884c\u65f6\u90fd\u4f1a\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\uff0c\u5e76\u4e14\u5728\u8be5\u8bed\u53e5\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u81ea\u52a8\u63d0\u4ea4\u8be5\u4e8b\u52a1\uff1b\u6216\u6267\u884c\u5931\u8d25\u540e\uff0c\u81ea\u52a8\u56de\u6eda\u8be5\u4e8b\u52a1\u3002\u6bcf\u4e2a\u67e5\u8be2\u6216\u8005 DDL \u4e5f\u662f\u4e00\u4e2a\u9690\u85cf\u4e8b\u52a1\u3002"),(0,l.yg)("h3",{id:"\u9694\u79bb\u7ea7\u522b"},"\u9694\u79bb\u7ea7\u522b"),(0,l.yg)("p",null,"Doris \u5f53\u524d\u652f\u6301\u7684\u552f\u4e00\u9694\u79bb\u7ea7\u522b\u662f READ COMMITTED\u3002\u5728 READ COMMITTED \u9694\u79bb\u7ea7\u522b\u4e0b\uff0c\u8bed\u53e5\u53ea\u80fd\u770b\u5230\u5728\u8be5\u8bed\u53e5\u5f00\u59cb\u6267\u884c\u4e4b\u524d\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u5b83\u4e0d\u4f1a\u770b\u5230\u672a\u63d0\u4ea4\u7684\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u5355\u4e2a\u8bed\u53e5\u6267\u884c\u65f6\uff0c\u4f1a\u5728\u8bed\u53e5\u7684\u5f00\u59cb\u6355\u83b7\u6d89\u53ca\u5230\u8868\u7684\u5feb\u7167\uff0c\u5373\u5355\u4e2a\u8bed\u53e5\u53ea\u80fd\u770b\u89c1\u5f00\u59cb\u6267\u884c\u524d\u5176\u5b83\u4e8b\u52a1\u7684\u63d0\u4ea4\uff0c\u5355\u4e2a\u8bed\u53e5\u6267\u884c\u671f\u95f4\u4e0d\u53ef\u89c1\u5176\u5b83\u4e8b\u52a1\u7684\u63d0\u4ea4\u3002"),(0,l.yg)("p",null,"\u5f53\u4e00\u4e2a\u8bed\u53e5\u5728\u591a\u8bed\u53e5\u4e8b\u52a1\u4e2d\u6267\u884c\u65f6\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u770b\u5230\u5728\u8be5\u8bed\u53e5\u5f00\u59cb\u6267\u884c\u4e4b\u524d\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e\u3002\u5982\u679c\u5728\u6267\u884c\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u8bed\u53e5\u4e4b\u95f4\u6709\u53e6\u4e00\u4e2a\u4e8b\u52a1\u63d0\u4ea4\uff0c\u90a3\u4e48\u540c\u4e00\u4e8b\u52a1\u4e2d\u7684\u4e24\u4e2a\u8fde\u7eed\u8bed\u53e5\u53ef\u80fd\u4f1a\u770b\u5230\u4e0d\u540c\u7684\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u76ee\u524d\u770b\u4e0d\u5230\u5728\u540c\u4e00\u4e8b\u52a1\u4e2d\u4e4b\u524d\u8bed\u53e5\u6240\u505a\u7684\u66f4\u6539\u3002")),(0,l.yg)("h3",{id:"\u4e0d\u91cd\u4e0d\u4e22"},"\u4e0d\u91cd\u4e0d\u4e22"),(0,l.yg)("p",null,"Doris \u6709\u4e24\u4e2a\u673a\u5236\u652f\u6301\u5199\u5165\u7684\u4e0d\u91cd\u4e0d\u4e22\uff0c\u4f7f\u7528 Label \u673a\u5236\u63d0\u4f9b\u4e86\u5355\u4e2a\u4e8b\u52a1\u7684\u4e0d\u91cd\uff0c\u4f7f\u7528\u4e24\u9636\u6bb5\u63d0\u4ea4\u63d0\u4f9b\u4e86\u534f\u8c03\u591a\u4e8b\u52a1\u4e0d\u91cd\u7684\u80fd\u529b\u3002"),(0,l.yg)("h4",{id:"label-\u673a\u5236"},"Label \u673a\u5236"),(0,l.yg)("p",null,"Doris \u7684\u4e8b\u52a1\u6216\u8005\u5199\u5165\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a Label\u3002\u8fd9\u4e2a Label \u901a\u5e38\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u3001\u5177\u6709\u4e00\u5b9a\u4e1a\u52a1\u903b\u8f91\u5c5e\u6027\u7684\u5b57\u7b26\u4e32\uff0c\u4e0d\u8bbe\u7f6e\u65f6\u5185\u90e8\u4f1a\u751f\u6210\u4e00\u4e2a UUID \u5b57\u7b26\u4e32\u3002Label \u7684\u4e3b\u8981\u4f5c\u7528\u662f\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u4e8b\u52a1\u6216\u8005\u5bfc\u5165\u4efb\u52a1\uff0c\u5e76\u4e14\u80fd\u591f\u4fdd\u8bc1\u76f8\u540c Label \u7684\u4e8b\u52a1\u6216\u8005\u5bfc\u5165\u4ec5\u4f1a\u6210\u529f\u6267\u884c\u4e00\u6b21\u3002Label \u673a\u5236\u53ef\u4ee5\u4fdd\u8bc1\u5bfc\u5165\u6570\u636e\u7684\u4e0d\u4e22\u4e0d\u91cd\uff0c\u5982\u679c\u4e0a\u6e38\u6570\u636e\u6e90\u80fd\u591f\u4fdd\u8bc1 At-Least-Once \u8bed\u4e49\uff0c\u5219\u914d\u5408 Doris \u7684 Label \u673a\u5236\uff0c\u80fd\u591f\u4fdd\u8bc1 Exactly-Once \u8bed\u4e49\u3002Label \u5728\u4e00\u4e2a\u6570\u636e\u5e93\u4e0b\u5177\u6709\u552f\u4e00\u6027\u3002"),(0,l.yg)("p",null,"Doris \u4f1a\u6839\u636e\u65f6\u95f4\u548c\u6570\u76ee\u6e05\u7406 Label\uff0c\u9ed8\u8ba4 Label \u6570\u76ee\u8d85\u8fc7 2000 \u4e2a\u5c31\u4f1a\u89e6\u53d1\u6dd8\u6c70\uff0c\u9ed8\u8ba4\u8d85\u8fc7 3 \u5929\u7684 Label \u4e5f\u4f1a\u88ab\u6dd8\u6c70\u3002Label \u88ab\u6dd8\u6c70\u540e\u76f8\u540c\u540d\u79f0\u7684 Label \u53ef\u4ee5\u518d\u6b21\u6267\u884c\u6210\u529f\uff0c\u5373\u4e0d\u518d\u5177\u6709\u53bb\u91cd\u8bed\u4e49\u3002"),(0,l.yg)("p",null,"Label \u901a\u5e38\u88ab\u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"\u4e1a\u52a1\u903b\u8f91+\u65f6\u95f4")," \u7684\u683c\u5f0f\u3002\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"my_business1_20220330_125000"),"\u3002\u8fd9\u4e2a Label \u901a\u5e38\u7528\u4e8e\u8868\u793a\uff1a\u4e1a\u52a1 ",(0,l.yg)("inlineCode",{parentName:"p"},"my_business1")," \u8fd9\u4e2a\u4e1a\u52a1\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"2022-03-30 12:50:00")," \u4ea7\u751f\u7684\u4e00\u6279\u6570\u636e\u3002\u901a\u8fc7\u8fd9\u79cd Label \u8bbe\u5b9a\uff0c\u4e1a\u52a1\u4e0a\u53ef\u4ee5\u901a\u8fc7 Label \u67e5\u8be2\u5bfc\u5165\u4efb\u52a1\u72b6\u6001\uff0c\u6765\u660e\u786e\u7684\u83b7\u77e5\u8be5\u65f6\u95f4\u70b9\u6279\u6b21\u7684\u6570\u636e\u662f\u5426\u5df2\u7ecf\u5bfc\u5165\u6210\u529f\u3002\u5982\u679c\u6ca1\u6709\u6210\u529f\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a Label \u7ee7\u7eed\u91cd\u8bd5\u5bfc\u5165\u3002"),(0,l.yg)("h4",{id:"streamload-2pc"},"StreamLoad 2PC"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"#stream-load"},"StreamLoad 2PC"),"\uff0c\u4e3b\u8981\u7528\u4e8e\u652f\u6301 Flink \u5199\u5165 Doris \u65f6\u7684 EOS \u8bed\u4e49\u3002"),(0,l.yg)("h2",{id:"\u663e\u5f0f\u4e8b\u52a1\u64cd\u4f5c"},"\u663e\u5f0f\u4e8b\u52a1\u64cd\u4f5c"),(0,l.yg)("h3",{id:"\u5f00\u542f\u4e8b\u52a1"},"\u5f00\u542f\u4e8b\u52a1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\n\nBEGIN WITH LABEL {user_label}; \n")),(0,l.yg)("p",null,"\u5982\u679c\u6267\u884c\u8be5\u8bed\u53e5\u65f6\uff0c\u5f53\u524d Session \u6b63\u5904\u4e8e\u4e00\u4e2a\u4e8b\u52a1\u7684\u4e2d\u95f4\u8fc7\u7a0b\uff0c\u90a3\u4e48 Doris \u4f1a\u5ffd\u7565\u8be5\u8bed\u53e5\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e8b\u52a1\u662f\u4e0d\u80fd\u5d4c\u5957\u7684\u3002"),(0,l.yg)("h3",{id:"\u63d0\u4ea4\u4e8b\u52a1"},"\u63d0\u4ea4\u4e8b\u52a1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"COMMIT;\n")),(0,l.yg)("p",null,"\u7528\u4e8e\u63d0\u4ea4\u5728\u5f53\u524d\u4e8b\u52a1\u4e2d\u8fdb\u884c\u7684\u6240\u6709\u4fee\u6539\u3002"),(0,l.yg)("h3",{id:"\u56de\u6eda\u4e8b\u52a1"},"\u56de\u6eda\u4e8b\u52a1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ROLLBACK;\n")),(0,l.yg)("p",null,"\u7528\u4e8e\u64a4\u9500\u5f53\u524d\u4e8b\u52a1\u7684\u6240\u6709\u4fee\u6539\u3002"),(0,l.yg)("p",null,"\u4e8b\u52a1\u662f Session \u7ea7\u522b\u7684\uff0c\u5982\u679c Session \u4e2d\u6b62\u6216\u5173\u95ed\uff0c\u4e5f\u4f1a\u81ea\u52a8\u56de\u6eda\u8be5\u4e8b\u52a1\u3002"),(0,l.yg)("h2",{id:"\u591a\u6761-sql-\u8bed\u53e5\u5199\u5165"},"\u591a\u6761 SQL \u8bed\u53e5\u5199\u5165"),(0,l.yg)("p",null,"\u76ee\u524d Doris \u4e2d\u652f\u6301 2 \u79cd\u65b9\u5f0f\u7684\u4e8b\u52a1\u5199\u5165\u3002"),(0,l.yg)("h3",{id:"\u5355\u8868\u591a\u6b21insert-into-values\u5199\u5165"},"\u5355\u8868\u591a\u6b21",(0,l.yg)("inlineCode",{parentName:"h3"},"INSERT INTO VALUES"),"\u5199\u5165"),(0,l.yg)("p",null,"\u5047\u5982\u8868\u7684\u7ed3\u6784\u4e3a\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `dt` (\n    `id` INT(11) NOT NULL,\n    `name` VARCHAR(50) NULL,\n    `score` INT(11) NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,l.yg)("p",null,"\u5199\u5165\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> BEGIN;\nQuery OK, 0 rows affected (0.01 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':''}\n\nmysql> INSERT INTO dt (id, name, score) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (4, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.08 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':'10013'}\n\nmysql> INSERT INTO dt VALUES (6, \"William\", 69), (7, \"Sophia\", 32), (8, \"James\", 64), (9, \"Emma\", 37), (10, \"Liam\", 64);\nQuery OK, 5 rows affected (0.00 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':'10013'}\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (1.02 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'VISIBLE', 'txnId':'10013'}\n")),(0,l.yg)("p",null,"\u8fd9\u79cd\u5199\u5165\u65b9\u5f0f\u4e0d\u4ec5\u53ef\u4ee5\u5b9e\u73b0\u5199\u5165\u7684\u539f\u5b50\u6027\uff0c\u800c\u4e14\u5728 Doris \u4e2d\uff0c\u80fd\u63d0\u5347 ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES")," \u7684\u5199\u5165\u6027\u80fd\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u7528\u6237\u540c\u65f6\u5f00\u542f\u4e86 ",(0,l.yg)("inlineCode",{parentName:"p"},"Group Commit")," \u548c\u4e8b\u52a1\u5199\uff0c\u4e8b\u52a1\u5199\u751f\u6548\u3002"),(0,l.yg)("p",null,"\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"import/load-atomicity.md#insert-into"},"Insert Into"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002 "),(0,l.yg)("h3",{id:"\u591a\u8868\u591a\u6b21insert-into-select-update-delete\u5199\u5165"},"\u591a\u8868\u591a\u6b21",(0,l.yg)("inlineCode",{parentName:"h3"},"INSERT INTO SELECT"),", ",(0,l.yg)("inlineCode",{parentName:"h3"},"UPDATE"),", ",(0,l.yg)("inlineCode",{parentName:"h3"},"DELETE"),"\u5199\u5165"),(0,l.yg)("p",null,"\u5047\u8bbe\u6709",(0,l.yg)("inlineCode",{parentName:"p"},"dt1"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"dt2"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"dt3")," 3 \u5f20\u8868\uff0c\u8868\u7ed3\u6784\u540c\u4e0a\uff0c\u8868\u4e2d\u6570\u636e\u4e3a\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM dt1;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    60 |\n|    5 | Ava       |    17 |\n+------+-----------+-------+\n5 rows in set (0.04 sec)\n\nmysql> SELECT * FROM dt2;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    6 | William |    69 |\n|    7 | Sophia  |    32 |\n|    8 | James   |    64 |\n|    9 | Emma    |    37 |\n|   10 | Liam    |    64 |\n+------+---------+-------+\n5 rows in set (0.03 sec)\n\nmysql> SELECT * FROM dt3;\nEmpty set (0.03 sec)\n")),(0,l.yg)("p",null,"\u505a\u4e8b\u52a1\u5199\u5165\uff0c\u628a",(0,l.yg)("inlineCode",{parentName:"p"},"dt1"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"dt2"),"\u7684\u6570\u636e\u5199\u5165\u5230",(0,l.yg)("inlineCode",{parentName:"p"},"dt3"),"\u4e2d\uff0c\u540c\u65f6\uff0c\u5bf9",(0,l.yg)("inlineCode",{parentName:"p"},"dt1"),"\u8868\u4e2d\u7684\u5206\u6570\u8fdb\u884c\u66f4\u65b0\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"dt2"),"\u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u5220\u9664\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> BEGIN;\nQuery OK, 0 rows affected (0.00 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':''}\n\n# \u5bfc\u5165\u4efb\u52a1\u7684\u72b6\u6001\u662f PREPARE\nmysql> INSERT INTO dt3 SELECT * FROM dt1;\nQuery OK, 5 rows affected (0.07 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11024'}\n\nmysql> INSERT INTO dt3 SELECT * FROM dt2;\nQuery OK, 5 rows affected (0.08 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11025'}\n\nmysql> UPDATE dt1 SET score = score + 10 WHERE id >= 4;\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11026'}\n\nmysql> DELETE FROM dt2 WHERE id >= 9;\nQuery OK, 0 rows affected (0.01 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11027'}\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (0.03 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'VISIBLE', 'txnId':'11024'}\n")),(0,l.yg)("p",null,"\u67e5\u8be2\u6570\u636e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"# id >= 4 \u7684\u5206\u6570\u52a0 10\nmysql> SELECT * FROM dt1;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    70 |\n|    5 | Ava       |    27 |\n+------+-----------+-------+\n5 rows in set (0.01 sec)\n\n# id >= 9 \u7684\u6570\u636e\u88ab\u5220\u9664\nmysql> SELECT * FROM dt2;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    6 | William |    69 |\n|    7 | Sophia  |    32 |\n|    8 | James   |    64 |\n+------+---------+-------+\n3 rows in set (0.02 sec)\n\n# dt1 \u548c dt2 \u4e2d\u5df2\u63d0\u4ea4\u7684\u6570\u636e\u88ab\u5199\u5165\u5230 dt3 \u4e2d\nmysql> SELECT * FROM dt3;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    60 |\n|    5 | Ava       |    17 |\n|    6 | William   |    69 |\n|    7 | Sophia    |    32 |\n|    8 | James     |    64 |\n|    9 | Emma      |    37 |\n|   10 | Liam      |    64 |\n+------+-----------+-------+\n10 rows in set (0.01 sec)\n")),(0,l.yg)("h4",{id:"\u9694\u79bb\u7ea7\u522b-1"},"\u9694\u79bb\u7ea7\u522b"),(0,l.yg)("p",null,"\u76ee\u524d Doris \u4e8b\u52a1\u5199\u63d0\u4f9b\u7684\u9694\u79bb\u7ea7\u522b\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"READ COMMITTED"),"\u3002\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e8b\u52a1\u4e2d\u7684\u591a\u4e2a\u8bed\u53e5\uff0c\u6bcf\u4e2a\u8bed\u53e5\u4f1a\u8bfb\u53d6\u5230\u672c\u8bed\u53e5\u5f00\u59cb\u6267\u884c\u65f6\u5df2\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u5982:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"}," timestamp | ------------ Session 1 ------------  |  ------------ Session 2 ------------\n   t1      | BEGIN;                               | \n   t2      | # read n rows from dt1 table         |\n           | INSERT INTO dt3 SELECT * FROM dt1;   |\n   t3      |                                      | # write 2 rows to dt1 table\n           |                                      | INSERT INTO dt1 VALUES(...), (...);\n   t4      | # read n + 2 rows from dt1 table     |\n           | INSERT INTO dt3 SELECT * FROM dt1;   |\n   t5      | COMMIT;                              |\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e8b\u52a1\u4e2d\u7684\u591a\u4e2a\u8bed\u53e5\uff0c\u6bcf\u4e2a\u8bed\u53e5\u4e0d\u80fd\u8bfb\u5230\u672c\u4e8b\u52a1\u5185\u5176\u5b83\u8bed\u53e5\u505a\u51fa\u7684\u4fee\u6539\uff0c\u5982\uff1a"),(0,l.yg)("p",{parentName:"li"},"  \u5047\u5982\u4e8b\u52a1\u5f00\u542f\u524d\uff0c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"dt1")," \u6709 5 \u884c\uff0c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"dt2")," \u6709 5 \u884c\uff0c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"dt3")," \u4e3a\u7a7a\uff0c\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a "),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\n# dt2 \u4e2d\u5199\u5165 5 \u884c\uff0c\u4e8b\u52a1\u63d0\u4ea4\u540e\u5171 10 \u884c\nINSERT INTO dt2 SELECT * FROM dt1;\n# dt3 \u4e2d\u5199\u5165 5 \u884c\uff0c\u4e0d\u80fd\u8bfb\u51fa\u4e0a\u4e00\u6b65\u4e2d dt2 \u4e2d\u65b0\u5199\u5165\u7684\u6570\u636e\nINSERT INTO dt3 SELECT * FROM dt2;\nCOMMIT;\n")),(0,l.yg)("p",{parentName:"li"},"  \u5177\u4f53\u7684\u4f8b\u5b50\u4e3a\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'# \u5efa\u8868\u5e76\u5199\u5165\u6570\u636e\nCREATE TABLE `dt1` (\n    `id` INT(11) NOT NULL,\n    `name` VARCHAR(50) NULL,\n    `score` INT(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\nCREATE TABLE dt2 LIKE dt1;\nCREATE TABLE dt3 LIKE dt1;\nINSERT INTO dt1 VALUES (1, "Emily", 25), (2, "Benjamin", 35), (3, "Olivia", 28), (4, "Alexander", 60), (5, "Ava", 17);\nINSERT INTO dt2 VALUES (6, "William", 69), (7, "Sophia", 32), (8, "James", 64), (9, "Emma", 37), (10, "Liam", 64);\n\n# \u4e8b\u52a1\u5199\nBEGIN;\nINSERT INTO dt2 SELECT * FROM dt1;\nINSERT INTO dt3 SELECT * FROM dt2;\nCOMMIT;\n\n# \u67e5\u8be2\nmysql> SELECT * FROM dt2;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    6 | William   |    69 |\n|    7 | Sophia    |    32 |\n|    8 | James     |    64 |\n|    9 | Emma      |    37 |\n|   10 | Liam      |    64 |\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    60 |\n|    5 | Ava       |    17 |\n+------+-----------+-------+\n10 rows in set (0.01 sec)\n\nmysql> SELECT * FROM dt3;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    6 | William |    69 |\n|    7 | Sophia  |    32 |\n|    8 | James   |    64 |\n|    9 | Emma    |    37 |\n|   10 | Liam    |    64 |\n+------+---------+-------+\n5 rows in set (0.01 sec)\n')))),(0,l.yg)("h4",{id:"\u4e8b\u52a1\u4e2d\u6267\u884c\u5931\u8d25\u7684\u8bed\u53e5"},"\u4e8b\u52a1\u4e2d\u6267\u884c\u5931\u8d25\u7684\u8bed\u53e5"),(0,l.yg)("p",null,"\u5f53\u4e8b\u52a1\u4e2d\u7684\u67d0\u4e2a\u8bed\u53e5\u6267\u884c\u5931\u8d25\u65f6\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u5df2\u7ecf\u81ea\u52a8\u56de\u6eda\u3002\u7136\u800c\uff0c\u4e8b\u52a1\u4e2d\u5176\u5b83\u6267\u884c\u6210\u529f\u7684\u8bed\u53e5\uff0c\u4ecd\u7136\u662f\u53ef\u63d0\u4ea4\u6216\u56de\u6eda\u7684\u3002\u5f53\u4e8b\u52a1\u88ab\u6210\u529f\u63d0\u4ea4\u540e\uff0c\u4e8b\u52a1\u4e2d\u6267\u884c\u6210\u529f\u7684\u8bed\u53e5\u7684\u4fee\u6539\u88ab\u5e94\u7528\u3002"),(0,l.yg)("p",null,"\u6bd4\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> BEGIN;\nQuery OK, 0 rows affected (0.00 sec)\n{'label':'txn_insert_c5940d31bf364f57-a48b628886415442', 'status':'PREPARE', 'txnId':''}\n\nmysql> INSERT INTO dt3 SELECT * FROM dt1;\nQuery OK, 5 rows affected (0.07 sec)\n{'label':'txn_insert_c5940d31bf364f57-a48b628886415442', 'status':'PREPARE', 'txnId':'11058'}\n\n# \u5931\u8d25\u7684\u5199\u5165\u81ea\u52a8\u56de\u6eda\nmysql> INSERT INTO dt3 SELECT * FROM dt2;\nERROR 5025 (HY000): Insert has filtered data in strict mode, tracking_url=http://172.21.16.12:9082/api/_load_error_log?file=__shard_3/error_log_insert_stmt_3d1fed266ce443f2-b54d2609c2ea6b11_3d1fed266ce443f2_b54d2609c2ea6b11\n\nmysql> INSERT INTO dt3 SELECT * FROM dt2 WHERE id = 7;\nQuery OK, 0 rows affected (0.07 sec)\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (0.02 sec)\n{'label':'txn_insert_c5940d31bf364f57-a48b628886415442', 'status':'VISIBLE', 'txnId':'11058'}\n")),(0,l.yg)("p",null,"\u67e5\u8be2\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"# dt1 \u7684\u6570\u636e\u88ab\u5199\u5165\u5230 dt3 \u4e2d\uff0cdt2 \u4e2d id = 7\u7684\u6570\u636e\u5199\u5165\u6210\u529f\uff0c\u5176\u5b83\u5199\u5165\u5931\u8d25\nmysql> SELECT * FROM dt3;\n+------+----------+-------+\n| id   | name     | score |\n+------+----------+-------+\n|    1 | Emily    |    25 |\n|    2 | Benjamin |    35 |\n|    3 | Olivia   |    28 |\n|    4 | Alexande |    60 |\n|    5 | Ava      |    17 |\n|    7 | Sophia   |    32 |\n+------+----------+-------+\n6 rows in set (0.01 sec)\n")),(0,l.yg)("h4",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5199\u5165\u7684\u591a\u8868\u5fc5\u987b\u5c5e\u4e8e\u540c\u4e00\u4e2a Database\uff0c\u5426\u5219\u4f1a\u9047\u5230\u9519\u8bef ",(0,l.yg)("inlineCode",{parentName:"p"},"Transaction insert must be in the same database"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e24\u79cd\u4e8b\u52a1\u5199\u5165",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DELETE")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"INSET INTO VALUES")," \u4e0d\u80fd\u6df7\u7528\uff0c\u5426\u5219\u4f1a\u9047\u5230\u9519\u8bef ",(0,l.yg)("inlineCode",{parentName:"p"},"Transaction insert can not insert into values and insert into select at the same time"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/delete/delete-manual"},"Delete \u64cd\u4f5c"),"\u63d0\u4f9b\u4e86\u901a\u8fc7\u8c13\u8bcd\u548c Using \u5b50\u53e5\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u9694\u79bb\u7ea7\u522b\uff0c\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u5bf9\u76f8\u540c\u8868\u7684\u5220\u9664\u5fc5\u987b\u5728\u5199\u5165\u524d\uff0c\u5426\u5219\u4f1a\u9047\u5230\u62a5\u9519 ",(0,l.yg)("inlineCode",{parentName:"p"},"Can not delete because there is a insert operation for the same table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u4ece ",(0,l.yg)("inlineCode",{parentName:"p"},"BEGIN")," \u5f00\u59cb\u7684\u5bfc\u5165\u8017\u65f6\u8d85\u51fa Doris \u914d\u7f6e\u7684 timeout \u65f6\uff0c\u4f1a\u5bfc\u81f4\u4e8b\u52a1\u56de\u6eda\uff0c\u5bfc\u5165\u5931\u8d25\u3002\u76ee\u524d timeout \u4f7f\u7528\u7684\u662f Session \u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"p"},"insert_timeout")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"query_timeout")," \u7684\u6700\u5927\u503c")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u4f7f\u7528 JDBC \u8fde\u63a5 Doris \u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u65f6\uff0c\u8bf7\u5728 JDBC URL \u4e2d\u6dfb\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"useLocalSessionState=true"),"\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u9047\u5230\u9519\u8bef ",(0,l.yg)("inlineCode",{parentName:"p"},"This is in a transaction, only insert, update, delete, commit, rollback is acceptable."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\uff0c\u4e8b\u52a1\u5199\u4e0d\u652f\u6301 Merge-on-Write \u8868\uff0c\u5426\u5219\u4f1a\u9047\u5230\u62a5\u9519 ",(0,l.yg)("inlineCode",{parentName:"p"},"Transaction load is not supported for merge on write unique keys table in cloud mode")))),(0,l.yg)("h2",{id:"stream-load-2pc"},"Stream Load 2PC"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u5728 HTTP Header \u4e2d\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"strong"},"two_phase_commit:true")," \u542f\u7528\u4e24\u9636\u6bb5\u63d0\u4ea4\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl  --location-trusted -u user:passwd -H "two_phase_commit:true" -T test.txt http://fe_host:http_port/api/{db}/{table}/_stream_load\n{\n    "TxnId": 18036,\n    "Label": "55c8ffc9-1c40-4d51-b75e-f2265b3602ef",\n    "TwoPhaseCommit": "true",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 100,\n    "NumberLoadedRows": 100,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 1031,\n    "LoadTimeMs": 77,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 58,\n    "CommitAndPublishTimeMs": 0\n}\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u5bf9\u4e8b\u52a1\u89e6\u53d1 commit \u64cd\u4f5c\uff08\u8bf7\u6c42\u53d1\u5f80 FE \u6216 BE \u5747\u53ef\uff09")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528\u4e8b\u52a1 id \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl -X PUT --location-trusted -u user:passwd -H "txn_id:18036" -H "txn_operation:commit" http://fe_host:http_port/api/{db}/{table}/stream_load2pc\n{\n    "status": "Success",\n    "msg": "transaction [18036] commit successfully."\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 label \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl -X PUT --location-trusted -u user:passwd  -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:commit"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] commit successfully."\n}\n')))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. \u5bf9\u4e8b\u52a1\u89e6\u53d1 abort \u64cd\u4f5c\uff08\u8bf7\u6c42\u53d1\u5f80 FE \u6216 BE \u5747\u53ef\uff09")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528\u4e8b\u52a1 id \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl -X PUT --location-trusted -u user:passwd  -H "txn_id:18037" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/stream_load2pc\n{\n    "status": "Success",\n    "msg": "transaction [18037] abort successfully."\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 label \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl -X PUT --location-trusted -u user:passwd  -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/stream_load2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] abort successfully."\n}\n')))),(0,l.yg)("h2",{id:"broker-load-\u591a\u8868\u4e8b\u52a1"},"Broker Load \u591a\u8868\u4e8b\u52a1"),(0,l.yg)("p",null,"\u6240\u6709 Broker Load \u5bfc\u5165\u4efb\u52a1\u90fd\u662f\u539f\u5b50\u751f\u6548\u7684\u3002\u5e76\u4e14\u5728\u540c\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\u5bf9\u591a\u5f20\u8868\u7684\u5bfc\u5165\u4e5f\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\u3002\u8fd8\u53ef\u4ee5\u901a\u8fc7 Label \u7684\u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u5bfc\u5165\u7684\u4e0d\u4e22\u4e0d\u91cd\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u662f\u4ece HDFS \u5bfc\u5165\u6570\u636e\uff0c\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u4e24\u6279\u6587\u4ef6\uff0c\u5206\u522b\u5bfc\u5165\u5230\u4e24\u4e2a\u8868\u4e2d\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,l.yg)("p",null,"\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u5bfc\u5165\u4e24\u6279\u6587\u4ef6 ",(0,l.yg)("inlineCode",{parentName:"p"},"file-10*")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"file-20*"),"\u3002\u5206\u522b\u5bfc\u5165\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"my_table1")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"my_table2")," \u4e24\u5f20\u8868\u4e2d\u3002\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"my_table1")," \u6307\u5b9a\u5bfc\u5165\u5230\u5206\u533a ",(0,l.yg)("inlineCode",{parentName:"p"},"p1")," \u4e2d\uff0c\u5e76\u4e14\u5c06\u5bfc\u5165\u6e90\u6587\u4ef6\u4e2d\u7b2c\u4e8c\u5217\u548c\u7b2c\u4e09\u5217\u7684\u503c +1 \u540e\u5bfc\u5165\u3002"))}c.isMDXComponent=!0}}]);