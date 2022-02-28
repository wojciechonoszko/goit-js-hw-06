function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanBackground = document.querySelector(".color");

const changeColor = document.querySelector(".change-color");

const buttonChangeColor = (ev) => {
  spanBackground.style.backgroundColor = getRandomHexColor();
}

addEventListener("click", buttonChangeColor);