var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var mainBowerFiles = require('gulp-main-bower-files');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var del = require('del');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browserify', function () {
  browserify('./app/main.js')
    .transform(babelify, {presets: ["es2015", "stage-0", "react"]})
    .bundle()
    .on('error', handleError)
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('app/images/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('styles', function () {
  return gulp.src('./app/styles/style.scss')
    .pipe(sass({
      includePaths: [
        'bower_components/foundation-sites/scss'
      ]
    }))
    .on('error', handleError)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'));

});
gulp.task('bower', function () {
  var filterJS = gulpFilter('**/*.js', {restore: true});

  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(filterJS)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(filterJS.restore)
    .pipe(gulp.dest('./dist/libs'));
});

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['dist']);
});

gulp.task('build-all', ['browserify', 'bower', 'styles', 'copy']);
gulp.task('default', ['build-all'], function () {
  return gulp.watch('app/**/*.*', ['browserify', 'styles', 'copy']);
});