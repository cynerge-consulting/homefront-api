const { src, dest } = require('gulp');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// use 'gulp' command to bundle js files and minify with sourcemaps
exports.default = function () {
  return src('src/*.js', { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('publish/'));
};
