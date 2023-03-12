'use strict';

const btn = document.getElementById('btn');
const content = document.getElementById('content');
const container = document.getElementById('container');
const stars = document.querySelectorAll('.stars i');
const text = document.getElementById('text');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star, index2) => {
      if (index1 >= index2) {
        star.classList.add('active');
        content.style.visibility = 'visible';
      } else {
        star.classList.remove('active');
      }
    });
  });
});

btn.addEventListener('click', () => {
  if (text.value !== '') {
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.color = '#f4f4f4';
    container.style.textAlign = 'center';
    container.style.fontSize = '25px';
    container.style.lineHeight = '2';
    container.innerHTML = `
  <strong>Your Rating and Your Comment Has Reached Us <br> 
  Thanks For Feedback 😊</strong>
   `;
  } else {
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.color = '#f4f4f4';
    container.style.textAlign = 'center';
    container.style.fontSize = '25px';
    container.style.lineHeight = '2';
    container.innerHTML = `
  <strong>Your Rating Has Reached Us <br> 
  Thanks For Feedback 😊</strong>
   `;
  }
});
