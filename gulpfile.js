const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const puregecss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(puregecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}
function watchTask() {
  watch(["sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
