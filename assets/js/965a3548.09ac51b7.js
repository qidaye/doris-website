"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[605120],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,O=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(O,i(i({ref:t},c),{},{components:n})):r.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},901603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-WORKLOAD-GROUP",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",id:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",title:"ALTER-WORKLOAD-GROUP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-WORKLOAD-GROUP",language:"en"},sidebar:"docs",previous:{title:"ALTER-COLOCATE-GROUP",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP"},next:{title:"ALTER-SQL-BLOCK-RULE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"}},s={},p=[{value:"ALTER-WORKLOAD-GROUP",id:"alter-workload-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-workload-group"},"ALTER-WORKLOAD-GROUP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER WORKLOAD GROUP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to modify the workload group."),(0,a.yg)("p",null,"Syntax:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER WORKLOAD GROUP "rg_name"\nPROPERTIES (\n    property_list\n);\n')),(0,a.yg)("p",null,"NOTE:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Modify the memory_limit property in such a way that the sum of all memory_limit values does not exceed 100%;"),(0,a.yg)("li",{parentName:"ul"},"Support modifying some properties, for example, if only cpu_share is modified, just fill in cpu_share in properties.")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the workload group named g1:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'alter workload group g1\nproperties (\n    "cpu_share"="30",\n    "memory_limit"="30%"\n);\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER, WORKLOAD, GROUP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);