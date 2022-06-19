const clearFonts = () => {
	return $.del([`${$.path.root}/font`, `${$.path.src}/scss/block/_font-face.scss`]);
};

module.exports = clearFonts;
