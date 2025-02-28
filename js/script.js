/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const usernameInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");

    loginBtn.addEventListener("click", function () {
        if (!validateInputs()) return;
        alert("Login button clicked!");
    });

    signupBtn.addEventListener("click", function () {
        if (!validateInputs()) return;
        alert("Signup button clicked!");
    });

    function validateInputs() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,30}$/;

        if (!emailPattern.test(usernameInput.value) || usernameInput.value.length > 30) {
            alert("Invalid email format or exceeds 30 characters.");
            return false;
        }

        if (!passwordPattern.test(passwordInput.value) || passwordInput.value.length > 30) {
            alert("Password must contain uppercase, lowercase, and a number, and be at most 30 characters long.");
            return false;
        }
        return true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupBtn").addEventListener("click", function () {
        window.location.href = "signup.html"; // Redirect to signup page
    });
});

document.getElementById("signupBtn").addEventListener("click", function() {
    window.location.href = "signup.html"; // Redirect to signup page
});

