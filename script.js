document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate validation
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }
    alert("Login successful");
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;
    const language = document.getElementById('language').value;

    let valid = true;
    let errorMessage = "";

    if (!username || !email || !password || !passwordConfirm || !language) {
        errorMessage += "Please fill in all fields.\n";
        valid = false;
    }

    if (password !== passwordConfirm) {
        errorMessage += "Passwords do not match.\n";
        valid = false;
    }

    if (!valid) {
        alert(errorMessage);
        return;
    }

    alert("Registration successful");
});
