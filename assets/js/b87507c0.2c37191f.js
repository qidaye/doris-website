"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[563487],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>h});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},980958:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const o={title:"Data Backup",language:"en"},i=void 0,l={unversionedId:"admin-manual/data-admin/backup",id:"admin-manual/data-admin/backup",title:"Data Backup",description:"\x3c!--",source:"@site/docs/admin-manual/data-admin/backup.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/backup",permalink:"/docs/dev/admin-manual/data-admin/backup",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Backup",language:"en"},sidebar:"docs",previous:{title:"FQDN",permalink:"/docs/dev/admin-manual/cluster-management/fqdn"},next:{title:"Data Restore",permalink:"/docs/dev/admin-manual/data-admin/restore"}},s={},p=[{value:"A brief explanation of the principle",id:"a-brief-explanation-of-the-principle",level:2},{value:"Start Backup",id:"start-backup",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Backup",id:"backup",level:3},{value:"Data Migration",id:"data-migration",level:3},{value:"Highlights",id:"highlights",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"More Help",id:"more-help",level:2}],m={toc:p},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-backup"},"Data Backup"),(0,r.yg)("p",null,"Doris supports backing up the current data in the form of files to the remote storage system like S3 and HDFS. Afterwards, you can restore data from the remote storage system to any Doris cluster through the restore command. Through this function, Doris can support periodic snapshot backup of data. You can also use this function to migrate data between different clusters."),(0,r.yg)("p",null,"This feature requires Doris version 0.8.2+"),(0,r.yg)("h2",{id:"a-brief-explanation-of-the-principle"},"A brief explanation of the principle"),(0,r.yg)("p",null,"The backup operation is to upload the data of the specified table or partition directly to the remote warehouse for storage in the form of files stored by Doris. When a user submits a Backup request, the system will perform the following operations:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Snapshot and snapshot upload"),(0,r.yg)("p",{parentName:"li"},"The snapshot phase takes a snapshot of the specified table or partition data file. After that, backups are all operations on snapshots. After the snapshot, changes, imports, etc. to the table no longer affect the results of the backup. Snapshots only generate a hard link to the current data file, which takes very little time. After the snapshot is completed, the snapshot files will be uploaded one by one. Snapshot uploads are done concurrently by each Backend.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Metadata preparation and upload"),(0,r.yg)("p",{parentName:"li"},"After the data file snapshot upload is complete, Frontend will first write the corresponding metadata to a local file, and then upload the local metadata file to the remote warehouse through the broker. Completing the final backup job")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dynamic Partition Table Description"),(0,r.yg)("p",{parentName:"li"},"If the table is a dynamic partition table, the dynamic partition attribute will be automatically disabled after backup. When restoring, you need to manually enable the dynamic partition attribute of the table. The command is as follows:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1 SET ("dynamic_partition.enable"="true")\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Backup and Restore operation will NOT keep the ",(0,r.yg)("inlineCode",{parentName:"li"},"colocate_with")," property of a table.")),(0,r.yg)("h2",{id:"start-backup"},"Start Backup"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a hdfs remote warehouse example_repo (S3 skips step 1):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `example_repo`\nWITH HDFS\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a remote repository for S3 : s3_repo (HDFS skips step 2)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://bucket_name/test"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://xxxx.xxxx.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "xxx"\n); \n')),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note that."),(0,r.yg)("p",{parentName:"blockquote"},"ON LOCATION is followed by Bucket Name here"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Full backup of table example_tbl under example_db to warehouse example_repo:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Under the full backup example_db, the p1, p2 partitions of the table example_tbl, and the table example_tbl2 to the warehouse example_repo:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON\n(\n   example_tbl PARTITION (p1,p2),\n   example_tbl2\n);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the execution of the most recent backup job:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show BACKUP\\G;\n*************************** 1. row ***************************\n               JobId: 17891847\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: [default_cluster:example_db.example_tbl]\n          CreateTime: 2022-04-08 15:52:29\nSnapshotFinishedTime: 2022-04-08 15:52:32\n  UploadFinishedTime: 2022-04-08 15:52:38\n        FinishedTime: 2022-04-08 15:52:44\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View existing backups in remote repositories:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "snapshot_label1";\n+-----------------+---------------------+--------+\n| Snapshot        | Timestamp           | Status |\n+-----------------+---------------------+--------+\n| snapshot_label1 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n')))),(0,r.yg)("p",null,"For the detailed usage of BACKUP, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"here"),"."),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("h3",{id:"backup"},"Backup"),(0,r.yg)("p",null,"Currently, we support full backup with the smallest partition (Partition) granularity (incremental backup may be supported in future versions). If you need to back up data regularly, you first need to plan the partitioning and bucketing of the table reasonably when building the table, such as partitioning by time. Then, in the subsequent running process, regular data backups are performed according to the partition granularity."),(0,r.yg)("h3",{id:"data-migration"},"Data Migration"),(0,r.yg)("p",null,"Users can back up the data to the remote warehouse first, and then restore the data to another cluster through the remote warehouse to complete the data migration. Because data backup is done in the form of snapshots, new imported data after the snapshot phase of the backup job will not be backed up. Therefore, after the snapshot is completed and until the recovery job is completed, the data imported on the original cluster needs to be imported again on the new cluster."),(0,r.yg)("p",null,"It is recommended to import the new and old clusters in parallel for a period of time after the migration is complete. After verifying the correctness of data and services, migrate services to a new cluster."),(0,r.yg)("h2",{id:"highlights"},"Highlights"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Operations related to backup and recovery are currently only allowed to be performed by users with ADMIN privileges."),(0,r.yg)("li",{parentName:"ol"},"Within a database, only one backup or restore job is allowed to be executed."),(0,r.yg)("li",{parentName:"ol"},"Both backup and recovery support operations at the minimum partition (Partition) level. When the amount of data in the table is large, it is recommended to perform operations by partition to reduce the cost of failed retry."),(0,r.yg)("li",{parentName:"ol"},"Because of the backup and restore operations, the operations are the actual data files. Therefore, when a table has too many shards, or a shard has too many small versions, it may take a long time to backup or restore even if the total amount of data is small. Users can use ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW PARTITIONS FROM table_name;")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW TABLETS FROM table_name;")," to view the number of shards in each partition and the number of file versions in each shard to estimate job execution time. The number of files has a great impact on the execution time of the job. Therefore, it is recommended to plan partitions and buckets reasonably when creating tables to avoid excessive sharding."),(0,r.yg)("li",{parentName:"ol"},"When checking job status via ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW BACKUP")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW RESTORE")," command. It is possible to see error messages in the ",(0,r.yg)("inlineCode",{parentName:"li"},"TaskErrMsg")," column. But as long as the ",(0,r.yg)("inlineCode",{parentName:"li"},"State")," column is not ",(0,r.yg)("inlineCode",{parentName:"li"},"CANCELLED"),", the job is still continuing. These tasks may retry successfully. Of course, some Task errors will also directly cause the job to fail."),(0,r.yg)("li",{parentName:"ol"},"If the recovery job is an overwrite operation (specifying the recovery data to an existing table or partition), then from the ",(0,r.yg)("inlineCode",{parentName:"li"},"COMMIT")," phase of the recovery job, the overwritten data on the current cluster may no longer be restored. If the restore job fails or is canceled at this time, the previous data may be damaged and inaccessible. In this case, the only way to do it is to perform the recovery operation again and wait for the job to complete. Therefore, we recommend that if unnecessary, try not to restore data by overwriting unless it is confirmed that the current data is no longer used.")),(0,r.yg)("h2",{id:"related-commands"},"Related Commands"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The commands related to the backup and restore function are as follows. For the following commands, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"help cmd;")," to view detailed help after connecting to Doris through mysql-client."),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"CREATE REPOSITORY"),(0,r.yg)("p",{parentName:"li"},"Create a remote repository path for backup or restore. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},"Create Repository Reference"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"BACKUP"),(0,r.yg)("p",{parentName:"li"},"Perform a backup operation. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"Backup Reference"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"SHOW BACKUP"),(0,r.yg)("p",{parentName:"li"},"View the execution of the most recent backup job. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/SHOW-BACKUP.md"},"Show Backup Reference"),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"SHOW SNAPSHOT"),(0,r.yg)("p",{parentName:"li"},"View existing backups in the remote repository. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/SHOW-SNAPSHOT.md"},"Show Snapshot Reference"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"CANCEL BACKUP"),(0,r.yg)("p",{parentName:"li"},"Cancel the currently executing backup job. Please refer to ","[Cancel Backup Reference]"," (../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP.md).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"DROP REPOSITORY"),(0,r.yg)("p",{parentName:"li"},"Delete the created remote repository. Deleting a warehouse only deletes the mapping of the warehouse in Doris, and does not delete the actual warehouse data. Please refer to ","[Drop Repository Reference]"," (../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY.md)."))))),(0,r.yg)("h2",{id:"more-help"},"More Help"),(0,r.yg)("p",null," For more detailed syntax and best practices used by BACKUP, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"BACKUP")," command manual, You can also type ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP BACKUP")," on the MySql client command line for more help."))}d.isMDXComponent=!0}}]);