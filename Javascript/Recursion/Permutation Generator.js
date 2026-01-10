function permuteString(str, prefix = "", results = []) {
  // Base case: if the string is empty, push the prefix to results
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Current character
    let currentChar = str[i];

    // Remaining string without the current character
    let remaining = str.slice(0, i) + str.slice(i + 1);

    // Recursive call with updated prefix and remaining string
    permuteString(remaining, prefix + currentChar, results);
  }

  // Return unique results (remove duplicates)
  return [...new Set(results)];
}

// Example usage:
console.log(permuteString("far")); // ["far", "fra", "afr", "arf", "rfa", "raf"]
console.log(permuteString("fcc")); // ["fcc", "cfc", "ccf"]
console.log(permuteString("p"));   // ["p"]
console.log(permuteString(""));    // [""]
console.log(permuteString("walk")); 
