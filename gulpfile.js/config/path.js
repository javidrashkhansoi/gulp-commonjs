const path = require("path");
const rootPath = path.basename(path.resolve());

const pathSrc = "./src";
const pathDest = rootPath; // ? or "./public";

module.exports = {
	root: pathDest,

	// ? HTML
	html: {
		src: `${pathSrc}/html/*.html`,
		watch: `${pathSrc}/html/**/*.html`,
		dest: pathDest,
	},
	
	// ? SCSS
	scss: {
		src: `${pathSrc}/scss/style.scss`,
		watch: `${pathSrc}/scss/**/*.scss`,
		dest: `${pathDest}/css`,
	},

	// ? JS
	js: {
		src: `${pathSrc}/js/script.js`,
		watch: `${pathSrc}/js/**/*.js`,
		dest: `${pathDest}/js`,
	},

	// ? IMG
	img: {
		src: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,webp}`,
		svg: `${pathSrc}/img/**/*.svg`,
		watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg,ico,webp}`,
		dest: `${pathDest}/img`,
	},

	// ? FONT
	font: {
		src: `${pathSrc}/font/*.{eot,otf,otc,ttc}`,
		srcDest: `${pathSrc}/font`,
		svg: `${pathSrc}/font/*.svg`,
		ttf: `${pathSrc}/font/*.ttf`,
		woff: `${pathSrc}/font/*.{woff,woff2}`,
		watch: `${pathSrc}/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
		dest: `${pathDest}/font`,
	},
};