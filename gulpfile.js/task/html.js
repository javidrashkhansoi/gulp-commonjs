// ? HTML Task
const html = () => {
	return $.gulp.src($.path.html.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "HTML",
				message: error.message,
			})),
		}))
		.pipe($.gp.fileInclude())
		// ! .pipe($.gp.webpHtml()) -- need to install the plugin gulp-webp-html
		.pipe($.gp.if($.app.isProd, $.gp.webpHtmlNosvg()))
		.pipe($.gp.if($.app.isProd, $.gp.size({
			title: "Before html compressed",
		})))
		.pipe($.gp.htmlmin($.app.htmlmin))
		.pipe($.gp.if($.app.isProd, $.gp.size({
			title: "After html compressed",
		})))
		.pipe($.gp.replace(/@img\//g, "img/"))
		.pipe($.gp.if($.app.isProd, $.gp.replace(/<a /g, "<a tabindex=\"-1\" ")))
		.pipe($.gp.if($.app.isProd, $.gp.versionNumber($.app.versionNumber)))
		.pipe($.gulp.dest($.path.html.dest));
};

module.exports = html
