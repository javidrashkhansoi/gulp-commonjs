const clearNode = () => {
	return $.del([`./node_modules`, `./package-lock.json`]);
};

module.exports = clearNode;
