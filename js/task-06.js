const textInput = document.querySelector("#validation-input");


textInput.addEventListener("focus", () => {
    textInput.classList.add("#validation-input");
    textInput.value = "Please enter 6 symbols";
   
});


textInput.addEventListener("blur", () => {
    
    if (textInput.value.length===6)
        {textInput.classList.add("valid");}
    else{
        textInput.classList.add("invalid");
    }
});