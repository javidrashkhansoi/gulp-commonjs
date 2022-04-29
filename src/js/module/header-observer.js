import { variables as $ } from "../variables";

export const headerObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.isIntersecting ? headerObserverAction("remove") : headerObserverAction();
	});
});

function headerObserverAction(action = "add") {
	$.headerWrapper.classList[action]("active");
	$.headerRow.classList[action]("active");
}
