export const variables = {
	MAX_WIDTH_768PX: window.matchMedia("(max-width: 768px)"),

	body: document.body,
	wrapper: document.querySelector(".wrapper"),

	header: document.querySelector(".header"),
	headerWrapper: document.querySelector(".header__wrapper"),
	headerRow: document.querySelector(".header__row"),
	burger: document.querySelector(".burger"),
	navHeader: document.querySelector(".nav-header"),
	forms: document.forms,

	lockPaddingItems: document.querySelectorAll(".lock-padding"),
	
	lazyImages: document.querySelectorAll(".lazy-image"),

	spollers: document.querySelectorAll("[data-spollers]"),
}
