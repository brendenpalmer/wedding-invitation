'use strict';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean:dist', function () {
    del('build');
});

gulp.task('clean:tmp', function () {
    del('.tmp');
});

gulp.task('usemin', function() {
    return gulp.src('app/index.html')
        .pipe(usemin({
            css: [ rev(), minifyCss() ],
            vendorcss: [ rev(), minifyCss() ],
            html: [ minifyHtml({ empty: true }) ],
            js: [ ngAnnotate(), uglify(), rev() ],
            vendorjs: [ uglify(), rev() ],
            inlinejs: [ uglify() ],
            inlinecss: [ minifyCss(), 'concat' ]
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('templates', function () {
    return gulp.src('app/modules/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(templateCache({
            standalone: true,
            transformUrl: function (url) {
                if (url.indexOf('modules') !== 0) {
                    return 'modules/' + url;
                } else {
                    return url;
                }
            }
        }))
        .pipe(concat('templates.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.tmp'));
});

gulp.task('images', function () {
    gulp.src('app/images/**/*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('text', function () {
    gulp.src('app/**/*.txt')
        .pipe(gulp.dest('build'));
});

gulp.task('build', gulpSequence('clean:tmp', 'clean:dist', 'templates', 'styles', 'usemin', 'images', 'text'));
