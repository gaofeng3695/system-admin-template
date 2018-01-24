------

# 通用方法介绍文档

[TOC]

## 一、本地存储 storage

本地存储添加如下的功能：加密解密，时间戳。

#### storage.set(key,value)

在localstorage中设定已加密带有时间戳的存储

参数：

1. key(string) 存储的名称
2. value(number,string,object) 实际存储的值

#### storage.get(key,expiryTime)

读取本地存储

参数：

1. key (string) 存储的名称
2. [expiryTime] (number) 选填，相对与存储时间的过期时间，毫秒数

返回值：

1. 未找到，返回undefind
2. 超过过期时间，返回undefind，并且删除此存储
3. 正常，返回存储的值

#### storage.remove(key)

移除存储

参数：

1. key (string) 存储的名称