'use strict';

let navlinks = document.querySelectorAll('nav a');
let divs = document.querySelectorAll('div');

window.onscroll = () => {
  divs.forEach(div => {
    let top = window.scrollY;
    let offset = div.offsetTop - 150;
    let height = div.offsetHeight;
    let id = div.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('nav a[href*="' + id + '"]')
          .classList.add('active');
      });
    }
  });
};
