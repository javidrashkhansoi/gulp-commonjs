import { variables as $ } from "../variables";

export function paddingRightAction(padding = true) {
	const lockPaddingValue = padding ? `${window.innerWidth - $.wrapper.offsetWidth}px` : "";
	$.body.style.paddingRight = lockPaddingValue;
	$.lockPaddingItems.forEach(lockPaddingItem => {
		lockPaddingItem.style.paddingRight = lockPaddingValue;
	});
}
