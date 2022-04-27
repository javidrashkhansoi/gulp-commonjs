const webpack = require("webpack-stream");

// ? JS Task
const js = () => {
	return $.gulp.src($.path.js.src/*, { sourcemaps: $.app.isDev }*/)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "JS",
				message: error.message,
			})),
		}))
		.pipe($.gp.if($.app.isProd, $.gp.babel()))
		.pipe(webpack($.app.webpack))
		// ! .pipe($.gp.uglify()) need to install the plugin gulp-uglify
		.pipe($.gulp.dest($.path.js.dest/*, { sourcemaps: $.app.isDev }*/));
};

module.exports = js
