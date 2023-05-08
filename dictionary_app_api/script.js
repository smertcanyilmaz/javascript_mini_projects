'use strict';

const btn = document.querySelector('.btn');
const secondBox = document.querySelector('.secondbox');
const meaning = document.querySelector('.meaning');
const example = document.querySelector('.example');
const syn = document.querySelector('.syn');
const h2 = document.getElementById('h2');

async function getData() {
  try {
    const response = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/sad'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function newData() {
  const data = await getData();
  h2.textContent = data[0].word;
  meaning.textContent = data[0].meanings[0].definitions[0].definition;
  //   example.textContent= data[0].
  syn.textContent = data[0].meanings[1].synonyms.slice(0, 4).join(', ');
  //   partOfSpeech
}

btn.addEventListener('click', () => {
  secondBox.style.display = 'flex';
  newData();
});
