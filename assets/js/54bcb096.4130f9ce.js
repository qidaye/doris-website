"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[747294],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(t),y=r,m=s["".concat(p,".").concat(y)]||s[y]||g[y]||l;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},365043:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(58168),r=(t(296540),t(15680));const l={title:"Oracle",language:"en"},i=void 0,o={unversionedId:"lakehouse/database/oracle",id:"version-2.1/lakehouse/database/oracle",title:"Oracle",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/database/oracle.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/oracle",permalink:"/docs/2.1/lakehouse/database/oracle",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Oracle",language:"en"},sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/docs/2.1/lakehouse/database/postgresql"},next:{title:"SQL Server",permalink:"/docs/2.1/lakehouse/database/sqlserver"}},p={},d=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to Oracle",id:"connect-to-oracle",level:2},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"Oracle to Doris type mapping",id:"oracle-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Statistics",id:"statistics",level:3},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}],c={toc:d},s="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog supports connecting to Oracle databases through the standard JDBC interface. This document describes how to configure an Oracle database connection."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("p",null,"To connect to an Oracle database, you need"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Oracle 19c, 18c, 12c, 11g or 10g.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC driver for Oracle database, you can download the Oracle JDBC driver for Ojdbc8 and above versions from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc"},"Maven repository"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and Oracle server, default port is 1521."))),(0,r.yg)("h2",{id:"connect-to-oracle"},"Connect to Oracle"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG oracle PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:oracle:thin:@example.net:1521:orcl",\n    "driver_url" = "ojdbc8.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n)\n')),(0,r.yg)("admonition",{title:"remarks",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," defines the connection information and parameters to be passed to the JDBC driver.\nWhen using the Oracle JDBC Thin driver, the syntax of the URL may vary depending on your Oracle configuration.\nFor example, if you are connecting to an Oracle SID or Oracle service name, the connection URL will be different.\nFor more information, see ",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/jjdbc/data-sources-and-URLs.html"},"Oracle Database JDBC Driver Documentation")," .\nThe above example URL connects to an Oracle SID named ",(0,r.yg)("inlineCode",{parentName:"p"},"orcl"),".")),(0,r.yg)("h2",{id:"hierarchical-mapping"},"Hierarchical mapping"),(0,r.yg)("p",null,"When mapping Oracle, a Database in Doris corresponds to a User in Oracle. The Table under Doris's Database corresponds to the Table that the User has permission to access in Oracle. That is, the mapping relationship is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Oracle"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"User")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,r.yg)("h2",{id:"type-mapping"},"Type mapping"),(0,r.yg)("h3",{id:"oracle-to-doris-type-mapping"},"Oracle to Doris type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Oracle Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number(p) / number(p,0)"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris will select the corresponding type according to the size of p: ",(0,r.yg)("inlineCode",{parentName:"td"},"p < 3")," -> ",(0,r.yg)("inlineCode",{parentName:"td"},"TINYINT"),"; ",(0,r.yg)("inlineCode",{parentName:"td"},"p < 5 ")," -> ",(0,r.yg)("inlineCode",{parentName:"td"},"SMALLINT"),"; ",(0,r.yg)("inlineCode",{parentName:"td"},"p < 10")," -> ",(0,r.yg)("inlineCode",{parentName:"td"},"INT"),"; ",(0,r.yg)("inlineCode",{parentName:"td"},"p < 19")," -> ",(0,r.yg)("inlineCode",{parentName:"td"},"BIGINT"),"; ",(0,r.yg)("inlineCode",{parentName:"td"},"p > 19")," -> ",(0,r.yg)("inlineCode",{parentName:"td"},"LARGEINT"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number(p,s), ","[ if(s>0 && p>s) ]"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number(p,s), ","[ if(s>0 && p < s) ]"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(s,s)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number(p,s), ","[ if(s<0) ]"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"If s<0, Doris will set p to p+","|","s","|",", and perform the sum The same mapping as number(p) / number(p,0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Doris currently does not support oracle types that do not specify p and s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float/real"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR/NCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR2/NVARCHAR2"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LONG/ RAW/ LONG RAW/ INTERVAL"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Other"),(0,r.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"query-optimization"},"Query optimization"),(0,r.yg)("h3",{id:"statistics"},"Statistics"),(0,r.yg)("p",null,"Doris maintains table statistics in the Catalog so that it can better optimize query plans when executing queries."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"../external-statistics"},"external-statistics")," to learn how to collect statistics."),(0,r.yg)("h3",{id:"predicate-pushdown"},"Predicate pushdown"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When executing a query like ",(0,r.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'"),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing unnecessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When the variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_ext_func_pred_pushdown")," is set to true, the function conditions after where will also be pushed down to the external data source."),(0,r.yg)("p",{parentName:"li"},"The functions that currently support push down to Oracle include:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Function"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"NVL")))))),(0,r.yg)("h3",{id:"row-limit"},"Row limit"),(0,r.yg)("p",null,"If you have the limit keyword in the query, Doris will escape the limit to Oracle's ",(0,r.yg)("inlineCode",{parentName:"p"},"rownum")," syntax to reduce the amount of data transfer."),(0,r.yg)("h3",{id:"escape-characters"},"Escape characters"),(0,r.yg)("p",null,'Doris will automatically add the escape character ("") to the field names and table names in the query statements sent to Oracle to avoid conflicts between the field names and table names and Oracle\'s internal keywords.'),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ONS configuration failed")," occurs when creating or querying Oracle Catalog"),(0,r.yg)("p",{parentName:"li"},"Add -Doracle.jdbc.fanEnabled=false to JAVA_OPTS in be.conf and upgrade the driver to ",(0,r.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.23.0.0/ojdbc8-19.23.0.0.jar"},"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.23.0.0/ojdbc8-19.23.0.0.jar"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Non supported character set (add orai18n.jar in your classpath): ZHS16GBK")," exception occurs when creating or querying Oracle Catalog"),(0,r.yg)("p",{parentName:"li"},"Download ",(0,r.yg)("a",{parentName:"p",href:"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html"},"orai18n.jar")," and put it in the ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib/")," directory under each FE and BE directory (if not exists, just create it manually) and restart each FE and BE."))))}g.isMDXComponent=!0}}]);