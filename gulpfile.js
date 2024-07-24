const {
  series
} = require('gulp');

const chokidar = require('chokidar');

var gulp = require('gulp');
//var gulp sass = require('gulp-sass');

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

//function to change sass code to css
/*function convert(cb) {
  return gulp.src('app/scss/*.scss')
    //.pipe(sass())
    .pipe(gulp.dest('dist/css/'))
}*/


function watch(cb) {
  gulp.watch('app/*', ['copyhtml', 'copyimages', 'copycss', 'copyjs'])
}

exports.default = series(copyhtml, copyimages, copycss);
