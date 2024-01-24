const passwd1 = document.querySelector("#password1");
const passwd2 = document.querySelector("#password2");
const email1 = document.querySelector("#email1");
const email2 = document.querySelector("#email2");
const buttonSubmit = document.querySelector(("#submitButton"));

const control = (v1, v2) => {
    return v1 === v2;
}

buttonSubmit.addEventListener("click", (event) => {
    // event.preventDefault();
    if (!control(passwd1.value, passwd2.value)) {
        alert("Nem egyeznek a jelszavak!");
        return;
    }
    if (!control(email1.value, email2.value)) {
        alert("Az e-mail címek nem egyeznek!");
        return;
    }
})
