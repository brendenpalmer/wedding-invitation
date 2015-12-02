'use strict';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var gulpSequence = require('gulp-sequence');
var concat = require('gulp-concat');

gulp.task('default', gulpSequence('build'));
