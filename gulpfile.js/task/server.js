// ? Server
const server = () => {
	$.browserSync.init({
		server: {
			baseDir: $.path.root,
		},
		notify: false,
		port: 3000,
	});
};

module.exports = server;