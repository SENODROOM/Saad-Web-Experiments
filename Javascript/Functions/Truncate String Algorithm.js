function truncateString(str, num) {
  // Check if the string length is greater than the given number
  if (str.length > num) {
    // Truncate the string to the specified length and append "..."
    return str.slice(0, num) + "...";
  } else {
    // If the string is shorter or equal, return it unchanged
    return str;
  }
}

// Test cases
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); 
// Output: "A-tisket..."

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); 
// Output: "Peter Piper..."

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); 
// Output: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); 
// Output: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-", 1)); 
// Output: "A..."

console.log(truncateString("Absolutely Longer", 2)); 
// Output: "Ab..."
