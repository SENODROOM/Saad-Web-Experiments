function repeatStringNumTimes(str, num) {
  let result = "";
  if (num <= 0) return result;
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

// Test examples
console.log(repeatStringNumTimes("*", 3));    // ***
console.log(repeatStringNumTimes("abc", 3));  // abcabcabc
console.log(repeatStringNumTimes("abc", -2)); // ""
