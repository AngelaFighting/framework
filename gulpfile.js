/**
 * Created by Angela on 2018/4/7.
 */
var gulp = require('gulp'),
    pug = require('gulp-pug');

// 复制框架的js库到www/lib下
gulp.task('copy-lib',function () {
    gulp.src([
        'lib/jquery/dist/jquery.min.js',
        'lib/bootstrap/dist/js/bootstrap.min.js',
        'lib/foundation/js/foundation.min.js',
        'lib/foundation/js/vendor/modernizr.js',
        'semantic/dist/semantic.min.js'
    ]).pipe(gulp.dest('www/lib'));
});

// 复制框架的css和src的css到www/css下
gulp.task('copy-css', function () {
    gulp.src([
        'lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/foundation/css/foundation.min.css',
        'src/bootstrap3/mybootstrap3.css',
        'src/bootstrap4/mybootstrap4.css',
        'src/foundation/myfoundation.css',
        'semantic/dist/semantic.min.css'
    ]).pipe(gulp.dest('www/css'));
});

// 创建pug编译任务
gulp.task('pug', function () {
    gulp.src('src/**/!(_layout).pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('www'));
});

// 监听pug修改
gulp.task('watch', ['pug'], function () {
    // 添加监听事件
    gulp.watch('src/**/*.jade', ['pug']);
});

// 默认的gulp任务
gulp.task('default',['copy-lib','copy-css','pug'], function () {
    console.log('finish');
});
