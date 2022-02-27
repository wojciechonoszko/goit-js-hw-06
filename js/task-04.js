let counterValue = 0;
const counterValueText = document.querySelector("#value");

const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

const incrementClick = () =>{
    counterValue += 1;
    counterValueText.innerHTML = counterValue;
    console.log(counterValue);
}

const decrementClick = () =>{
    counterValue -=1;
    counterValueText.innerHTML = counterValue;
    console.log(counterValue);
}

incrementButton.addEventListener("click", incrementClick);
decrementButton.addEventListener("click", decrementClick);