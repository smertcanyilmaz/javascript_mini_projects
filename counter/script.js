'use strict';

const btn_d = document.getElementById('btn_d');
const btn_r = document.getElementById('btn_r');
const btn_i = document.getElementById('btn_i');
const spn = document.getElementById('spn');

let number = parseInt(spn.innerHTML);

btn_i.addEventListener('click', function () {
  number++;
  spn.innerHTML = number.toString();
  if (number > 0) {
    spn.style.color = 'green';
  } else if (number < 0) {
    spn.style.color = 'red';
  } else {
    spn.style.color = '#343434';
  }
});

btn_d.addEventListener('click', function () {
  number--;
  spn.innerHTML = number.toString();
  if (number < 0) {
    spn.style.color = 'red';
  } else if (number > 0) {
    spn.style.color = 'green';
  } else {
    spn.style.color = '#343434';
  }
});

btn_r.addEventListener('click', function () {
  number = 0;
  spn.style.color = '#343434';
  spn.innerHTML = number.toString();
});
