const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Компиляция SCSS в CSS
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Отслеживание изменений в SCSS и HTML
function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('src/scss/**/*.scss', compileSass);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
}

exports.compileSass = compileSass;
exports.watch = watch;