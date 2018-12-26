var child_process = require('child_process');
var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var fancylog = require('fancy-log');
var task = 'legacy:js';

gulp.task(task, function (done) {

  fancylog('Compiling JavaScript');

  var defaultStream = browserify({
    // entries: './node_modules/uswds/src/js/start.js',
    entries: './pattern-lab/source/js/start.js',
    debug: true,
  })
  .transform('babelify', {
    global: true,
    presets: ['es2015'],
  });

  var stream = defaultStream.bundle()
    .pipe(source('uswds.js'))
    .pipe(buffer())
    .pipe(rename({ basename: 'uswds' }))
    .pipe(gulp.dest('dist/uswds/js'));

  stream
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .on('error', fancylog)
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/uswds/js'))
    .pipe(gulp.dest('pattern-lab/public/js/dist'));

  return stream;

});

gulp.task('eslint', function (done) {
  if (!cFlags.test) {
    fancylog('Skipping linting of JavaScript files.');
    return done();
  }

  return gulp.src([
      'src/js/**/*.js',
      'spec/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
