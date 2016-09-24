import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';
import babel from 'babel-core/register';
import eslint from 'gulp-eslint';
// TODO - import the right config depending on the NODE_ENV variables

const plugins = gulpLoadPlugins();

// Clean up dist and coverage directory
gulp.task('clean', () =>
  del(['dist/**'])
);

// Set env variables
gulp.task('set-env', () => {
  // TODO - set env variables here before deploy
});

// Compile ES6 to ES5 and copy to dist
gulp.task('babel', () =>
  // copy all js files in src folder
  gulp.src(['src/**/*.js'])
    .pipe(plugins.newer('dist'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot(file) {
        return path.relative(file.path, __dirname);
      }
    }))
    .pipe(gulp.dest('dist'))
);

// configure eslint
gulp.task('lint', () => {
  gulp.src(['src/**/*.js'])
    .pipe(eslint({
      'extends': ['airbnb-base', 'eslint:recommended'],
    }))
    .pipe(eslint.format());
})

// Start server with restart on file changes
gulp.task('nodemon', ['babel'], () =>
  plugins.nodemon({
    script: path.join('dist', 'app.js'),
    ext: 'js',
    ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
    tasks: ['babel']
  })
);

// gulp serve for development
gulp.task('serve', ['clean'], () => runSequence('nodemon'));

// default task: clean dist, compile js files and copy non-js files.
gulp.task('default', ['clean'], () => {
  runSequence(
    ['babel', 'nodemon']
  );
});
