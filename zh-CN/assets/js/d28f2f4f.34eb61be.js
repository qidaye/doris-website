"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[663913],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),y=r,d=c["".concat(i,".").concat(y)]||c[y]||g[y]||s;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},641903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const s={title:"CREATE-STORAGE-VAULT",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},l=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",title:"CREATE-STORAGE-VAULT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-STORAGE-VAULT",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},next:{title:"CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"}},i={},p=[{value:"CREATE-STORAGE-VAULT",id:"create-storage-vault",level:2},{value:"Description",id:"description",level:3},{value:"properties",id:"properties",level:4},{value:"S3 Vault",id:"s3-vault",level:5},{value:"HDFS vault",id:"hdfs-vault",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:3}],u={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-storage-vault"},"CREATE-STORAGE-VAULT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u5b58\u50a8\u5e93\u3002\u672c\u6587\u6863\u7684\u4e3b\u9898\u63cf\u8ff0\u4e86\u521b\u5efa Doris \u81ea\u7ba1\u7406\u5b58\u50a8\u5e93\u7684\u8bed\u6cd5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE STORAGE VAULT [IF NOT EXISTS] vault\n[properties]\n")),(0,r.yg)("h4",{id:"properties"},"properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"type"),"\n\u53ea\u5141\u8bb8\u4e24\u79cd\u7c7b\u578b\u7684\u5b58\u50a8\u5e93:S3 \u548c HDFS\u3002-- \u5fc5\u9700")),(0,r.yg)("h5",{id:"s3-vault"},"S3 Vault"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"s3.endpoint"),"\n\u7528\u4e8e\u5bf9\u8c61\u5b58\u50a8\u7684\u7aef\u70b9\u3002\u6ce8\u610f,\u8bf7\u4e0d\u8981\u63d0\u4f9b\u5e26\u6709 http:// \u6216 https:// \u7684\u7aef\u70b9\u3002\u5bf9\u4e8e Azure Blob \u5b58\u50a8,\u7aef\u70b9\u5e94\u8be5\u50cf ${ak}.blob.core.windows.net/\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"s3.region"),"\n\u60a8\u7684\u5b58\u50a8\u6876\u7684\u533a\u57df\u3002(\u5982\u679c\u60a8\u4f7f\u7528 GCP \u6216 AZURE,\u5219\u4e0d\u9700\u8981)\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"s3.root.path"),"\n\u5b58\u50a8\u6570\u636e\u7684\u8def\u5f84\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"s3.bucket"),"\n\u60a8\u7684\u5bf9\u8c61\u5b58\u50a8\u8d26\u6237\u7684\u5b58\u50a8\u6876\u3002(\u5982\u679c\u60a8\u4f7f\u7528 Azure,\u5219\u4e3a StorageAccount)\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"s3.access_key"),"\n\u60a8\u7684\u5bf9\u8c61\u5b58\u50a8\u8d26\u6237\u7684\u8bbf\u95ee\u5bc6\u94a5\u3002(\u5982\u679c\u60a8\u4f7f\u7528 Azure,\u5219\u4e3a AccountName)\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"s3.secret_key"),"\n\u60a8\u7684\u5bf9\u8c61\u5b58\u50a8\u8d26\u6237\u7684\u79d8\u5bc6\u5bc6\u94a5\u3002(\u5982\u679c\u60a8\u4f7f\u7528 Azure,\u5219\u4e3a AccountKey)\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"provider"),"\n\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u4e91\u4f9b\u5e94\u5546\u3002-- \u5fc5\u9700"),(0,r.yg)("h5",{id:"hdfs-vault"},"HDFS vault"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fs.defaultFS"),"\nHadoop \u914d\u7f6e\u5c5e\u6027,\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u9ed8\u8ba4\u6587\u4ef6\u7cfb\u7edf\u3002-- \u5fc5\u9700"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"path_prefix"),"\n\u5b58\u50a8\u6570\u636e\u7684\u8def\u5f84\u524d\u7f00\u3002-- \u53ef\u9009. \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u4f1a\u4f7f\u7528user\u8d26\u6237\u4e0b\u7684\u9ed8\u8ba4\u8def\u5f84\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.username"),"\nHadoop \u914d\u7f6e\u5c5e\u6027,\u6307\u5b9a\u8bbf\u95ee\u6587\u4ef6\u7cfb\u7edf\u7684\u7528\u6237\u3002-- \u53ef\u9009. \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u4f1a\u4f7f\u7528\u542f\u52a8hadoop\u8fdb\u7a0b\u7684user."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.security.authentication"),"\n\u7528\u4e8e hadoop \u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002-- \u53ef\u9009. \u5982\u679c\u5e0c\u671b\u4f7f\u7528kerberos\u5219\u53ef\u4ee5\u586b\u5199",(0,r.yg)("inlineCode",{parentName:"p"},"kerberos"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.kerberos.principal"),"\n\u60a8\u7684 kerberos \u4e3b\u4f53\u7684\u8def\u5f84\u3002-- \u53ef\u9009"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.kerberos.keytab"),"\n\u60a8\u7684 kerberos keytab \u7684\u8def\u5f84\u3002-- \u53ef\u9009"),(0,r.yg)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a HDFS storage vault."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS hdfs_vault\n    PROPERTIES (\n    "type"="hdfs",\n    "fs.defaultFS"="hdfs://127.0.0.1:8020"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using azure."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="ak.blob.core.windows.net/",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "AZURE"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using OSS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="oss.aliyuncs.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "cn-hangzhou",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "OSS"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using COS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="cos.ap-guangzhou.myqcloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "ap-guangzhou",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "COS"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using OBS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "cn-north-4",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "OBS"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using AWS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="s3.us-east-1.amazonaws.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "us-east-1",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "S3"\n    );\n')))),(0,r.yg)("h3",{id:"\u5173\u952e\u8bcd"},"\u5173\u952e\u8bcd"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, STORAGE VAULT\n")))}g.isMDXComponent=!0}}]);