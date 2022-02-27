const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

console.log(inputName.textContent.length);
console.log(outputName);

inputName.addEventListener("input", (event) => {
    if (inputName.textContent.length){
        outputName.textContent = "anonym";
    }
    else{
    outputName.textContent = event.currentTarget.value;
    }
})