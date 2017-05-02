# Setting up Babel

## Instructions for Gulp

1. Setup gulp with these instructions: https://github.com/macintoshhelper/technologies/tree/master/settingup/gulp#instructions
1. Npm install these Babel Gulp packages:
    ```bash
    npm install --save-dev gulp-babel babel-preset-env babel-preset-env
    ```
1. Add this task to gulpfile.js:
    ```js
    gulp.task('babel', () => {
      gulp.src('client-src/js/**/*.js/* Change this to ES6 input */')
        .pipe(sourcemaps.init())
        .pipe(babel({
          presets: ['env'],
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/assets/js/* Change this to ES5 output */'));
    });
    ```
1. Run this task in the bottom of the file:
    ```js
    gulp.start('babel');
    ```
