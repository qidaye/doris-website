"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[540716],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=l,m=u["".concat(i,".").concat(y)]||u[y]||d[y]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},799073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(58168),l=(t(296540),t(15680));const a={title:"EXPLODE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/explode",id:"version-3.0/sql-manual/sql-functions/table-functions/explode",title:"EXPLODE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-functions/explode.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode",draft:!1,tags:[],version:"3.0",frontMatter:{title:"EXPLODE",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPLODE_JSON_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array"},next:{title:"EXPLODE_SPLIT",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-split"}},i={},p=[{value:"explode",id:"explode",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"explode"},"explode"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u9700\u914d\u5408 Lateral View \u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u5c06 array \u5217\u5c55\u5f00\u6210\u591a\u884c\u3002\u5f53 array \u4e3aNULL\u6216\u8005\u4e3a\u7a7a\u65f6\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"explode_outer")," \u8fd4\u56deNULL\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"explode")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"explode_outer")," \u5747\u4f1a\u8fd4\u56de array \u5185\u90e8\u7684NULL\u5143\u7d20\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"explode(expr)\nexplode_outer(expr)\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select e1 from (select 1 k1) as t lateral view explode([1,2,3]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer(null) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([]) tmp1 as e1;\nEmpty set (0.010 sec)\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"EXPLODE,EXPLODE_OUTER,ARRAY"))}d.isMDXComponent=!0}}]);