const lazyImageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		const lazyImageBlock = entry.target;
		const lazyImageImg = lazyImageBlock.querySelector("img");
		const lazyImageSourceTags = lazyImageBlock.querySelectorAll("source");
		const lazyImagePreloader = lazyImageBlock.querySelector(".lazy-image__preloader");

		if (entry.isIntersecting) {
			if (lazyImageImg.hasAttribute("data-src")) {
				lazyImageImg.src = lazyImageImg.dataset.src;
				lazyImageImg.removeAttribute("data-src");
			}

			if (lazyImageSourceTags.length) {
				lazyImageSourceTags.forEach(lazyImageSource => {
					if (lazyImageSource.hasAttribute("data-srcset")) {
						lazyImageSource.srcset = lazyImageSource.dataset.srcset;
						lazyImageSource.removeAttribute("data-srcset");
					}
				});
			}

			if (lazyImagePreloader) {
				const lazyImagePreloaderAnimationRemove = setInterval(() => {
					if (lazyImageImg.complete) {
						lazyImageBlock.classList.remove("lazy-image");
						lazyImagePreloader.remove();
						clearInterval(lazyImagePreloaderAnimationRemove);
					}
				}, 100);
			}

			observer.unobserve(lazyImageBlock);
		}
	});
});

const lazyImages = document.querySelectorAll(".lazy-image");
lazyImages?.forEach(lazyImage => {
	lazyImageObserver.observe(lazyImage);
});
