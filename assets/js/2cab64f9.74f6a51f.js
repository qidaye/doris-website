"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[733142],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=a.createContext({}),u=function(e){var r=a.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=u(e.components);return a.createElement(o.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=t,m=d["".concat(o,".").concat(y)]||d[y]||p[y]||s;return n?a.createElement(m,l(l({ref:r},c),{},{components:n})):a.createElement(m,l({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,l=new Array(s);l[0]=y;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[d]="string"==typeof e?e:t,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},334514:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(58168),t=(n(296540),n(15680));const s={title:"User Defined Variables",language:"en"},l=void 0,i={unversionedId:"query/query-variables/user-defined-variables",id:"version-2.1/query/query-variables/user-defined-variables",title:"User Defined Variables",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query/query-variables/user-defined-variables.md",sourceDirName:"query/query-variables",slug:"/query/query-variables/user-defined-variables",permalink:"/docs/2.1/query/query-variables/user-defined-variables",draft:!1,tags:[],version:"2.1",frontMatter:{title:"User Defined Variables",language:"en"},sidebar:"docs",previous:{title:"SQL Mode",permalink:"/docs/2.1/query/query-variables/sql-mode"},next:{title:"Nereids-the Brand New Planner",permalink:"/docs/2.1/query/nereids/"}},o={},u=[{value:"Usage",id:"usage",level:2},{value:"Grammer",id:"grammer",level:2},{value:"Use restrictions",id:"use-restrictions",level:2},{value:"Example",id:"example",level:2}],c={toc:u},d="wrapper";function p(e){let{components:r,...n}=e;return(0,t.yg)(d,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"User-defined variables refer to values that users can store in custom variables using SQL statements, and these variables can be referenced by other SQL statements. This approach facilitates value passing and simplifies SQL writing."),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)("p",null,"User-defined variable takes the form: @var",(0,t.yg)("em",{parentName:"p"},'name, where the variable name consists of letters, numbers, ".", "'),'", "\xa5", and "$". However, when referenced as a string or identifier, it can also include other characters (e.g. @',"`","var-name","`",'), excluding pure numbers and the standalone ".".'),(0,t.yg)("h2",{id:"grammer"},"Grammer"),(0,t.yg)("p",null,"User-defined variables can be defined using the SET statement:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET @var_name = expr [, @var_name = expr ...];\n")),(0,t.yg)("p",null,"Or, using ",(0,t.yg)("inlineCode",{parentName:"p"},":=")," as the assignment operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET @var_name := expr [, @var_name = expr ...];\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"When declaring a user-defined variable, the @ prefix is mandatory."),(0,t.yg)("li",{parentName:"ul"},"Multiple user-defined variables can be declared simultaneously, separated by commas (,)."),(0,t.yg)("li",{parentName:"ul"},"Multiple declarations of the same variable are allowed, and the newly declared value will override the original value."),(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"expr")," currently does not support expressions."),(0,t.yg)("li",{parentName:"ul"},"If an undeclared variable is referenced in a SQL statement, its value defaults to NULL, and its type is STRING.")),(0,t.yg)("p",null,"User-defined variables can be queried using the SELECT statement:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT @var_name [, @var_name ...];\n")),(0,t.yg)("h2",{id:"use-restrictions"},"Use restrictions"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Viewing existing user-defined variables is not currently supported."),(0,t.yg)("li",{parentName:"ul"},"Assigning a variable to another variable is not currently supported."),(0,t.yg)("li",{parentName:"ul"},"Declaring BITMAP, HLL, PERCENTILE, and ARRAY type variables is not currently supported. JSON type variables are converted to STRING for storage."),(0,t.yg)("li",{parentName:"ul"},"User-defined variables are session-level variables, and all session variables are released when the client disconnects.")),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SET @v1=1, @v2:=2;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT @v1,@v2;\n+------+------+\n| @v1  | @v2  |\n+------+------+\n|    1 |    2 |\n+------+------+\n1 row in set (0.00 sec)\n\nmysql> SELECT @v1+@v2;\n+-------------+\n| (@v1 + @v2) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.01 sec)\n\nmysql> SET @`var-name`=2;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT @`var-name`;\n+-----------+\n| @var-name |\n+-----------+\n|         2 |\n+-----------+\n1 row in set (0.00 sec)\n\nmysql> SET @j := \'{"a": 1, "b": 2, "c": {"d": 4}}\';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT @j;\n+---------------------------------+\n| @j                              |\n+---------------------------------+\n| {"a": 1, "b": 2, "c": {"d": 4}} |\n+---------------------------------+\n1 row in set (0.00 sec)\n\n')))}p.isMDXComponent=!0}}]);