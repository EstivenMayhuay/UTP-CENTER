const gulp = require("gulp");
const pug = require("gulp-pug");

gulp.task("pug", function () {
  return gulp
    .src("src/pug/pages/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("public/"));
});

gulp.task("default", function () {
  gulp.watch("src/pug/pages/*pug", gulp.series("pug"));
});
