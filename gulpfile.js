const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();


gulp.task('html', function() {
  return gulp.src('./*.mjml')
    .pipe(plugins.cached('htmlify'))
    .pipe(plugins.mjml())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['html'], function() {
  gulp.watch(['*.mjml'], ['html']);
});

gulp.task('build', ['html']);
