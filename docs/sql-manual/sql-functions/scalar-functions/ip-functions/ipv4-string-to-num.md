---
{
    "title": "IPV4_STRING_TO_NUM",
    "language": "en"
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

## Description
Takes a string containing an IPv4 address in the format A.B.C.D (dot-separated numbers in decimal form). Returns a BIGINT number representing the corresponding IPv4 address in big endian.

## Syntax
```sql
IPV4_STRING_TO_NUM(<ipv4_string>)
```

## Parameters
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| `<ipv4_string>`      | String type of ipv4, like 'A.B.C.D'  |

## Return Value
Returns a BIGINT number representing the corresponding IPv4 address in big endian.
- If the input string is not a valid IPv4 address or `NULL`, an error is returned

## Example
```sql
select ipv4_string_to_num('192.168.0.1'); 
```
```text
+-----------------------------------+ 
| ipv4_string_to_num('192.168.0.1') | 
+-----------------------------------+ 
| 3232235521                        | 
+-----------------------------------+ 
```

```sql
select ipv4_string_to_num('invalid');
```
```text
ERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][INVALID_ARGUMENT][E33] Invalid IPv4 value
```
