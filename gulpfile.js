/*
说明：HYH GULP 1.0版本: =====>408240762

开发文件
- assets
  + images
  + css
  + sass
  + script
  + coffee

生产文件
-formal
  + images
  + css
  + script
  + coffee

源文件
- html
  + index
  + public

生成文件
- view
  + index
  + public



************************************************************************************************************
* 1、assets为资源开发文件夹，formal为资源生产文件夹，除插件外，目录保持一致                                *
*                                                                                                          *
* 2、assets的开发环境的文件修改后会自动生成优化后的文件至formal文件夹                                      *
*                                                                                                          *
* 3、css流程：assets/sass/xx.sass==(编译、兼容)==>assets/css/xx.css==(压缩、合并)==>formal/css/xx.css      *
*    js流程：assets/script/xx.js==(查错、压缩、合并)==>formal/script/xx.js                                 *
*    img流程：assets/images/xx.jpg==(压缩)==>formal/images/xx.jpe                                          *
*                                                                                                          *
* 4、html流程：html/xx.html==(压缩)==>view/xx.html                                                         *
************************************************************************************************************
*/
console.log("\033[32m\033[47m******************************************************************");
console.log("*           BY HYH GULP  有问题找这娃儿=====>408240762           *");
console.log("*                                                                *");
console.log("*   CSS、JS、HTML、IMAGE查错压缩、SASS、COFFEE、SOURCEMAPS编译   *");
console.log("******************************************************************\033[45m");
var gulp = require('gulp');
    sass = require('gulp-sass');
    minifyCss = require('gulp-minify-css');
    rename = require('gulp-rename');
    jshint = require('gulp-jshint');
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
    imagemin = require('gulp-imagemin');
    htmlmin = require('gulp-htmlmin');
    clean = require('gulp-clean');
    del = require('del');
    autoprefixer = require('gulp-autoprefixer');
    plumber = require('gulp-plumber');
    coffee = require('gulp-coffee');
    sourcemaps = require('gulp-sourcemaps');
    changed = require('gulp-changed');

var watchPath = {
    css : ['assets/sass/**/*','assets/sass/*'],
    script : ['assets/script/**/*','assets/script/*'],
    images : ['assets/images/**/*','assets/images/*'],
    html : ['html/**/*','html/*'],
    coffee : ['assets/coffee/**/*','assets/coffee/*']
};

var workPath = {
    css : ['assets/sass/**/*','assets/sass/*'],
    script : ['assets/script/*','assets/script/**/*'],
    images : ['assets/images/**/*','assets/images/*'],
    html : ['html/**/*','html/*'],
    coffee : ['assets/coffee/**/*','assets/coffee/*']
};

/*sass转换Css*/
gulp.task('sass-css', function () {
    gulp.src(workPath.css) //该任务针对的文件
    	.pipe(changed('assets/css'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass()) //该任务调用的模块
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css')) //将会在src/css下生成index.css
        .pipe(minifyCss())
        .pipe(sourcemaps.write('maps',{addComment: true}))
        .pipe(gulp.dest('formal/css'));
});
/*coffee*/
gulp.task('coffee', function() {
  gulp.src(workPath.coffee)
    .pipe(changed('formal/coffee'))
    .pipe(plumber())
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('formal/coffee'));
});
/*JS检查、压缩*/
gulp.task('js-int',function() {
   	gulp.src(workPath.script)
        .pipe(changed('formal/script'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
	    .pipe(jshint())
	    .pipe(jshint.reporter('jshint-stylish'))
	    .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
	    .pipe(gulp.dest('formal/script'));
});

/*图片压缩*/
gulp.task('mini-images', function(){
    gulp.src(workPath.images)
        .pipe(changed('formal/images'))
        .pipe(imagemin({
        	optimizationLevel : 3,
        	progressive : true
        }))
        .pipe(gulp.dest('formal/images'));
});

/*HTML压缩*/
gulp.task('mini-html', function() {
  	gulp.src(workPath.html)
        .pipe(changed('view'))
        .pipe(plumber())
	    .pipe(htmlmin({collapseWhitespace: true}))
	    .pipe(gulp.dest('view'));
});

/*文件清除*/
gulp.task('clean:css', function () {
    del([
        'assets/css/**/*.css',
        'assets/css/*.css',
        'formal/css/*.css',
        'formal/css/main/*.css',
        'formal/css/public/*.css',
        'formal/css/main/**/*.css',
        'formal/css/public/**/*.css',
        'formal/css/maps/**/*.map',
        'formal/css/maps/*.map'
    ]);
});

gulp.task('clean:js', function () {
    del([
        'formal/script/*.js',
        'formal/script/main/**/*.js',
        'formal/script/public/**/*.js',
        'formal/script/main/*.js',
        'formal/script/public/*.js',
        'formal/script/maps/**/*.map',
        'formal/script/maps/*.map'
    ]);
});

gulp.task('clean:html', function () {
    del([
        'view/*.html',
        'view/**/*.html'
    ]);
});

gulp.task('clean:img', function () {
    del([
        'formal/images/**/*.jpg',
        'formal/images/*.jpg',
        'formal/images/**/*.png',
        'formal/images/*.png',
        'formal/images/**/*.gif',
        'formal/images/*.gif',
        'formal/images/**/*.svg',
        'formal/images/*.svg'
    ]);
});

gulp.task('clean:test', function ($path) {
    del([
        $path
    ]);
});

gulp.task('watch',function(){
	gulp.watch(watchPath.css, function(event){
            if(event.type==="deleted"){
                gulp.run(['clean:css']);
            }
            gulp.run(['sass-css']);
            console.log("********************    END SASS-CSS <"+event.path+"|||"+event.type+">    ********************");
            // console.log("********************    END SASS-CSS <"+event.path.split("\\")[event.path.split("\\").length-1]+"|||"+event.type+">    ********************");
        });
	gulp.watch(watchPath.script, function(event){
            if(event.type==="deleted"){
                gulp.run(['clean:js']);
            }
            gulp.run(['js-int']);
            console.log("********************    END JS-INT AND UGLIFY <"+event.path.split("\\")[event.path.split("\\").length-1]+"|||"+event.type+">    ********************");
        });
	gulp.watch(watchPath.images, function(event){
            if(event.type==="deleted"){
                gulp.run(['clean:img']);
            }
            gulp.run(['mini-images']);
            console.log("********************    END MINI-INMAGES <"+event.path.split("\\")[event.path.split("\\").length-1]+"|||"+event.type+">    ********************");
        });
	gulp.watch(watchPath.html, function(event){
            if(event.type==="deleted"){
                gulp.run(['clean:html']);
            }
            gulp.run(['mini-html']);
            console.log("********************    END MINI-HTML <"+event.path.split("\\")[event.path.split("\\").length-1]+"|||"+event.type+">    ********************");
        });
    /*coffee*/
    gulp.watch(watchPath.coffee, function(event){
            gulp.run(['coffee']);
            console.log("********************    END COFFEE <"+event.path.split("\\")[event.path.split("\\").length-1]+"|||"+event.type+">    ********************");
        });
});

gulp.task('default',['watch']); /*定义默认任务*/
