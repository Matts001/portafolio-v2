const links = document.querySelectorAll('.menu-center a');

for (link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
e.preventDefault();

    const href = this.getAttribute('href');
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

//text writing

const typedWord = document.querySelector(".writing");

const wordArray = ["Web Developer", "Digital Artist"];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

// Typing Function
function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {

    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

// Erase Function
function erase() {
  if (letterIndex > 0) {
    
    typedWord.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {

    wordArrayIndex++;
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);
});
