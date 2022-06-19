const scss = () => {
	return $.gulp.src($.path.scss.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "SCSS",
				message: error.message,
			})),
		}))
		.pipe($.gp.sass(require("sass"))())
		.pipe($.gp.replace(/@img\//g, "../img/"))
		.pipe($.gp.if($.app.isProd, $.gp.webpcss($.app.webpcss)))
		.pipe($.gp.if($.app.isProd, $.gp.autoprefixer()))
		.pipe($.gp.if($.app.isProd, $.gp.groupCssMediaQueries()))
		.pipe($.gp.if($.app.isProd, $.gulp.dest($.path.scss.dest)))
		.pipe($.gp.rename({ suffix: ".min", }))
		.pipe($.gp.if($.app.isProd, $.gp.csso()))
		.pipe($.gulp.dest($.path.scss.dest));
};

module.exports = scss
