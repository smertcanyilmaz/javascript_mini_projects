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

let data;

async function getData(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(word);
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
  secondBox.style.display = 'flex';
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
