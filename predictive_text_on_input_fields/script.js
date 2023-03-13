'use strict';

const input = document.getElementById('input');
const suggestion = document.getElementById('suggestion');

let words = [
  'Apple',
  'Pencil',
  'Good',
  'Love',
  'Mertcan',
  'Day',
  'Politics',
  'Aristo',
  'Platon',
  'Coding',
];

words.sort();

const enterKey = 13;

window.onload = () => {
  input.value = '';
  clearSuggestion();
};

const clearSuggestion = () => {
  suggestion.innerHTML = '';
};

const caseCheck = word => {
  word = word.split('');
  let inp = input.value;

  for (let i in inp) {
    if (inp[i] == word[i]) {
      continue;
    } else if (inp[i].toUpperCase() == word[i]) {
      word.splice(i, 1, word[i].toLowerCase());
    } else {
      word.splice(i, 1, word[i].toUpperCase());
    }
  }
  return word.join('');
};

input.addEventListener('input', e => {
  clearSuggestion();
  let regex = new RegExp('^' + input.value, 'i');

  for (let i in words) {
    if (regex.test(words[i]) && input.value != '') {
      words[i] = caseCheck(words[i]);
      suggestion.innerHTML = words[i];
      break;
    }
  }
});

input.addEventListener('keydown', e => {
  if (e.keyCode == enterKey && suggestion.innerText != '') {
    e.preventDefault();
    input.value = suggestion.innerText;
    clearSuggestion();
  }
});
