const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    let text = input.value;

    // Check if input is empty
    if (!text) {
        alert("Please input a value");
        return;
    }

    // Remove all non-alphanumeric characters and convert to lowercase
    const cleaned = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');

    // Display result
    if (cleaned === reversed) {
        result.textContent = `${text} is a palindrome.`;
    } else {
        result.textContent = `${text} is not a palindrome.`;
    }
});
