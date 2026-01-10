function mutation(arr) {
  // Convert both strings to lowercase to ignore case
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  // Check if every character in second string exists in the first string
  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["voodoo", "no"])); // false
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
console.log(mutation(["Noel", "Ole"])); // true
