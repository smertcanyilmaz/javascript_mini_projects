'use strict';

const shopIcon = document.getElementById('shop-icon');
const crtBtn = document.getElementById('crt-btn');
const sideCart = document.getElementById('side');

shopIcon.addEventListener('click', () => {
  sideCart.classList.add('active');
});

crtBtn.addEventListener('click', () => {
  sideCart.classList.remove('active');
});
