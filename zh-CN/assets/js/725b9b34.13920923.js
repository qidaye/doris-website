"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[959889],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,c(c({ref:n},s),{},{components:t})):r.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},839799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const o={title:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",language:"zh-CN"},c=void 0,i={unversionedId:"admin-manual/be/check-rpc-channel",id:"version-2.1/admin-manual/be/check-rpc-channel",title:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/be/check-rpc-channel.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/check-rpc-channel",permalink:"/zh-CN/docs/2.1/admin-manual/be/check-rpc-channel",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"Statistic Action",permalink:"/zh-CN/docs/2.1/admin-manual/fe/statistic-action"},next:{title:"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",permalink:"/zh-CN/docs/2.1/admin-manual/be/reset-rpc-channel"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58"},"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u529f\u80fd\u7528\u4e8e\u68c0\u67e5brpc\u7684\u8fde\u63a5\u7f13\u5b58\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"host_to_check")),(0,a.yg)("p",{parentName:"li"},"  \u9700\u8981\u67e5\u68c0\u7684IP\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"remot_brpc_port")),(0,a.yg)("p",{parentName:"li"},"  \u9700\u8981\u67e5\u68c0\u7684\u7aef\u53e3\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"payload_size")),(0,a.yg)("p",{parentName:"li"},"  \u8d1f\u8f7d\u5927\u5c0f\uff0c\u5355\u4f4dB\uff0c\u53d6\u503c\u8303\u56f41~1024000\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data": "open brpc connection to {host_to_check}:{remot_brpc_port} success.",\n    "count":0\n}\n```\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```\ncurl http://127.0.0.1:8040/api/check_rpc_channel/127.0.0.1/8060/1024000\n```\n")))}m.isMDXComponent=!0}}]);