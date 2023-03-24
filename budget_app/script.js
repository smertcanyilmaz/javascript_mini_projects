'use strict';

const error = document.getElementById('error');
const numberBud = document.getElementById('number-bud');
const calcBtn = document.getElementById('calc-btn');
const text = document.getElementById('text');
const expenseBtn = document.getElementById('expense-btn');
const sBudget = document.getElementById('s-budget');
const sExpenses = document.getElementById('s-expenses');
const sBalance = document.getElementById('s-balance');
const item = document.getElementById('item');
const itemValue = document.getElementById('item-value');
const fix = document.getElementById('fix');
const trash = document.getElementById('trash');
const numberExp = document.getElementById('number-exp');

function updateBudget() {
  const budget = parseFloat(numberBud.value);
  const expenses = parseFloat(numberExp.value);

  if (isNaN(budget) || isNaN(expenses)) {
    error.style.visibility = 'visible';
    sBudget.innerHTML = '0';
    sExpenses.innerHTML = '0';
    sBalance.innerHTML = '0';
  } else if (expenses > budget) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Insufficient Balance!';
    sBudget.innerHTML = '0';
    sExpenses.innerHTML = '0';
    sBalance.innerHTML = '0';
  } else {
    error.style.visibility = 'hidden';
    sBudget.innerHTML = `$${budget}`;
    sExpenses.innerHTML = `$${expenses}`;
    sBalance.innerHTML = `$${Math.max(budget - expenses, 0)}`;
  }
}

function checkText() {
  const budget = parseFloat(numberBud.value);
  const expenses = parseFloat(numberExp.value);

  if (text.value === '' && (!isNaN(budget) || !isNaN(expenses))) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please Enter Your Expense';
    text.classList.add('active');
  } else {
    item.innerHTML = text.value;
    itemValue.innerHTML = numberExp.value;
    error.style.visibility = 'hidden';
    text.classList.remove('active');
  }

  if (expenses > budget) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Insufficient Balance!';
    item.innerHTML = '❌';
    itemValue.innerHTML = '❌';
  }
}

calcBtn.addEventListener('click', updateBudget);
expenseBtn.addEventListener('click', () => {
  checkText();
});
