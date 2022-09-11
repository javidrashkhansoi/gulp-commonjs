// ? The global variable $
global.$ = {

  // ? Plugins
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  del: require("del"),

  // ? Configurations
  path: require("./config/path"),
  app: require("./config/app"),

}

// ? Tasks
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

// ? Watchers
const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html).on("all", $.browserSync.reload);
  $.gulp.watch($.path.scss.watch, task.scss).on("all", $.browserSync.reload);
  $.gulp.watch($.path.js.watch, task.js).on("all", $.browserSync.reload);
  $.gulp.watch($.path.img.watch, task.img).on("all", $.browserSync.reload);
};

const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(task.html, task.scss, task.js, task.img,),
  $.gulp.series(task.clearzip, task.zipsrc, task.zippublic),
);

const dev = $.gulp.series(
  build,
  $.gulp.parallel(watcher, task.server,),
);

// ? Exported tasks
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = $.gulp.series(task.clearfonts, task.font, task.fontface,);
exports.zip = $.gulp.series(task.clearzip, task.zipsrc, task.zippublic);
exports.clearnode = task.clearnode;

// ? Build
exports.default = $.app.isProd ? build : dev;
