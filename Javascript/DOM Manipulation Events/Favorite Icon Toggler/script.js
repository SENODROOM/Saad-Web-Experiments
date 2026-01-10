// Select all favorite buttons
const favoriteButtons = document.querySelectorAll('.favorite-icon');

// Loop through buttons and attach click event
favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Toggle the filled class
        button.classList.toggle('filled');

        // Change heart symbol based on class
        if (button.classList.contains('filled')) {
            button.innerHTML = '&#10084;'; // Filled heart
        } else {
            button.innerHTML = '&#9825;'; // Empty heart
        }
    });
});
