const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');


gulp.task('default', () => {
  gulp.src('client-build/src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/assets/js'));
});


gulp.start('default');
