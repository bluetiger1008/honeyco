'use strict';
 
var gulp = require('gulp');
var scss = require('gulp-scss');
 

var paths = {
  scss: ['./src/styles/*.scss']
};

gulp.task('default', ['scss', 'watch']);


gulp.task('scss', function(done) {
  gulp.src(['./src/styles/style.scss'])
    .pipe(scss({
      
    }))
    .pipe(gulp.dest('./src/css/'))
    .on('end', done);
});
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['scss']);
});