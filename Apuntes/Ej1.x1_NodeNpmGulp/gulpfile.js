const { series, parallel, src, dest, watch } = require('gulp');
const CLEAN_CSS = require('gulp-clean-css');
const CLEAN_JS = require('gulp-uglify');
const SCSS = require('gulp-sass')(require('sass'));

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function minimizeCss() {
    return src("./src/css/*.css")
            .pipe(CLEAN_CSS())
            .pipe(dest('./dist/css'));
}

function minimizeJs() {
    return src("./src/js/*.js")
            .pipe(CLEAN_JS())
            .pipe(dest('./dist/js/'));
}

function compileSCSS() {
    return src('./src/scss/*.scss')
            .pipe(SCSS())
            .pipe(dest('./src/css/'));
}

function watcher() {
    watch('./src/scss/*.scss', compileSCSS);
}

exports.build = build;
// exports.cleanCssFunc = minimizeCss;
// exports.cleanJsFunc = minimizeJs;
// exports.compileSCSS = compileSCSS;
exports.cleanFiles = parallel(minimizeCss, minimizeJs);
exports.default = series(clean, build);
exports.watcher = watcher;
