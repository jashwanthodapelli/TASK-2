const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// Live Validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
messageInput.addEventListener("input", validateMessage);

// Submit
form.addEventListener("submit", function(e){

    e.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const messageValid = validateMessage();

    if(nameValid && emailValid && phoneValid && messageValid){

        alert("✅ Form Submitted Successfully!");

        setTimeout(() => {

            window.location.href = "todo.html";

        }, 1000);
    }

});

// Validate Name
function validateName(){

    const value = nameInput.value.trim();

    const namePattern = /^[A-Za-z ]+$/;

    if(value === ""){

        showError(
            nameInput,
            "Full name is required",
            "nameIcon"
        );

        return false;
    }

    else if(!namePattern.test(value)){

        showError(
            nameInput,
            "Only letters are allowed",
            "nameIcon"
        );

        return false;
    }

    else if(value.length < 3){

        showError(
            nameInput,
            "Minimum 3 characters required",
            "nameIcon"
        );

        return false;
    }

    else{

        showSuccess(nameInput, "nameIcon");

        return true;
    }
}

// Validate Email
function validateEmail(){

    const value = emailInput.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(value === ""){

        showError(
            emailInput,
            "Email is required",
            "emailIcon"
        );

        return false;
    }

    else if(!emailPattern.test(value)){

        showError(
            emailInput,
            "Enter valid email",
            "emailIcon"
        );

        return false;
    }

    else{

        showSuccess(emailInput, "emailIcon");

        return true;
    }
}

// Validate Phone
function validatePhone(){

    const value = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if(value === ""){

        showError(
            phoneInput,
            "Phone number is required",
            "phoneIcon"
        );

        return false;
    }

    else if(!phonePattern.test(value)){

        showError(
            phoneInput,
            "Enter valid 10-digit number",
            "phoneIcon"
        );

        return false;
    }

    else{

        showSuccess(phoneInput, "phoneIcon");

        return true;
    }
}

// Validate Message
function validateMessage(){

    const value = messageInput.value.trim();

    if(value === ""){

        showError(
            messageInput,
            "Message is required",
            "messageIcon"
        );

        return false;
    }

    else if(value.length < 5){

        showError(
            messageInput,
            "Minimum 5 characters required",
            "messageIcon"
        );

        return false;
    }

    else{

        showSuccess(messageInput, "messageIcon");

        return true;
    }
}

// Show Error
function showError(input, message, iconId){

    const inputGroup = input.parentElement.parentElement;

    const error =
        inputGroup.querySelector(".error");

    const icon =
        document.getElementById(iconId);

    error.innerText = message;

    input.classList.add("invalid");

    input.classList.remove("success");

    icon.innerHTML = "❌";
}

// Show Success
function showSuccess(input, iconId){

    const inputGroup = input.parentElement.parentElement;

    const error =
        inputGroup.querySelector(".error");

    const icon =
        document.getElementById(iconId);

    error.innerText = "";

    input.classList.add("success");

    input.classList.remove("invalid");

    icon.innerHTML = "✅";
}