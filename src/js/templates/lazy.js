const lazy = () => {
	const lazyImages = document.querySelectorAll(".lazy-image");

	const lazyImageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			const lazyImageBlock = entry.target;
			const lazyImageImg = lazyImageBlock.querySelector("img");
			const lazyImageSource = lazyImageBlock.querySelector("source");
			const lazyImagePreloader = lazyImageBlock.querySelector(".lazy-image__preloader");
			// const lazyImageBlock = lazyImage.closest(".lazy-image");

			if (entry.isIntersecting) {
				lazyImageImg.src = lazyImageImg.dataset.src;
				lazyImageImg.removeAttribute("data-src");

				if (lazyImageSource) {
					lazyImageSource.srcset = lazyImageSource.dataset.srcset;
					lazyImageSource.removeAttribute("data-srcset");
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

	lazyImages.forEach(lazyImage => {
		lazyImageObserver.observe(lazyImage);
	});
}

module.exports = lazy;