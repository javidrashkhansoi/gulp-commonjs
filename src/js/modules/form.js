export function formSend(event, form) {
	event.preventDefault();
	let error = formValidate(form);
	const errorInput = form.querySelector("input.error");
	if (errorInput) {
		errorInput.focus();
	}
	if (error === 0) {
		form.reset();
	}
}


function formValidate(form) {
	let error = 0;
	let formReq = form.querySelectorAll(".req");
	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);
		if (input.classList.contains("email")) {
			if (emailTest(input)) {
				formAddError(input);
				error++;
			}
		} else if (input.classList.contains("number")) {
			if (numberTest(input)) {
				formAddError(input);
				error++;
			}
		} else if (input.classList.contains("name")) {
			if (nameTest(input)) {
				formAddError(input);
				error++;
			}
		} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
			formAddError(input);
			error++;
		} else {
			if (input.value === "") {
				formAddError(input);
				error++;
			}
		}
	}
	return error;
}

function formAddError(input) {
	input.parentElement.classList.add("error");
	input.classList.add("error");
}

function formRemoveError(input) {
	input.parentElement.classList.remove("error");
	input.classList.remove("error");
}

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function numberTest(input) {
	return !/^(0|(\+994([\- ])?)|(994([\- ])?))?([0-9]{2})([\- ])?(\d{3})([\- ])?(\d{2})([\- ])?(\d{2})$/.test(input.value);
}

function nameTest(input) {
	return !/^[a-zA-Z\-]+$/.test(input.value);
}

const input = document.querySelectorAll("input");
if (input.length) {
	input.forEach(i => {
		i.addEventListener("input", () => {
			if (i.classList.contains("error")) {
				formRemoveError(i);
			}
		});
	});
}
