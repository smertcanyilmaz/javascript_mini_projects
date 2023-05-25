'use strict';

const btn = document.querySelector('.btn');
const secondBox = document.querySelector('.secondbox');
const meaning = document.querySelector('.meaning');
const example = document.querySelector('.example');
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
const synBox = document.getElementById('syn-box');

let data;

async function getData(word) {
  conditions();

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const jsonData = await response.json();

    if (jsonData.title === 'No Definitions Found') {
      errorMes.innerText = `${word} is not found`;
      errorMes.style.display = 'block';
      loaderBox.classList.remove('activespan');

      if (secondBox.style.display === 'flex') {
        secondBox.style.display = 'none';
      }

      xmark.style.display = 'none';

      if (text.value !== '' && errorMes.style.display === 'block') {
        xmark.style.display = 'inline-block';
      }

      return null;
    }

    console.log(jsonData);
    console.log(word);
    loaderBox.classList.remove('activespan');
    secondBox.style.display = 'flex';
    xmark.style.display = 'inline-block';

    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

async function newData() {
  data = await getData(text.value);

  h2.textContent = data[0].word;
  meaning.textContent = data[0].meanings[0].definitions[0].definition;

  let synArr = data[0].meanings[0].synonyms.slice(0, 4);
  console.log(synArr);

  for (let i = 0; i < synArr.length; i++) {
    const synElement = document.querySelector(`.syn${i + 1}`);
    synElement.textContent = synArr[i];
    if (i !== synArr.length - 1) {
      synElement.textContent += ',';
    }

    // I just wanted to click on the word and search, but this feature is not available due to api problems.
    // synElement.addEventListener('click', async () => {
    //   text.value = synArr[i];
    //   await newData();
    // });
  }

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
  }
  if (e.key === 'Enter' && text.value === '') {
    xmark.style.display = 'none';
    errorMes.innerText = 'please write a word . . ';
  }
});

text.addEventListener('keypress', () => {
  xmark.style.display = 'inline-block';
});

xmark.addEventListener('click', () => {
  text.value = '';
  xmark.style.display = 'none';
  secondBox.style.display = 'none';
  errorMes.style.display = 'none';
});

function conditions() {
  if (text.value !== '') {
    loaderBox.classList.add('activespan');
    errorMes.style.display = 'none';
  } else {
    loaderBox.classList.remove('activespan');
    errorMes.style.display = 'block';
    errorMes.innerText = 'please write a word . . ';
  }

  if (text.value !== '' && secondBox.style.display === 'flex') {
    loader.classList.add('active');
    span1.classList.add('active');
    xmark.style.display = 'none';
  } else {
    loader.classList.remove('active');
    span1.classList.remove('active');
    xmark.style.display = 'none';
  }
}

// alternative 2

// function conditions() {
//   let isValid = false;

//   if (text.value !== '') {
//     loaderBox.classList.add('activespan');
//     errorMes.style.display = 'none';
//     isValid = true;
//   } else {
//     loaderBox.classList.remove('activespan');
//     errorMes.innerText = 'Please write a word...';
//     errorMes.style.display = 'block';
//   }

//   if (text.value !== '' && secondBox.style.display === 'flex') {
//     loader.classList.add('active');
//     span1.classList.add('active');
//     xmark.style.display = 'none';
//     isValid = true;
//   } else {
//     loader.classList.remove('active');
//     span1.classList.remove('active');
//     xmark.style.display = 'none';
//   }

// if (text.value === '' && secondBox.style.display === 'flex') {
//   btn.style.pointerEvents = 'none';
//   btn.style.opacity = '0.5';
//   isValid = true;
// } else {
//   btn.style.pointerEvents = 'auto'
//   btn.style.opacity = '1';
// }

//   return isValid;
// }
