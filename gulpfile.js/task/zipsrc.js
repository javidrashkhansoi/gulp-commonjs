const zipSrc = () => {
  return $.gulp.src($.path.zip.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: "ZIP SOURCE",
        message: error.message,
      })),
    }))
    .pipe($.gp.zip(`${$.path.name}.zip`))
    .pipe($.gulp.dest($.path.zip.dest));
}

module.exports = zipSrc;
