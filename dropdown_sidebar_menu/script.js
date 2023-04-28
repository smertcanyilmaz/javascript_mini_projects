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
const onlineBox = document.querySelector('.online-box');

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
  onlineBox.classList.remove('hidden');

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

// alternative 1 beginner-friendly version

// down.forEach(function (downn, index) {
//   downn.addEventListener('click', function () {
//     const submenu = subMenu[index];
//     if (submenu.style.display === 'flex') {
//       submenu.style.display = 'none';
//       downn.classList.remove('rotate');
//     } else {
//       submenu.style.display = 'flex';
//       downn.classList.add('rotate');
//     }
//   });
// });

// alternative 2 which have up and down icons but no arrow rotation

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

// popup section

const plus = document.querySelector('.task .fa-plus');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const xmark = document.querySelector('.fa-xmark');

plus.addEventListener('click', () => {
  popup.style.display = 'flex';
  overlay.style.display = 'block';
});

xmark.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
  span.style.visibility = 'hidden';
  textInput.classList.remove('border');
  dateInput.classList.remove('border');
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
  span.style.visibility = 'hidden';
  textInput.classList.remove('border');
  dateInput.classList.remove('border');
});

//adding tasks

const btn = document.getElementById('btn');
const taskForm = document.getElementById('task-form');
const textInput = taskForm['text'];
const dateInput = taskForm['date'];

// const tasks = [];

const addTask = (text, date) => {
  const newTask = { text, date };
  // tasks.push(newTask);
  return newTask;
};

const createTaskElement = ({ text, date }) => {
  const parentul = document.getElementById('parentul');
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.className = 'divs';

  const a = document.createElement('a');
  a.id = 'a';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'check';

  li.className = 'create';

  const formattedDate = new Date(date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  a.href = '#';
  a.textContent = text + ' - ' + formattedDate;
  div.appendChild(checkbox);
  div.appendChild(a);
  li.appendChild(div);
  parentul.appendChild(li);

  checkbox.addEventListener('click', e => {
    if (e.target.checked) {
      div.style.display = 'none';
    }
  });
};

const span = document.getElementById('span');

btn.addEventListener('click', event => {
  event.preventDefault();

  if (textInput.value === '' || dateInput.value === '') {
    span.style.visibility = 'visible';
    textInput.classList.add('border');
    dateInput.classList.add('border');
  } else {
    const newTask = addTask(textInput.value, dateInput.value);
    createTaskElement(newTask);
    span.style.visibility = 'hidden';
    textInput.value = '';
    dateInput.value = '';
    textInput.classList.remove('border');
    dateInput.classList.remove('border');
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
});

// status section

const statuses = document.querySelectorAll('.status');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const onlineUpper = document.querySelector('.online-upper');
const profileInnerImg = document.querySelector('.profile-innerimg');

// alternative 1

const statusColors = {
  0: '#00ff00',
  1: 'red',
  2: 'yellow',
};

statuses.forEach((status, index) => {
  status.addEventListener('click', () => {
    online.style.backgroundColor = statusColors[index];
    profileInnerImg.style.border = `1px solid ${statusColors[index]}`;
    onlineBox.classList.remove('hidden');
  });
});

// alternative 2

// statuses.forEach((status, index) => {
//   status.addEventListener('click', () => {
//     switch (index) {
//       case 0:
//         online.style.backgroundColor = '#00ff00';
//         break;
//       case 1:
//         online.style.backgroundColor = 'red';
//         break;
//       case 2:
//         online.style.backgroundColor = 'yellow';
//         break;
//       default:
//         break;
//     }
//   });
// });

online.addEventListener('click', event => {
  event.stopPropagation();
  onlineBox.classList.toggle('hidden');
});

// if you want to close the window by clicking on the body

document.addEventListener('click', event => {
  if (
    !event.target.closest('.onlineBox') &&
    onlineBox.classList.contains('hidden')
  ) {
    onlineBox.classList.remove('hidden');
  }
});
