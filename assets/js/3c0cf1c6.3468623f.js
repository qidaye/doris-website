"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[875214],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),y=r,g=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},896187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-VARIABLES",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",title:"SHOW-VARIABLES",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-VARIABLES",language:"en"},sidebar:"docs",previous:{title:"SHOW-TABLETS-BELONG",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG"},next:{title:"SHOW-PLUGINS",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-PLUGINS"}},o={},c=[{value:"SHOW-VARIABLES",id:"show-variables",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-variables"},"SHOW-VARIABLES"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW VARIABLES"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display Doris system variables, which can be queried by conditions"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [GLOBAL | SESSION] VARIABLES\n     [LIKE 'pattern' | WHERE expr]\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"show variables is mainly used to view the values of system variables."),(0,r.yg)("li",{parentName:"ul"},"Executing the SHOW VARIABLES command does not require any privileges, it only requires being able to connect to the server."),(0,r.yg)("li",{parentName:"ul"},"Use the like statement to match with variable_name."),(0,r.yg)("li",{parentName:"ul"},"The % percent wildcard can be used anywhere in the matching pattern")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The default here is to match the Variable_name, here is the exact match"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like 'max_connections';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Matching through the percent sign (%) wildcard can match multiple items"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like '%connec%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the Where clause for matching queries"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables where variable_name = 'version';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, VARIABLES\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);