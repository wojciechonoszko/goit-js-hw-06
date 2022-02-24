const $ul = document.getElementById("categories");
const liNodes = [];

for (let i=0; i<$ul.childNodes.length; i++){
    if ($ul.childNodes[i].nodeName == "LI") {
        liNodes.push($ul.childNodes[i]);
    }
}
console.log(`Number of categories: ${liNodes.length} `);

// console.log($ul.children[0].children[1].children.length)

// console.log($ul.firstChild.childNodes);

// console.log($ul.firstElementChild.children);
// console.log(document.getElementsByTagName('h2')[0].textContent);
// console.log(document.getElementsByTagName('')[0]);
console.log(' ');
console.log(`Category: ${document.getElementsByTagName('h2')[0].textContent}`);
console.log(`Elements: ${$ul.children[0].children[1].children.length}`)