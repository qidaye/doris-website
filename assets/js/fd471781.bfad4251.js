"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[225815],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(a),y=r,u=g["".concat(s,".").concat(y)]||g[y]||m[y]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},927338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"Spark Doris Connector",language:"en"},i=void 0,o={unversionedId:"ecosystem/spark-doris-connector",id:"ecosystem/spark-doris-connector",title:"Spark Doris Connector",description:"\x3c!--",source:"@site/docs/ecosystem/spark-doris-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/spark-doris-connector",permalink:"/docs/dev/ecosystem/spark-doris-connector",draft:!1,tags:[],version:"current",frontMatter:{title:"Spark Doris Connector",language:"en"},sidebar:"docs",previous:{title:"Log Storage and Analysis",permalink:"/docs/dev/practical-guide/log-storage-analysis"},next:{title:"Flink Doris Connector",permalink:"/docs/dev/ecosystem/flink-doris-connector"}},s={},p=[{value:"Version Compatibility",id:"version-compatibility",level:2},{value:"Build and Install",id:"build-and-install",level:2},{value:"Using Maven",id:"using-maven",level:2},{value:"Example",id:"example",level:2},{value:"Read",id:"read",level:3},{value:"SQL",id:"sql",level:4},{value:"DataFrame",id:"dataframe",level:4},{value:"RDD",id:"rdd",level:4},{value:"pySpark",id:"pyspark",level:4},{value:"Write",id:"write",level:3},{value:"SQL",id:"sql-1",level:4},{value:"DataFrame(batch/stream)",id:"dataframebatchstream",level:4},{value:"Configuration",id:"configuration",level:2},{value:"General",id:"general",level:3},{value:"SQL &amp; Dataframe Configuration",id:"sql--dataframe-configuration",level:3},{value:"Structured Streaming Configuration",id:"structured-streaming-configuration",level:3},{value:"RDD Configuration",id:"rdd-configuration",level:3},{value:"Doris &amp; Spark Column Type Mapping",id:"doris--spark-column-type-mapping",level:2}],d={toc:p},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"spark-doris-connector"},"Spark Doris Connector"),(0,r.yg)("p",null,"Spark Doris Connector can support reading data stored in Doris and writing data to Doris through Spark."),(0,r.yg)("p",null,"Github: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-spark-connector"},"https://github.com/apache/doris-spark-connector")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support reading data from ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris"),"."),(0,r.yg)("li",{parentName:"ul"},"Support ",(0,r.yg)("inlineCode",{parentName:"li"},"Spark DataFrame")," batch/stream writing data to ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris")),(0,r.yg)("li",{parentName:"ul"},"You can map the ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris")," table to",(0,r.yg)("inlineCode",{parentName:"li"}," DataFrame")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"RDD"),", it is recommended to use",(0,r.yg)("inlineCode",{parentName:"li"}," DataFrame"),"."),(0,r.yg)("li",{parentName:"ul"},"Support the completion of data filtering on the ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris")," side to reduce the amount of data transmission.")),(0,r.yg)("h2",{id:"version-compatibility"},"Version Compatibility"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Connector"),(0,r.yg)("th",{parentName:"tr",align:null},"Spark"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris"),(0,r.yg)("th",{parentName:"tr",align:null},"Java"),(0,r.yg)("th",{parentName:"tr",align:null},"Scala"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.3.2"),(0,r.yg)("td",{parentName:"tr",align:null},"3.4 ~ 3.1, 2.4, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.2.0"),(0,r.yg)("td",{parentName:"tr",align:null},"3.2, 3.1, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,r.yg)("td",{parentName:"tr",align:null},"3.2, 3.1, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.0.1"),(0,r.yg)("td",{parentName:"tr",align:null},"3.1, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"0.12 - 0.15"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")))),(0,r.yg)("h2",{id:"build-and-install"},"Build and Install"),(0,r.yg)("p",null,"Ready to work"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_env.sh.tpl")," file and rename it to ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_env.sh"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute following command in source dir:\n",(0,r.yg)("inlineCode",{parentName:"p"},"sh build.sh"),"\nFollow the prompts to enter the Scala and Spark versions you need to start compiling."))),(0,r.yg)("p",null,"After the compilation is successful, the target jar package will be generated in the ",(0,r.yg)("inlineCode",{parentName:"p"},"dist")," directory, such\nas: ",(0,r.yg)("inlineCode",{parentName:"p"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar"),".\nCopy this file to ",(0,r.yg)("inlineCode",{parentName:"p"},"ClassPath")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," to use ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark-Doris-Connector"),". For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," running in ",(0,r.yg)("inlineCode",{parentName:"p"},"Local")," mode,\nput this file in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jars/")," folder. ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," running in ",(0,r.yg)("inlineCode",{parentName:"p"},"Yarn")," cluster mode, put this file in the pre-deployment\npackage."),(0,r.yg)("p",null,"For example upload ",(0,r.yg)("inlineCode",{parentName:"p"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar")," to hdfs and add hdfs file path in\nspark.yarn.jars."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Upload ",(0,r.yg)("inlineCode",{parentName:"li"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar")," Jar to hdfs.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hdfs dfs -mkdir /spark-jars/\nhdfs dfs -put /your_local_path/spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar /spark-jars/\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar")," dependency in Cluster.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"spark.yarn.jars=hdfs:///spark-jars/spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar\n")),(0,r.yg)("h2",{id:"using-maven"},"Using Maven"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.doris</groupId>\n    <artifactId>spark-doris-connector-3.4_2.12</artifactId>\n    <version>1.3.0</version>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Notes")),(0,r.yg)("p",null,"Please replace the Connector version according to the different Spark and Scala versions."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"read"},"Read"),(0,r.yg)("h4",{id:"sql"},"SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE\nTEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nSELECT *\nFROM spark_doris;\n')),(0,r.yg)("h4",{id:"dataframe"},"DataFrame"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n\ndorisSparkDF.show(5)\n')),(0,r.yg)("h4",{id:"rdd"},"RDD"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import org.apache.doris.spark._\n\nval dorisSparkRDD = sc.dorisRDD(\n  tableIdentifier = Some("$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"),\n  cfg = Some(Map(\n    "doris.fenodes" -> "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n    "doris.request.auth.user" -> "$YOUR_DORIS_USERNAME",\n    "doris.request.auth.password" -> "$YOUR_DORIS_PASSWORD"\n  ))\n)\n\ndorisSparkRDD.collect()\n')),(0,r.yg)("h4",{id:"pyspark"},"pySpark"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n// show 5 lines data \ndorisSparkDF.show(5)\n')),(0,r.yg)("h3",{id:"write"},"Write"),(0,r.yg)("h4",{id:"sql-1"},"SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE\nTEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nINSERT INTO spark_doris\nVALUES ("VALUE1", "VALUE2", ...);\n# or\nINSERT INTO spark_doris\nSELECT *\nFROM YOUR_TABLE\n# or\nINSERT OVERWRITE \nSELECT *\nFROM YOUR_TABLE \n')),(0,r.yg)("h4",{id:"dataframebatchstream"},"DataFrame(batch/stream)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'## batch sink\nval mockDataDF = List(\n  (3, "440403001005", "21.cn"),\n  (1, "4404030013005", "22.cn"),\n  (33, null, "23.cn")\n).toDF("id", "mi_code", "mi_name")\nmockDataDF.show(5)\n\nmockDataDF.write.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  //other options\n  //specify the fields to write\n  .option("doris.write.fields", "$YOUR_FIELDS_TO_WRITE")\n  // Support setting Overwrite mode to overwrite data\n  // .option("save_mode", SaveMode.Overwrite)\n  .save()\n\n## stream sink(StructuredStreaming)\n\n### Result DataFrame with structured data, the configuration method is the same as the batch mode.\nval sourceDf = spark.readStream.\n       .format("your_own_stream_source")\n       .load()\n\nval resultDf = sourceDf.<transformations>\n\nresultDf.writeStream\n      .format("doris")\n      .option("checkpointLocation", "$YOUR_CHECKPOINT_LOCATION")\n      .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n      .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n      .option("user", "$YOUR_DORIS_USERNAME")\n      .option("password", "$YOUR_DORIS_PASSWORD")\n      .start()\n      .awaitTermination()\n\n### There is a column value in the Result DataFrame that can be written directly, such as the value in the kafka message that conforms to the import format\n\nval kafkaSource = spark.readStream\n  .format("kafka")\n  .option("kafka.bootstrap.servers", "$YOUR_KAFKA_SERVERS")\n  .option("startingOffsets", "latest")\n  .option("subscribe", "$YOUR_KAFKA_TOPICS")\n  .load()\nkafkaSource.selectExpr("CAST(key AS STRING)", "CAST(value as STRING)")\n  .writeStream\n  .format("doris")\n  .option("checkpointLocation", "$YOUR_CHECKPOINT_LOCATION")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  // Set this option to true, and the value column in the Kafka message will be written directly without processing.\n  .option("doris.sink.streaming.passthrough", "true")\n  .option("doris.sink.properties.format", "json")\n  //other options\n  .start()\n  .awaitTermination()\n')),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("h3",{id:"general"},"General"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris FE http address, support multiple addresses, separated by commas")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.table.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris table identifier, eg, db1.tbl1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of retries to send requests to Doris")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection timeout for sending requests to Doris")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"Read timeout for sending request to Doris")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.yg)("td",{parentName:"tr",align:null},"3600"),(0,r.yg)("td",{parentName:"tr",align:null},"Query the timeout time of doris, the default is 1 hour, -1 means no timeout limit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of Doris Tablets corresponding to an RDD Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the Spark side, but at the same time will cause greater pressure on Doris.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"List of column names in the Doris table, separated by commas")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Spark and Doris. Thereby reducing the extra time overhead caused by network delay.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.yg)("td",{parentName:"tr",align:null},"2147483648"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory limit for a single query. The default is 2GB, in bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to support asynchronous conversion of Arrow format to RowBatch required for spark-doris-connector iteration")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.yg)("td",{parentName:"tr",align:null},"64"),(0,r.yg)("td",{parentName:"tr",align:null},"Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.write.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the fields (or the order of the fields) to write to the Doris table, fileds separated by commas.",(0,r.yg)("br",null),"By default, all fields are written in the order of Doris table fields.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"100000"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of lines in a single write BE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of retries after writing BE failed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.properties.format"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Data format of the stream load.",(0,r.yg)("br",null),"Supported formats: csv, json, arrow(since version 1.4.0)",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"../data-operate/import/stream-load-manual.md"},"More Multi-parameter details"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Import parameters for Stream Load. ",(0,r.yg)("br",null),"For example:",(0,r.yg)("br",null),"Specify column separator: ",(0,r.yg)("inlineCode",{parentName:"td"},"'doris.sink.properties.column_separator' = ','"),".",(0,r.yg)("br",null),(0,r.yg)("a",{parentName:"td",href:"../data-operate/import/stream-load-manual.md"},"More parameter details"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.task.partition.size"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of partitions corresponding to the Writing task. After filtering and other operations, the number of partitions written in Spark RDD may be large, but the number of records corresponding to each Partition is relatively small, resulting in increased writing frequency and waste of computing resources. The smaller this value is set, the less Doris write frequency and less Doris merge pressure. It is generally used with doris.sink.task.use.repartition.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.task.use.repartition"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to use repartition mode to control the number of partitions written by Doris. The default value is false, and coalesce is used (note: if there is no Spark action before the write, the whole computation will be less parallel). If it is set to true, then repartition is used (note: you can set the final number of partitions at the cost of shuffle).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.batch.interval.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"50"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval time of each batch sink, unit ms.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.enable-2pc"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable two-stage commit. When enabled, transactions will be committed at the end of the job, and all pre-commit transactions will be rolled back when some tasks fail.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.auto-redirect"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to redirect StreamLoad requests. After being turned on, StreamLoad will write through FE and no longer obtain BE information explicitly.")))),(0,r.yg)("h3",{id:"sql--dataframe-configuration"},"SQL & Dataframe Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.filter.query.in.max.count"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"In the predicate pushdown, the maximum number of elements in the in expression value list. If this number is exceeded, the in-expression conditional filtering is processed on the Spark side.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.ignore-type"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"In a temporary view, specify the field types to ignore when reading the schema. ",(0,r.yg)("br",null)," eg: when 'doris.ignore-type'='bitmap,hll'")))),(0,r.yg)("h3",{id:"structured-streaming-configuration"},"Structured Streaming Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.streaming.passthrough"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Write the value of the first column directly without processing.")))),(0,r.yg)("h3",{id:"rdd-configuration"},"RDD Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.auth.user"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.auth.password"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In Spark SQL, when writing data through insert into, if the target table of doris contains ",(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"HLL")," type data, you need to set the parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"doris.ignore-type")," to the corresponding type, and set ",(0,r.yg)("inlineCode",{parentName:"p"},"doris.write.fields")," maps the corresponding columns, the usage is as follows:"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"BITMAP"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n"table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n"fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n"user"="$YOUR_DORIS_USERNAME",\n"password"="$YOUR_DORIS_PASSWORD"\n"doris.ignore-type"="bitmap",\n"doris.write.fields"="col1,col2,col3,bitmap_col2=to_bitmap(col2),bitmap_col3=bitmap_hash(col3)"\n);\n')),(0,r.yg)("p",{parentName:"blockquote"},"HLL"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n"table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n"fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n"user"="$YOUR_DORIS_USERNAME",\n"password"="$YOUR_DORIS_PASSWORD"\n"doris.ignore-type"="hll",\n"doris.write.fields"="col1,hll_col1=hll_hash(col1)"\n);\n')))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Since version 1.3.0, the default value of ",(0,r.yg)("inlineCode",{parentName:"p"},"doris.sink.max-retries")," configuration is 0, which means no retries are performed by default.\nWhen this parameter is set greater than 0, batch-level failure retries will be performed, and data of the configured size of ",(0,r.yg)("inlineCode",{parentName:"p"},"doris.sink.batch.size")," will be cached in the Spark Executor memory. The memory allocation may need to be appropriately increased.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Since version 1.3.0, overwrite mode insertion is supported (only full table-level overwrite insertion is supported). The specific usage is as follows"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"DataFrame"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'resultDf.format("doris")\n  .option("doris.fenodes","$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  // your own options\n  .option("save_mode", SaveMode.Overwrite)\n  .save()\n')),(0,r.yg)("p",{parentName:"blockquote"},"SQL"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE your_target_table\nSELECT * FROM your_source_table\n")))))),(0,r.yg)("h2",{id:"doris--spark-column-type-mapping"},"Doris & Spark Column Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Spark Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.NullType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.BooleanType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.ByteType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.ShortType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.IntegerType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.LongType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.FloatType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.DateType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.StringType",(0,r.yg)("sup",null,"1"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HLL"),(0,r.yg)("td",{parentName:"tr",align:null},"Unsupported datatype")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bitmap"),(0,r.yg)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Note: In Connector, ",(0,r.yg)("inlineCode",{parentName:"li"}," DATETIME")," is mapped to ",(0,r.yg)("inlineCode",{parentName:"li"},"String"),". Due to the processing logic of the Doris underlying storage engine, when the time type is used directly, the time range covered cannot meet the demand. So use ",(0,r.yg)("inlineCode",{parentName:"li"},"String")," type to directly return the corresponding time readable text.")))}m.isMDXComponent=!0}}]);