var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	bootstrapDir: './bower_components/bootstrap/scss',
	publicDir: './dist',
	docsDir: './docs',
};

gulp.task('css', function() {
	return gulp.src('./scss/main.scss')
	.pipe(sass({
		includePaths: [config.bootstrapDir],
	}))
	.pipe(gulp.dest(config.publicDir + '/css'))
	.pipe(gulp.dest(config.docsDir + '/css'));
});

gulp.task('default', ['css']);
