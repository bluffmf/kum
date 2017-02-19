var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var run = require('gulp-run');
var server = require('gulp-express');





gulp.task('default', function(callback) {
    runSequence('build', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build', 'server', callback);
});

gulp.task('clean', function() {
    del.sync(['./dist']);
});

gulp.task('copy-build', ['copy-index-html', 'copy-css', 'copy-svg', 'copy-png', 'copy-js']);

gulp.task('copy-index-html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-css', function() {
    return gulp.src('./src/**/*.css')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-svg', function() {
    return gulp.src('./src/**/*.svg')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-png', function() {
    return gulp.src('./src/**/*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-js', function() {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'));
});


gulp.task('server', function() {

    server.run(['./src/server/server.js']);

    gulp.watch(['src/**/*.html'], [server.run]);
    gulp.watch(['src/**/*.js'], [server.run]);
    gulp.watch(['src/**/*.css'], [server.run]);
});











// package.json scripts start     gulp && nodemon start.js

// gulp.task('start', function() {
//    console.log('Hi, Express server listening on port 3333');
//    return run('node start.js').exec();
// });
