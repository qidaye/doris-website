"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[275811],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return r?t.createElement(y,a(a({ref:n},c),{},{components:r})):t.createElement(y,a({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82694:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=r(58168),o=(r(296540),r(15680));const l={title:"WORKLOAD_GROUPS",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/workload-group",id:"version-2.0/sql-manual/sql-functions/table-functions/workload-group",title:"WORKLOAD_GROUPS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-functions/workload-group.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/workload-group",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/workload-group",draft:!1,tags:[],version:"2.0",frontMatter:{title:"WORKLOAD_GROUPS",language:"zh-CN"},sidebar:"docs",previous:{title:"FRONTENDS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/frontends"},next:{title:"CATALOGS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/catalogs"}},i={},u=[{value:"<code>workload_groups</code>",id:"workload_groups",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"workload_groups"},(0,o.yg)("inlineCode",{parentName:"h2"},"workload_groups")),(0,o.yg)("h3",{id:"name"},"Name"),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"workload_groups")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210 workload_groups \u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u7528\u6237\u5177\u6709\u6743\u9650\u7684\u8d44\u6e90\u7ec4\u4fe1\u606f\u3002"),(0,o.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"workload_groups()")),(0,o.yg)("p",null,"workload_groups()\u8868\u7ed3\u6784\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> desc function workload_groups();\n+-------+-------------+------+-------+---------+-------+\n| Field | Type        | Null | Key   | Default | Extra |\n+-------+-------------+------+-------+---------+-------+\n| Id    | BIGINT      | No   | false | NULL    | NONE  |\n| Name  | STRING      | No   | false | NULL    | NONE  |\n| Item  | STRING      | No   | false | NULL    | NONE  |\n| Value | STRING      | No   | false | NULL    | NONE  |\n+-------+-------------+------+-------+---------+-------+\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from workload_groups()\\G\n+-------+--------+--------------+-------+\n| Id    | Name   | Item         | Value |\n+-------+--------+--------------+-------+\n| 11001 | normal | memory_limit | 100%  |\n| 11001 | normal | cpu_share    | 10    |\n+-------+--------+--------------+-------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"workload_groups\n")))}d.isMDXComponent=!0}}]);