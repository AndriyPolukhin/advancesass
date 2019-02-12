let gulp = require('gulp');
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require('browser-sync').create();

let paths = {
  styles: {
    src: 'sass/**/*.scss',
    dest: 'css/'
  },

  html: {
    src: './index.html'
  }
};

function style() {
  return (
    gulp
      .src(paths.styles.src)
      // .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream())
  );
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, reload);
}

exports.style = style;
exports.watch = watch;
