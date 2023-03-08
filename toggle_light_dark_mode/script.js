'use strict';

const check_box = document.getElementById('check_box');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const title = document.getElementById('title');
const icon = document.getElementById('icon');
const body = document.body;

check_box.addEventListener('change', function () {
  if (this.checked === true) {
    dark.style.display = 'inline-block';
    light.style.display = 'none';
    title.style.color = '#fff';
    body.style.backgroundColor = '#343434';
    icon.style.color = '#fff';
    body.style.transition = '1300ms';
  } else if (this.checked === false) {
    dark.style.display = 'none';
    light.style.display = 'inline-block';
    body.style.backgroundColor = '#fff';
    title.style.color = 'black';
  }
});
