---
{
"title": "SHOW SNAPSHOT",
"language": "zh-CN"
}
---

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## 描述

该语句用于查看仓库中已存在的备份。

## 语法

```sql
SHOW SNAPSHOT ON <repo_name>
[WHERE SNAPSHOT = "<snapshot_name>" [AND TIMESTAMP = "<backup_timestamp>"]];
```

##参数

**1.`<repo_name>`**

备份所选的仓库名称。

**2.`<snapshot_name>`**

备份名称。

**3.`<backup_timestamp>`**

备份时间戳。

## 返回

| 列名 | 说明 |
| -- | -- |
| Snapshot | 备份的名称 |
| Timestamp | 对应备份的时间版本 |
| Status | 如果备份正常，则显示 OK，否则显示错误信息 |
| Database | 备份数据原属的数据库名称 |
| Details | 以 Json 的形式，展示整个备份的数据目录及文件结构 |

## 示例

1. 查看仓库 example_repo 中已有的备份

```sql
SHOW SNAPSHOT ON example_repo;
```

2. 仅查看仓库 example_repo 中名称为 backup1 的备份：

```sql
SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "backup1";
```

3. 查看仓库 example_repo 中名称为 backup1 的备份，时间版本为 "2018-05-05-15-34-26" 的详细信息：

```sql
SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";
```
