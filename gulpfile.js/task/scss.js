// const webpConverter = require("webp-converter");

// SCSS Task
const scss = () => {
	return $.gulp.src($.path.scss.src/*, { sourcemaps: $.app.isDev }*/)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "SCSS",
				message: error.message,
			})),
		}))
		// .pipe($.gp.sassGlob())
		.pipe($.gp.sass(require("sass"))())
		.pipe($.gp.replace(/@img\//g, "../img/"))
		// !.pipe($.gp.webpCss()) -- need to install the plugin gulp-webp-css
		.pipe($.gp.if($.app.isProd, $.gp.webpcss($.app.webpcss)))
		.pipe($.gp.if($.app.isProd, $.gp.autoprefixer()))
		.pipe($.gp.if($.app.isProd, $.gp.size({
			title: "Before scss compressed",
		})))
		.pipe($.gp.if($.app.isProd, $.gp.groupCssMediaQueries()))
		.pipe($.gp.if($.app.isProd, $.gp.shorthand()))
		.pipe($.gp.if($.app.isProd, $.gulp.dest($.path.scss.dest/*, { sourcemaps: $.app.isDev }*/)))
		.pipe($.gp.rename({
			suffix: ".min",
		}))
		.pipe($.gp.if($.app.isProd, $.gp.csso()))
		.pipe($.gp.if($.app.isProd, $.gp.size({
			title: "After scss compressed",
		})))
		.pipe($.gulp.dest($.path.scss.dest/*, { sourcemaps: $.app.isDev }*/));
};

module.exports = scss
