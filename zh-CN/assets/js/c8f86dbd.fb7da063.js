"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[431380],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>_});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),b=o,_=p["".concat(c,".").concat(b)]||p[b]||j[b]||a;return n?r.createElement(_,s(s({ref:t},u),{},{components:n})):r.createElement(_,s({ref:t},u))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},943128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(58168),o=(n(296540),n(15680));const a={title:"jsonb_extract",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_extract",id:"version-1.2/sql-manual/sql-functions/json-functions/jsonb_extract",title:"jsonb_extract",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/jsonb_extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_extract",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_extract",draft:!1,tags:[],version:"1.2",frontMatter:{title:"jsonb_extract",language:"zh-CN"},sidebar:"docs",previous:{title:"jsonb_parse",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_parse"},next:{title:"jsonb_exists_path",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path"}},c={},i=[{value:"jsonb_extract",id:"jsonb_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},p="wrapper";function j(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"jsonb_extract"},"jsonb_extract"),(0,o.yg)("p",null,"jsonb_extract"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"JSONB jsonb_extract(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_isnull(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_bool(JSONB j, VARCHAR json_path)\nINT jsonb_extract_int(JSONB j, VARCHAR json_path)\nBIGINT jsonb_extract_bigint(JSONB j, VARCHAR json_path)\nDOUBLE jsonb_extract_double(JSONB j, VARCHAR json_path)\nSTRING jsonb_extract_string(JSONB j, VARCHAR json_path)\n")),(0,o.yg)("p",null,"jsonb_extract\u662f\u4e00\u7cfb\u5217\u51fd\u6570\uff0c\u4eceJSONB\u7c7b\u578b\u7684\u6570\u636e\u4e2d\u63d0\u53d6json_path\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u6839\u636e\u8981\u63d0\u53d6\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u540c\u63d0\u4f9b\u4e0d\u540c\u7684\u7cfb\u5217\u51fd\u6570\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"jsonb_extract\u8fd4\u56deJSONB\u7c7b\u578b"),(0,o.yg)("li",{parentName:"ul"},"jsonb_extract_isnull\u8fd4\u56de\u662f\u5426\u4e3ajson null\u7684BOOLEAN\u7c7b\u578b"),(0,o.yg)("li",{parentName:"ul"},"jsonb_extract_bool\u8fd4\u56deBOOLEAN\u7c7b\u578b"),(0,o.yg)("li",{parentName:"ul"},"jsonb_extract_int\u8fd4\u56deINT\u7c7b\u578b"),(0,o.yg)("li",{parentName:"ul"},"jsonb_extract_bigint\u8fd4\u56deBIGINT\u7c7b\u578b"),(0,o.yg)("li",{parentName:"ul"},"jsonb_extract_double\u8fd4\u56deDOUBLE\u7c7b\u578b"),(0,o.yg)("li",{parentName:"ul"},"jsonb_extract_STRING\u8fd4\u56deSTRING\u7c7b\u578b")),(0,o.yg)("p",null,"\u7279\u6b8a\u60c5\u51b5\u5904\u7406\u5982\u4e0b\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5982\u679cjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u4e2d\u4e0d\u5b58\u5728\uff0c\u8fd4\u56deNULL"),(0,o.yg)("li",{parentName:"ul"},"\u5982\u679cjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u4e2d\u7684\u5b9e\u9645\u7c7b\u578b\u548cjsonb_extract_t\u6307\u5b9a\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5982\u679c\u80fd\u65e0\u635f\u8f6c\u6362\u6210\u6307\u5b9a\u7c7b\u578b\u8fd4\u56de\u6307\u5b9a\u7c7b\u578bt\uff0c\u5982\u679c\u4e0d\u80fd\u5219\u8fd4\u56deNULL")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")," \u4e2d\u7684\u793a\u4f8b"),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSONB, JSON, jsonb_extract, jsonb_extract_isnull, jsonb_extract_bool, jsonb_extract_int, jsonb_extract_bigint, jsonb_extract_double, jsonb_extract_string"))}j.isMDXComponent=!0}}]);