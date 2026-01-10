// Function to generate a random password
function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        // Pick a random character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Generate a password of desired length (e.g., 12 characters)
const password = generatePassword(12);

// Log the generated password
console.log("Generated password: " + password);
