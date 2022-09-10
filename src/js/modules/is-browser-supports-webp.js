function isBrowserSupportsWebp() {
	function testWebp(callback) {
		const webp = new Image();

		webp.onload = webp.onerror = function () {
			callback(webp.height == 2);
		};

		webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebp((support) => {
		const isWebp = support ? "webp" : "no-webp";

		document.documentElement.classList.add(isWebp);
	});
}

isBrowserSupportsWebp();
