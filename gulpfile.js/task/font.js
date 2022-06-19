const font = () => {
	return $.gulp.src($.path.font.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "FONT",
				message: error.message,
			})),
		}))
		.pipe($.gp.newer($.path.font.src))
		.pipe($.gp.fonter($.app.fonter))
		.pipe($.gulp.dest($.path.font.srcDest))
		.pipe($.gulp.src($.path.font.svg))
		.pipe($.gp.newer($.path.font.src))
		.pipe($.gp.svg2ttf())
		.pipe($.gulp.dest($.path.font.srcDest))
		.pipe($.gulp.src($.path.font.ttf))
		.pipe($.gp.newer($.path.font.dest))
		.pipe($.gp.ttf2woff2())
		.pipe($.gulp.dest($.path.font.dest))
		.pipe($.gulp.src($.path.font.woff))
		.pipe($.gp.newer($.path.font.dest))
		.pipe($.gulp.dest($.path.font.dest));
};

module.exports = font;
