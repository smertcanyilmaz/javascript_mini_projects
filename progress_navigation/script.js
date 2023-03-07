'use strict';
// checkboxes
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
//pararaf
const content = document.getElementById('content');
const contentValue = [
  'Choose title content',
  'Choose description content',
  'Are you happy now?',
  "Ok we're done. Thanks for sending us your data!",
];
//buttons
const buttonBack = document.getElementById('btn-back');
const buttonSubmit = document.getElementById('btn-submit');

step1.addEventListener('change', function () {
  if (step2.checked === true) {
    this.checked = true;
    this.disabled = true;
    step2.checked = false;
    step2.disabled = false;
  }
  if (this.checked === true) {
    step3.checked = false;
    step3.disabled = true;
    buttonBack.style.display = 'none';
    buttonSubmit.style.display = 'inline-block';
    buttonSubmit.value = 'Submit title';
    content.innerHTML = contentValue[0];
  }
});

step2.addEventListener('change', function () {
  if (step3.checked === true) {
    this.checked = true;
    step3.checked = false;
  }
  if (this.checked === true) {
    step3.disabled = false;
    this.disabled = true;
    step1.disabled = false;
    buttonBack.style.display = 'inline-block';
    buttonBack.value = 'Back';
    buttonSubmit.style.display = 'inline-block';
    buttonSubmit.value = 'Submit description';
    content.innerHTML = contentValue[1];
  } else {
    step3.disabled = true;
    step3.checked = false;
    content.innerHTML = contentValue[0];
  }
});

step3.addEventListener('change', function () {
  if (this.checked === true) {
    this.disabled = true;
    step2.disabled = false;
    buttonBack.value = 'No, go back';
    buttonSubmit.value = 'Yes, go ahead';
    content.innerHTML = contentValue[2];
  } else {
    content.innerHTML = contentValue[1];
  }
});

buttonSubmit.addEventListener('click', function () {
  if (step2.checked !== true) {
    step2.checked = true;
    step2.disabled = true;
    step1.disabled = false;
    step3.disabled = false;
    buttonBack.style.display = 'inline-block';
    buttonBack.value = 'Back';
    this.value = 'Submit description';
    content.innerHTML = contentValue[1];
  } else if (
    step1.checked === true &&
    step2.checked === true &&
    step3.checked === true
  ) {
    buttonBack.style.display = 'none';
    buttonSubmit.style.display = 'none';
    content.innerHTML = contentValue[3];
  } else {
    step3.checked = true;
    step3.disabled = true;
    step2.disabled = false;
    buttonBack.value = 'No, go back';
    this.value = 'Yes, go ahead';
    content.innerHTML = contentValue[2];
  }
});

buttonBack.addEventListener('click', function () {
  if (step2.checked === true && step3.checked !== true) {
    step2.checked = false;
    step2.disabled = false;
    step1.disabled = true;
    step3.disabled = true;
    buttonBack.style.display = 'none';
    buttonSubmit.value = 'Submit title';
    content.innerHTML = contentValue[0];
  } else if (step3.checked == true) {
    step3.checked = false;
    step3.disabled = false;
    step2.disabled = true;
    buttonBack.style.display = 'inline-block';
    buttonBack.value = 'Back';
    buttonSubmit.value = 'Submit description';
    content.innerHTML = contentValue[1];
  }
});
