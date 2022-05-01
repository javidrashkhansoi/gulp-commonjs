// ? Delete font root path and _font.scss
const clearNode = () => {
	return $.del([`./node_modules`, `./package-lock.json`]);
};

module.exports = clearNode;
