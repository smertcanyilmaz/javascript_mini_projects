'use strict';

const menuIcon = document.getElementById('menu-icon');
const down = document.querySelectorAll('.fa-chevron-down');
const iconLinks = document.querySelectorAll('.icon-link');
const linkNames = document.querySelectorAll('.link_name');
const subMenu = document.querySelectorAll('.sub-menu');
const tInnerbox = document.querySelector('.t-innerbox');
const profileName = document.querySelector('.profile-name');
const online = document.querySelector('.online');
const card = document.querySelector('.card');
const profileImg = document.querySelector('.card .profile img');
const title = document.querySelector('.title');
const profile = document.querySelector('.card .profile');
const task = document.querySelector('.task');
const innertask = document.querySelector('.innertask');
const newtask = document.querySelector('.innertask .newtask');

const rotate = document.querySelector('.rotate');

menuIcon.addEventListener('click', () => {
  card.classList.toggle('active');
  linkNames.forEach(linkName => {
    linkName.classList.toggle('active');
  });

  down.forEach(downn => {
    downn.classList.toggle('active');
    downn.style.display = 'inline-block';
  });

  iconLinks.forEach(iconLink => {
    iconLink.classList.toggle('active');
  });

  subMenu.forEach(subM => {
    subM.style.display = 'none';
  });

  tInnerbox.classList.toggle('active');
  profileName.classList.toggle('active');
  online.classList.toggle('active');
  profileImg.classList.toggle('active');
  profile.classList.toggle('active');
  task.classList.toggle('active');
  innertask.classList.toggle('active');
  newtask.classList.add('active');

  if (card.offsetWidth === 60) {
    setTimeout(() => {
      newtask.classList.remove('active');
      newtask.classList.add('fade-in');
    }, 250);

    down.forEach(downn => {
      downn.classList.remove('rotate');
    });
  }
});

// alternative 1

down.forEach((downn, index) => {
  downn.addEventListener('click', () => {
    const submenu = subMenu[index];
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    downn.classList.toggle('rotate');
  });
});

// beginner-friendly version

// down.forEach(function (downn, index) {
//   downn.addEventListener('click', function () {
//     var submenu = subMenu[index];
//     if (submenu.style.display === 'flex') {
//       submenu.style.display = 'none';
//       downn.classList.remove('rotate');
//     } else {
//       submenu.style.display = 'flex';
//       downn.classList.add('rotate');
//     }
//   });
// });

// alternative 2 which have up and down icon but no arrow rotation

// for (let i = 0; i < down.length; i++) {
//   down[i].addEventListener('click', e => {
//     const downArrayIndex = Array.from(down).indexOf(e.target);
//     subMenu.forEach((subm, index) => {
//       if (index === downArrayIndex) {
//         subm.style.display = 'flex';
//         down[i].style.display = 'none';
//         up[i].style.display = 'inline-block';
//       }
//     });
//   });
// }

// for (let i = 0; i < up.length; i++) {
//   up[i].addEventListener('click', e => {
//     const upArrayIndex = Array.from(up).indexOf(e.target);
//     subMenu.forEach((subm, index) => {
//       if (index === upArrayIndex) {
//         subm.style.display = 'none';
//         up[i].style.display = 'none';
//         down[i].style.display = 'inline-block';
//       }
//     });
//   });
// }
