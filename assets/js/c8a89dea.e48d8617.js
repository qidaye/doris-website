"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[562884],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(a),m=r,g=y["".concat(s,".").concat(m)]||y[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},369923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const i={title:"MySQL",language:"en"},o=void 0,l={unversionedId:"lakehouse/database/mysql",id:"version-3.0/lakehouse/database/mysql",title:"MySQL",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/database/mysql.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/mysql",permalink:"/docs/lakehouse/database/mysql",draft:!1,tags:[],version:"3.0",frontMatter:{title:"MySQL",language:"en"},sidebar:"docs",previous:{title:"JDBC Catalog",permalink:"/docs/lakehouse/database/jdbc"},next:{title:"PostgreSQL",permalink:"/docs/lakehouse/database/postgresql"}},s={},p=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to MySQL",id:"connect-to-mysql",level:2},{value:"Connection security",id:"connection-security",level:3},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"MySQL to Doris type mapping",id:"mysql-to-doris-type-mapping",level:3},{value:"Timestamp type processing",id:"timestamp-type-processing",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Statistics",id:"statistics",level:3},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"Troubleshoot connection exceptions",id:"troubleshoot-connection-exceptions",level:2},{value:"FAQ",id:"faq",level:2}],c={toc:p},y="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog supports connecting to MySQL database through the standard JDBC interface. This document describes how to configure a MySQL database connection."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("p",null,"To connect to a MySQL database you need"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MySQL 5.7, 8.0 or higher")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC driver for MySQL database, you can download it from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.mysql/mysql-connector-j"},"Maven repository"),"\nDownload the latest or specified version of the MySQL JDBC driver. ",(0,r.yg)("strong",{parentName:"p"},"It is recommended to use MySQL Connector/J 8.0.31 and above. "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and the MySQL server, the default port is 3306."))),(0,r.yg)("h2",{id:"connect-to-mysql"},"Connect to MySQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mysql PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:mysql://example.net:3306",\n    "driver_url" = "mysql-connector-j-8.3.0.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n)\n')),(0,r.yg)("admonition",{title:"remarks",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," defines the connection information and parameters to be passed to the MySQL JDBC driver.\nThe parameters for supported URLs can be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html"},"MySQL Development Guide"),".")),(0,r.yg)("h3",{id:"connection-security"},"Connection security"),(0,r.yg)("p",null,"If you configured TLS with a globally trusted certificate installed on the data source, you can enable TLS between the cluster and the data source by appending the parameter to the JDBC connection string set in the jdbc_url property."),(0,r.yg)("p",null,"For example, with MySQL Connector/J version 8.0, use the sslMode parameter to secure the connection over TLS. By default, this parameter is set to PREFERRED, which protects the connection if the server is enabled. You can also set this parameter to REQUIRED, which will cause the connection to fail if TLS is not established."),(0,r.yg)("p",null,"You can configure this by adding the sslMode parameter to ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'"jdbc_url" = "jdbc:mysql://example.net:3306/?sslMode=REQUIRED"\n')),(0,r.yg)("p",null,"For more information about TLS configuration options, see the ",(0,r.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/en/connector-j-connp-props-security.html#cj-conn-prop_sslMode"},"MySQL JDBC security documentation"),"."),(0,r.yg)("h2",{id:"hierarchical-mapping"},"Hierarchical mapping"),(0,r.yg)("p",null,"When mapping MySQL, a Database in Doris corresponds to a Database in MySQL. The Table under Doris' Database corresponds to the Tables under the Database in MySQL. That is, the mapping relationship is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"MySQL"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},"MySQL Server")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,r.yg)("h2",{id:"type-mapping"},"Type mapping"),(0,r.yg)("h3",{id:"mysql-to-doris-type-mapping"},"MySQL to Doris type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MYSQL Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MEDIUMINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNSIGNED TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNSIGNED MEDIUMINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNSIGNED INT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNSIGNED BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNSIGNED DECIMAL(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p+1,s) / STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"YEAR"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SET"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ENUM"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIT"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN/STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYTEXT,TEXT,MEDIUMTEXT,LONGTEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BLOB,MEDIUMBLOB,LONGBLOB,TINYBLOB"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY,VARBINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Other"),(0,r.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Doris does not support UNSIGNED data types, so UNSIGNED data types will be mapped to Doris corresponding data types that are an order of magnitude larger."),(0,r.yg)("li",{parentName:"ul"},"UNSIGNED DECIMAL(p,s) will be mapped to DECIMAL(p+1,s) or STRING. Note that when this type is mapped to String, it can only support queries and cannot write to MySQL."),(0,r.yg)("li",{parentName:"ul"},"In order to better balance reading and computing performance, Doris will map the JSON type to the STRING type."),(0,r.yg)("li",{parentName:"ul"},"Doris does not support the BIT type. The BIT type will be mapped to BOOLEAN when BIT(1) is used, and to STRING in other cases."),(0,r.yg)("li",{parentName:"ul"},"Doris does not support YEAR type, YEAR type will be mapped to SMALLINT."),(0,r.yg)("li",{parentName:"ul"},"Doris does not support the TIME type, and the TIME type will be mapped to STRING."))),(0,r.yg)("h3",{id:"timestamp-type-processing"},"Timestamp type processing"),(0,r.yg)("p",null,"The Java part of BE uses the JVM time zone when reading data from the JDBC type catalog. The JVM time zone defaults to the time zone of the BE deployment machine, which affects the time zone conversion when JDBC reads data."),(0,r.yg)("p",null,"In order to ensure time zone consistency, it is recommended to set the JVM time zone in JAVA_OPTS of be.conf to be consistent with the ",(0,r.yg)("inlineCode",{parentName:"p"},"time_zone")," of the Doris session."),(0,r.yg)("p",null,"When reading MySQL's TIMESTAMP type, add parameters to the JDBC URL: ",(0,r.yg)("inlineCode",{parentName:"p"},"connectionTimeZone=LOCAL")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"forceConnectionTimeZoneToSession=true"),". These parameters are applicable to MySQL Connector/J 8 and above and ensure that the time read is the Doris BE JVM time zone, not the MySQL session time zone."),(0,r.yg)("h2",{id:"query-optimization"},"Query optimization"),(0,r.yg)("h3",{id:"statistics"},"Statistics"),(0,r.yg)("p",null,"Doris maintains table statistics in the Catalog so that it can better optimize query plans when executing queries."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"../external-statistics"},"external-statistics")," to learn how to collect statistics."),(0,r.yg)("h3",{id:"predicate-pushdown"},"Predicate pushdown"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When executing a query like ",(0,r.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'"),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing unnecessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When the variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_ext_func_pred_pushdown")," is set to true, the function conditions after where will also be pushed down to the external data source. Doris will automatically identify some functions that are not supported by MySQL, which can be viewed through explain sql."),(0,r.yg)("p",{parentName:"li"},"Currently, the functions that Doris will not push down to MySQL by default are as follows:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Function"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"DATE_TRUNC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"MONEY_FORMAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"NEGATIVE")))),(0,r.yg)("p",{parentName:"li"},"When you find that there are other functions that do not support pushdown, you can configure ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_mysql_unsupported_pushdown_functions")," through ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," to specify the functions that do not support pushdown. Such as: ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_mysql_unsupported_pushdown_functions=func1,func2")))),(0,r.yg)("h3",{id:"row-limit"},"Row limit"),(0,r.yg)("p",null,"If you have the limit keyword in the query, Doris will push the limit down to MySQL to reduce the amount of data transfer."),(0,r.yg)("h3",{id:"escape-characters"},"Escape characters"),(0,r.yg)("p",null,"Doris will automatically add the escape character (``) to the field names and table names in the query statements sent to MySQL to avoid conflicts between field names, table names and MySQL internal keywords."),(0,r.yg)("h2",{id:"troubleshoot-connection-exceptions"},"Troubleshoot connection exceptions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Communications link failure The last packet successfully received from the server was 7 milliseconds ago."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"reason:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Internet problem:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The network is unstable or the connection is interrupted."),(0,r.yg)("li",{parentName:"ul"},"Network latency between client and server is too high."))),(0,r.yg)("li",{parentName:"ul"},"MySQL server settings",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The MySQL server may be configured with connection timeout parameters, such as wait_timeout or interactive_timeout, causing the connection to timeout and be closed."))),(0,r.yg)("li",{parentName:"ul"},"Firewall settings",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Firewall rules may be blocking communication between the client and the server."))),(0,r.yg)("li",{parentName:"ul"},"Connection pool settings",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The configuration connection_pool_max_life_time in the connection pool may cause the connection to be closed or recycled, or the connection may not be detected in time."))),(0,r.yg)("li",{parentName:"ul"},"Server resource issues",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The MySQL server may have insufficient resources to handle new connection requests."))),(0,r.yg)("li",{parentName:"ul"},"Client configuration",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Client JDBC driver configuration error, for example, the autoReconnect parameter is not set or set improperly."))))),(0,r.yg)("li",{parentName:"ul"},"solve",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Check network connection:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Confirm that the network connection between the client and the server is stable to avoid excessive network latency."))),(0,r.yg)("li",{parentName:"ul"},"Check MySQL server configuration:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Review and adjust the MySQL server's wait_timeout and interactive_timeout parameters to ensure they are set appropriately."))),(0,r.yg)("li",{parentName:"ul"},"Check firewall configuration:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Verify that firewall rules allow communication between client and server."))),(0,r.yg)("li",{parentName:"ul"},"Adjust connection pool settings:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Check and adjust the connection pool configuration parameter connection_pool_max_life_time to ensure it is smaller than MySQL's wait_timeout and interactive_timeout parameters and larger than the SQL with the longest execution time"))),(0,r.yg)("li",{parentName:"ul"},"Monitor server resources:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Monitor the resource usage of the MySQL server to ensure that there are sufficient resources to handle connection requests."))),(0,r.yg)("li",{parentName:"ul"},"Optimize client configuration:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Confirm that the configuration parameters of the JDBC driver are correct, such as autoReconnect=true, to ensure that the connection can automatically reconnect after being interrupted."))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"java.io.EOFException MESSAGE: Can not read response from server. Expected to read 819 bytes, read 686 bytes before connection was unexpectedly lost."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Reason: The connection was killed by MySQL or MySQL crashed"),(0,r.yg)("li",{parentName:"ul"},"Solution: Check whether MySQL has a mechanism to actively kill connections, or whether MySQL crashes because of too large a query.")))),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The emoji expressions read and written in MySQL are garbled."),(0,r.yg)("p",{parentName:"li"},"When Doris performs MySQL Catalog query, because the default utf8 encoding in MySQL is utf8mb3, it cannot express emoji expressions that require 4-byte encoding. Here you need to modify the encoding of MySQL to utf8mb4 to support 4-byte encoding."),(0,r.yg)("p",{parentName:"li"},"Configuration items can be modified globally"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Modify the my.ini file in the mysql directory (for Linux systems, it is the my.cnf file in the etc directory)\n[client]\ndefault-character-set=utf8mb4\n\n[mysql]\nSet mysql default character set\ndefault-character-set=utf8mb4\n\n[mysqld]\nSet mysql character set server\ncharacter-set-server=utf8mb4\ncollation-server=utf8mb4_unicode_ci\ninit_connect='SET NAMES utf8mb4\n\nModify the types of corresponding tables and columns\nALTER TABLE table_name MODIFY colum_name VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\nALTER TABLE table_name CHARSET=utf8mb4;\nSET NAMES utf8mb4\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An exception occurred while reading the MySQL DATE/DATETIME type."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.6)[INTERNAL_ERROR]UdfRuntimeException: get next block failed:\nCAUSED BY: SQLException: Zero date value prohibited\nCAUSED BY: DataReadException: Zero date value prohibited\n")),(0,r.yg)("p",{parentName:"li"},"This is because the default handling of illegal DATE/DATETIME in JDBC is to throw an exception, and this behavior can be controlled through the parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"zeroDateTimeBehavior"),"."),(0,r.yg)("p",{parentName:"li"},"Optional parameters are: ",(0,r.yg)("inlineCode",{parentName:"p"},"exception"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"convertToNull"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"round"),', respectively: exception error report, converted to NULL value, converted to "0001-01-01 00:00:00";'),(0,r.yg)("p",{parentName:"li"},"You need to add ",(0,r.yg)("inlineCode",{parentName:"p"},"zeroDateTimeBehavior=convertToNull")," to the end of the JDBC connection string when creating the Catalog ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),", such as ",(0,r.yg)("inlineCode",{parentName:"p"},'"jdbc_url" = "jdbc:mysql://127.0.0.1:3306/test?zeroDateTimeBehavior=convertToNull"'),"\nIn this case, JDBC will convert 0000-00-00 or 0000-00-00 00:00:00 into null, and then Doris will process all Date/DateTime type columns in the current Catalog as nullable types, so that It can be read normally.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When reading MySQL Catalog or other JDBC Catalog, a class loading failure occurs"),(0,r.yg)("p",{parentName:"li"},"Such as the following exception:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"failed to load driver class com.mysql.cj.jdbc.driver in either of hikariconfig class loader\n")),(0,r.yg)("p",{parentName:"li"},"This is because when creating the Catalog, the driver_class filled in is incorrect and needs to be filled in correctly. For example, the above example has a case problem and should be filled in as ",(0,r.yg)("inlineCode",{parentName:"p"},'"driver_class" = "com.mysql.cj.jdbc.Driver"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Communication link abnormality occurs when reading MySQL"),(0,r.yg)("p",{parentName:"li"},"If the following error occurs:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = PoolInitializationException: Failed to initialize pool: Communications link failure\n\nThe last packet successfully received from the server was 7 milliseconds ago. The last packet sent successfully to the server was 4 milliseconds ago.\nCAUSED BY: CommunicationsException: Communications link failure\n    \nThe last packet successfully received from the server was 7 milliseconds ago. The last packet sent successfully to the server was 4 milliseconds ago.\nCAUSED BY: SSLHandshakeExcepti\n")),(0,r.yg)("p",{parentName:"li"},"You can view the be.out log of be"),(0,r.yg)("p",{parentName:"li"},"If the following information is included:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"WARN: Establishing SSL connection without server's identity verification is not recommended.\nAccording to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set.\nFor compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'.\nYou need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n")),(0,r.yg)("p",{parentName:"li"},"You can add ",(0,r.yg)("inlineCode",{parentName:"p"},"?useSSL=false")," to the end of the JDBC connection string when creating the Catalog, such as ",(0,r.yg)("inlineCode",{parentName:"p"},'"jdbc_url" = "jdbc:mysql://127.0.0.1:3306/test?useSSL=false"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying a large amount of MySQL data, if the query is occasionally successful, the following error will occasionally be reported. When this error occurs, all MySQL connections are disconnected and cannot be connected to the MySQL Server. After a while, MySQL returns to normal, but All previous connections are gone:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = [INTERNAL_ERROR]UdfRuntimeException: JDBC executor sql has error:\nCAUSED BY: CommunicationsException: Communications link failure\nThe last packet successfully received from the server was 4,446 milliseconds ago. The last packet sent successfully to the server was 4,446 milliseconds ago.\n")),(0,r.yg)("p",{parentName:"li"},"When the above phenomenon occurs, it may be that MySQL Server's own memory or CPU resources are exhausted, causing the MySQL service to be unavailable. You can try to increase the memory or CPU configuration of MySQL Server.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"During the process of querying MySQL, if it is found that the query results are inconsistent with the query results in the MySQL library"),(0,r.yg)("p",{parentName:"li"},'First, check whether the string in the query field is case-sensitive. For example, there is a field c_1 in Table that contains two pieces of data: "aaa" and "AAA". If case-sensitivity of strings is not specified when initializing the MySQL database, then MySQL does not case-sensitive strings by default, but in Doris is strictly case-sensitive, so the following situations may occur:'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'MySQL behavior:\nselect count(c_1) from table where c_1 = "aaa"; The string size is not distinguished, so the result is: 2\n\nDoris behavior:\nselect count(c_1) from table where c_1 = "aaa"; strictly distinguishes the string size, so the result is: 1\n')),(0,r.yg)("p",{parentName:"li"},"If the above phenomenon occurs, it needs to be adjusted according to needs, as follows:"),(0,r.yg)("p",{parentName:"li"},'Add the "BINARY" keyword to force case sensitivity when querying in MySQL: ',(0,r.yg)("inlineCode",{parentName:"p"},'select count(c_1) from table where BINARY c_1 = "aaa";')),(0,r.yg)("p",{parentName:"li"},"Or specify when creating a table in MySQL: ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE TABLE table (c_1 VARCHAR(255) CHARACTER SET binary);")),(0,r.yg)("p",{parentName:"li"},"Or specify collation rules to make case sensitive when initializing the MySQL database:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"[mysqld]\ncharacter-set-server=utf8\ncollation-server=utf8_bin\n[client]\ndefault-character-set=utf8\n[mysql]\ndefault-character-set=utf8\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying MySQL, if you are stuck for a long time and no results are returned, or if you are stuck for a long time and a large number of write lock logs appear in fe.warn.log, you can try adding socketTimeout to the URL, for example: ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:mysql ://host:port/database?socketTimeout=30000"),", prevents the JDBC client from waiting indefinitely after the connection is closed by MySQL.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the process of using MySQL Catalog, it is found that the JVM memory or the number of Threads in FE continues to grow and does not decrease, and a Forward to master connection timed out error may appear at the same time."),(0,r.yg)("p",{parentName:"li"},"Print the FE thread stack ",(0,r.yg)("inlineCode",{parentName:"p"},"jstack fe_pid > fe.js"),". If a large number of ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql-cj-abandoned-connection-cleanup")," threads appear, it means there is a problem with the MySQL JDBC driver."),(0,r.yg)("p",{parentName:"li"},"Proceed as follows:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Upgrade the MySQL JDBC driver to version 8.0.31 and above"),(0,r.yg)("li",{parentName:"ol"},"Add the ",(0,r.yg)("inlineCode",{parentName:"li"},"-Dcom.mysql.cj.disableAbandonedConnectionCleanup=true")," parameter to JAVA_OPTS in the FE and BE conf files, disable the connection cleanup function of the MySQL JDBC driver, and restart the cluster")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Note:")," If the version of Doris is 2.0.13 and above (2.0 Release), or 2.1.5 and above (2.1 Release), there is no need to increase this parameter, because Doris has disabled the connection cleaning function of the MySQL JDBC driver by default. . Just change the MySQL JDBC driver version. However, the Doris cluster needs to be restarted to clean up the previous Threads."))))}d.isMDXComponent=!0}}]);