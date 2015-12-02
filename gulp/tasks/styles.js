'use strict';

var config = require('../config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('styles', function () {
    return gulp.src(config.styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 versions', '> 1%', 'ie 8'))
        .pipe(minifyCss())
        .pipe(gulp.dest(config.styles.tmp));
});

gulp.task('styles:copy', function () {
    return gulp.src(config.styles.tmp + '/*.css')
        .pipe(gulp.dest(config.styles.dest));
});
