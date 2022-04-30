import { variables as $ } from "../variables";

import { slideDown, slideUp, slideToggle } from "./hide-show";

export function spoller(duration) {
	const spollersRegular = Array.from($.spollers).filter(item => {
		return !item.dataset.spollers.split(",")[0];
	});
	if (spollersRegular.length) {
		initSpollers(spollersRegular);
	}
	const spollersMedia = Array.from($.spollers).filter(item => {
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
				slideToggle(spollerTitle.nextElementSibling, duration);
			}
			event.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector("[data-spoller].active");
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove("active");
			slideUp(spollerActiveTitle.nextElementSibling, duration);
		}
	}
}