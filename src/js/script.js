import { variables as $ } from "./variables";

import { burgerAction, burgerClose } from "./module/burger";
import { goToAction } from "./module/goto";
import { headerObserver } from "./module/header-observer";
import { lazyImageObserver } from "./module/lazy-images";
import { isWebp } from "./module/iswebp";
import { DynamicAdapt } from "./module/da";
import { spoller } from "./module/spoller"
import { formSend } from "./module/form";

document.addEventListener("DOMContentLoaded", () => {

	// ? Click events
	document.addEventListener("click", event => {

		// ? Burger toggle event
		if (event.target.closest(".burger")) {
			burgerAction();
		}

		// ? Go to block event
		if (event.target.closest("[data-goto]")) {
			goToAction(event);
		}

	});

	// ? Key up events
	document.addEventListener("keyup", event => {

		// ? Burger close event
		if (event.code === "Escape") {
			burgerClose();
		}

	});

	// ? Events (max-width: 768px) media query
	$.MAX_WIDTH_768PX.addEventListener("change", event => {

		// ? Burger close event
		if (!event.matches) {
			burgerClose();
		}

	});

	// ? Header observer
	headerObserver.observe($.header);

	// ? Lazy loading images
	$.lazyImages.forEach(lazyImage => {
		lazyImageObserver.observe(lazyImage);
	});

	// ? Does the browser support WEBP
	isWebp();

	// ? Moving blocks depending on the media query
	const da = new DynamicAdapt("max");
	da.init();

	// ? Spoiler, or an accordion that also works with media queries
	spoller(1000);

	$.form.addEventListener("submit", formSend);
});
