'use strict';

var config = require('../config');
var browserSync = require('browser-sync').create();
var spa = require('browser-sync-spa');
var gulp = require('gulp');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', ['sass', 'templates:serve'], function () {
    browserSync.use(spa({
        selector: '[ng-app]'
    }));

    browserSync.init({
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        open: true,
        browser: 'google chrome',
        logLevel: 'debug',
        server: {
            baseDir: './app',
            routes: {
                '/bower_components': './bower_components',
                '/styles': './build/css',
                '/.tmp': './.tmp'
            }
        },
        files: [
            config.src + '/**/*.js',
            config.src + '/**/*.html'
        ]
    });

    gulp.watch('app/**/*.html', ['templates:serve']);
    gulp.watch('app/**/*.js').on('change', browserSync.reload);
    gulp.watch('app/styles/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src(config.styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('templates:serve', function () {
    gulp.src('app/modules/**/*.html')
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
        .pipe(gulp.dest('.tmp'))
        .pipe(browserSync.stream());
});
