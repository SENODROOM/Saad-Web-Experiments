// Declare a global variable count
let count = 0;

// Function to update count based on the card value
function cardCounter(card) {
    // Increase count for low cards 2-6
    if (card >= 2 && card <= 6) {
        count += 1;
    }
    // Do nothing for neutral cards 7-9
    else if (card >= 7 && card <= 9) {
        // count stays the same
    }
    // Decrease count for high cards 10, J, Q, K, A
    else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
        count -= 1;
    }

    // Return string with count and action
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
