const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const emailLabel = document.querySelector(".email-label");

const passwordLabel = document.querySelector(".password-label");

emailInput.addEventListener("click", function () {
	emailLabel.classList.add("label-resize");
});

passwordInput.addEventListener("click", function () {
	passwordLabel.classList.add("label-resize");
});

const modal = document.querySelector(".modal-btn");
const modalShow = document.querySelector(".modal-hide");

modal.addEventListener("click", function () {
	modalShow.classList.add("modal");
});
const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
	modalShow.classList.remove("modal");
});

const navToggle = document.querySelector(".nav-toggle");

const navClose = document.querySelector(".nav-hide");

navToggle.addEventListener("click", function () {
	navClose.classList.toggle("nav-mobile");
});
const toastButton = document.querySelector(".btn-toast");
const toast = document.querySelector(".toast");
const toastClose = document.querySelector(".toast-close");
const toastProgress = document.querySelector(".toast-progress");
toastButton.addEventListener("click", () => {
	toast.classList.add("active");
	toastProgress.classList.add("active");
	setTimeout(function () {
		toast.classList.remove("active");
	}, 5000);
	setTimeout(function () {
		toastProgress.classList.remove("active");
	}, 5300);
});
toastClose.addEventListener("click", () => {
	toast.classList.remove("active");

	setTimeout(function () {
		toastProgress.classList.remove("active");
	}, 300);
});
