'use strict';

const text = document.getElementById('text');
const btn = document.getElementById('btn');
const span = document.getElementById('span');

const countWords = () => {
  let words = text.value;
  let wordsTrimmed = words.replace(/\s+/g, ' ').trim();
  let splitWords = wordsTrimmed.split(' ');
  let numberOfWords = splitWords.length;

  if (splitWords[0] == 0) {
    numberOfWords = 0;
  }
  span.innerHTML = numberOfWords;
};

btn.addEventListener('click', countWords);
