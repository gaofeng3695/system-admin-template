## 项目简介

基于 vue.js 的前端开发环境，用于前后端分离后的单页应用开发。项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`
- 编译/打包工具：`webpack`、`babel`


## 目录结构

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build.js                        生产环境构建脚本
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    ├── mock                            mock数据目录
    ├── src                             源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── assets                          资源目录
    │   │   └── images
    │   │       └── logo.png
    │   ├── components                      公共组件目录
    │   │   └── title.vue
    │   ├── filters                      自定义过滤器
    │   ├── router                          前端路由
    │   │   └── index.js
    │   ├── store                           应用级数据（state）
    │   │   └── index.js
    │   └── views                           页面目录
    │       ├── login.vue
    ├── static                          纯静态资源，不会被wabpack构建。
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息



## 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。
1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. 然后切换 npm 的源到国内镜像：

      npm config set registry https://registry.npm.taobao.org



## 快速开始

    这里写如何快速下载该项目


## 命令列表：

    #开启本地开发服务器localhost:8080，自动实现热替换功能
    npm run dev
    
    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录
    npm run build
    
    # 除了正式打包之外，还会输出一份打包报告
    npm run build --report



## 接口 mock

待定


      // 待定

## 联调方式

前后端分离后，由于服务端和前端的开发环境处于2台不同的机器上，前端的异步请求需要代理到后端机器中。
待定

    # 待定



## 模块化

开发时可以使用 ES2015 module 语法，构建时每个文件会编译成 amd 模块。

## 组件化

整个应用通过 vue 组件的方式搭建起来，通过 vue-router 控制相应组件的展现，组件树结构如下：

    app.vue                         根组件（整个应用只有一个）
        ├──view1.vue                    页面级组件，放在 views 目录里面，有子组件时，可以建立子目录
        │   ├──component1.vue               功能组件，公用的放在 components 目录，否则放在 views 子目录
        │   ├──component2.vue
        │   └──component3.vue
        ├──view2.vue
        │   ├──component1.vue
        │   └──component4.vue
        └──view3.vue
            ├──component5.vue
            ……




## 相关资源

- vue.js 中文网： [https://cn.vuejs.org/](https://cn.vuejs.org/)
- ES2015 入门教程：[http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)

  ​