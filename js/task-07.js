const regulator = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
//text.style.fontSize = "50px";

console.log(regulator.value);
console.log(text.textContent);

regulator.addEventListener("input", (ev) => {
    let size = regulator.value;
    size.toString();
    text.style.fontSize = `${size}px`;
})

