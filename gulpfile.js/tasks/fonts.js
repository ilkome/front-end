'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')


// Copy fonts to build folder
// =================================================================================================
gulp.task('fonts', () => {
  return gulp.src(paths.fonts.input)

    // Show name of file in pipe
    .pipe(debug({ title: 'fonts:' }))

    .pipe(gulp.dest(paths.fonts.output))
    .pipe(browserSync.stream())
})
