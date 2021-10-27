const form_container =document.querySelector(".container");
const form = document.querySelector("form");
const email = document.querySelector(".email");
const name = document.querySelector(".name");
const confirm_container = document.querySelector(".confirm");
const confirmationName = document.querySelector(".add_name");
const msgError = document.querySelector("#error_message");
const checkbox = document.querySelector(".checkbox input");
const button = document.querySelector("button");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const errors = [];

    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(email.value)) {
        errors.push("Email jest nie poprawny");
    }

    if (name.value.length < 3) {
        errors.push("Imię jest za krótkie");
    }

    if (!checkbox.checked) {
        errors.push("Zaznacz zgodę");
    }

    if (errors.length) {
        msgError.classList.remove("d-none");
        msgError.innerText = errors.join(" ");
        button.style.marginTop = "15px"
    } else {
        form_container.style.display = "none";
        confirmationName.innerText = name.value;
        confirm_container.style.display = "block";
    }
});