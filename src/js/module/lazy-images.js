export const lazyImageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		const lazyImageBlock = entry.target;
		const lazyImageImg = lazyImageBlock.querySelector("img");
		const lazyImageSourceTags = lazyImageBlock.querySelectorAll("source");
		const lazyImagePreloader = lazyImageBlock.querySelector(".lazy-image__preloader");

		if (entry.isIntersecting) {
			lazyImageImg.src = lazyImageImg.dataset.src;
			lazyImageImg.removeAttribute("data-src");

			if (lazyImageSourceTags.length) {
				lazyImageSourceTags.forEach(lazyImageSource => {
					lazyImageSource.srcset = lazyImageSource.dataset.srcset;
					lazyImageSource.removeAttribute("data-srcset");
				});
			}

			const lazyImagePreloaderAnimationRemove = setInterval(() => {
				if (lazyImageImg.complete) {
					lazyImageBlock.classList.remove("lazy-image");
					lazyImagePreloader.remove();
					clearInterval(lazyImagePreloaderAnimationRemove);
				}
			}, 100);

			observer.unobserve(lazyImageBlock);
		}
	});
});

