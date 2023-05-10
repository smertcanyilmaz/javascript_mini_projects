'use strict';

const btn = document.querySelector('.btn');
const secondBox = document.querySelector('.secondbox');
const meaning = document.querySelector('.meaning');
const example = document.querySelector('.example');
const syn = document.querySelector('.syn');
const h2 = document.getElementById('h2');
const pos = document.querySelector('.pos');
const phon = document.querySelector('.phon');
const volume = document.querySelector('.secondbox .fa-volume-high');
const xmark = document.querySelector('.firstbox .fa-xmark');
const text = document.getElementById('text');
const loaderBox = document.querySelector('.loader-box');
const errorMes = document.querySelector('.errormes');
const loader = document.querySelector('.loader');
const span1 = document.querySelector('.span1');

let data;

async function getData(word) {
  conditions();

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(word);
    loaderBox.classList.remove('activespan');
    secondBox.style.display = 'flex';
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

async function newData() {
  data = await getData(text.value);

  h2.textContent = data[0].word;
  meaning.textContent = data[0].meanings[0].definitions[0].definition;
  syn.textContent = data[0].meanings[0].synonyms.slice(0, 4).join(', ');
  phon.textContent = data[0].phonetics[0].text;
  pos.textContent = data[0].meanings[0].partOfSpeech;

  let exampleText = '';
  for (let i = 0; i < data[0].meanings[0].definitions.length; i++) {
    if (data[0].meanings[0].definitions[i].example) {
      exampleText = data[0].meanings[0].definitions[i].example;
      break;
    }
  }
  example.textContent = exampleText;
}

btn.addEventListener('click', () => {
  newData();
});

volume.addEventListener('click', () => {
  volume.classList.add('active');

  if (!data) return;

  let audio;

  for (let i = 0; i < data[0].phonetics.length; i++) {
    if (data[0].phonetics[i].audio) {
      let foundAudio = data[0].phonetics[i].audio;
      audio = new Audio(foundAudio);
      audio.play();
      break;
    }
  }

  audio.addEventListener('ended', () => {
    volume.classList.remove('active');
  });
});

text.addEventListener('keyup', e => {
  if (e.key === 'Enter' && e.target.value) {
    getData(e.target.value);
    newData();
    secondBox.style.display = 'inline-block';
  }
});

text.addEventListener('keypress', () => {
  xmark.style.display = 'inline-block';
});

xmark.addEventListener('click', () => {
  text.value = '';
  xmark.style.display = 'none';
  secondBox.style.display = 'none';
});

function conditions() {
  if (text.value !== '') {
    loaderBox.classList.add('activespan');
    errorMes.style.display = 'none';
  } else {
    loaderBox.classList.remove('activespan');
    errorMes.innerText = 'please write a word . . ';
  }

  if (text.value !== '' && secondBox.style.display === 'flex') {
    loader.classList.add('active');
    span1.classList.add('active');
    xmark.style.display = 'none';
  }
}
