const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const browserify = require('browserify');
const underscoreify = require('node-underscorify');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
// const named = require('vinyl-named');

function errorHandler (err) {
    console.log(err.toString());
}

gulp.task('sass', () => {
    gulp.src('./src/client/scss/style.scss')
        .pipe(plumber())
        .pipe(sass({ style: 'expanded',errLogToConsole: true }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('js', () => {
    console.log('js', 'fjdklfjlkd', require('./webpack.config.local'));
	return gulp.src(['./src/client/js/main.jsx'])
		.pipe(webpackStream(require('./webpack.config.local'), webpack))
		.pipe(gulp.dest('./public'));
});


gulp.task('watch', () => {
    gulp.watch('./src/client/scss/**/*.scss', ['sass']);
    gulp.watch('./src/client/js/**/*.js', ['js']);
});

gulp.task('default', [
    'sass',
    'js',
    'watch'
]);

gulp.task('production', [
    'sass',
    'js'
]);
