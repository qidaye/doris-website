"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[845391],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(t),g=r,y=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return t?a.createElement(y,c(c({ref:n},s),{},{components:t})):a.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},957545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=t(58168),r=(t(296540),t(15680));const l={title:"SET-PROPERTY",language:"zh-CN"},c=void 0,o={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",id:"version-2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SET-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},next:{title:"LDAP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP"}},p={},i=[{value:"SET PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:i},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"set-property"},"SET PROPERTY"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SET PROPERTY"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null," \u8bbe\u7f6e\u7528\u6237\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u5206\u914d\u7ed9\u7528\u6237\u7684\u8d44\u6e90\u3001\u5bfc\u5165cluster\u7b49"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n")),(0,r.yg)("p",null,"\u8fd9\u91cc\u8bbe\u7f6e\u7684\u7528\u6237\u5c5e\u6027\uff0c\u662f\u9488\u5bf9 user \u7684\uff0c\u800c\u4e0d\u662f user_identity\u3002\u5373\u5047\u8bbe\u901a\u8fc7 CREATE USER \u8bed\u53e5\u521b\u5efa\u4e86\u4e24\u4e2a\u7528\u6237 'jack'@'%' \u548c 'jack'@'192.%'\uff0c\u5219\u4f7f\u7528 SET PROPERTY \u8bed\u53e5\uff0c\u53ea\u80fd\u9488\u5bf9 jack \u8fd9\u4e2a\u7528\u6237\uff0c\u800c\u4e0d\u662f 'jack'@'%' \u6216 'jack'@'192.%'"),(0,r.yg)("p",null,"key:"),(0,r.yg)("p",null,"\u8d85\u7ea7\u7528\u6237\u6743\u9650:"),(0,r.yg)("p",null,"\u200b        max_user_connections: \u6700\u5927\u8fde\u63a5\u6570\u3002"),(0,r.yg)("p",null,"\u200b        max_query_instances: \u7528\u6237\u540c\u4e00\u65f6\u95f4\u70b9\u6267\u884c\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u7684instance\u4e2a\u6570\u3002"),(0,r.yg)("p",null,"\u200b        sql_block_rules: \u8bbe\u7f6e sql block rules\u3002\u8bbe\u7f6e\u540e\uff0c\u8be5\u7528\u6237\u53d1\u9001\u7684\u67e5\u8be2\u5982\u679c\u5339\u914d\u89c4\u5219\uff0c\u5219\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,r.yg)("p",null,"\u200b        cpu_resource_limit: \u9650\u5236\u67e5\u8be2\u7684cpu\u8d44\u6e90\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,r.yg)("p",null,"\u200b        exec_mem_limit: \u9650\u5236\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,r.yg)("p",null,"\u200b        resource_tags\uff1a\u6307\u5b9a\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\u3002"),(0,r.yg)("p",null,"\u200b        query_timeout\uff1a\u6307\u5b9a\u7528\u6237\u7684\u67e5\u8be2\u8d85\u65f6\u6743\u9650\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u6ce8\uff1a`cpu_resource_limit`, `exec_mem_limit` \u4e24\u4e2a\u5c5e\u6027\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u4f1a\u8bdd\u53d8\u91cf\u4e2d\u503c\u3002\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u6700\u5927\u8fde\u63a5\u6570\u4e3a1000"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684\u67e5\u8be2\u53ef\u7528instance\u4e2a\u6570\u4e3a3000"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684sql block rule"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684 cpu \u4f7f\u7528\u9650\u5236"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u9650\u5236\uff0c\u5355\u4f4d\u5b57\u8282"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u67e5\u8be2\u8d85\u65f6\u9650\u5236\uff0c\u5355\u4f4d\u79d2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SET, PROPERTY\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);