function findElement(arr, func) {
  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element passes the test function
    if (func(arr[i])) {
      return arr[i]; // Return the first element that passes the test
    }
  }
  
  // If no element passes the test, return undefined
  return undefined;
}

// Example usage:
// console.log(findElement([1, 3, 5, 8], num => num % 2 === 0)); // 8
// console.log(findElement([1, 3, 5], num => num % 2 === 0));    // undefined
// console.log(findElement([1, 2, 3, 4], num => num > 2));       // 3
// console.log(findElement(["hello", "world", "javascript"], str => str.length > 5)); // "javascript"
