function reverseString(str) {
  // Initialize an empty string to hold the reversed result
  let reversed = "";

  // Loop through the original string from the end to the start
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add each character to the reversed string
  }

  return reversed; // Return the reversed string
}

// Example usage:
// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("Howdy")); // "ydwoH"
// console.log(reverseString("Greetings from Earth")); // "htraE morf sgniteerG"
