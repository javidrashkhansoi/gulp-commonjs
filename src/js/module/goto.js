import { variables as $ } from "../variables";

import { burgerClose } from "./burger";

export function goToAction(event) {
	const goToItem = event.target.closest("[data-goto]");
	const goToBlock = document.querySelector(goToItem.dataset.goto);
	const goToBlockPosition = goToBlock.getBoundingClientRect().top + window.scrollY - $.headerWrapper.offsetHeight;
	burgerClose();
	window.scrollTo({
		top: goToBlockPosition,
		behavior: "smooth",
	});
	event.preventDefault();
}
