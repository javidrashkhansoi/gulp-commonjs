const clear = () => {
	return $.del([`${$.path.root}/**`, `!${$.path.root}/{font/**,.git/**,.gitignore,README.md}`]);
};

module.exports = clear;
