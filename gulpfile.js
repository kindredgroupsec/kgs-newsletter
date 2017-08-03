const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();

gulp.task('html')
  .src('*.mjml')
  .pipe(plugins.mjml())
  .pipe(gulp.dest('./'));


gulp.task('default', ['html'], function() {
  gulp.watch(['*.mjml'], ['html']);
});

gulp.task('build', ['html']);
