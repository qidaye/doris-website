"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2118],{15680:(e,r,t)=>{t.d(r,{xA:()=>f,yg:()=>g});var n=t(296540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return t?n.createElement(g,i(i({ref:r},f),{},{components:t})):n.createElement(g,i({ref:r},f))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},246662:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(58168),o=(t(296540),t(15680));const a={title:"Use FE profiler to generate flame graph",language:"en"},i=void 0,l={unversionedId:"developer-guide/fe-profiler",id:"developer-guide/fe-profiler",title:"Use FE profiler to generate flame graph",description:"\x3c!--",source:"@site/community/developer-guide/fe-profiler.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-profiler",permalink:"/community/developer-guide/fe-profiler",draft:!1,tags:[],version:"current",frontMatter:{title:"Use FE profiler to generate flame graph",language:"en"},sidebar:"community",previous:{title:"Setting FE Dev Env - Eclipse",permalink:"/community/developer-guide/fe-eclipse-dev"},next:{title:"Setting Up Dec Env for FE - IntelliJ IDEA",permalink:"/community/developer-guide/fe-idea-dev"}},p={},s=[],f={toc:s},c="wrapper";function d(e){let{components:r,...a}=e;return(0,o.yg)(c,(0,n.A)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"introduce"},"introduce"),(0,o.yg)("p",null,"In versions 2.1.4 and above of Doris, there will be a ",(0,o.yg)("inlineCode",{parentName:"p"},"profile_fe.sh")," script in the fe deployment directory ",(0,o.yg)("inlineCode",{parentName:"p"},"${DORIS_FE_HOME}/bin"),". This script can use the async-profiler tool to generate a flame graph of fe, which can be used to identify the bottleneck points of fe."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Note: The async profiler tool currently only supports Linux and MacOS systems, and does not currently support Windows systems")),(0,o.yg)("p",null,"The usage cases are as follows"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ # By default, monitor FE for 10 seconds to generate a flame graph\n$ ${DORIS_FE_HOME}/bin/profile_fe.sh\n\n$ # Set listening fe for 30 seconds to generate a flame graph\n$ PROFILE_SECONDS=30 ${DORIS_FE_HOME}/bin/profile_fe.sh\n")),(0,o.yg)("p",null,"After running the above command, it will listen to fe for a period of time. During this period, we need to repeatedly send key queries to this FE so that the async-profiler can collect FE's key stack frame information.\nAfter collecting stack frame information, the script will generate an HTML flame graph file in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${DORIS_FE_HOME}/log")," directory. Generally, the bottleneck of fe will appear as a flat top (short and wide) in the flame graph. We can optimize the performance of the code corresponding to these stack frames."),(0,o.yg)("p",null,"The following is an example of a flame graph\n",(0,o.yg)("img",{src:t(133113).A,width:"2864",height:"1434"})),(0,o.yg)("h1",{id:"using-async-profiler-in-lower-versions-of-fe"},"Using async-profiler in lower versions of fe"),(0,o.yg)("p",null,"In versions below 2.1.4, two files need to be manually downloaded"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Download ",(0,o.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/me/bechberger/ap-loader-all/3.0-8/ap-loader-all-3.0-8.jar"},"ap-loader-all-3.0-8.jar")," to the ",(0,o.yg)("inlineCode",{parentName:"li"},"${DORIS_FE_HOME}/lib"),"directory"),(0,o.yg)("li",{parentName:"ol"},"Download ",(0,o.yg)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/doris/master/bin/profile_fe.sh"},"profile_fe.sh")," to the ",(0,o.yg)("inlineCode",{parentName:"li"},"${DORIS_FE_HOME}/bin"),"directory"),(0,o.yg)("li",{parentName:"ol"},"Just run ",(0,o.yg)("inlineCode",{parentName:"li"},"profile_fe.sh"))))}d.isMDXComponent=!0},133113:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/fe-profiler-afb6943b59689e52c7e8ff8a4b6bc3b5.png"}}]);