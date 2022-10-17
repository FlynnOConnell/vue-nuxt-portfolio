function checkAddress(checkbox) {
	let myImg = document.getElementById("resume");
	let hiddenImg = document.getElementById("resume2");
	if (checkbox.checked) {
		myImg.classList.add("hidden");
        myImg.classList.remove("resumeshadow");

		hiddenImg.classList.remove("hidden");
	} else {
		myImg.classList.remove("hidden");
		hiddenImg.classList.add("hidden");
		hiddenImg.classList.add("resumeshadow");
	}
}
