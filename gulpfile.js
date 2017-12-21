var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browser_sync = require('browser-sync'),
    reload = browser_sync.reload;

    gulp.task('stylus', function () {
        return gulp.src('./src/stylus/app.styl')
          .pipe(sourcemaps.init())
          .pipe(stylus())
          .pipe(postcss([
              autoprefixer()
          ]))
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest('./dist/css/'))
          .pipe(reload({stream:true}));
      });

      gulp.task('serve', function() {
          browser_sync({
              server: {
                  baseDir: './'
              }
          });
          gulp.watch(['./index.html','./src/stylus/*/*.styl', './src/stylus/*.styl'], ['stylus'])
      });