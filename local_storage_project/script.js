'use strict';

const studentForm = document.getElementById('studentForm');
const studentContainer = document.querySelector('.list');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = [];

const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });
  return { name, age, roll };
};

const createStudentElement = ({ name, age, roll }) => {
  const studentDiv = document.createElement('div');
  const studentName = document.createElement('h2');
  const studentAge = document.createElement('p');
  const studentRoll = document.createElement('p');

  studentDiv.classList.add('list-box');

  studentName.innerText = 'Student name: ' + name;
  studentAge.innerText = 'Student age: ' + age;
  studentRoll.innerText = 'Student roll: ' + roll;

  studentDiv.append(studentName, studentAge, studentRoll);
  studentContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );
  createStudentElement(newStudent);

  nameInput.value = '';
  ageInput.value = '';
  rollInput.value = '';
};
