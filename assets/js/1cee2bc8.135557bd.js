"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[513972],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>w});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,w=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(w,c(c({ref:n},s),{},{components:t})):o.createElement(w,c({ref:n},s))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},298820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(58168),r=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_COUNT",language:"en"},c=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/window-function-count",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function-count",title:"WINDOW_FUNCTION_COUNT",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-count.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-count",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-count",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WINDOW_FUNCTION_COUNT",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_MIN",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-min"},next:{title:"WINDOW_FUNCTION_RANK",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-rank"}},u={},l=[{value:"WINDOW FUNCTION COUNT",id:"window-function-count",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"window-function-count"},"WINDOW FUNCTION COUNT"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"Count the number of occurrences of data in the window"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"COUNT(expression) [OVER (analytic_clause)]\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Count the number of occurrences of x from the current row to the first row."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select x, property,   \ncount(x) over   \n(   \npartition by property    \norder by x    \nrows between unbounded preceding and current row    \n) as 'cumulative total'    \nfrom int_t where property in ('odd','even');\n\n | x  | property | cumulative count |\n |----|----------|------------------|\n | 2  | even     | 1                |\n | 4  | even     | 2                |\n | 6  | even     | 3                |\n | 8  | even     | 4                |\n | 10 | even     | 5                |\n | 1  | odd      | 1                |\n | 3  | odd      | 2                |\n | 5  | odd      | 3                |\n | 7  | odd      | 4                |\n | 9  | odd      | 5                |\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,COUNT\n")))}p.isMDXComponent=!0}}]);