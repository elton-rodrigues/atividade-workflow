var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-html', function() {
  return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('./source/scss/*.scss')
  	.pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});
	

gulp.task('monitorar', function(){
	gulp.watch('./source/scss/*.scss',['minify-css']);
	gulp.watch('./source/index.html',['minify-html']);
});