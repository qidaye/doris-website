"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[908553],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>S});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,S=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(S,o(o({ref:t},p),{},{components:n})):r.createElement(S,o({ref:t},p))}));function S(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},370395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const s={title:"SET-PASSWORD",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",title:"SET-PASSWORD",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SET-PASSWORD",language:"en"},sidebar:"docs",previous:{title:"DROP-USER",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"},next:{title:"ALTER-USER",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER"}},l={},c=[{value:"SET-PASSWORD",id:"set-password",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"set-password"},"SET-PASSWORD"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SET PASSWORD"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"The SET PASSWORD command can be used to modify a user's login password. If the ","[FOR user_identity]"," field does not exist, then change the current user's password"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PASSWORD [FOR user_identity] =\n    [PASSWORD('plain password')]|['hashed password']\n")),(0,a.yg)("p",null,"Note that the user_identity here must exactly match the user_identity specified when creating a user with CREATE USER, otherwise an error will be reported that the user does not exist. If user_identity is not specified, the current user is 'username'@'ip', which may not match any user_identity. Current users can be viewed through SHOW GRANTS."),(0,a.yg)("p",null,"The plaintext password is input in the PASSWORD() method; when using a string directly, the encrypted password needs to be passed.\nTo modify the passwords of other users, administrator privileges are required."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the current user's password"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the specified user password"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SET, PASSWORD\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);