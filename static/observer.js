const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const logo = document.querySelector(".dynamic-image");

const sectionOneOptions = {
	rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
	entries,
	sectionOneObserver
) {
	entries.forEach((entry) => {

		if (!entry.isIntersecting) {
			header.classList.add("nav-scrolled");
      logo.src = "./simple_black.svg";

		} else {
			header.classList.remove("nav-scrolled");
      logo.src = "./simple_white.svg";

		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
