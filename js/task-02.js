const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemEl = ingredients.map(ingredient => {
  const title = document.createElement('li');
  title.textContent = ingredient;
  return title;
});

console.log(itemEl);

const listEl = document.querySelector('ul');
listEl.append(...itemEl);

console.log(listEl);