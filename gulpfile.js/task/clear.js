const clear = () => {
	return $.del([`${$.path.root}/**`, `!${$.path.root}/{font/**,.git/**,.gitignore,README.md,site.webmanifest,browserconfig.xml,favicon.ico}`]);
};

module.exports = clear;
