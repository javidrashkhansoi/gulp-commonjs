const MAX_WIDTH_768PX = window.matchMedia("(max-width: 768px)");

const body = document.body;
const wrapper = document.querySelector(".wrapper");
const burger = document.querySelector(".burger");
const navHeader = document.querySelector(".nav-header");
const lockPaddingItems = document.querySelectorAll(".lock-padding");

document.addEventListener("click", event => {
	if (event.target.closest(".burger")) {
		burgerAction();
	}
});

document.addEventListener("keyup", event => {
	if (event.code === "Escape") {
		burgerClose();
	}
});

MAX_WIDTH_768PX.addEventListener("change", event => {
	if (!event.matches) {
		burgerClose();
	}
});

function burgerAction(action = "toggle") {
	burger.classList[action]("active");
	navHeader.classList[action]("active");
	burger.classList.contains("active") ? paddingRightAction() : paddingRightAction(false);
	body.classList[action]("lock");
}

function burgerClose() {
	if (burger.classList.contains("active")) burgerAction("remove");
}

function paddingRightAction(padding = true) {
	const lockPaddingValue = padding ? `${window.innerWidth - wrapper.offsetWidth}px` : "";
	body.style.paddingRight = lockPaddingValue;
	lockPaddingItems.forEach(lockPaddingItem => {
		lockPaddingItem.style.paddingRight = lockPaddingValue;
	});
}
