import { goToAction } from "../module/goto";

export function click(event) {
	if (event.target.closest("[data-goto]")) {
		goToAction(event);
	}
}
