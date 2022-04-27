const del = require("del");

// ? Delete root path
const clear = () => {
	return del($.path.root);
};

module.exports = clear;
