const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/**************************point-selecteur***********************/
let i = 0;
let dots = document.querySelector(".dots");
for (i ; i < slides.length; i++) {
	let pointdot = document.createElement("div");
	pointdot.classList.add("dot");
	pointdot.setAttribute("id", "dot" + i);
	dots.appendChild(pointdot);
}

let dot0 = document.getElementById("dot0");
dot0.classList.add("dot_selected");

/**********************bouton-baniere*******************************/
const buttonleft = document.querySelector(".arrow_left");
buttonleft.addEventListener("click", () => {
	slicerleft();
})

const buttonright = document.querySelector(".arrow_right");
buttonright.addEventListener("click", () => {
	slicerright();
})

/***************************function****************************/
let imagebanner = document.querySelector(".banner-img");
let pbanner = document.querySelector("#banner p");
let countslides = 0;
let countslidesmax = slides.length - 1;

function slicerleft() {
	let dotid = document.getElementById("dot" + countslides);
	dotid.classList.remove("dot_selected");
	if (countslides > 0) {
		countslides -= 1;
		imagebanner.src = "./assets/images/slideshow/" + slides[countslides].image;
		pbanner.innerHTML = slides[countslides].tagLine;
	} else {
		countslides = countslidesmax;
		imagebanner.src = "./assets/images/slideshow/" + slides[countslides].image;
		pbanner.innerHTML = slides[countslides].tagLine;
	}
	let dotidclick = document.getElementById("dot" + countslides);
	dotidclick.classList.add("dot_selected");
}

function slicerright() {
	let dotid = document.getElementById("dot" + countslides);
	dotid.classList.remove("dot_selected");
	if (countslides < countslidesmax) {
		countslides += 1;
		imagebanner.src = "./assets/images/slideshow/" + slides[countslides].image;
		pbanner.innerHTML = slides[countslides].tagLine;
	} else {
		countslides = 0;
		imagebanner.src = "./assets/images/slideshow/" + slides[countslides].image;
		pbanner.innerHTML = slides[countslides].tagLine;
	}
	let dotidclick = document.getElementById("dot" + countslides);
	dotidclick.classList.add("dot_selected");
}