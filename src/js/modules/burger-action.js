import { paddingRightAction } from "./padding-right";

export function burgerAction() {
	const burger = document.querySelector(".burger");
	const navHeader = document.querySelector(".nav-header");
	const isBurgerNotActive = !burger?.classList.contains("active");

	burger?.classList.toggle("active", isBurgerNotActive);
	navHeader?.classList.toggle("show", isBurgerNotActive);
	paddingRightAction(isBurgerNotActive);
}

export function burgerClose() {
	const burger = document.querySelector(".burger");
	const isBurgerActive = burger?.classList.contains("active");

	if (isBurgerActive) {
		burgerAction();
	}
}
