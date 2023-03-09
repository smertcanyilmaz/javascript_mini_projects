'use strict';

const body = document.body;
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgBody();
  setActiveSlider();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgBody();
  setActiveSlider();
});

setBgBody();

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlider() {
  slides.forEach(slide => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}
