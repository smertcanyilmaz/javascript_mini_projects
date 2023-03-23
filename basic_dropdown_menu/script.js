'use strict';

const items = document.querySelectorAll('.items');
const down = document.getElementById('down');
const up = document.getElementById('up');
const itemBox = document.getElementById('item-box');
const text = document.getElementById('text');

items.forEach(item => {
  item.addEventListener('click', () => {
    const content = item.textContent.trim();
    text.value = content;
  });
});

down.addEventListener('click', () => {
  if (itemBox.style.display === 'block') {
    itemBox.style.display = 'none';
  } else {
    itemBox.style.display = 'block';
    down.style.display = 'none';
    up.style.display = 'block';
  }
});

up.addEventListener('click', () => {
  if (itemBox.style.display === 'none') {
    itemBox.style.display = 'block';
  } else {
    itemBox.style.display = 'none';
    up.style.display = 'none';
    down.style.display = 'block';
  }
});
