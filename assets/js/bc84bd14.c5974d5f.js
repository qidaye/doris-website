"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[779055],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),i=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(y,s(s({ref:n},c),{},{components:r})):t.createElement(y,s({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},431513:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var t=r(58168),o=(r(296540),r(15680));const a={title:"resource_groups",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/table-functions/resource-group",id:"version-1.2/sql-manual/sql-functions/table-functions/resource-group",title:"resource_groups",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/table-functions/resource-group.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/resource-group",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/resource-group",draft:!1,tags:[],version:"1.2",frontMatter:{title:"resource_groups",language:"en"},sidebar:"docs",previous:{title:"backends",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/backends"},next:{title:"WINDOW-FUNCTION-LAG",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"}},u={},i=[{value:"<code>resource_groups</code>",id:"resource_groups",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"resource_groups"},(0,o.yg)("inlineCode",{parentName:"h2"},"resource_groups")),(0,o.yg)("h3",{id:"name"},"Name"),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"resource_groups")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Table-Value-Function, generate a temporary table named ",(0,o.yg)("inlineCode",{parentName:"p"},"resource_groups"),". This tvf is used to view informations about current resource groups."),(0,o.yg)("p",null,"This function is used in ",(0,o.yg)("inlineCode",{parentName:"p"},"FROM")," clauses."),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"resource_groups()")),(0,o.yg)("p",null,"The table schema of ",(0,o.yg)("inlineCode",{parentName:"p"},"resource_groups()")," tvf:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> desc function resource_groups();\n+-------+-------------+------+-------+---------+-------+\n| Field | Type        | Null | Key   | Default | Extra |\n+-------+-------------+------+-------+---------+-------+\n| Id    | BIGINT      | No   | false | NULL    | NONE  |\n| Name  | VARCHAR(64) | No   | false | NULL    | NONE  |\n| Item  | VARCHAR(64) | No   | false | NULL    | NONE  |\n| Value | INT         | No   | false | NULL    | NONE  |\n+-------+-------------+------+-------+---------+-------+\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from resource_groups()\\G\n+-------+------------+-----------+-------+\n| Id    | Name       | Item      | Value |\n+-------+------------+-----------+-------+\n| 10076 | group_name | cpu_share |     1 |\n| 10077 | group_test | cpu_share |    10 |\n+-------+------------+-----------+-------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"resource_groups\n")))}d.isMDXComponent=!0}}]);