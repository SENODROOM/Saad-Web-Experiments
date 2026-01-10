// 1. Create a variable named currentDate and assign it the current date and time
const currentDate = new Date();

// 2. Create a variable currentDateFormat to hold the string with the current date
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// 3. Log the currentDateFormat to the console
console.log(currentDateFormat);

// 4. Function to format date as MM/DD/YYYY
function formatDateMMDDYYYY(date) {
    const month = date.getMonth() + 1; // Months are 0-based
    const day = date.getDate();
    const year = date.getFullYear();
    return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

// 5. Function to format date as Month Day, Year
function formatDateLong(date) {
    // Using toLocaleDateString with en-US locale and options
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

// Example usage:
console.log(formatDateMMDDYYYY(currentDate)); // MM/DD/YYYY format
console.log(formatDateLong(currentDate));     // Month Day, Year format
