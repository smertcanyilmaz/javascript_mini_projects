'use strict';
const text = document.getElementById('text');
const errorMsg = document.getElementById('p');
const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon2');
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function checker() {
  if (text.value.match(mailRegex)) {
    icon.style.display = 'inline-block';
    icon2.style.display = 'none';
    errorMsg.style.visibility = 'hidden';
    text.style.border = '1px solid #0c8d51';
  } else if (text.value == '') {
    icon.style.display = 'none';
    icon2.style.display = 'none';
    errorMsg.style.visibility = 'hidden';
  } else {
    icon2.style.display = 'inline-block';
    icon.style.display = 'none';
    errorMsg.style.visibility = 'visible';
    text.style.border = '1px solid #cc0000';
  }
}
