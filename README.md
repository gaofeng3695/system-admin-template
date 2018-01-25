[TOC]

## 一、项目简介

基于 vue.js 的前端开发环境，用于前后端分离后的单页应用开发。项目包含：

- 基础库: `vue.js`、`vue-router`
- 第三方库: `element-ui`、`axios`
- 代码检查工具: `eslint`
- 编译/打包工具：`webpack`、`babel`




## 二、目录结构

    ├── README.md                           项目介绍
    ├── README-TOOLS.md                     通用方法文档
    ├── package.json                        npm包配置文件
    ├── index.html                          入口页面
    ├── build                               构建脚本目录
    │   ├── build.js                            生产环境构建脚本
    │   ├── utils.js                            构建相关工具方法
    │   ├── webpack.base.conf.js                wabpack基础配置
    │   ├── webpack.dev.conf.js                 wabpack开发环境配置
    │   └── webpack.prod.conf.js                wabpack生产环境配置
    ├── config                              项目配置
    │   ├── dev.env.js                          开发环境变量
    │   ├── index.js                            项目配置文件
    │   └── prod.env.js                         生产环境变量
    ├── src                                 源码目录
    │   ├── main.js                             入口js文件
    │   ├── app.vue                             根组件
    │   ├── assets                              资源目录
    │   │   ├── js                                  自己编写的js文件目录
    │   │   └── scss                                自己编写的scss文件目录
    │   │       └── element-variables.scss              主题样式文件，可修改主题颜色
    │   ├── components                          公共组件目录
    │   │   ├── base                                基础功能组件目录
    │   │   └── business                            业务功能组件目录
    │   ├── filters                             自定义过滤器目录
    │   ├── router                              前端路由目录
    │   │   └── index.js
    │   └── views                               页面目录
    │       └── home-page                           视图组件目录
    │           ├── HomePage.vue                        视图组件
    │           ├── HomePageHeader.vue                  从属视图组件
    │           └── dash-board                            子视图组件目录
    │               ├── DashBoard.vue                         子视图组件
    │               └── DashBoardHeader.vue                   子从属视图组件
    └── static                              纯静态资源，不会被wabpack构建
        ├── css                                 第三方css文件目录
        ├── images                              所有图片目录   
        └── js                                  第三方js文件目录



## 三、快速开始

### 1. 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 更换npm源（显著提升依赖包的下载速度）。

1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2. 然后切换 npm 的源到国内镜像：

   npm config set registry https://registry.npm.taobao.org

### 2. 项目下载

    #下载
    git clone http://192.168.102.9/vue-cli/admin-demo.git
    #进入目录
    cd admin-demo
    #安装依赖
    npm install

### 3. 开发命令

    #开启本地开发服务器localhost:8080，自动实现热替换功能
    npm run dev
    
    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录
    npm run build
    
    # 除了正式打包之外，还会输出一份打包报告
    npm run build --report




## 四、HTTP请求相关

### 1.数据模拟

使用 [easy-mock](https://www.easy-mock.com/) 提供的接口模拟服务，进行数据模拟

#### 1.1 模拟项目的创建

1. 登录 [easy-mock](https://www.easy-mock.com/) ，创建账号
2. 团队中任何人都可以创建团队项目，其他人搜索团队项目，加入此项目
3. 共同管理项目中的模拟接口

#### 1.2 模拟接口的规定

1. 模拟接口的url要与后端提供接口的url相同
2. 数据格式与后端提供的接口文档上的格式一致

### 2. 服务器代理配置

#### 2.1 代理配置

项目中代理到两个服务器环境，开发服务器环境和模拟服务器环境
在 config/index.js 下dev属性下的proxytable属性添加或修改代理配置

```javascript
proxyTable: { //代理配置
  
  '/cloudlink-': { //请求接口地址中，若匹配到 '/cloudlink-' 字段便进行如下代理
  	'target': 'http://192.168.100.212:3000/', // 代理到的服务器
	'changeOrigin': true, // 选择true
	'pathRewrite': { //重写路径的配置
    	'/cloudlink-': '/cloudlink-'
     }
  },
  '/mock': { //模拟的接口统一加mock前缀
  	'target': 'https://www.easy-mock.com/', // 模拟服务器
	'changeOrigin': true, // 选择true
	'pathRewrite': { //重写路径的配置
    	'/mock': '/mock/5a5ee145dec01f1bea369a9c/admin' //在easy-mock上创建的项目子路径
     }
  },
}
```

#### 2.2 路径书写规则

假设后端接口地址为：/cloudlink-analysis-tianjiio/login/loginByPassword

```javascript
// 开发、上线接口地址不动
'/cloudlink-analysis-tianjiio/login/loginByPassword'

// 模拟接口，统一加mock前缀，这根和代理上的配置是一致的
'/mock/cloudlink-analysis-tianjiio/login/loginByPassword'

```

### 3 请求的发起

使用axios插件发起http请求，详细用法参照下方文档（以后会对请求进一步封装）

- axios 官方文档：[https://github.com/axios/axios](https://github.com/axios/axios)
- axios 翻译文档：[https://www.jianshu.com/p/df464b26ae58](https://www.jianshu.com/p/df464b26ae58)



## 五、开发规范

### 1. 命名规则

- vue组件名：全部采用大驼峰命名法
- 其他目录或者文件：全部采用中划线连接小写单词的方法

```
my-project-name                     项目名
├──data-models                          目录名
└── views                               目录名
     └── home-page                          包含路由视图组件的目录名
         └── HomePage.vue                       组件名
```

### 2. 组件管理规范

#### 2.1 组件的分类

整个应用通过 vue 组件的方式搭建起来，组件的种类分为两大类：视图级组件和功能级组件。具体分类和使用规则如下表：

|  组件类别  | 可复用性 | 业务逻辑 | 挂载路由 |    命名规范     |        命名举例        | 存放位置                      |
| :----: | :--: | :--: | :--: | :---------: | :----------------: | ------------------------- |
| 基础功能组件 |  有   |  无   |  否   |  Base+功能名   |   BaseAlert.vue    | src/compmonents/base/     |
| 业务功能组件 |  有   |  有   |  否   | Jas+功能名+业务名 |  JasAlertMap.vue   | src/compmonents/jas/      |
| 路由视图组件 |  无   |  有   |  是   |     视图名     |    HomePage.vue    | src/views/component-name/ |
| 从属视图组件 |  无   |  有   |  否   |   视图名+模块名   | HomePageHeader.vue | src/views/component-name/ |

#### 2.2视图组件的目录结构

通过 vue-router 控制路由视图组件的展现，视图组件目录结构与路由的层级相对应，也就是说组件目录结构的嵌套同路由的嵌套一致。目录结构如下：

```
 views                               页面目录
 └── home-page                           视图组件目录
     ├── HomePage.vue                        视图组件
     ├── HomePageHeader.vue                  从属视图组件
     └── dash-board                            子视图组件目录
         ├── DashBoard.vue                         子视图组件
         └── DashBoardHeader.vue                   子从属视图组件
```

### 3.资源管理

- 第三方css、js等资源： 放在 static/ 下
- 自己的图片资源：放在 static/ images下
- 自己的css、js等资源：放在 src/assets/ 下

### 4. npm包管理规范

1. 需要被打包进项目的包，需要加--save命令，例如 js-md5

```
npm install --save js-md5
```

2. 开发环境中用到的包，需要加--save-dev命令，例如 sass

```
npm install --save-dev sass
```

PS：两者区别可参考 [npm官方文档](https://docs.npmjs.com/getting-started/using-a-package.json)

### 5. 编辑器配置

使用vscode 进行开发，针对vue中eslint规则，进行一些格式化的配置.

vscode版本需求：v1.19.2

安装插件:

- ESLint : 用来提示格式错误和格式化
- Vetur : 默认自带了格式化的功能，快捷键是shift+option+f（mac）。主要用来格式化复制粘贴的代码。
- Javascript Standard Style : js 的格式化(很符合ESLint的要求).

在vscode中，点击 文件>首选项>设置, 在工作区设置中，添加以下设置：

```
{
  "workbench.startupEditor": "welcomePage",
  // 取消原本的格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // 在方法前插入空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // 快速建议
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.tabSize": 2,
  // 自动保存
  "eslint.autoFixOnSave": true,
  // eslint 的 验证文件
  "eslint.validate": [
    "javascript",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
    "html",
    "vue",
    "javascriptreact",
  ]
}
```




## 六、参考文献

- vue.js 中文网： [https://cn.vuejs.org/](https://cn.vuejs.org/)
- vue.js 风格指南 ： [https://cn.vuejs.org/v2/style-guide/](https://cn.vuejs.org/v2/style-guide/)
- Code Guide by @AlloyTeam： [https://alloyteam.github.io/CodeGuide/](https://alloyteam.github.io/CodeGuide/)
- ElementUI 组件库 ： [http://element-cn.eleme.io/#/zh-CN/component/installation](http://element-cn.eleme.io/#/zh-CN/component/installation)
- ES2015 入门教程：[http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)
- axios 官方文档：[https://github.com/axios/axios](https://github.com/axios/axios)
- axios 翻译文档：[https://www.jianshu.com/p/df464b26ae58](https://www.jianshu.com/p/df464b26ae58)
- eslint 规则文档：[http://eslint.cn/docs/rules/](http://eslint.cn/docs/rules/)
- 如何使用Vue2.0开发富交互式WEB应用： [https://ppt.baomitu.com/d/52096df3#/](https://ppt.baomitu.com/d/52096df3#/)
  ​