const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()
	}
};

function isTouch() {
	isMobile.any() ? document.body.classList.add("touch") : document.body.classList.add("mouse");
}

isTouch();
