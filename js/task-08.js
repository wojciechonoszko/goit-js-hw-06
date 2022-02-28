const form = document.querySelector(".login-form");

const email = document.querySelector("[type=email]");

const password = document.querySelector("[type=password]");


const submitForm = (ev) => {
    const form = ev.currentTarget;
    ev.preventDefault()
    const{
        elements: {email, password}, 
    } = form;

    if ((!email.value) || (!password.value)){
        return alert("You must fill in all fields in form.")
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    form.reset();
}

form.addEventListener("submit", submitForm);


