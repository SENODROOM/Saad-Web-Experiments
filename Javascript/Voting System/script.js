// Initialize the poll as a Map
const poll = new Map();

// Function to add an option to the poll
function addOption(option) {
    if (!option || option.trim() === "") {
        return "Option cannot be empty.";
    }
    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
}

// Function to vote for an option
function vote(option, voterId) {
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }
    const voters = poll.get(option);
    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
}

// Function to display poll results
function displayResults() {
    let result = "Poll Results:\n";
    for (const [option, voters] of poll) {
        result += `${option}: ${voters.size} votes\n`;
    }
    return result.trim(); // Remove trailing newline
}

// --- Add at least three options ---
addOption("Turkey");
addOption("Morocco");
addOption("Egypt");

// --- Cast at least three votes ---
vote("Turkey", "traveler1");
vote("Morocco", "traveler2");
vote("Turkey", "traveler3");

// Example usage:
// console.log(displayResults());
