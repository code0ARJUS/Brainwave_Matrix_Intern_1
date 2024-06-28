function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
    let strength = 0;

    // Criteria for evaluating password strength
    const criteria = [
        { regex: /.{8,}/, message: "At least 8 characters long" }, // Length
        { regex: /[a-z]/, message: "Contains lowercase letters" }, // Lowercase letters
        { regex: /[A-Z]/, message: "Contains uppercase letters" }, // Uppercase letters
        { regex: /\d/, message: "Contains digits" },               // Digits
        { regex: /[\W_]/, message: "Contains special characters" } // Special characters
    ];

    // Check each criterion
    criteria.forEach((criterion) => {
        if (criterion.regex.test(password)) {
            strength++;
        }
    });

    // Provide feedback based on the strength
    if (strength < 3) {
        feedback.textContent = "Weak password";
        feedback.className = "weak";
    } else if (strength < 5) {
        feedback.textContent = "Medium strength password";
        feedback.className = "medium";
    } else {
        feedback.textContent = "Strong password";
        feedback.className = "strong";
    }
}
