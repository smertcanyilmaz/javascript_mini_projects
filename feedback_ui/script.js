'use strict';
const container = document.getElementById('container');
const faces = document.querySelectorAll('.faces');
const btn = document.getElementById('btn');
let selectedfaces = '';

faces.forEach(face => {
  face.addEventListener('click', event => {
    removeActive();
    selectedfaces = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

btn.addEventListener('click', () => {
  if (selectedfaces !== '') {
    container.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <strong> Feedback: ${selectedfaces}</strong>
        <br>
        <p> &nbsp;&nbsp;&nbsp;We'll use your feedback to &nbsp;&nbsp;improve our customer support.</p>
    `;
    container.style.color = '#baeffc';
  }
});

function removeActive() {
  faces.forEach(face => {
    face.classList.remove('active');
  });
}
