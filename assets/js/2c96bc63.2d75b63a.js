"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[212183],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>O});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,O=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(O,o(o({ref:t},p),{},{components:r})):n.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},152857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-COLLATION",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",title:"SHOW-COLLATION",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-COLLATION",language:"en"},sidebar:"docs",previous:{title:"SHOW-COLUMN-STATS",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS"},next:{title:"SHOW-DATABASES",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"}},s={},c=[{value:"SHOW-COLLATION",id:"show-collation",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-collation"},"SHOW-COLLATION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"In Doris, the ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW COLLATION")," command is used to display the character set collations available in the database. A collation is a set of rules that determine how data is sorted and compared. These rules affect the storage and retrieval of character data. Doris currently mainly supports the proofreading method utf8_general_ci."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW COLLATION")," command returns the following fields:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Collation: The collation name"),(0,a.yg)("li",{parentName:"ul"},"Charset: The character set"),(0,a.yg)("li",{parentName:"ul"},"Id: The collation's ID"),(0,a.yg)("li",{parentName:"ul"},"Default: Whether this is the default collation for the character set"),(0,a.yg)("li",{parentName:"ul"},"Compiled: Whether the collation is compiled"),(0,a.yg)("li",{parentName:"ul"},"Sortlen: Sort length")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show collation;\n+-----------------+---------+------+---------+----------+---------+\n| Collation       | Charset | Id   | Default | Compiled | Sortlen |\n+-----------------+---------+------+---------+----------+---------+\n| utf8_general_ci | utf8    |   33 | Yes     | Yes      |       1 |\n+-----------------+---------+------+---------+----------+---------+\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, COLLATION\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"),(0,a.yg)("p",null,"Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW COLLATION")," command to give you an idea of the collations available in the database and their properties. This information can help ensure that your character data is sorted and compared as expected. If you have problems comparing or sorting characters, it can be helpful to check your collation settings to make sure they are what you expect."))}d.isMDXComponent=!0}}]);