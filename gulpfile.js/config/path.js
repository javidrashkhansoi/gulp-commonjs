const path = require("path");
const rootPath = path.basename(path.resolve());

const pathSrc = "./src";
const pathDest = "./public"; // ? or rootPath;

module.exports = {
  name: rootPath,
  root: pathDest,
  src: pathSrc,

  html: {
    src: `${pathSrc}/html/*.html`,
    watch: `${pathSrc}/html/**/*.html`,
    dest: pathDest,
  },

  scss: {
    src: `${pathSrc}/scss/style.scss`,
    watch: `${pathSrc}/scss/**/*.scss`,
    dest: `${pathDest}/css`,
  },

  js: {
    src: `${pathSrc}/js/script.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js`,
  },

  img: {
    src: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${pathSrc}/img/**/*.svg`,
    watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg,ico,webp}`,
    dest: `${pathDest}/img`,
  },

  font: {
    src: `${pathSrc}/font/*.{eot,otf,otc,ttc}`,
    srcDest: `${pathSrc}/font`,
    svg: `${pathSrc}/font/*.svg`,
    ttf: `${pathSrc}/font/*.ttf`,
    woff: `${pathSrc}/font/*.{woff,woff2}`,
    watch: `${pathSrc}/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    dest: `${pathDest}/font`,
  },

  zip: {
    src: ["{gulpfile.js/**/*.js,src/**/*.*,package.json}"],
    public: [`${pathDest}/**/*.*`, `!${pathDest}/{.git/**,.gitignore,README.md,*.zip}`],
    dest: "./zip/",
  }
};
