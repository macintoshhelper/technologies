# Setting up Gulp

## Instructions

1. npm install these packages:
    ```bash
    npm install --save-dev gulp gulp-concat gulp-sourcemaps
    ```
1. Create a new file gulpfile.js
    - Node require these npm modules in the *top of the file*:
        ```js
        // TOP OF THE FILE
        const gulp = require('gulp');
        const sourcemaps = require('gulp-sourcemaps');
        const babel = require('gulp-babel');
        const concat = require('gulp-concat');
        ```
    - Register as many tasks as you want:
        ```js
        gulp.task('example-task', () => {
          /*
           * Gulp task goes here
           */
        });
        ```
    - Call the task in the *bottom of the file*:
        ```js
        gulp.start('example-task');
        ```
1. Add these scripts to package.json and run `npm run build` to compile:
    ```json
    "build": "node gulpfile.js",
    "postinstall": "node gulpfile.js",
    ```
