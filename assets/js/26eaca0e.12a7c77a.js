"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[176712],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},646997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const o={title:"User Property",language:"en"},a=void 0,l={unversionedId:"admin-manual/config/user-property",id:"version-2.0/admin-manual/config/user-property",title:"User Property",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/config/user-property.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/user-property",permalink:"/docs/2.0/admin-manual/config/user-property",draft:!1,tags:[],version:"2.0",frontMatter:{title:"User Property",language:"en"},sidebar:"docs",previous:{title:"BE Configuration",permalink:"/docs/2.0/admin-manual/config/be-config"},next:{title:"Using Audit Log Plugin",permalink:"/docs/2.0/admin-manual/audit-plugin"}},u={},s=[{value:"View configuration items",id:"view-configuration-items",level:2},{value:"Set configuration items",id:"set-configuration-items",level:2},{value:"Application examples",id:"application-examples",level:2},{value:"Configuration item list",id:"configuration-item-list",level:2},{value:"max_user_connections",id:"max_user_connections",level:3},{value:"max_query_instances",id:"max_query_instances",level:3},{value:"resource",id:"resource",level:3},{value:"quota",id:"quota",level:3},{value:"default_load_cluster",id:"default_load_cluster",level:3},{value:"load_cluster",id:"load_cluster",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"user-configuration-item"},"User configuration item"),(0,i.yg)("p",null,"This document mainly introduces related configuration items at the User level. The configuration of the User level is mainly effective for a single user. Each user can set their own User property. Does not affect each other."),(0,i.yg)("h2",{id:"view-configuration-items"},"View configuration items"),(0,i.yg)("p",null,"After the FE is started, on the MySQL client, use the following command to view the User configuration items:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"SHOW PROPERTY [FOR user] [LIKE key pattern]")),(0,i.yg)("p",null,"The specific syntax can be queried through the command: ",(0,i.yg)("inlineCode",{parentName:"p"},"help show property;"),"."),(0,i.yg)("h2",{id:"set-configuration-items"},"Set configuration items"),(0,i.yg)("p",null,"After FE is started, on the MySQL client, modify the User configuration items with the following command:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"SET PROPERTY [FOR'user'] 'key' = 'value' [,'key' ='value']")),(0,i.yg)("p",null,"The specific syntax can be queried through the command: ",(0,i.yg)("inlineCode",{parentName:"p"},"help set property;"),"."),(0,i.yg)("p",null,"User-level configuration items will only take effect for the specified users, and will not affect the configuration of other users."),(0,i.yg)("h2",{id:"application-examples"},"Application examples"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Modify the max_user_connections of user Billie"),(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")," to check that the current maximum number of links for Billie users is 100."),(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")," to modify the current maximum number of connections for Billie users to 200."))),(0,i.yg)("h2",{id:"configuration-item-list"},"Configuration item list"),(0,i.yg)("h3",{id:"max_user_connections"},"max_user_connections"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"The maximum number of user connections, the default value is 100 In general, this parameter does not need to be changed unless the number of concurrent queries exceeds the default value.\n")),(0,i.yg)("h3",{id:"max_query_instances"},"max_query_instances"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"The maximum number of instances that the user can use at a certain point in time, The default value is -1, negative number means use default_max_query_instances config.\n")),(0,i.yg)("h3",{id:"resource"},"resource"),(0,i.yg)("h3",{id:"quota"},"quota"),(0,i.yg)("h3",{id:"default_load_cluster"},"default_load_cluster"),(0,i.yg)("h3",{id:"load_cluster"},"load_cluster"))}m.isMDXComponent=!0}}]);