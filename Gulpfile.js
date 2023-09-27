const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const merge = require('merge2');

gulp.task('minify-css', () => {
     // Folder with files to minify
	return merge(
		gulp.src('./src/styles/foundation.css'),
		gulp.src('./src/styles/animations.css'),
		gulp.src('./src/styles/ui.css'),
		gulp.src('./src/styles/hand.css'),
		gulp.src('./src/styles/players.css')
	)
		.pipe(cleanCSS())
		.pipe(concat('index.css'))
		.pipe(gulp.dest('./dist/'));
});