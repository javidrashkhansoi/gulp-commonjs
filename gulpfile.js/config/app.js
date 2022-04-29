const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {

	// ? PRODUCTION
	isProd: isProd,

	// ? DEVELOPMENT
	isDev: isDev,

	// ? gulp-fonter
	fonter: {
		formats: ["ttf"],
	},

	// ? gulp-htmlmin
	htmlmin: {
		collapseWhitespace: isProd,
	},

	// ? gulp-imagemin
	imagemin: {
		verbose: true,
		progressive: true,
		svgoPlugins: [{
			removeViewBox: false,
		},],
		interlaced: true,
		optimizationLevel: 3,
	},

	// ? gulp-version-number
	versionNumber: {
		"value": "%DT%",
		"append": {
			"key": "_v",
			"cover": 0,
			"to": ["css", "js",],
		},
		"output": {
			"file": "gulpfile.js/version.json"
		},
	},

	// ? gulp-webpcss
	webpcss: {
		webpClass: ".webp",
		noWebpClass: ".no-webp",
	},

	// ? WEBPACK
	webpack: {
		mode: isProd ? "production" : "development",
		output: {
			filename: "script.min.js",
		},
	},

}