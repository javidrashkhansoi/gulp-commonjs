"use strict";

const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length) {
	const spollersRegular = Array.from(spollersArray).filter(item => {
		return !item.dataset.spollers.split(",")[0];
	});
	if (spollersRegular.length) {
		initSpollers(spollersRegular);
	}
	const spollersMedia = Array.from(spollersArray).filter(item => {
		return item.dataset.spollers.split(",")[0];
	});
	if (spollersMedia.length) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		let mediaQueries = breakpointsArray.map(item => {
			return `(${item.type}-width: ${item.value}px),${item.value},${item.type}`;
		});
		mediaQueries = mediaQueries.filter((item, index, self) => {
			return self.indexOf(item) === index;
		});
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);
			const spollersArray = breakpointsArray.filter(item => {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			matchMedia.addEventListener("change", () => {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add("init");
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove("init");
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
		if (spollerTitles.length) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					if (!spollerTitle.classList.contains("active")) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(event) {
		const el = event.target;
		if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
			const spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");
			const spollersBlock = spollerTitle.closest("[data-spollers]");
			const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
			if (!spollersBlock.querySelectorAll(".slide").length) {
				if (oneSpoller && !spollerTitle.classList.contains("active")) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle("active");
				slideToggle(spollerTitle.nextElementSibling, 250);
			}
			event.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector("[data-spoller].active");
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove("active");
			slideUp(spollerActiveTitle.nextElementSibling, 250);
		}
	}
}
function slideUp(target, duration = 500) {
	if (!target.classList.contains("slide")) {
		target.classList.add("slide");
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty("height");
			target.style.removeProperty("padding-top");
			target.style.removeProperty("padding-bottom");
			target.style.removeProperty("margin-top");
			target.style.removeProperty("margin-bottom");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
			target.classList.remove("slide");
		}, duration);
	}
}
function slideDown(target, duration = 500) {
	if (!target.classList.contains("slide")) {
		target.classList.add("slide");
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${height}px`;
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		window.setTimeout(() => {
			target.style.removeProperty("height");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
			target.classList.remove("slide");
		}, duration);
	}
}
function slideToggle(target, duration = 500) {
	if (target.hidden) {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}