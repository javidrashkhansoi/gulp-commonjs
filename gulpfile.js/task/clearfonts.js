// ? Delete font root path and _font.scss
const clearFonts = () => {
	return $.del([`${$.path.root}/font`, `${$.path.src}/scss/block/_fonts.scss`]);
};

module.exports = clearFonts;
