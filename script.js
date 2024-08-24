// Validate the entire form on submit
function validateForm() {
    let isValid = true;

    // Validate each field individually
    if (!validateFullName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhoneNumber()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;

    // Return false to prevent form submission if any field is invalid
    return isValid;
}

// Validate Full Name
function validateFullName() {
    const fullName = document.getElementById('fullName').value.trim();
    const errorElement = document.getElementById('fullNameError');

    // Regular expression to check if the name contains only alphabets
    const namePattern = /^[A-Za-z]+$/;

    if (fullName.length < 5) {
        errorElement.textContent = "Name must be more than 5 characters long.";
        return false;
    } else if (!namePattern.test(fullName)) {
        errorElement.textContent = "Name must contain only alphabets.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Validate Email ID
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const errorElement = document.getElementById('emailError');

    if (!email.includes('@')) {
        errorElement.textContent = "Enter a valid email with '@'.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Validate Phone Number
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const errorElement = document.getElementById('phoneError');

    // Regular expression to check if the phone number contains only digits and is 10 digits long
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber) || phoneNumber === "1234567890") {
        errorElement.textContent = "Enter a valid 10-digit phone number.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Validate Password
function validatePassword() {
    const password = document.getElementById('password').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const errorElement = document.getElementById('passwordError');

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        errorElement.textContent = "Password must be at least 8 characters long and not be 'password' or your name.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Validate Confirm Password
function validateConfirmPassword() {
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorElement = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}
