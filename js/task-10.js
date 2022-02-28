function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const form = document.querySelector("input");
console.log(form);
const element = form.value;
console.log(element);

const createButton = document.querySelector("[data-create]");
console.log(createButton);
const destroyButton = document.querySelector("[data-destroy");

const create = (ev) =>{
  const form = ev.currentTarget;
  const {
    elements: {element},
  } = form;
  console.log(`Elements: ${elements}`)
};

const destroy = (ev) =>{
  elements = [];
}



createButton.addEventListener("click", create);
destroyButton.addEventListener("click", destroy);