
## 大纲
利用gulp 把angular 搭建一个自己的脚手架（构建一个基础的架子）

"脚手架" 是一种元素编程的方法，用于构建数据库的应用。许多MVC框架都有运用这种思想。程序员编写一份specification（规格说明书），来描述怎样去使用数据库；而由（脚手架的）编译器来根据这份specification生成相应的代码，并进行增、删、改、查数据库操作。我们把这种模式称为“脚手架”，在脚手架上面去更高效的建造出强大的应用！

## 为什么要写脚手架
因为像angular 这种开发，项目大的话，在header里面引入大量的js文件，css文件，造成网站性能加载缓慢，在一个大的文件里面开发特别麻烦。

## 一般编写脚手架的方式
我们通常说，项目工程化了吗？

一般使用工程化工具
gulp
webpack
grant

## 脚手架的库
Yeoman Web 应用开发流程与工具 http://yeoman.io/

集成方案
FIS：解决前端开发中自动化工具、性能优化、模块化框架、开发规范、代码部署、开发流程等问题 http://FIS.baidu.com

构建工具 & 模块化
一个构建、测试应用的构建工具

gulp.js: 自动化工作流
node 建立在V8引擎上的快速构建平台
模块打包器
将模块打包到一个bundle中

webpack： 能够将依赖打包、生成的自动化构建工具

## 搭建脚手架
## 自己搭建脚手架的好处
* 自己搭建的东西，自己对结构很清楚，一旦出现问题，能立马定位，不影响公司业务的发展

### 使用gulp + angular + bower

### 文件命名规定
http://md.shudong.wang/markdown-img-paste-20171212103342421.png
http://md.shudong.wang/markdown-img-paste-20171212103423558.png
http://md.shudong.wang/markdown-img-paste-2017121210325883.png


### 模式
#### MVC 模式
    mvc 模式（同一种类型的文件写在一个问价夹下面）
    src 源码
        script
            controller 控制器
                nav.controller.js
                userList.controller.js
            service 
                nav.service.js
                userList.service.js
            directive 指令
                nav.directive.js
                userList.directive.js
        view

    dist 生产环境文件
        index.html
        static
        js
        css
        image
        font

    build 构建的文件
    config 配置文件
    gulp gulp 配置文件
    gulp.js 
    .gitignore
    env

    controller

#### 模块化模式
    模块化(一个模块的所有文件写在一个这个模块的文件夹下面)
    nav 导航模块
        nav.service.js
        nav.controller.js
        nav.directive.js
        nav.html
        nav.css
        nav.spec.js
    userList 导航模块
        userList.service.js
        userList.controller.js
        userList.directive.js
        userList.html
        userList.css
        userList.spec.js

### angular kit 脚手架搭建

#### angular 文件目录创建
创建项目需要的文件

```
mkdir -p src/{script/{controller,service,test},view} dist bulid config && touch .gitignore .env readme.md 
```

### 下载angular 依赖的资源
    下载
        angular
        angular-route

#### 使用bower or npm or yarn 下载

1.bower(安装 npm i bower -g) -g 表示全局安装
```
bower i jquery
bower install angular angular-route --save-dev
```

### 没有node_modules 执行 cnpm i 

2.npm
```
npm i angular angular-route -D
```
### 配置angular启动文件
#### 创建 app.js route.js
* 在 src/script 里面创建文件
```
cd src/script

# 在 D:\VS web708\day02\angularKit\src\script 文件目录下执行,创建 touch app.js route.js 文件

touch app.js route.js
```
#### 编写 app.js
```
var app = angular.module('loyeapp',[
    'ngRoute',
    'controllers',
    'services'
])

// 注入子模块
angular.module('controllers',[]);
angular.module('services',[]);
```

#### 编写route.js 启动后，需要在localhost下运行
```
// routeProvider是 ngRoute模块中的服务，用于配置路由
app.config(function($routeProvider){
    $routeProvider.when('/',{
        template: '<h1>今天好冷~{{msg}}</h1>',
        controller: function($scope){
            $scope.msg = "好像要下雪了~"
        }
    })
})

// 访问 http://localhost:8080 会显示 "今天好冷~好像要下雪了~" 的内容
```
#### 创建index.html 文件
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 引入合并的 css 文件 -->
    <link rel="stylesheet" type="" href="/static/css/bundle.css">
    <title>Document</title>
    </head>
    <body ng-app="starkapp">
    <!-- 页面内容 头部 -->
    
    
    <div ng-view>
        <!-- 路由内容显示在这里 -->
    </div>
    </body>
    <!-- 引入合并的js文件 -->
    <script src="/static/bundle.js" ></script>
    <script src="/static/all.js" ></script>
    </html>

#### 项目初始化
```
npm init 

npm i gulp gulp-plumber gulp-concat gulp-load-plugins open gulp-connect gulp-rename gulp-uglify -D

```


## gulp 打包 合并
## 压缩

## 实现把src/script 里面的所有js文件 打包到 build 里面 和 dist 里面

dist 里面是压缩方式

文件目录（自动生成）
build
    index.html
    static
        bundle.js   合并angular和angular-route的文件
        all.js      合并的route、controller、service、app 等文件

dist
    index.html
    static
        bundle.min.js   合并压缩 angular 和 angular-route 的文件
        all.min.js      合并压缩的 route、controller、service、app 等文件


### 安装模块
先初始化
    npm init -y
安装
    npm i gulp gulp-plumber gulp-concat gulp-load-plugins open -D

    npm i gulp-connect -D

使用gulp-load-plugins模块，可以加载package.json文件中所有的gulp模块。

### 为什么要打包？
*提高网站性能，减少http请求
*方便开发

直接指向 gulp 默认会调用 gulp default
如果想执行自己编写的任务 task 就直接 gulp taskname




### 打包开发的文件
#### 同时打包 开发 和生产环境各一份
### 打包依赖的文件
### 打包静态html
### 打包静态css
### 打包image 图片文件
### 打包其他静态问题比如 字体 json