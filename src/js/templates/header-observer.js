const header = document.querySelector(".header");
const headerWrapper = document.querySelector(".header__wrapper");
const headerRow = document.querySelector(".header__row");

const headerObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.isIntersecting ? headerObserverAction("remove") : headerObserverAction();
	});
});

headerObserver.observe(header);

function headerObserverAction(action = "add") {
	headerWrapper.classList[action]("active");
	headerRow.classList[action]("active");
}
