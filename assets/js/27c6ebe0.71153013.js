"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[463583],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,h=m["".concat(s,".").concat(y)]||m[y]||c[y]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},130872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const i={title:"BITMAP_HASH",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-hash",id:"version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash",title:"BITMAP_HASH",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-hash",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-hash",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BITMAP_HASH",language:"en"},sidebar:"docs",previous:{title:"TO_BITMAP",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/to-bitmap"},next:{title:"BITMAP_FROM_STRING",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-from-string"}},s={},u=[{value:"bitmap_hash",id:"bitmap_hash",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_hash"},"bitmap_hash"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"BITMAP_HASH"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,'Calculating hash value for what your input and return a BITMAP which contain the hash value. MurMur3 is used for this function because it is high-performance with low collision rate. More important, the MurMur3 distribution is "simili-random"; the Chi-Square distribution test is used to prove it. By the way, Different hardware platforms and different SEED may change the result of MurMur3. For more information about its performance, see ',(0,a.yg)("a",{parentName:"p",href:"http://rurban.github.io/smhasher/"},"Smhasher"),"."),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_HASH(<any_value>)")),(0,a.yg)("h4",{id:"arguments"},"Arguments"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<any_value>"),"\nany value or expression. "),(0,a.yg)("h4",{id:"return-type"},"Return Type"),(0,a.yg)("p",null,"BITMAP"),(0,a.yg)("h4",{id:"remarks"},"Remarks"),(0,a.yg)("p",null,"Generally, MurMurHash 32 is friendly to random, short STRING with low collision rate about one-billionth. But for longer STRING, such as your path of system, can cause more frequent collision. If you indexed your system path, you will find a lot of collisions."),(0,a.yg)("p",null,"The following two values are the same."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmap_to_string(bitmap_hash('/System/Volumes/Data/Library/Developer/CommandLineTools/SDKs/MacOSX12.3.sdk/System/Library/Frameworks/KernelManagement.framework/KernelManagement.tbd')) AS a ,\n       bitmap_to_string(bitmap_hash('/System/Library/PrivateFrameworks/Install.framework/Versions/Current/Resources/es_419.lproj/Architectures.strings')) AS b;\n")),(0,a.yg)("p",null,"Here is the result."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-----------+-----------+\n| a         | b         |\n+-----------+-----------+\n| 282251871 | 282251871 |\n+-----------+-----------+\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"If you want to calculate MurMur3 of a certain value, you can"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select bitmap_to_array(bitmap_hash('hello'))[1];\n")),(0,a.yg)("p",null,"Here is the result."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------------------+\n| %element_extract%(bitmap_to_array(bitmap_hash('hello')), 1) |\n+-------------------------------------------------------------+\n|                                                  1321743225 |\n+-------------------------------------------------------------+\n")),(0,a.yg)("p",null,"If you want to ",(0,a.yg)("inlineCode",{parentName:"p"},"count distinct")," some columns, using bitmap has higher performance in some scenes. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select bitmap_count(bitmap_union(bitmap_hash(`word`))) from `words`;\n")),(0,a.yg)("p",null,"Here is the result."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------+\n| bitmap_count(bitmap_union(bitmap_hash(`word`))) |\n+-------------------------------------------------+\n|                                        33263478 |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_HASH,BITMAP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"),(0,a.yg)("p",null,"For more information, see also:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"./bitmap_hash64.md"},"BITMAP_HASH64"))))}c.isMDXComponent=!0}}]);