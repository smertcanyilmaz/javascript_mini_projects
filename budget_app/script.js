'use strict';

const error = document.getElementById('error');
const numberBud = document.getElementById('number-bud');
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
const addBudgetBtn = document.getElementById('budget-btn');

// (https://smybudget.netlify.app)

// YAŞADIĞIM SORUN newChecker fonsiyonunda. Buradaki temel amacım şuydu;

// bir harcama add expense butonunu ile expense title ve expense value altına listelenir ve budget, expenses ve balance otomatik güncellenir. buraya kadar ki her şey sorunsuz çalışıyor. örneğin;

// Please Enter Your Expense : bulaşık deterjanı
// Please Enter Expense Amount : 20

// sorun ise halihazırda listelenmiş bir expanse value başlığı altındaki inputu editlemek ve akabinde check etmek istediğimde ortaya çıkıyor. edit tuşuna basıyorum ve yeni Expense Amount değerini yazıyorum. örneğin yeni değer 25 olsun. benim newChecker() fonsiyonu ile yapmaya çalıştığım şey ise 25 - 20 yapıp yeni değeri expenses ve balance da güncellemekti. ancak şöyle bir problem oldu. ilk girilen değerler işlemi yaparken ikinci değerlerde sorun ortaya çıktı. örnek ile netleştireyim:

// Please Enter Expense Amount : 25  ------> let exp = [25]

// daha sonra add expense diyoruz input expense value altına gidiyor. edite tıklıyoruz ve yeni değeri giriyoruz ve check ikonuna tıklıyoruz : 20 ----> let numbers = [20];

// let result = [5];

//  bu sefer işlemi farklı harcamalarla devam ettiriyoruz örneğin;
// // Please Enter Your Expense : halı
// Please Enter Expense Amount : 500 add expense diyip listeliyoruz, edit yapıp yeni değer giriyoruz örneğin: 600 ve check ikonuna tıklıyoruz.

// işte bu noktada fonsiyon çalışmıyor. her zaman default olarak ilk inputu kendisine çıkarılacak exp değer olarak kabul ediyor. console'da durum şöyle bekleniyor/gerçekleşiyor:
// beklenen: let exp = [25, 500] let numbers = [20, 600]; let result = [5, 100];
// gerçekte çıkan sonuç = let exp = [25, 600] let numbers = [20, 20]; let result = [5, 5, 580]; (neden resultta 3 tane eleman var hiçbir fikrim yok)
// kısacası benim listelenen inptularımının ilki dışında expense value altında listelenen diğer inputları tanımlanmıyor. ben bu sorunu nasıl çözebilirim ve değerleri olması gertiği gibi nasıl yazabilirim? benim aklıma ilk gelen array ile yapmaktı reduce gibi methodları da denedim ama çalıştıramadım.

//NOT: Please Enter Expense Amount'da girilen değerin exp arrayine pushlandığı satır:  110. satır exp.push(expenses);

let exp = [];
let numbers = [];
let result = [];

function newChecker() {
  const expenseCell = document.querySelector('td:nth-child(2) input');
  const expoVal = parseFloat(expenseCell.value);
  //const expenses = parseFloat(numberExp.value);
  numbers.push(expoVal);

  for (let j = 0; j < exp.length; j++) {
    result.push(exp[j] - numbers[j]);
    //exp.shift();
    //numbers.shift();
  }

  console.log(exp);
  console.log(numbers);
  console.log(result);
}

let totalExpenses = 0;

function addExpenses() {
  const expenses = parseFloat(numberExp.value);
  if (!isNaN(expenses)) {
    totalExpenses += expenses;
    sExpenses.innerHTML = `$${totalExpenses}`;
  }
}

let totalBudget = 0;

function addBudget() {
  const budget = parseFloat(numberBud.value);
  if (!isNaN(budget)) {
    totalBudget += budget;
    sBudget.innerHTML = `$${totalBudget}`;
    error.style.visibility = 'hidden';
    numberBud.classList.remove('active2');
  } else {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please Enter Your Budget';
    numberBud.classList.add('active2');
  }
}

function expenseFunc() {
  const budget = parseFloat(numberBud.value);
  const expenses = parseFloat(numberExp.value);
  const table = document.getElementById('table');
  const tr = table.insertRow();
  const td1 = tr.insertCell(0);
  const td2 = tr.insertCell(1);
  const td3 = tr.insertCell(2);
  const itemInput = document.getElementById('item-input');

  tr.className = 'table-items';
  td3.className = 't-3';
  //td1.classList = 't-1';
  td1.innerHTML = `<input type="text" id="item-input" readonly value="${text.value}">`;
  td2.innerHTML = `<input type="number" id="item-input"  readonly value="${expenses}">`;
  td3.innerHTML =
    "<i class='fa-solid fa-pen-to-square' style='color: #3b6896'> </i><i class='fa-solid fa-square-check'  style='color: #34d714' onclick = 'newChecker()'></i> </i><i class='fa-solid fa-trash' id='trashid' style='color: red'> ";

  exp.push(expenses);
  // console.log(exp);

  const trashIcons = document.getElementsByClassName('fa-trash');

  for (let i = 0; i < trashIcons.length; i++) {
    trashIcons[i].addEventListener('click', function () {
      this.parentNode.parentNode.style.display = 'none';
      error.style.visibility = 'hidden';

      const expenseCell = this.parentNode.parentNode.querySelector(
        'td:nth-child(2) input'
      );
      const expoVal = parseFloat(expenseCell.value);
      if (!isNaN(expoVal)) {
        totalExpenses -= expoVal;
        sExpenses.innerHTML = `$${totalExpenses}`;

        sBudget.innerHTML = `$${budget}`;
        sBalance.innerHTML = `$${budget - totalExpenses}`;
      }
      this.parentNode.remove();
    });

    const editIcons = document.getElementsByClassName('fa-pen-to-square');
    for (let i = 0; i < editIcons.length; i++) {
      editIcons[i].addEventListener('click', function () {
        const nameCell = this.parentNode.parentNode.querySelector(
          'td:nth-child(1) input'
        );
        const expenseCell = this.parentNode.parentNode.querySelector(
          'td:nth-child(2) input'
        );
        nameCell.removeAttribute('readonly');
        expenseCell.removeAttribute('readonly');

        //this.classList.remove('fa-pen-to-square');
        //this.classList.add('fa-check');
        nameCell.focus();

        nameCell.addEventListener('blur', function () {
          nameCell.setAttribute('readonly', '');
        });
        expenseCell.addEventListener('blur', function () {
          expenseCell.setAttribute('readonly', '');
        });
      });
    }

    const checkIcons = document.getElementsByClassName('fa-square-check');
    for (let i = 0; i < checkIcons.length; i++) {
      checkIcons[i].addEventListener('click', function () {
        const nameCell = this.parentNode.parentNode.querySelector(
          'td:nth-child(1) input'
        );
        const expenseCell = this.parentNode.parentNode.querySelector(
          'td:nth-child(2) input'
        );
        if (nameCell.value.trim() !== '' && expenseCell.value.trim() !== '') {
          nameCell.setAttribute('readonly', '');
          expenseCell.setAttribute('readonly', '');
          nameCell.classList.remove('activeItem');
          expenseCell.classList.remove('activeItem');
          //checkIcons.classList.add('fa-pen-to-square');
          error.style.visibility = 'hidden';
          //newChecker(); (arraylar çok kez yazılıyor anlamadım)
        } else {
          error.style.visibility = 'visible';
          error.innerHTML = 'Please Fill in All Fields Before Saving';
          nameCell.classList.add('activeItem');
          expenseCell.classList.add('activeItem');
          nameCell.removeAttribute('readonly', '');
          expenseCell.removeAttribute('readonly', '');
        }
      });
    }
  }

  // TEXT CHECKİNG

  if (text.value === '' && (!isNaN(budget) || !isNaN(expenses))) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please Enter Your Expense';
    text.classList.add('active');
    numberExp.classList.remove('active2');
    td1.innerHTML = '';
    td2.innerHTML = '';
    td3.innerHTML = '';
  } else {
    td1.innerHTML = `<input type="text" id="item-input"  readonly value="${text.value}">`;
    td2.innerHTML = `<input type="number" id="item-input"  readonly value="${expenses}">`;
    error.style.visibility = 'hidden';
    text.classList.remove('active');
    numberExp.classList.remove('active2');
  }

  if (isNaN(expenses)) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please Enter Expense';
    td1.innerHTML = '';
    td2.innerHTML = '';
    td3.innerHTML = '';
    text.classList.add('active');
    if (text.value !== '' || numberExp === '') {
      text.classList.remove('active');
      error.innerHTML = 'Please Enter Expense Amount';
    }
    numberExp.classList.add('active2');
  }

  addExpenses();

  // if (expenses > budget) {                  //OPTİNAL: if you don't want balance to decrease to minus
  //   error.style.visibility = 'visible';
  //   error.innerHTML = 'Insufficient Balance!';
  //   item.innerHTML = '❌';
  //   itemValue.innerHTML = '❌';
  // }
}

function updateBudget() {
  const budget = parseFloat(numberBud.value);
  if (isNaN(budget)) {
    error.style.visibility = 'visible';
    //sBudget.innerHTML = '0';                   // OPTİNAL: reseting values
    //sExpenses.innerHTML = '0';
    //sBalance.innerHTML = '0'; }

    //  else if (expenses > budget) {           //OPTİNAL: if you don't want balance to decrease to minus
    //   error.style.visibility = 'visible';
    //   error.innerHTML = 'Insufficient Balance!';
    //   sBudget.innerHTML = '0';
    //   sExpenses.innerHTML = '0';
    //   sBalance.innerHTML = '0';
  } else {
    error.style.visibility = 'hidden';
    sBudget.innerHTML = `$${budget}`;
    sBalance.innerHTML = `$${budget - totalExpenses}`;
  }
}

expenseBtn.addEventListener('click', () => {
  expenseFunc();
  updateBudget();
});
addBudgetBtn.addEventListener('click', () => {
  addBudget();
});
