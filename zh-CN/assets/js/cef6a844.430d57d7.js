"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[138660],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},140924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"ALTER-RESOURCE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",title:"ALTER-RESOURCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-RESOURCE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-POLICY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY"},next:{title:"ALTER-COLOCATE-GROUP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP"}},s={},c=[{value:"ALTER-RESOURCE",id:"alter-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-resource"},"ALTER-RESOURCE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER RESOURCE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5df2\u6709\u7684\u8d44\u6e90\u3002\u4ec5 root \u6216 admin \u7528\u6237\u53ef\u4ee5\u4fee\u6539\u8d44\u6e90\u3002\n\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'resource_name\'\nPROPERTIES ("key"="value", ...);\n')),(0,a.yg)("p",null,"\u6ce8\u610f\uff1aresource type \u4e0d\u652f\u6301\u4fee\u6539\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u540d\u4e3a spark0 \u7684 Spark \u8d44\u6e90\u7684\u5de5\u4f5c\u76ee\u5f55\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'spark0\' PROPERTIES ("working_dir" = "hdfs://127.0.0.1:10000/tmp/doris_new");\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u540d\u4e3a remote_s3 \u7684 S3 \u8d44\u6e90\u7684\u6700\u5927\u8fde\u63a5\u6570\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER RESOURCE \'remote_s3\' PROPERTIES ("s3.connection.maximum" = "100");\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u51b7\u70ed\u5206\u5c42S3\u8d44\u6e90\u76f8\u5173\u4fe1\u606f")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u4fee\u6539\u9879",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.access_key")," s3\u7684ak\u4fe1\u606f"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.secret_key")," s3\u7684sk\u4fe1\u606f"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.session_token")," s3\u7684session token\u4fe1\u606f"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.connection.maximum")," s3\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba450"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.connection.timeout")," s3\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba41000ms"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.connection.request.timeout")," s3\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba43000ms"))),(0,a.yg)("li",{parentName:"ul"},"\u7981\u6b62\u4fee\u6539\u9879",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.region")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'s3.bucket"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.root.path")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"s3.endpoint"))))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'  ALTER RESOURCE "showPolicy_1_resource" PROPERTIES("s3.connection.maximum" = "1111");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER, RESOURCE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);