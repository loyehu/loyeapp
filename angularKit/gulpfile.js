
var gulp = require('gulp');
// 使用gulp-load-plugins模块，可以加载package.json文件中所有的gulp模块。
var $ = require('gulp-load-plugins')();
var plumber = require('gulp-plumber');      
var connect = require('gulp-connect');    // 热加载  
var open = require('open');

// 定义路径
var app = {
    devPath: './build/',    // 开发环境
    disPath: './dist/',     // 生产环境
    srcPath: './src/'
}

// 打包依赖的插件和包
gulp.task('bundle',function(){
    gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe($.plumber())
    .pipe($.concat('bundle.css'))
    .pipe(gulp.dest(app.devPath + '/static/style'))
    .pipe(gulp.dest(app.disPath + '/static/style'))
    gulp.src([
        './bower_components/angular/angular.min.js',
        './bower_components/angular-route/angular-route.min.js',
    ])
    .pipe($.plumber())  // 编译错误后继续往下执行
    .pipe($.concat('bundle.js'))    // 打包，合并到bundle.js文件
    .pipe(gulp.dest(app.devPath + 'static/js'))     // 生成到该路径里面
})

gulp.task('script',function(){
    gulp.src('./src/script/**/*.js')
    .pipe($.plumber())
    .pipe($.concat('all.js'))    // 打包，合并到all.js文件
    .pipe(gulp.dest(app.devPath + 'static/js'))     // 生成到该路径里面
    .pipe($.rename('all.min.js'))   // 重新命名文件
    .pipe($.uglify())   // 压缩js文件
    .pipe(gulp.dest(app.disPath + 'static/js'))    // 生成到生产环境里面
})
gulp.task('template',function(){
    gulp.src('./src/view/**/*.html')
    .pipe($.plumber())
    .pipe(gulp.dest(app.devPath + 'view'))
    .pipe(gulp.dest(app.disPath + 'view'))
})
// 配置监听
gulp.task('watch',function(){
    gulp.watch('./src/script/**/*.js',['script']);
    gulp.watch('./src/view/**/*.html',['template']);
})


// 启动一个serve
gulp.task('serve',function(){
    connect.server({
        root:[app.devPath], // 设置网页显示根路径
        livereload: true,
        port: 8080

    })
})
gulp.task('dev',[
    'serve',
    'watch',
    'script',
    'bundle',
    'template'
])















