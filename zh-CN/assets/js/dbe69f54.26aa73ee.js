"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[893230],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,y=u["".concat(o,".").concat(f)]||u[f]||d[f]||s;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},968371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const s={title:"ST_Distance_Sphere",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st_distance_sphere",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere",title:"ST_Distance_Sphere",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_distance_sphere",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_Distance_Sphere",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Circle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_circle"},next:{title:"ST_Angle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle"}},o={},c=[{value:"ST_Distance_Sphere",id:"st_distance_sphere",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_distance_sphere"},"ST_Distance_Sphere"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Distance_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)")),(0,a.yg)("p",null,"\u8ba1\u7b97\u5730\u7403\u4e24\u70b9\u4e4b\u95f4\u7684\u7403\u9762\u8ddd\u79bb\uff0c\u5355\u4f4d\u4e3a \u7c73\u3002\u4f20\u5165\u7684\u53c2\u6570\u5206\u522b\u4e3aX\u70b9\u7684\u7ecf\u5ea6\uff0cX\u70b9\u7684\u7eac\u5ea6\uff0cY\u70b9\u7684\u7ecf\u5ea6\uff0cY\u70b9\u7684\u7eac\u5ea6\u3002"),(0,a.yg)("p",null,"x_lng \u548c y_lng \u90fd\u662f\u7ecf\u5ea6\u6570\u636e\uff0c\u5408\u7406\u7684\u53d6\u503c\u8303\u56f4\u662f ","[-180, 180]","\u3002\nx_lat \u548c y_lat \u90fd\u662f\u7eac\u5ea6\u6570\u636e\uff0c\u5408\u7406\u7684\u53d6\u503c\u8303\u56f4\u662f ","[-90, 90]","\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_DISTANCE_SPHERE,ST,DISTANCE,SPHERE"))}d.isMDXComponent=!0}}]);