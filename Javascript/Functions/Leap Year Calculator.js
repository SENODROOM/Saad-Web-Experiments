// Function to check if a year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}

// Declare a variable for the year to check
let year = 2024;

// Call the function and store the result
let result = isLeapYear(year);

// Output the result to the console
console.log(result);
