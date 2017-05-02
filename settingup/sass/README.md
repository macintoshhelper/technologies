# Setting up SASS

## Instructions for Gulp

1. Setup gulp with these instructions: https://github.com/macintoshhelper/technologies/tree/master/settingup/gulp#instructions
1. Npm install these SASS Gulp packages:
    ```bash
    npm install --save-dev node-sass gulp-sass
    ```
1. Add this task to gulpfile.js:
    ```js
    gulp.task('sass', () => {
      gulp.src('client-src/sass/main.scss/* Input SASS */')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets/css/* Output CSS */'));
    });
    ```
1. Run this task in the bottom of the file:
    ```js
    gulp.start('sass');
    ```
