---
{
    "title": "BIN",
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

## bin

## 描述
## 语法

`STRING bin(BIGINT x)`
将十进制数`x`转换为二进制数.

## 举例

```
mysql> select bin(0);
+--------+
| bin(0) |
+--------+
| 0      |
+--------+
mysql> select bin(10);
+---------+
| bin(10) |
+---------+
| 1010    |
+---------+
mysql> select bin(-3);
+------------------------------------------------------------------+
| bin(-3)                                                          |
+------------------------------------------------------------------+
| 1111111111111111111111111111111111111111111111111111111111111101 |
+------------------------------------------------------------------+
```

### keywords
	BIN
