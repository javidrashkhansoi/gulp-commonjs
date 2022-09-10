import { burgerClose } from "./burger-action";

export function goToAction(event) {
	event.preventDefault();

	const goToItem = event.target.closest("[data-goto]");
	const goToBlock = document.querySelector(goToItem.dataset.goto);
	const headerWrapper = document.querySelector(".header__wrapper");

	if (goToBlock) {
		const goToBlockPosition = goToBlock.getBoundingClientRect().top + window.scrollY - (headerWrapper ? headerWrapper.offsetHeight : 0);

		burgerClose();

		window.scrollTo({
			top: goToBlockPosition,
			behavior: "smooth",
		});
	}
}
