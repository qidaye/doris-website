"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[233175],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var g=r.createContext({}),o=function(e){var a=r.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=o(e.components);return r.createElement(g.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=o(t),c=n,u=y["".concat(g,".").concat(c)]||y[c]||m[c]||i;return t?r.createElement(u,l(l({ref:a},s),{},{components:t})):r.createElement(u,l({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var g in a)hasOwnProperty.call(a,g)&&(p[g]=a[g]);p.originalType=e,p[y]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},484108:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=t(58168),n=(t(296540),t(15680));const i={title:"DBeaver",language:"zh-CN"},l=void 0,p={unversionedId:"ecosystem/bi/dbeaver",id:"version-3.0/ecosystem/bi/dbeaver",title:"DBeaver",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/ecosystem/bi/dbeaver.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/dbeaver",permalink:"/zh-CN/docs/ecosystem/bi/dbeaver",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DBeaver",language:"zh-CN"},sidebar:"docs",previous:{title:"Apache Superset",permalink:"/zh-CN/docs/ecosystem/bi/apache-superset"},next:{title:"DataGrip",permalink:"/zh-CN/docs/ecosystem/bi/datagrip"}},g={},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u6dfb\u52a0\u6570\u636e\u6e90",id:"\u6dfb\u52a0\u6570\u636e\u6e90",level:2},{value:"\u529f\u80fd\u652f\u6301",id:"\u529f\u80fd\u652f\u6301",level:2}],s={toc:o},y="wrapper";function m(e){let{components:a,...i}=e;return(0,n.yg)(y,(0,r.A)({},s,i,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("p",null,"DBeaver \u662f\u4e00\u6b3e\u8de8\u5e73\u53f0\u6570\u636e\u5e93\u5de5\u5177\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u4eba\u5458\u3001\u6570\u636e\u5e93\u7ba1\u7406\u5458\u3001\u5206\u6790\u5e08\u548c\u6240\u6709\u5904\u7406\u6570\u636e\u7684\u4eba\u3002"),(0,n.yg)("p",null,"Apache Doris \u9ad8\u5ea6\u517c\u5bb9 MySQL \u534f\u8bae\uff0c\u53ef\u4ee5\u4f7f\u7528 DBeaver \u7684 MySQL \u9a71\u52a8\u5668\u8fde\u63a5 Apache Doris\uff0c\u5e76\u67e5\u8be2 internal catalog \u548c external catalog \u4e2d\u7684\u6570\u636e\u3002"),(0,n.yg)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.yg)("p",null,"\u5df2\u5b89\u88c5 Dbeaver\n\u53ef\u4ee5\u8bbf\u95ee ",(0,n.yg)("a",{parentName:"p",href:"https://dbeaver.io"},"https://dbeaver.io")," \u4e0b\u8f7d\u5b89\u88c5 DBeaver"),(0,n.yg)("h2",{id:"\u6dfb\u52a0\u6570\u636e\u6e90"},"\u6dfb\u52a0\u6570\u636e\u6e90"),(0,n.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"\u5f53\u524d\u9a8c\u8bc1\u4f7f\u7528 DBeaver 24.0.0 \u7248\u672c")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u542f\u52a8 DBeaver")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728 DBeaver \u7a97\u53e3\u5de6\u4e0a\u89d2\u5355\u51fb\u52a0\u53f7 (",(0,n.yg)("strong",{parentName:"p"},"+"),") \u56fe\u6807\uff0c\u6216\u8005\u5728\u83dc\u5355\u680f\u9009\u62e9 ",(0,n.yg)("strong",{parentName:"p"},"Database > New Database Connection"),"\uff0c\u6253\u5f00 ",(0,n.yg)("strong",{parentName:"p"},"Connect to a database")," \u754c\u9762\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u6dfb\u52a0\u8fde\u63a5 1",src:t(988520).A,width:"1280",height:"756"})),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u6dfb\u52a0\u8fde\u63a5 2",src:t(273795).A,width:"1280",height:"585"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u9009\u62e9 MySQL \u9a71\u52a8\u5668"),(0,n.yg)("p",{parentName:"li"},"\u5728 ",(0,n.yg)("strong",{parentName:"p"},"Select your database")," \u7a97\u53e3\uff0c\u9009\u62e9 ",(0,n.yg)("strong",{parentName:"p"},"MySQL")," \u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u9009\u62e9\u9a71\u52a8",src:t(956218).A,width:"1280",height:"1268"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u914d\u7f6e Doris \u8fde\u63a5 "),(0,n.yg)("p",{parentName:"li"},"\u5728 ",(0,n.yg)("strong",{parentName:"p"},"Connection Settings")," \u7a97\u53e3\u7684 ",(0,n.yg)("strong",{parentName:"p"},"main")," \u6807\u7b7e\u9875\uff0c\u914d\u7f6e\u4ee5\u4e0b\u8fde\u63a5\u4fe1\u606f\uff1a"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Server Host\uff1aDoris \u96c6\u7fa4\u7684 FE \u4e3b\u673a IP \u5730\u5740\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Port\uff1aDoris \u96c6\u7fa4\u7684 FE \u67e5\u8be2\u7aef\u53e3\uff0c\u5982 9030\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Database\uff1aDoris \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807\u6570\u636e\u5e93\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Username\uff1a\u7528\u4e8e\u767b\u5f55 Doris \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u5982 admin\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Password\uff1a\u7528\u4e8e\u767b\u5f55 Doris \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"),(0,n.yg)("admonition",{parentName:"li",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Database \u53ef\u4ee5\u7528\u4e8e\u533a\u522b internal catalog \u548c external catalog\uff0c\u5982\u4ec5\u586b\u5199 Database \u540d\u79f0\uff0c\u5219\u5f53\u524d\u6570\u636e\u6e90\u9ed8\u8ba4\u8fde\u63a5 internal catalog\uff0c\u5982\u586b\u5199\u683c\u5f0f\u4e3a catalog.db\uff0c\u5219\u5f53\u524d\u6570\u636e\u6e90\u9ed8\u8ba4\u8fde\u63a5 Database \u4e2d\u6240\u586b\u5199\u7684 catalog\uff0cDBeaver \u4e2d\u5c55\u793a\u7684\u5e93\u8868\u4e5f\u4e3a\u6240\u8fde\u63a5 catalog \u4e2d\u7684\u5e93\u8868\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 DBeaver \u7684 MySQL \u9a71\u52a8\u5668\u6765\u521b\u5efa\u591a\u4e2a Doris \u6570\u636e\u6e90\u6765\u7ba1\u7406 Doris \u4e2d\u4e0d\u540c\u7684 Catalog\u3002")),(0,n.yg)("admonition",{parentName:"li",title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"\u901a\u8fc7 catalog.db \u7684 Database \u5f62\u5f0f\u6765\u7ba1\u7406\u8fde\u63a5 Doris \u7684 external catalog \u9700\u8981 Doris \u7248\u672c\u5728 2.1.0 \u53ca\u4ee5\u4e0a"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"internal catalog"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u8fde\u63a5 internal catalog",src:t(712725).A,width:"1280",height:"1248"}))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"external catalog"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u8fde\u63a5 external catalog",src:t(343628).A,width:"1280",height:"1248"})))),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u6d4b\u8bd5\u6570\u636e\u6e90\u8fde\u63a5"),(0,n.yg)("p",{parentName:"li"},"\u5728\u586b\u5199\u5b8c\u8fde\u63a5\u4fe1\u606f\u540e\uff0c\u5355\u51fb\u5de6\u4e0b\u89d2 Test Connection \u9a8c\u8bc1\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u7684\u51c6\u786e\u6027\u3002DBeaver \u8fd4\u56de\u5982\u4e0b\u5bf9\u8bdd\u6846\uff0c\u786e\u8ba4\u914d\u7f6e\u8fde\u63a5\u4fe1\u606f\u3002\u5355\u51fb OK \u5373\u786e\u8ba4\u914d\u7f6e\u8fde\u63a5\u4fe1\u606f\u65e0\u8bef\u3002\u7136\u540e\u5355\u51fb\u53f3\u4e0b\u89d2 Finish \u5b8c\u6210\u8fde\u63a5\u914d\u7f6e\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u6d4b\u8bd5\u8fde\u63a5",src:t(263687).A,width:"1280",height:"1248"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8fde\u63a5\u6570\u636e\u5e93"),(0,n.yg)("p",{parentName:"li"},"\u6570\u636e\u5e93\u8fde\u63a5\u5efa\u7acb\u4ee5\u540e\uff0c\u53ef\u4ee5\u5728\u5de6\u4fa7\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bfc\u822a\u770b\u5230\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u8fde\u63a5\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 DBeaver \u8fde\u63a5\u5e76\u7ba1\u7406\u6570\u636e\u5e93\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"\u5efa\u7acb\u8fde\u63a5",src:t(545374).A,width:"1280",height:"756"})))),(0,n.yg)("h2",{id:"\u529f\u80fd\u652f\u6301"},"\u529f\u80fd\u652f\u6301"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5b8c\u5168\u652f\u6301"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u53ef\u89c6\u5316\u67e5\u770b\u7c7b",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Databases",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Tables"),(0,n.yg)("li",{parentName:"ul"},"Views"))))),(0,n.yg)("li",{parentName:"ul"},"Users"),(0,n.yg)("li",{parentName:"ul"},"Administer",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Session Manager"))),(0,n.yg)("li",{parentName:"ul"},"System Info",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Session Variables"),(0,n.yg)("li",{parentName:"ul"},"Global Variables"),(0,n.yg)("li",{parentName:"ul"},"Engines"),(0,n.yg)("li",{parentName:"ul"},"Charsets"),(0,n.yg)("li",{parentName:"ul"},"User Priviages"),(0,n.yg)("li",{parentName:"ul"},"Plugin"))),(0,n.yg)("li",{parentName:"ul"},"\u64cd\u4f5c\u7c7b",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"SQL \u7f16\u8f91\u5668"),(0,n.yg)("li",{parentName:"ul"},"SQL \u63a7\u5236\u53f0"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u57fa\u672c\u652f\u6301"),(0,n.yg)("p",{parentName:"li"},"  \u57fa\u672c\u652f\u6301\u7684\u90e8\u5206\u610f\u4e3a\u53ef\u4ee5\u70b9\u51fb\u67e5\u770b\u4e0d\u4f1a\u62a5\u9519\uff0c\u4f46\u7531\u4e8e\u5b58\u5728\u534f\u8bae\u517c\u5bb9\u95ee\u9898\uff0c\u53ef\u80fd\u5b58\u5728\u663e\u793a\u4e0d\u5168"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u53ef\u89c6\u5316\u67e5\u770b\u7c7b",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u4eea\u8868\u76d8"),(0,n.yg)("li",{parentName:"ul"},"Users/user/properties"),(0,n.yg)("li",{parentName:"ul"},"Session Status"),(0,n.yg)("li",{parentName:"ul"},"Global Status"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4e0d\u652f\u6301"),(0,n.yg)("p",{parentName:"li"},"  \u4e0d\u652f\u6301\u90e8\u5206\u610f\u4e3a\u4f7f\u7528 DBeaver \u7ba1\u7406 Doris \u8fdb\u884c\u67d0\u4e9b\u53ef\u89c6\u5316\u64cd\u4f5c\u65f6\u53ef\u80fd\u4f1a\u62a5\u9519\uff0c\u6216\u8005\u67d0\u4e9b\u53ef\u89c6\u5316\u64cd\u4f5c\u672a\u7ecf\u9a8c\u8bc1\n\u5982\u53ef\u89c6\u5316\u521b\u5efa\u5e93\u8868\u3001schema change\u3001\u589e\u5220\u6539\u6570\u636e\u7b49"))))}m.isMDXComponent=!0},988520:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver1-08e265526a12a1b560d84b179eac1238.png"},273795:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver2-a7f26e8015598024cb730df1f3f341d2.png"},956218:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver3-599f75b71d72b8454f6641c2e575f96c.png"},712725:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver4-9b79f13badba5713605d6647f4648ed9.png"},343628:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver5-f92fa21b93bffc3ce13dfb830da8dd13.png"},263687:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver6-fac1178b7798f028a57c79991dd9a036.png"},545374:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dbeaver7-68de28fe0f0fe59c23972aa3bc39c354.png"}}]);