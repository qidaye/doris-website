"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[229779],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>T});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,T=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(T,l(l({ref:t},u),{},{components:n})):r.createElement(T,l({ref:t},u))}));function T(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},787898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st-geometryfromtext",id:"version-2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromtext",title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromtext.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-geometryfromtext",permalink:"/docs/2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromtext",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",language:"en"},sidebar:"docs",previous:{title:"ST_CONTAINS",permalink:"/docs/2.1/sql-manual/sql-functions/spatial-functions/st-contains"},next:{title:"ST_LINEFROMTEXT,ST_LINESTRINGFROMTEXT",permalink:"/docs/2.1/sql-manual/sql-functions/spatial-functions/st-linefromtext"}},s={},c=[{value:"ST_GeometryFromText,ST_GeomFromText",id:"st_geometryfromtextst_geomfromtext",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"st_geometryfromtextst_geomfromtext"},"ST_GeometryFromText,ST_GeomFromText"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GEOMETRY ST_GeometryFromText (VARCHAR wkt)")),(0,o.yg)("p",null,"Converting a WKT (Well Known Text) into a corresponding memory geometry"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT,ST,GEOMETRYFROMTEXT,GEOMFROMTEXT"))}p.isMDXComponent=!0}}]);