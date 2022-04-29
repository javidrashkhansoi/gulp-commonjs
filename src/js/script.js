// const lazy = require("./templates/lazy");
// const isWebp = require("./code/iswebp");
// const burger = require("./templates/burger");
// import * as c from "./const";
import { isWebp } from "./code/iswebp";
import { lazy } from "./templates/lazy";
import { burgerAction, burgerClose, paddingRightAction } from "./templates/burger";
import { burger, navHeader, body, wrapper, lockPaddingItems } from "./const";

isWebp();
lazy();
// burgerAction();
document.addEventListener("click", event => {
	if (event.target.closest(".burger")) {
		burgerAction();
		body.style.backgroundColor = "#000";
	}
});
