---
{
    "title": "SECONDS_ADD",
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

## seconds_add
## 描述
## 语法

`DATETIME SECONDS_ADD(DATETIME date, INT seconds)`

从日期时间或日期加上指定秒数

参数 date 可以是 DATETIME 或者 DATE 类型，返回类型为 DATETIME。

## 举例

```
mysql> select seconds_add("2020-02-02 02:02:02", 1);
+---------------------------------------+
| seconds_add('2020-02-02 02:02:02', 1) |
+---------------------------------------+
| 2020-02-02 02:02:03                   |
+---------------------------------------+
```

### keywords

    SECONDS_ADD
