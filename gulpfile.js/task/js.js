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
		.pipe(webpack($.app.webpack))
		.pipe($.gp.if($.app.isProd, $.gp.size({
			title: "Before js compressed",
		})))
		.pipe($.gp.if($.app.isProd, $.gp.babel()))
		.pipe($.gp.if($.app.isProd, $.gp.uglify()))
		.pipe($.gp.if($.app.isProd, $.gp.size({
			title: "After js compressed",
		})))
		.pipe($.gulp.dest($.path.js.dest/*, { sourcemaps: $.app.isDev }*/));
};

module.exports = js
