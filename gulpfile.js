const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function build() {
  // where is the scss file
  return gulp.src('./scss/**/*.scss')
  // pass that file through sass compiler
  .pipe(sass().on('error', sass.logError))
  // where is the compiled css saved?
  .pipe(gulp.dest('./css'))
  // stream changes to all browser
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', build);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.build = build;
exports.watch = watch;
