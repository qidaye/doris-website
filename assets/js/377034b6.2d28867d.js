"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[934425],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,y=p["".concat(s,".").concat(m)]||p[m]||f[m]||l;return r?t.createElement(y,i(i({ref:n},u),{},{components:r})):t.createElement(y,i({ref:n},u))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},705163:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=r(58168),o=(r(296540),r(15680));const l={title:"FLOOR",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/floor",id:"version-2.0/sql-manual/sql-functions/numeric-functions/floor",title:"FLOOR",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/floor.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/floor",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/floor",draft:!1,tags:[],version:"2.0",frontMatter:{title:"FLOOR",language:"en"},sidebar:"docs",previous:{title:"CEIL",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/ceil"},next:{title:"PMOD",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/pmod"}},s={},c=[{value:"floor",id:"floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"floor"},"floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BIGINT floor(DOUBLE x)"),"\nReturns the largest integer value less than or equal to ",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Another alias for this function is ",(0,o.yg)("inlineCode",{parentName:"p"},"dfloor"),".")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select floor(1);\n+------------+\n| floor(1.0) |\n+------------+\n|          1 |\n+------------+\nmysql> select floor(2.4);\n+------------+\n| floor(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select floor(-10.3);\n+--------------+\n| floor(-10.3) |\n+--------------+\n|          -11 |\n+--------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"FLOOR, DFLOOR\n")))}f.isMDXComponent=!0}}]);