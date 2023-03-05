'use strict';

const btn = document.getElementById('btn');
const bc = document.getElementById('bc');
const lbl = document.getElementById('lbl');

function getRandomColor() {
  let letter = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener('click', function () {
  const random = getRandomColor();
  bc.style.backgroundColor = random;

  btn.addEventListener('mouseenter', function () {
    btn.style.backgroundColor = 'rgb(40, 39, 39)';
  });

  btn.addEventListener('mouseleave', function () {
    btn.style.backgroundColor = random;
  });

  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase();

  lbl.textContent = '#' + randomColor;
});
