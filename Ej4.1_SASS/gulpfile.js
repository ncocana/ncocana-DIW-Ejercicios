const { series, src, dest, watch } = require('gulp');
const SCSS = require('gulp-sass')(require('sass'));

function compileSCSS() {
    return src('./src/scss/*.scss')
            .pipe(SCSS())
            .pipe(dest('./dist/'));
}

function watchSCSS() {
    watch(['./src/**/*.scss', '!node_modules/**'], compileSCSS);
}

exports.compileSCSS = compileSCSS;
exports.watchSCSS = watchSCSS;
