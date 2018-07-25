import gulp from 'gulp';
// Initialize browser sync.
let browserSync = require('browser-sync').create();

// Read the default configuration.
let config = require('./config.json');

// Include plugins.
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefix from 'gulp-autoprefixer';
import glob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';
import shell from 'gulp-shell';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';

// Require a copy of the JS compiler for uswds.
// the gulptask is called "javascript"
// the following task compiles the node_modules/uswds/src/js/start.js file.
require('./gulptasks/javascript');

// If local configuration exists, merge the paramenters.
try {
    let local_config = require('./config.local.json');
    config = _.merge(config, local_config);
}
catch (e) {
    // Do nothing.
}

// Error Handler
// -------------------------------------------------------------- //
let errorHandler = (error) => {
    notify.onError({
        title: 'Task Failed [' + error.plugin + ']',
        message: 'Error: <%= error.message %>',
        sound: 'Beep'
    })(error);
    // Log error to console, unless that's already happening. Sass lint provides
    // good error handling/feedback in the terminal, so in this case we only want
    // the OS X notification w/sound.
    if (error.plugin !== 'gulp-sass') {
        console.log(error.toString());
    }
    // Prevent Gulp watch from stopping.
    this.emit('end');
};

// Pattern Lab CSS.
// -------------------------------------------------------------- //
gulp.task('pl:css', () => {
    return gulp.src(config.css.src)
        .pipe(glob())
        .pipe(plumber({
            errorHandler: function (error) {
                notify.onError({
                    title: "Gulp",
                    subtitle: "Failure!",
                    message: "Error: <%= error.message %>",
                    sound: "Beep"
                })(error);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true,
            includePaths: config.css.includePaths
        }))
        .pipe(autoprefix('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.css.pattern_lab_destination))
        .pipe(gulp.dest(config.css.dist_folder))
        .pipe(browserSync.reload({stream: true, match: '**/*.css'}));
});

gulp.task('pl:imagemin', () => {
    return gulp.src(config.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
});

// Watch task.
// ------------------------------------------------------------------- //

gulp.task('watch', function () {
    gulp.watch(config.js.src, ['legacy:js']);
    gulp.watch(config.css.src, ['pl:css']);
    gulp.watch(config.css.src, ['pl:js']);
    gulp.watch(config.pattern_lab.src, ['generate:pl']);
    gulp.watch(config.pattern_lab.javascript.src, ['generate:pl']);
    gulp.watch(config.images.src, ['pl:imagemin']);
});

// Static Server + Watch.
// ------------------------------------------------------------------- //

gulp.task('serve', ['watch', 'generate:pl'], () => {
    browserSync.init({
        serveStatic: ['./pattern-lab/public']
    });
});

// generate Pattern library.
gulp.task('generate:pl', ['pl:php', 'legacy:js', 'pl:css', 'pl:js', 'pl:imagemin']);

// Generate pl with PHP.
// -------------------------------------------------------------------- //

gulp.task('pl:php', shell.task('php pattern-lab/core/console --generate'));

// Component JS.
// -------------------------------------------------------------------- //
// the following task concatenates all the javascript files inside the
// _patterns folder, if new patterns need to be added the config.json array
// needs to be edited to watch for more folders.

gulp.task('pl:js', () => {
    return gulp.src(config.pattern_lab.javascript.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat("components.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./pattern-lab/public/js'))
        .pipe(gulp.dest('./dist/pl/js'))
        .pipe(browserSync.reload({stream: true, match: '**/*.js'}));
});

// Default Task
// --------------------------------------------------------------------- //

gulp.task('default', ['serve']);
