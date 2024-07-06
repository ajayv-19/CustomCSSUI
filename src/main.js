const open = document.querySelector(".navigation");
const hideContent = document.querySelector(".show-content");
const openNav = document.querySelector(".side-nav");
const copy = document.querySelectorAll(".copy-btn");
const showComponent = document.querySelectorAll(".show-component");
const mobileNav = document.querySelector(".sticky-nav");
const stickyMobile = mobileNav.offsetTop;
const paddingTop = document.querySelectorAll(".content-top");

open.addEventListener("click", function () {
	openNav.classList.toggle("show");
	hideContent.classList.toggle("hide-content");
});

copy.forEach((copy) => {
	copy.addEventListener("click", function () {
		copy.innerHTML = "Copied!";
	});
});
new ClipboardJS(".copy-btn");

showComponent.forEach((component) => {
	component.addEventListener("click", function () {
		openNav.classList.remove("show");
		if (window.innerWidth < 600) {
			hideContent.classList.toggle("hide-content");
		}
	});
});
if (window.innerWidth > 600) {
	hideContent.style.paddingLeft = openNav.offsetWidth + 70 + "px";
}
function stickyNav() {
	if (window.scrollY >= stickyMobile) {
		mobileNav.classList.add("sticky");

		showComponent.forEach((component) => {
			paddingTop.forEach((paddingTop) => {
				paddingTop.style.paddingTop = mobileNav.offsetHeight + "px";
			});
		});
	} else {
		mobileNav.classList.remove("sticky");
	}
}

window.addEventListener("scroll", stickyNav);
