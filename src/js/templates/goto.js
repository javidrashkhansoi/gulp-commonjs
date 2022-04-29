const headerWrapper = document.querySelector(".header__wrapper");

const body = document.body;
const wrapper = document.querySelector(".wrapper");
const burger = document.querySelector(".burger");
const navHeader = document.querySelector(".nav-header");
const lockPaddingItems = document.querySelectorAll(".lock-padding");

document.addEventListener("click", event => {
	if (event.target.closest("[data-goto]")) {
		goToAction(event);
	}
});

function goToAction(event) {
	const goToItem = event.target.closest("[data-goto]");
	const goToBlock = document.querySelector(goToItem.dataset.goto);
	const goToBlockPosition = goToBlock.getBoundingClientRect().top + window.scrollY - headerWrapper.offsetHeight;
	burgerClose();
	window.scrollTo({
		top: goToBlockPosition,
		behavior: "smooth",
	});
	event.preventDefault();
}

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
