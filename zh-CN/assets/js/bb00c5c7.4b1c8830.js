"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[179509],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=c(n),p=o,f=y["".concat(l,".").concat(p)]||y[p]||u[p]||s;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[y]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},245184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const s={title:"ST_GEOMETRYFROMWKB,ST_GEOMFROMWKB",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st-geometryfromwkb",id:"version-2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromwkb",title:"ST_GEOMETRYFROMWKB,ST_GEOMFROMWKB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromwkb.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-geometryfromwkb",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromwkb",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ST_GEOMETRYFROMWKB,ST_GEOMFROMWKB",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_ASBINARY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/spatial-functions/st-asbinary"},next:{title:"TO_BASE64",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/to-base64"}},l={},c=[{value:"ST_GeometryFromWKB,ST_GeomFromWKB",id:"st_geometryfromwkbst_geomfromwkb",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:c},y="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"st_geometryfromwkbst_geomfromwkb"},"ST_GeometryFromWKB,ST_GeomFromWKB"),(0,o.yg)("h3",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GEOMETRY ST_GeometryFromWKB(VARCHAR WKB)")),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("p",null,"\u5c06\u4e00\u4e2a\u6807\u51c6 WKB\uff08Well-known binary\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u5185\u5b58\u7684\u51e0\u4f55\u5f62\u5f0f"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_Point(24.7, 56.7))));\n+------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_point(24.7, 56.7)))) |\n+------------------------------------------------------------------+\n| POINT (24.7 56.7)                                                |\n+------------------------------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> select ST_AsText(ST_GeomFromWKB(ST_AsBinary(ST_Point(24.7, 56.7))));\n+--------------------------------------------------------------+\n| st_astext(st_geomfromwkb(st_asbinary(st_point(24.7, 56.7)))) |\n+--------------------------------------------------------------+\n| POINT (24.7 56.7)                                            |\n+--------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"))));\n+------------------------------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_geometryfromtext('LINESTRING (1 1, 2 2)')))) |\n+------------------------------------------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                                                    |\n+------------------------------------------------------------------------------------------+\n1 row in set (0.06 sec)\n\nmysql> select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_Polygon(\"POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))\"))));\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))')))) |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| POLYGON ((114.104486 22.547119, 114.093758 22.547753, 114.096504 22.532057, 114.104229 22.539826, 114.106203 22.54268, 114.104486 22.547119))                                                       |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select ST_AsText(ST_GeomFromWKB(ST_AsBinary(ST_Polygon(\"POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))\"))));\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_astext(st_geomfromwkb(st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))')))) |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| POLYGON ((114.104486 22.547119, 114.093758 22.547753, 114.096504 22.532057, 114.104229 22.539826, 114.106203 22.54268, 114.104486 22.547119))                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"ST_GEOMETRYFROMWKB,ST_GEOMFROMWKB,ST,GEOMETRYFROMWKB,GEOMFROMWKB,WKB"))}u.isMDXComponent=!0}}]);