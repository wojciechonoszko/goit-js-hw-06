const regulator = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


regulator.addEventListener("input", (ev) => {
    let size = regulator.value;
    size.toString();
    text.style.fontSize = `${size}px`;
})

