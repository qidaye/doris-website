"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[773789],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>b});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||y[d]||o;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},622629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const o={title:"jsonb_extract",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_extract",id:"version-1.2/sql-manual/sql-functions/json-functions/jsonb_extract",title:"jsonb_extract",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/jsonb_extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_extract",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_extract",draft:!1,tags:[],version:"1.2",frontMatter:{title:"jsonb_extract",language:"en"},sidebar:"docs",previous:{title:"jsonb_parse",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_parse"},next:{title:"jsonb_exists_path",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/jsonb_exists_path"}},i={},c=[{value:"jsonb_extract",id:"jsonb_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"jsonb_exists_path and jsonb_type",id:"jsonb_exists_path-and-jsonb_type",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"jsonb_extract"},"jsonb_extract"),(0,r.yg)("p",null,"jsonb_extract"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"JSONB jsonb_extract(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_isnull(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_bool(JSONB j, VARCHAR json_path)\nINT jsonb_extract_int(JSONB j, VARCHAR json_path)\nBIGINT jsonb_extract_bigint(JSONB j, VARCHAR json_path)\nDOUBLE jsonb_extract_double(JSONB j, VARCHAR json_path)\nSTRING jsonb_extract_string(JSONB j, VARCHAR json_path)\n")),(0,r.yg)("p",null,"jsonb_extract functions extract field specified by json_path from JSONB. A series of functions are provided for different datatype."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"jsonb_extract extract and return JSONB datatype"),(0,r.yg)("li",{parentName:"ul"},"jsonb_extract_isnull check if the field is json null and return BOOLEAN datatype"),(0,r.yg)("li",{parentName:"ul"},"jsonb_extract_bool extract and return BOOLEAN datatype"),(0,r.yg)("li",{parentName:"ul"},"jsonb_extract_int extract and return INT datatype"),(0,r.yg)("li",{parentName:"ul"},"jsonb_extract_bigint extract and return BIGINT datatype"),(0,r.yg)("li",{parentName:"ul"},"jsonb_extract_double extract and return DOUBLE datatype"),(0,r.yg)("li",{parentName:"ul"},"jsonb_extract_STRING extract and return STRING datatype")),(0,r.yg)("p",null,"Exception handling is as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"if the field specified by json_path does not exist, return NULL"),(0,r.yg)("li",{parentName:"ul"},"if datatype of the field specified by json_path is not the same with type of jsonb_extract_t, return t if it can be cast to t else NULL")),(0,r.yg)("h2",{id:"jsonb_exists_path-and-jsonb_type"},"jsonb_exists_path and jsonb_type"),(0,r.yg)("h3",{id:"description-1"},"description"),(0,r.yg)("h4",{id:"syntax-1"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN jsonb_exists_path(JSONB j, VARCHAR json_path)\nSTRING jsonb_type(JSONB j, VARCHAR json_path)\n")),(0,r.yg)("p",null,"There are two extra functions to check field existence and type"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"jsonb_exists_path check the existence of the field specified by json_path, return TRUE or FALS"),(0,r.yg)("li",{parentName:"ul"},"jsonb_exists_path get the type as follows of the field specified by json_path, return NULL if it does not exist",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"object"),(0,r.yg)("li",{parentName:"ul"},"array"),(0,r.yg)("li",{parentName:"ul"},"null"),(0,r.yg)("li",{parentName:"ul"},"bool"),(0,r.yg)("li",{parentName:"ul"},"int"),(0,r.yg)("li",{parentName:"ul"},"bigint"),(0,r.yg)("li",{parentName:"ul"},"double"),(0,r.yg)("li",{parentName:"ul"},"string")))),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")," for more."),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"JSONB, JSON, jsonb_extract, jsonb_extract_isnull, jsonb_extract_bool, jsonb_extract_int, jsonb_extract_bigint, jsonb_extract_double, jsonb_extract_string, jsonb_exists_path, jsonb_type"))}y.isMDXComponent=!0}}]);