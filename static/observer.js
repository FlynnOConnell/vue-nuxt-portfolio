
const header = document.querySelector("header");
const logoimage = document.getElementById("myImage")
console.log('logoimage')
// listen for when the view leaves the screen (.home-intro), and change header
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      logoimage.src = "../static/logo_black.png"
      console.log('logoimage changed')
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);