const $ul = document.getElementById("categories");

console.log(`Number of categories: ${$ul.children.length}`)

console.log(' ');
console.log(`Category: ${document.getElementsByTagName('h2')[0].textContent}`);
console.log(`Elements: ${$ul.children[0].children[1].children.length}`)

console.log(' ');
console.log(`Category: ${document.getElementsByTagName('h2')[1].textContent}`);
console.log(`Elements: ${$ul.children[1].children[1].children.length}`);

console.log(' ');
console.log(`Category: ${document.getElementsByTagName('h2')[2].textContent}`);
console.log(`Elements: ${$ul.children[2].children[1].children.length}`)