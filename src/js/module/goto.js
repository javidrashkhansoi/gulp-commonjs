import { variables as $ } from "../variables";

import { burgerClose } from "./burger";

export function goToAction(event) {
	const goToItem = event.target.closest("[data-goto]");
	const goToBlock = document.querySelector(goToItem.dataset.goto);
	if (goToBlock) {
		const goToBlockPosition = goToBlock.getBoundingClientRect().top + window.scrollY - ($.headerWrapper ? $.headerWrapper.offsetHeight : 0);
		burgerClose();
		window.scrollTo({
			top: goToBlockPosition,
			behavior: "smooth",
		});
	}
	event.preventDefault();
}
