"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[110702],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),y=r,g=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},898056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const l={title:"SHOW-PROPERTY",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",title:"SHOW-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-RESTORE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-RESTORE"},next:{title:"SHOW-TRIGGERS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-TRIGGERS"}},i={},s=[{value:"SHOW-PROPERTY",id:"show-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-property"},"SHOW-PROPERTY"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW PROPERTY"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u7528\u6237\u7684\u5c5e\u6027"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY [FOR user] [LIKE key]\nSHOW ALL PROPERTIES [LIKE key]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"user")),(0,r.yg)("p",{parentName:"li"}," \u67e5\u770b\u6307\u5b9a\u7528\u6237\u7684\u5c5e\u6027\u3002 \u5982\u679c\u672a\u6307\u5b9a\uff0c\u8bf7\u68c0\u67e5\u5f53\u524d\u7528\u6237\u7684\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"LIKE")),(0,r.yg)("p",{parentName:"li"}," \u6a21\u7cca\u5339\u914d\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u540d\u6765\u5b8c\u6210\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ALL")," "),(0,r.yg)("p",{parentName:"li"}," \u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u5c5e\u6027(\u4ece2.0.3\u7248\u672c\u5f00\u59cb\u652f\u6301)"))),(0,r.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show property like'%connection%';\n+----------------------+-------+\n| Key                  | Value |\n+----------------------+-------+\n| max_user_connections | 100   |\n+----------------------+-------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Key")),(0,r.yg)("p",{parentName:"li"},"\u5c5e\u6027\u540d.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Value")),(0,r.yg)("p",{parentName:"li"},"\u5c5e\u6027\u503c."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show all properties like "%connection%";\n+-------------------+--------------------------------------+\n| User              | Properties                           |\n+-------------------+--------------------------------------+\n| root              | {"max_user_connections": "100"}      |\n| admin             | {"max_user_connections": "100"}      |\n| default_cluster:a | {"max_user_connections": "1000"}     |\n+-------------------+--------------------------------------+\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"User")),(0,r.yg)("p",{parentName:"li"},"\u7528\u6237\u540d.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Properties")),(0,r.yg)("p",{parentName:"li"},"\u5bf9\u5e94\u7528\u6237\u5404\u4e2aproperty\u7684key:value."))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b jack \u7528\u6237\u7684\u5c5e\u6027"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY FOR 'jack'\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b jack \u7528\u6237\u5bfc\u5165cluster\u76f8\u5173\u5c5e\u6027"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY FOR 'jack' LIKE '%load_cluster%'\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u7528\u6237\u5bfc\u5165cluster\u76f8\u5173\u5c5e\u6027"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL PROPERTIES LIKE '%load_cluster%'\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, PROPERTY, ALL\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);