"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[832079],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},232989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const i={title:"Tableau",language:"en"},o=void 0,l={unversionedId:"ecosystem/bi/tableau",id:"version-2.0/ecosystem/bi/tableau",title:"Tableau",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/bi/tableau.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/tableau",permalink:"/docs/2.0/ecosystem/bi/tableau",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Tableau",language:"en"},sidebar:"docs",previous:{title:"Power BI",permalink:"/docs/2.0/ecosystem/bi/powerbi"},next:{title:"QuickSight",permalink:"/docs/2.0/ecosystem/bi/quicksight"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Driver installation",id:"driver-installation",level:2},{value:"Connection Configuration and Usage",id:"connection-configuration-and-usage",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Tableau is a lightweight data visualization analysis platform that combines data operations with beautiful charts perfectly. It seamlessly combines data computation with visually appealing charts, requiring no coding from the user. By simply dragging and dropping, users can quickly gain insights into the data. They can explore different views and even easily combine multiple data sources to complete tasks such as data visualization, exploration, and analysis."),(0,r.yg)("h2",{id:"precondition"},"Precondition"),(0,r.yg)("p",null,"Tableau Desktop via the following link to download: ",(0,r.yg)("a",{parentName:"p",href:"https://www.tableau.com/products/desktop/download"},"https://www.tableau.com/products/desktop/download")),(0,r.yg)("h2",{id:"driver-installation"},"Driver installation"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install iODBC",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Close the Tableau Desktop"),(0,r.yg)("li",{parentName:"ol"},"Install iODBC Driver Manager. Obtain the latest version (mxkozzz.dmg) from iODBC.org"),(0,r.yg)("li",{parentName:"ol"},"Click on the downloaded dmg file to install"))),(0,r.yg)("li",{parentName:"ol"},"Install the MySQL driver")),(0,r.yg)("p",null,'When choosing the ODBC driver for MySQL to connect to Doris, you should install the MySQL 5.x ODBC driver. Using the latest MySQL driver may result in an "Unsupported command" error when connecting to Doris.'),(0,r.yg)("h2",{id:"connection-configuration-and-usage"},"Connection Configuration and Usage"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click the Tableau Desktop home page and select MySQL at the connection data source"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"main page",src:n(190730).A,width:"2404",height:"1376"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fill in the Doris server address, port and other relevant information, and click sigin in button after correctly filling"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"sign in page",src:n(831809).A,width:"1004",height:"1000"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"After entering Tableau, select the corresponding library table to carry out the relevant compass processing."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"usage page",src:n(610680).A,width:"2880",height:"1800"})))))}d.isMDXComponent=!0},190730:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-tableau-en-1-57811445a76a97b937b0aad613323489.png"},831809:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-tableau-en-2-4b1e57a39ebcbc741040d63e78cfe1fe.png"},610680:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bi-tableau-en-3-3d39203cd29ca43f4d119af4d329be1d.png"}}]);