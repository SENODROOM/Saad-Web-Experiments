function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Compare ASCII codes of current and next letter
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      // Return the missing letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // If no missing letter, return undefined
  return undefined;
}

// Test cases
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("bcdf")); // "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
