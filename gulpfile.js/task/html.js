const html = () => {
	return $.gulp.src($.path.html.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "HTML",
				message: error.message,
			})),
		}))
		.pipe($.gp.fileInclude())
		.pipe($.gp.if($.app.isProd, $.gp.webpHtmlNosvg()))
		.pipe($.gp.htmlmin($.app.htmlmin))
		.pipe($.gp.replace(/@img\//g, "img/"))
		.pipe($.gp.if($.app.isProd, $.gp.replace(/href=""/g, "href=\"#\"")))
		.pipe($.gp.versionNumber($.app.versionNumber))
		.pipe($.gulp.dest($.path.html.dest));
};

module.exports = html
