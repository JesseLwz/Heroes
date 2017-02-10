	
// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass(
            {
                outputStyle: 'expanded'//輸出CSS的風格分為 nested(d),expanded,compact,compressed
            }
        ))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./src/**/*.scss', ['sass']);
})