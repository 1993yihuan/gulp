##GULP前端自动化
CSS、JS、HTML、IMAGE查错压缩、SASS、COFFEE、SOURCEMAPS编译

###目录结构
> - assets为资源开发文件夹，formal为资源生产文件夹，除插件外，目录保持一致 
> - assets的开发环境的文件修改后会自动生成优化后的文件至formal文件夹

###编译流程
> - css流程：assets/sass/xx.sass==(编译、兼容)==>assets/css/xx.css==(压缩、合并)==>formal/css/xx.css
> - assets/script/xx.js==(查错、压缩、合并)==>formal/script/xx.js
> - assets/images/xx.jpg==(压缩)==>formal/images/xx.jpe  
> - html流程：html/xx.html==(压缩)==>view/xx.html  

*Yihuan He email:yihuan1993@qq.com*
