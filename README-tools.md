------

# 通用方法介绍文档

[TOC]

## 一、本地存储 jas-storage

本地存储添加如下的功能：加密解密，时间戳。

#### jasStorage.set(key,value)

在localstorage中设定已加密带有时间戳的存储

参数：

1. key(string) 存储的名称
2. value(number,string,object) 实际存储的值

#### jasStorage.get(key,expiryTime)

读取本地存储

参数：

1. key (string) 存储的名称
2. [expiryTime] (number) 选填，相对与存储时间的过期时间，毫秒数

返回值：

1. 未找到，返回undefind
2. 超过过期时间，返回undefind，并且删除此存储
3. 正常，返回存储的值

#### jasStorage.remove(key)

移除存储

参数：

1. key (string) 存储的名称



## 二、网络请求 jas-http

对axios进一步封装，增加token的功能，并且token过期会自动跳转到登录页面

#### jasHttp.get(url,oParam,isToken)

发起get请求

url (string) 请求路径

url (string) 请求路径

1. oParam (object) 请求参数
2. [isToken] (boolean) 是否带token后缀，并且验证token

返回值：

返回promise对象，同axios用法一致

####  jasHttp.post(url,oParam,isToken)

发起post请求

参数：

1. url (string) 请求路径
2. oParam (object) 请求参数
3. [isToken] (boolean) 是否带token后缀，并且验证token

返回值：

返回promise对象，同axios用法一致

#### jasHttp.axios

将axios附在jasHttp上，用法同axios