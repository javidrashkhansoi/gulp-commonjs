import { variables as $ } from "../variables";

import { paddingRightAction } from "./padding-right";

export function burgerAction(action = "toggle") {
	if ($.burger) {
		$.burger.classList[action]("active");
		if ($.navHeader) $.navHeader.classList[action]("active");
		$.burger.classList.contains("active") ? paddingRightAction() : paddingRightAction(false);
		$.body.classList[action]("lock");
	}
}

export function burgerClose() {
	if ($.burger.classList.contains("active")) burgerAction("remove");
}
