let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let btnClaim = document.getElementById("btn");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");

btnClaim.onclick = function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    if (FirstName.value.trim() === "") {
        text1.style.display = "block";
        isValid = false;
    } else {
        text1.style.display = "none";
    }
    if (LastName.value.trim() === "") {
        text2.style.display = "block";
        isValid = false;
    } else {
        text2.style.display = "none";
    }
    if (Email.value.trim() === "") {
        text3.style.display = "block";
        isValid = false;
    } else {
        text3.style.display = "none";
    }
    if (password.value.trim() === "") {
        text4.style.display = "block";
        isValid = false;
    } else {
        text4.style.display = "none";
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
};
