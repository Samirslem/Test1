let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let btnClaim = document.getElementById("btn");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")
let error4 = document.getElementById("error4")


btnClaim.onclick = function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    if (FirstName.value.trim() === "") {
        text1.style.display = "block";
        isValid = false;
        error1.style.display = "block";
    } else {
        text1.style.display = "none";
        error1.style.display = "none";
    }
    if (LastName.value.trim() === "") {
        text2.style.display = "block";
        error2.style.display = "block";
        isValid = false;
    } else {
        text2.style.display = "none";
        error2.style.display = "none";
    }
    if (Email.value.trim() === "") {
        text3.style.display = "block";
        error3.style.display = "block";
        isValid = false;
    } else {
        text3.style.display = "none";
        error3.style.display = "none";
    }
    if (password.value.trim() === "") {
        text4.style.display = "block";
        error4.style.display = "block";
        isValid = false;
    } else {
        text4.style.display = "none";
        error4.style.display = "none";
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
};

window.location.href = "https://github.com/Samirslem/Test1.git"