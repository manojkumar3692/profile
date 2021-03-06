'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
  .pipe(sass({
    style:'compressed'
  }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default',['watch']);