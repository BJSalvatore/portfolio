const {
  series
} = require('gulp');

var gulp = require('gulp');
// var sass = require('gulp-sass');
// var runSequence = require('run-sequence');

// task to copy all htm/html files from app directory to dist directory
function copyhtml(cb) {
  return gulp.src('app/*.+(htm|html)')
    .pipe(gulp.dest('dist/'))
}

function copyimages(cb) {
  return gulp.src('app/images/*.+(png|jpg|gif)')
    .pipe(gulp.dest('dist/images'))
}

function copycss(cb) {
  return gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css/'))
}

function copyjs(cb) {
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js/'))
}

// function to change sass code to css
function sass(cb) {
  return gulp.src('app/scss/*.scss')
    // .pipe(sass())
    .pipe(gulp.dest('dist/css/'))
}

function watch(cb) {
  gulp.watch('app/*', ['copyhtml', 'copyimages', 'copycss', 'copyjs', 'sass'])
}

// function
// default (cb) {
//   runSequence(['sass', 'copyhtml', 'copycss'], callback)
// });

exports.default = series(copyhtml, copyimages, copycss, sass);