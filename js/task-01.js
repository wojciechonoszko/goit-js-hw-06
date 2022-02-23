const $ul = document.getElementById("categories");
const liNodes = [];

for (let i=0; i<$ul.childNodes.length; i++){
    if ($ul.childNodes[i].nodeName == "LI") {
        liNodes.push($ul.childNodes[i]);
    }
}
console.log(`Number of categories: ${liNodes.length}`);

