const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.createDocumentList();
for (let i=0; i<ingredients.length; i++){
  const $li = document.createElement("li");
  $li.textContent = ingredients[i];
  $li.classList.add("item");

  document.body.append($li);
}
