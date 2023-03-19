'use strict';

const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Bernard Arnault',
  'Elon Musk',
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Larry Ellison',
  'Steve Ballmer',
  'Carlos Slim',
  'Larry Page',
  'Sergey Brin',
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople]
    .map(a => ({
      value: a,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
        <p class = "person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
    `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragstart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}
