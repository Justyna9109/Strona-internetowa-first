var gulp = require("gulp");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gplumber = require('gulp-plumber');

var errorHandler = function () {
    return gplumber(function (error) {
        console.log(error.message);
    })
}

gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(errorHandler())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded', errLogToConsole: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
})

gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

