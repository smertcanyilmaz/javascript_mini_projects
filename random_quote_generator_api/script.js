"use strict";

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const hero = document.querySelector(".hero");

async function getNewQuote() {
  try {
    const response = await fetch(
      "https://api.quotable.io/random?maxLength=150"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function updateQuote() {
  const data = await getNewQuote();
  text.textContent = data.content;
  hero.textContent = data.author;
}

btn.addEventListener("click", updateQuote);

updateQuote();

// alternative 1

// const getNewQuote = function () {
//   return fetch("https://api.quotable.io/random?maxLength=150")
//     .then((response) => response.json())
//     .catch((error) => console.error(error));
// };

// function updateQuote() {
//   getNewQuote().then((data) => {
//     text.textContent = data.content;
//     hero.textContent = data.author;
//   });
// }

// btn.addEventListener("click", updateQuote);

// updateQuote();

// alternative 2

// const getQuotes = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://api.quotable.io/random`);
//   request.onload = function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   };

//   request.send();
// };

// getQuotes();
