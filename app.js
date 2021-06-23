let acc = document.getElementsByClassName("accordion");
let icon = document.getElementsByClassName("fas");
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		let panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
			icon.classList.toggle("fas fa-angle-up fa-color");
		}
	});
}

console.log(icon);
