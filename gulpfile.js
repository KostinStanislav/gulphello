var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
    return gulp.src(['./public/file2.js','./public/file3.js','./public/file1.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./new'));
});
