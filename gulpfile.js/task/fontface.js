const fs = require("fs");

// ? Create _fonts.scss file
const fontStyle = () => {
	let fontsFile = `${$.path.src}/scss/block/_fonts.scss`;
	fs.readdir(`${$.path.font.dest}/`, function (error, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, "", callback);
				let newFileOnly;
				for (var index = 0; index < fontsFiles.length; index++) {
					let fontFileName = fontsFiles[index].split(".")[0];
					let fontFileExtension = fontsFiles[index].split(".")[1];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split("-")[0] ? fontFileName.split("-")[0] : fontFileName;
						let fontWeight = fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName;
						if (fontWeight.toLowerCase() === "thin") {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === "extralight") {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === "light") {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === "medium") {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === "semibold") {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === "bold") {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === "extrabold" || fontWeight.toLowerCase() === "heavy") {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === "black") {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(fontsFile,
							`@font-face {\n\tfont-family: "${fontName}";\n\tsrc: url("../font/${fontFileName}.${fontFileExtension}") format("${fontFileExtension}");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n\tfont-display: swap;\n}\r\n`,
							callback);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log("Файл src/scss/block/_fonts.scss уже существует. Для обновления файла нужно его удалить!");
			}
		}
	});
	return $.gulp.src($.path.src);
	function callback() { }
}

module.exports = fontStyle;
