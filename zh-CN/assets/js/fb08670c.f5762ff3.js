"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[362585],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=i,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},618048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const a={title:"bitmap_union",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_union",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_union",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_union",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_union",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_and",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and"},next:{title:"bitmap_xor",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_xor"}},p={},u=[{value:"bitmap_union function",id:"bitmap_union-function",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_union-function"},"bitmap_union function"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("p",null,"\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u5e76\u96c6\u3002\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u5982\uff1a\u8ba1\u7b97PV\uff0cUV\u3002"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_UNION(BITMAP value)")),(0,i.yg)("p",null,"\u8f93\u5165\u4e00\u7ec4 bitmap \u503c\uff0c\u6c42\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u5e76\u96c6\uff0c\u5e76\u8fd4\u56de\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")),(0,i.yg)("p",null,"\u548c bitmap_count \u51fd\u6570\u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u6c42\u5f97\u7f51\u9875\u7684 UV \u6570\u636e"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")),(0,i.yg)("p",null,"\u5f53 user_id \u5b57\u6bb5\u4e3a int \u65f6\uff0c\u4e0a\u9762\u67e5\u8be2\u8bed\u4e49\u7b49\u540c\u4e8e"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select page_id, count(distinct user_id) from table group by page_id;\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_UNION, BITMAP\n")))}m.isMDXComponent=!0}}]);