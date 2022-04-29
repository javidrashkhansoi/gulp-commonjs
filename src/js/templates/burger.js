import { burger, navHeader, body, wrapper, lockPaddingItems } from "./../const";

export function burgerAction(action = "toggle") {
	burger.classList[action]("active");
	navHeader.classList[action]("active");
	burger.classList.contains("active") ? paddingRightAction() : paddingRightAction(false);
	body.classList[action]("lock");
}

export function burgerClose() {
	if (burger.classList.contains("active")) burgerAction("remove");
}

export function paddingRightAction(padding = true) {
	const lockPaddingValue = padding ? `${window.innerWidth - wrapper.offsetWidth}px` : "";
	body.style.paddingRight = lockPaddingValue;
	lockPaddingItems.forEach(lockPaddingItem => {
		lockPaddingItem.style.paddingRight = lockPaddingValue;
	});
}
