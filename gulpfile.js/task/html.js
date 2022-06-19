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
		.pipe($.gp.if($.app.isProd, $.gp.replace(/<img data-src/g, "<img src=\"img/1x1.png\" data-src")))
		.pipe($.gp.if($.app.isProd, $.gp.replace(/<source data-srcset/g, "<source srcset=\"img/1x1.webp\" data-srcset")))
		.pipe($.gp.if($.app.isProd, $.gp.replace(/href=""/g, "href=\"#\"")))
		.pipe($.gp.if($.app.isProd, $.gp.versionNumber($.app.versionNumber)))
		.pipe($.gulp.dest($.path.html.dest));
};

module.exports = html
