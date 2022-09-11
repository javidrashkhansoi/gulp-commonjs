const webpack = require("webpack-stream");

const js = () => {
  return $.gulp.src($.path.js.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: "JS",
        message: error.message,
      })),
    }))
    .pipe(webpack($.app.webpack))
    .pipe($.gp.if($.app.isProd, $.gp.babel()))
    .pipe($.gp.if($.app.isProd, $.gp.uglify()))
    .pipe($.gulp.dest($.path.js.dest));
};

module.exports = js;
