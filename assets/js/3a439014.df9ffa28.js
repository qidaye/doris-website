"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[975664],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(l,".").concat(m)]||p[m]||_[m]||s;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},980641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(58168),a=(t(296540),t(15680));const s={title:"ST_AREA",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st-area",id:"version-2.0/sql-manual/sql-functions/spatial-functions/st-area",title:"ST_AREA",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-area.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-area",permalink:"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-area",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ST_AREA",language:"en"},sidebar:"docs",previous:{title:"ST_ANGLE_SPHERE",permalink:"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle-sphere"},next:{title:"ST_POINT",permalink:"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-point"}},l={},u=[{value:"ST_Area_Square_Meters,ST_Area_Square_Km",id:"st_area_square_metersst_area_square_km",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_area_square_metersst_area_square_km"},"ST_Area_Square_Meters,ST_Area_Square_Km"),(0,a.yg)("h3",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE ST_Area_Square_Meters(GEOMETRY geo)\nDOUBLE ST_Area_Square_Km(GEOMETRY geo)\n")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Calculate the area of the area on the earth's sphere. Currently, the parameter geo supports St_Point, St_LineString, St_Circle and St_Polygon. "),(0,a.yg)("p",null,"Returns zero if the input is St_Point, St_LineString."),(0,a.yg)("p",null,"Among them, the unit returned by ST_Area_Square_Meters (GEOMETRY geo) is square meters, and the unit returned by ST_Area_Square_Km (GEOMETRY geo) is square kilometers."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT ST_Area_Square_Meters(ST_Circle(0, 0, 1));\n+-------------------------------------------------+\n| st_area_square_meters(st_circle(0.0, 0.0, 1.0)) |\n+-------------------------------------------------+\n|                              3.1415926535897869 |\n+-------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Area_Square_Km(ST_Polygon(\"POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))\"));\n+----------------------------------------------------------------------+\n| st_area_square_km(st_polygon('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))')) |\n+----------------------------------------------------------------------+\n|                                                   12364.036567076409 |\n+----------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_Point(0, 1));\n+-------------------------------------------+\n| st_area_square_meters(st_point(0.0, 1.0)) |\n+-------------------------------------------+\n|                                         0 |\n+-------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+-----------------------------------------------------------------+\n| st_area_square_meters(st_linefromtext('LINESTRING (1 1, 2 2)')) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n1 row in set (0.03 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_Area_Square_Meters,ST_Area_Square_Km,ST_Area,ST,Area"))}_.isMDXComponent=!0}}]);