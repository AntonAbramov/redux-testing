'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    crypto = require('crypto'),
    replace = require('gulp-replace'),
    clean = require('gulp-clean'),
    merge = require('merge-stream'),
    jshint = require('gulp-jshint'), // linting
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'), // Scss, sass
    minifycss = require('gulp-cssmin'), // minify css
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'), // add prefixes on specific css rules
    spritesmith = require('gulp.spritesmith'), // generate scss with sprites info
    cached = require('gulp-cached'),
    notify = require('gulp-notify'),
    gulpSequence = require('gulp-sequence'),
    gulpIf = require('gulp-if'),
    webpack = require('webpack-stream'),
    eslint = require('gulp-eslint');

var isProduction = (process.env.NODE_ENV === 'production') ? true : false;

gulp.task('sass-build', function () {
  return gulp.src('app/assets/scss/**/*.scss')
      //.pipe(cached())
      .pipe(gulpIf(!isProduction, sourcemaps.init()))
      .pipe(sass())
      .on('error', notify.onError(function (err){
        return {
          title: 'SASS',
          message: err.message
        };
      }))

      .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
      }))
      .pipe(gulpIf(!isProduction, sourcemaps.write()))
      .pipe(gulpIf(isProduction, minifycss()))
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest('app/assets/css'));
});

// Lint js
gulp.task('jshint', function () {
  return gulp.src(['app/assets/js/**/*.js', '!app/assets/js/juniqe.js', '!app/assets/js/require-min.js', '!app/assets/js/checkout/**/*', '!app/assets/js/checkout.js', '!app/assets/js/libs/**/*'])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

function hash(filePath) {
  return crypto.createHash('md5')
      .update(fs.readFileSync(filePath, 'utf8'))
      .digest('hex').slice(0, 16);
}

gulp.task('remove-current-sprites', function () {
  return gulp.src('app/assets/images/*-sprite*.png')
      .pipe(clean());
});

var spritesCSSFlow;
//generate scss with sprites
gulp.task('create-sprite-images', function () {
  var spriteData = gulp.src('app/assets/images/icons/*.png')
      .pipe(spritesmith({
        // This will filter out `fork-2x.png`, `github-2x.png`, ... for our retina spritesheet
        //   The normal spritesheet will now receive `fork.png`, `github.png`, ...
        retinaSrcFilter: ['app/assets/images/icons/*-2x.png'],
        imgName: 'sprite.png',
        imgPath: '/app/assets/images/sprite.png',
        retinaImgName: 'sprite-2x.png',
        retinaImgPath: '/app/assets/images/sprite-2x.png',
        cssName: '_sprite.scss'
      }));

  var imgStream = spriteData.img
      .pipe(gulp.dest('app/assets/images/')); // output path for the img

  spritesCSSFlow = spriteData.css;

  return imgStream;
});

gulp.task('complete-sprites', function () {
  var imgName = hash('app/assets/images/sprite.png') + '-sprite',
      imgName2x = hash('app/assets/images/sprite-2x.png') + '-sprite-2x';

  var cssStream = spritesCSSFlow
      .pipe(replace(/sprite\.png/g, imgName + '.png'))
      .pipe(replace(/sprite-2x\.png/g, imgName2x + '.png'))
      .pipe(gulp.dest('app/assets/scss/base/'));

  var renameImg = gulp.src('app/assets/images/sprite.png')
      .pipe(clean())
      .pipe(rename({
        basename: imgName,
        extname: '.png'
      }))
      .pipe(gulp.dest('app/assets/images'));

  var rename2XImg = gulp.src('app/assets/images/sprite-2x.png')
      .pipe(clean())
      .pipe(rename({
        basename: imgName2x,
        extname: '.png'
      }))
      .pipe(gulp.dest('app/assets/images'));

  return merge(cssStream, renameImg, rename2XImg);
});

gulp.task('sprite', gulpSequence(
  'remove-current-sprites',
  'create-sprite-images',
  'complete-sprites'));

gulp.task('sass', gulpSequence(
  'sprite',
  'sass-build'));

gulp.task('checkout-build', function() {
  return gulp.src('/app/assets/js/checkout/App.js')
      .pipe(
          webpack(require('./webpack.config.js'))

      ).on('error', function() {
        console.error('ERROR', "\x07"); // Recover from errors
      })
      .pipe(gulp.dest('./app/assets/js/'));
});

gulp.task('eslint', function () {
  return gulp.src(['app/assets/js/checkout/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format());
});

// watchers
gulp.task('watch', function () {
  gulp.watch('app/assets/scss/**/*.scss', ['sass-build']);
  //gulp.watch('app/assets/js/**/*.js', ['jshint']);
  gulp.watch('app/assets/js/checkout/**/*.js', ['checkout-build']);
});

gulp.task('serve', ['sass', 'checkout-build', 'jshint', 'watch']);

gulp.task('default', ['sass', 'checkout-build', 'watch'], function () {});
