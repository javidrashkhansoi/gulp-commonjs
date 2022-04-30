// ? Delete root path
const clear = () => {
	return $.del([`${$.path.root}/**`, `!${$.path.root}/font`]);
};

module.exports = clear;
