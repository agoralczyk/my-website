var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
	var tsProject = ts.createProject(path.resolve('./tsconfig.json'));
	return gulp.src(path.resolve('./**/*.ts'))
		.pipe(ts(tsProject))
		.js
		.pipe(gulp.dest(path.resolve('./')))
});