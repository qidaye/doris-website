"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[979828],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},875815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const i={title:"TO_BITMAP",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/to-bitmap",id:"sql-manual/sql-functions/bitmap-functions/to-bitmap",title:"TO_BITMAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/to-bitmap.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/to-bitmap",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/to-bitmap",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_BITMAP",language:"zh-CN"},sidebar:"docs",previous:{title:"SEQUENCE_COUNT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/sequence-count"},next:{title:"BITMAP_HASH",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-hash"}},s={},p=[{value:"to_bitmap",id:"to_bitmap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"to_bitmap"},"to_bitmap"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP TO_BITMAP(expr)")),(0,a.yg)("p",null,"\u8f93\u5165\u4e3a\u53d6\u503c\u5728 0 ~ 18446744073709551615 \u533a\u95f4\u7684 unsigned bigint \uff0c\u8f93\u51fa\u4e3a\u5305\u542b\u8be5\u5143\u7d20\u7684bitmap\u3002\n\u5f53\u8f93\u5165\u503c\u4e0d\u5728\u6b64\u8303\u56f4\u65f6\uff0c \u4f1a\u8fd4\u56deNULL\u3002\n\u8be5\u51fd\u6570\u4e3b\u8981\u7528\u4e8estream load\u4efb\u52a1\u5c06\u6574\u578b\u5b57\u6bb5\u5bfc\u5165Doris\u8868\u7684bitmap\u5b57\u6bb5\u3002\u4f8b\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n\nMySQL> select bitmap_to_string(to_bitmap(-1));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(-1)) |\n+---------------------------------+\n|                                 |\n+---------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TO_BITMAP,BITMAP\n")))}m.isMDXComponent=!0}}]);