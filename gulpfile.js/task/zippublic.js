const zipPublic = () => {
  return $.gulp.src($.path.zip.public)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: "ZIP PUBLIC",
        message: error.message,
      })),
    }))
    .pipe($.gp.zip("public.zip"))
    .pipe($.gulp.dest($.path.zip.dest));
}

module.exports = zipPublic;
