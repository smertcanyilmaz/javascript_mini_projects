'use strict';

const bill = document.getElementById('bill');
const button5 = document.getElementById('button-5');
const button10 = document.getElementById('button-10');
const button20 = document.getElementById('button-20');
const button25 = document.getElementById('button-25');
const button50 = document.getElementById('button-50');
const custom = document.getElementById('custom');
const span = document.getElementById('span');
const number_people = document.getElementById('number-people');
const tip_amount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const reset_btn = document.getElementById('reset-btn');
const buttons = document.querySelectorAll('.btn-tip');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    // if (buttons[i].classList.contains('active')) {
    //   buttons[i].classList.remove('active');       // bir butona tıkladıktan sonra tıklanmadığı haline dönme
    // } else {
    for (let j = 0; j < buttons.length; j++) {
      if (j !== i) {
        buttons[j].classList.remove('active');
      } else {
        buttons[i].classList.add('active');
      }
    }
  });
}

const calcFunc = function (input) {
  let value = bill.value / input;
  let totalValue = parseFloat(bill.value) / parseFloat(number_people.value);
  let personResult = parseFloat(value) / parseFloat(number_people.value);
  let totalResult = totalValue + personResult;

  if (
    isNaN(parseFloat(number_people.value)) ||
    parseFloat(number_people.value) == 0
  ) {
    total.innerHTML = ``;
    tip_amount.innerHTML = ``;
    span.style.visibility = 'visible';
  } else {
    tip_amount.innerHTML = `$${personResult.toFixed(2)}`;
    total.innerHTML = `$${totalResult.toFixed(2)}`;
    span.style.visibility = 'hidden';
  }
};

button5.addEventListener('click', () => {
  calcFunc(20);
});

button10.addEventListener('click', () => {
  calcFunc(10);
});

button20.addEventListener('click', () => {
  calcFunc(5);
});

button25.addEventListener('click', () => {
  calcFunc(4);
});

button50.addEventListener('click', () => {
  calcFunc(2);
});

function customFunc() {
  let value = parseFloat(bill.value);
  let customValue = parseFloat(custom.value);
  let totalValue = parseFloat(bill.value) / parseFloat(number_people.value);
  let tipResult =
    ((100 / value) * customValue) / parseFloat(number_people.value);
  tip_amount.innerHTML = `$${tipResult.toFixed(2)}`;
  let result = totalValue + tipResult;
  total.innerHTML = `$${result.toFixed(2)}`;
  //   if (isNaN(customValue) || customValue == 0) {
  //     total.innerHTML = ``;
  //   } else if (
  //     !isNaN(value) &&
  //     customValue > 100 &&
  //     !isNaN(parseFloat(number_people.value))
  //   ) {
  //     total.innerHTML = `100% is the limit`;
  //   } else if (isNaN(value) && !isNaN(customValue)) {
  //     total.innerHTML = `$0.00`;
  //   } else if (
  //     !isNaN(value) ||
  //     !isNaN(customValue) ||
  //     isNaN(parseFloat(number_people.value)) ||
  //     parseFloat(number_people.value) == 0
  //   ) {
  //     span.style.visibility = 'visible';
  //     total.innerHTML = ``;
  //     tip_amount.innerHTML = ``;
  //   } else {
  //     return (total.innerHTML = `$${result}`);
  //   }
}

reset_btn.addEventListener('click', function () {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  total.innerHTML = ``;
  tip_amount.innerHTML = ``;
  bill.value = '';
  number_people.value = '';
  custom.value = '';
  span.style.visibility = 'hidden';
});

