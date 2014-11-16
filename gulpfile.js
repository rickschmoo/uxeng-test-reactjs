var del = require('del');
var fs = require('fs');
var gulp = require('gulp');
var concat = require("gulp-concat");
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');

// var server = require('gulp-express');
// var browserSync = require("browser-sync");
// var reload = browserSync.reload;
// var git = require('gulp-git');
// var sass = require('gulp-sass');
// var gutil = require('gulp-util');
// var autoprefixer = require("gulp-autoprefixer");
// var theo = require('theo');


var paths = {
  output: 'www',
  htmlsrc: 'src/*.html',
  htmldest: 'www',
  jssrc: 'src/scripts/*.js',
  jsxsrc: 'src/scripts/*.jsx',
  jsdest: 'www/js',
  stylussrc: 'src/styles/*.styl',
  cssdest: 'www/css',
  assetssrc: 'assets/**',
  assetsdest: 'www/assets',
  npm: './node_modules',
};

// CLEANUP
gulp.task('clean', function(done) {
  return del([paths.output + '/**'], done);
});

// HTML
gulp.task('html', function() {
  return gulp.src(paths.htmlsrc)
    .pipe(gulp.dest(paths.htmldest))
})

// STYLES
gulp.task("styles", function() {
  return gulp.src(paths.stylussrc)
     .pipe(stylus())
     .pipe(rename('styles.css'))
     .pipe(gulp.dest(paths.cssdest));
})

// JSHINT
// JS hint task
gulp.task('jshint', function() {
  gulp.src(paths.jssrc)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// SCRIPTS
gulp.task('scripts', function() {
  return gulp.src(paths.jssrc)
     .pipe(gulp.dest(paths.jsdest));
})

// REACT SCRIPTS
// COMPILE JSX
gulp.task('react', function () {
    return gulp.src(paths.jsxsrc)
        .pipe(react())
        .pipe(gulp.dest(paths.jsdest));
});

// Vendor scripts
gulp.task('vendor', function() {
  return gulp.src([
      'bower_components/react/react.js',
      'bower_components/react/JSXTransformer.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(paths.jsdest))
})

// IMAGES
gulp.task("assets", function() {
  return gulp.src(paths.assetssrc)
     .pipe(gulp.dest(paths.assetsdest));
})


// WATCH FOR UPDATES
gulp.task('watch', function() {
   gulp.watch(paths.htmlsrc, ['html'])
   gulp.watch(paths.jssrc, ['jshint', 'scripts'])
   gulp.watch(paths.jsxsrc, ['react'])
   gulp.watch(paths.stylussrc, ['styles'])
   gulp.watch(paths.assetssrc, ['assets'])
   // gulp.watch('bower_components/**', ['vendor'])
})

gulp.task('dev', ['html', 'react', 'jshint', 'scripts', 'vendor', 'styles', 'assets', 'watch']);


