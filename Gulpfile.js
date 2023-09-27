const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const merge = require('merge2');

gulp.task('minify-css', () => {
     // Folder with files to minify
	return merge(
		gulp.src('./src/styles/index.css')
	)
		.pipe(cleanCSS())
		.pipe(concat('index.css'))
		.pipe(gulp.dest('./dist/'));
});