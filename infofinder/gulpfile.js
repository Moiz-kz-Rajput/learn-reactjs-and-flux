var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var mainBowerFiles = require('gulp-main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browserify', function () {
  browserify('./src/main.js')
    .transform(babelify, {presets: ["es2015", "stage-0", "react"]})
    .bundle()
    .on('error', handleError)
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/css/*.*')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('bower', function () {
  var filterJS = gulpFilter('**/*.js', {restore: true});

  return gulp.src('./bower.json')
    .pipe(mainBowerFiles({
      overrides: {
        bootstrap: {
          main: [
            './dist/js/bootstrap.js',
            './dist/css/*.min.*',
            './dist/fonts/*.*'
          ]
        }
      }
    }))
    .pipe(filterJS)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(filterJS.restore)
    .pipe(gulp.dest('./dist/libs'));
});

gulp.task('build-all', ['browserify', 'bower', 'copy']);
gulp.task('default', ['build-all'], function () {
  return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});