var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
    'assets/scss/foundation'
];

gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe($.sass({
                includePaths: sassPaths,
                outputStyle: 'compressed' // if css compressed **file size**
            })
            .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('copy:css', ['sass'], function () {
    return gulp.src('assets/css/**/*.css')
        .pipe(gulp.dest('build/assets/css'));
});

gulp.task('copy:data', function () {
    return gulp.src('data/**/*.*')
        .pipe(gulp.dest('build/data'));
});

gulp.task('prefix', function () {
    gulp.src('build/index.html')
        .pipe($.prefix('/ux-experiments', null, '/u-experiments'))
        .pipe(gulp.dest('build', { overwrite: true }));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(['assets/scss/**/*.scss'], ['sass']);
});
