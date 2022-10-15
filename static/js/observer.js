const sectionOne = document.querySelector(".cutoff");
const header = document.querySelector("header");
const logo = document.querySelector(".dynamic-image");

const sectionOneObserver = new IntersectionObserver(function (
	entries,
	sectionOneObserver
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			header.classList.add("nav-scrolled");
			logo.classList.remove("white");
		} else {
			// header.classList.remove("nav-scrolled");
			header.classList.remove("nav-scrolled");
			logo.classList.add("white");
		}
	});
});

sectionOneObserver.observe(sectionOne);
