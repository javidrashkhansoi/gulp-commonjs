import { variables as $ } from "../variables";

export const headerObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.isIntersecting ? headerObserverAction("remove") : headerObserverAction();
	});
});

function headerObserverAction(action = "add") {
	if ($.headerWrapper) $.headerWrapper.classList[action]("active");
	if ($.headerRow) $.headerRow.classList[action]("active");
}
