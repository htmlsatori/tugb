const prevElement = document.getElementById("prev");
const nextElement = document.getElementById("next");
const carouselElement = document.getElementById("carousel");
const itemElements = document.getElementsByClassName("item");

let carouselWidth = itemElements[0].clientWidth * itemElements.length;
// + 20 because 1/3 was based on 100% + 20px in CSS
let screenWidth = carouselElement.clientWidth + 20;
// Calculation is imprecise only keep 1 decimal point before calculation (trunc(value*10)/10)
let stepCount =
  Math.ceil(Math.trunc((carouselWidth / screenWidth) * 10) / 10) - 1;
let step = 0;

const moveToStep = (step) => {
  carouselElement.style.left = `${step * -screenWidth}px`;
};

const onPrev = () => {
  step = step - 1 < 0 ? stepCount : step - 1;
  moveToStep(step);
};
const onNext = () => {
  step = step + 1 > stepCount ? 0 : step + 1;
  moveToStep(step);
};

const onResize = () => {
  carouselWidth = itemElements[0].clientWidth * itemElements.length;
  screenWidth = carouselElement.clientWidth + 20;
  stepCount =
    Math.ceil(Math.trunc((carouselWidth / screenWidth) * 100) / 100) - 1;
  step = 0;
  moveToStep(step);
};

prevElement.addEventListener("click", onPrev);
nextElement.addEventListener("click", onNext);
window.addEventListener("resize", onResize);
