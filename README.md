##GULP前端自动化
CSS、JS、HTML、IMAGE查错压缩、SASS、COFFEE、SOURCEMAPS编译

###node环境的安装
[下载链接](http://nodejs.cn)

###npm指向cnpm
```sh
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

###全局安装gulp
>通过npm，在全局安装gulp

```javascript
npm install -g gulp
```

###目录安装gulp
>同时也要在开发目录安装gulp

```javascript
npm install gulp --save-dev
```

##THIS FILE
###首次运行
>需要拉取文件依赖

```sh
npm install
```

###目录结构
> - assets为资源开发文件夹，formal为资源生产文件夹，除插件外，目录保持一致 
> - assets的开发环境的文件修改后会自动生成优化后的文件至formal文件夹

###编译流程
> - css流程：assets/sass/xx.sass==(编译、兼容)==>assets/css/xx.css==(压缩、合并)==>formal/css/xx.css
> - assets/script/xx.js==(查错、压缩、合并)==>formal/script/xx.js
> - assets/images/xx.jpg==(压缩)==>formal/images/xx.jpe  
> - html流程：html/xx.html==(压缩)==>view/xx.html  

*Yihuan He email:yihuan1993@qq.com*
