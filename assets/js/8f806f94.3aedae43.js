"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[147666],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},730404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(58168),r=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_SUM",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/window-functions/window-function-sum",id:"version-3.0/sql-manual/sql-functions/window-functions/window-function-sum",title:"WINDOW_FUNCTION_SUM",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/window-function-sum.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-sum",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-sum",draft:!1,tags:[],version:"3.0",frontMatter:{title:"WINDOW_FUNCTION_SUM",language:"en"},sidebar:"docs",previous:{title:"Window Functions Overview",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function"},next:{title:"WINDOW_FUNCTION_AVG",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-avg"}},l={},c=[{value:"WINDOW FUNCTION SUM",id:"window-function-sum",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"window-function-sum"},"WINDOW FUNCTION SUM"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"Calculate the sum of the data in the window"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SUM([ALL] expression) [OVER (analytic_clause)]\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Group by property, and calculate the sum of the x columns of the current row and the previous row within the group."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select x, property,   \nsum(x) over    \n(   \npartition by property   \norder by x   \nrows between 1 preceding and 1 following    \n) as 'moving total'    \nfrom int_t where property in ('odd','even');\n\n| x  | property | moving total |\n|----|----------|--------------|\n| 2  | even     | 6            |\n| 4  | even     | 12           |\n| 6  | even     | 18           |\n| 8  | even     | 24           |\n| 10 | even     | 18           |\n| 1  | odd      | 4            |\n| 3  | odd      | 9            |\n| 5  | odd      | 15           |\n| 7  | odd      | 21           |\n| 9  | odd      | 16           |\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,SUM\n")))}p.isMDXComponent=!0}}]);