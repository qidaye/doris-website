"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[101446],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},973837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const o={title:"Cluster upgrade",language:"en"},i=void 0,l={unversionedId:"admin-manual/cluster-management/upgrade",id:"version-1.2/admin-manual/cluster-management/upgrade",title:"Cluster upgrade",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/cluster-management/upgrade.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/upgrade",permalink:"/docs/1.2/admin-manual/cluster-management/upgrade",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Cluster upgrade",language:"en"},sidebar:"docs",previous:{title:"SYNC",permalink:"/docs/1.2/sql-manual/sql-reference/Utility-Statements/SYNC"},next:{title:"Elastic scaling",permalink:"/docs/1.2/admin-manual/cluster-management/elastic-expansion"}},s={},c=[{value:"Preparen",id:"preparen",level:2},{value:"Test the correctness of BE upgrade",id:"test-the-correctness-of-be-upgrade",level:2},{value:"Testing FE Metadata Compatibility",id:"testing-fe-metadata-compatibility",level:2},{value:"Upgrade preparation",id:"upgrade-preparation",level:2},{value:"rolling upgrade",id:"rolling-upgrade",level:2},{value:"About version rollback",id:"about-version-rollback",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cluster-upgrade"},"Cluster upgrade"),(0,a.yg)("p",null,"Doris can upgrade smoothly by rolling upgrades. The following steps are recommended for security upgrade."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The name of the BE binary that appears in this doc is ",(0,a.yg)("inlineCode",{parentName:"strong"},"doris_be"),", which was ",(0,a.yg)("inlineCode",{parentName:"strong"},"palo_be")," in previous versions.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note:")),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"Doris does not support upgrading across two-digit version numbers, for example: you cannot upgrade directly from 0.13 to 0.15, only through 0.13.x -> 0.14.x -> 0.15.x, and the three-digit version number can be upgraded across versions, such as from 0.13 .15 can be directly upgraded to 0.14.13.1, it is not necessary to upgrade 0.14.7 or 0.14.12.1"),(0,a.yg)("li",{parentName:"ol"},"The following approaches are based on highly available deployments. That is, data 3 replicas, FE high availability."))),(0,a.yg)("h2",{id:"preparen"},"Preparen"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Turn off the replica repair and balance operation."),(0,a.yg)("p",{parentName:"li"}," There will be node restarts during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered. You can close it first with the following command:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'# Turn off the replica ealance logic. After it is closed, the balancing operation of the ordinary table replica will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_balance" = "true");\n\n# Turn off the replica balance logic of the colocation table. After it is closed, the replica redistribution operation of the colocation table will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_colocate_balance" = "true");\n\n# Turn off the replica scheduling logic. After shutting down, all generated replica repair and balancing tasks will no longer be scheduled.\n$ mysql-client> admin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,a.yg)("p",{parentName:"li"}," After the cluster is upgraded, just use the above command to set the corresponding configuration to the original value.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"important! ! Metadata needs to be backed up before upgrading(The entire directory needs to be backed up)! !")))),(0,a.yg)("h2",{id:"test-the-correctness-of-be-upgrade"},"Test the correctness of BE upgrade"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Arbitrarily select a BE node and deploy the latest doris_be binary file."),(0,a.yg)("li",{parentName:"ol"},"Restart the BE node and check the BE log be.INFO to see if the boot was successful."),(0,a.yg)("li",{parentName:"ol"},"If the startup fails, you can check the reason first. If the error is not recoverable, you can delete the BE directly through DROP BACKEND, clean up the data, and restart the BE using the previous version of doris_be. Then re-ADD BACKEND. (",(0,a.yg)("strong",{parentName:"li"},"This method will result in the loss of a copy of the data, please make sure that three copies are complete, and perform this operation!!!"),")"),(0,a.yg)("li",{parentName:"ol"},"Install Java UDF function",(0,a.yg)("version",{since:"1.2.0"},"Install Java UDF function: "),", because Java UDF function is supported from version 1.2, you need to download the JAR package of Java UDF function from the official website and put it in the lib directory of BE, otherwise it may will fail to start.")),(0,a.yg)("h2",{id:"testing-fe-metadata-compatibility"},"Testing FE Metadata Compatibility"),(0,a.yg)("ol",{start:0},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Important! Exceptional metadata compatibility is likely to cause data cannot be restored!!")),(0,a.yg)("li",{parentName:"ol"},"Deploy a test FE process (It is recommended to use your own local development machine, or BE node. If it is on the Follower or Observer node, you need to stop the started process, but it is not recommended to test on the Follower or Observer node) using the new version alone."),(0,a.yg)("li",{parentName:"ol"},"Modify the FE configuration file fe.conf for testing and set all ports to ",(0,a.yg)("strong",{parentName:"li"},"different from online"),"."),(0,a.yg)("li",{parentName:"ol"},"Add configuration in fe.conf: cluster_id=123456"),(0,a.yg)("li",{parentName:"ol"},"Add configuration in fe.conf: metadata_failure_recovery=true"),(0,a.yg)("li",{parentName:"ol"},"Copy the metadata directory doris-meta of the online environment master Fe to the test environment\n6.The cluster_ID where copy to the doris-meta/image/VERSION file in the test environment is modified to 123456 (that is, the same as in Step 3)"),(0,a.yg)("li",{parentName:"ol"},"In the test environment,running sh sh bin/start_fe.sh,start FE."),(0,a.yg)("li",{parentName:"ol"},"Observe whether the start-up is successful through FE log fe.log."),(0,a.yg)("li",{parentName:"ol"},"If the startup is successful, run sh bin/stop_fe.sh to stop the FE process of the test environment."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"The purpose of the above 2-6 steps is to prevent the FE of the test environment from being misconnected to the online environment after it starts."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:"),"\n1.1.x Before upgrading 1.2.x, you need to delete existing Native UDF ; otherwise, FE startup fails ; And since version 1.2 no longer supports Native UDF, please use ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.2/ecosystem/udf/java-user-defined-function"},"Java UDF"),"."),(0,a.yg)("h2",{id:"upgrade-preparation"},"Upgrade preparation"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"After data validation, the new version of BE and FE binary files are distributed to their respective directories."),(0,a.yg)("li",{parentName:"ol"},"In principle, the version upgrade needs to replace the lib directory and bin directory of FE and BE, and other directories except conf directory, data directory (doris-meta of FE, storage of BE), and log directory.")),(0,a.yg)("h2",{id:"rolling-upgrade"},"rolling upgrade"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Confirm that the new version of the file is deployed. Restart FE and BE instances one by one."),(0,a.yg)("li",{parentName:"ol"},"It is suggested that BE be restarted one by one and FE be restarted one by one. Because Doris usually guarantees backward compatibility between FE and BE, that is, the old version of FE can access the new version of BE. However, the old version of BE may not be supported to access the new version of FE."),(0,a.yg)("li",{parentName:"ol"},"It is recommended to restart the next instance after confirming the previous instance started successfully. Refer to the Installation Deployment Document for the identification of successful instance startup.")),(0,a.yg)("h2",{id:"about-version-rollback"},"About version rollback"),(0,a.yg)("p",null,"Because the database is a stateful service, Doris cannot support version rollback (version downgrade) in most cases. In some cases, the rollback of the 3-bit or 4-bit version can be supported, but the rollback of the 2-bit version will not be supported."),(0,a.yg)("p",null,"Therefore, it is recommended to upgrade some nodes and observe the business operation (gray upgrade) to reduce the upgrade risk."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Illegal rollback operation may cause data loss and damage.")))}u.isMDXComponent=!0}}]);