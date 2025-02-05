const slides = document.querySelectorAll(".slide");
const main = document.querySelector("main");
const images = [
  "https://picsum.photos/id/237/1000/500",
  "https://picsum.photos/id/238/1000/500",
  "https://picsum.photos/id/239/1000/500",
  "https://picsum.photos/id/230/1000/500",
  "https://picsum.photos/id/231/1000/500",
];
let prevImg = document.querySelector(".previous-img");
let currentImg = document.querySelector(".current-img");
let nextImg = document.querySelector(".next-img");
let counter = 0;
const init = () => {
  prevImg.src = images[(counter - 1 + images.length) % images.length];
  currentImg.src = images[counter % images.length];
  nextImg.src = images[(counter + 1) % images.length];
};
init();
console.log(document.querySelector("main").children);
prevImg.style.left = `-100%`;
currentImg.style.left = `0%`;
nextImg.style.left = `100%`;

const slideImageRight = () => {};
const slideImageLeft = () => {};
const goNext = () => {
  // counter++;
  counter = (counter + 1) % images.length;
  main.removeChild(prevImg);
  currentImg.style.left = `-100%`;
  currentImg.classList.remove("current-img");
  currentImg.classList.add("previous-img");
  prevImg = currentImg;
  nextImg.style.left = `0%`;
  nextImg.classList.remove("next-img");
  nextImg.classList.add("current-img");
  currentImg = nextImg;
  nextImg = document.createElement("img");
  nextImg.style.left = `100%`;
  nextImg.classList.add("next-img", "slide");
  nextImg.src = images[(counter + 1) % images.length];
  main.appendChild(nextImg);
};
const goPrev = () => {
  //counter--;
  counter = (counter - 1 + images.length) % images.length;
  main.removeChild(nextImg);
  currentImg.style.left = `100%`;
  currentImg.classList.remove("current-img");
  currentImg.classList.add("next-img");
  nextImg = currentImg;
  prevImg.style.left = `0%`;
  prevImg.classList.remove("previous-img");
  prevImg.classList.add("current-img");
  currentImg = prevImg;
  prevImg = document.createElement("img");
  prevImg.style.left = `-100%`;
  prevImg.classList.add("previous-img", "slide");
  prevImg.src = images[(counter - 1 + images.length) % images.length];
  main.insertBefore(prevImg, main.firstChild);
  console.log(prevImg, currentImg, nextImg);
};
