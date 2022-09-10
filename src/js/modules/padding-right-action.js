export function paddingRightAction(padding = true) {
	const body = document.body;
	const wrapper = document.querySelector(".wrapper");
	const lockPaddingItems = document.querySelectorAll(".lock-padding");

	const lockPaddingValue = padding ? `${window.innerWidth - wrapper.offsetWidth}px` : "";

	body.style.paddingRight = lockPaddingValue;
	lockPaddingItems?.forEach(lockPaddingItem => {
		lockPaddingItem.style.paddingRight = lockPaddingValue;
	});

	body.classList.toggle("lock", padding);
}
