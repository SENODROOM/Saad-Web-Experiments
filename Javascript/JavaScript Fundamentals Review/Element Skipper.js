function dropElements(arr, func) {
  let i = 0;
  
  // Loop through array until the function returns true
  while (i < arr.length && !func(arr[i])) {
    i++;
  }
  
  // Return the remaining elements (or empty array if none match)
  return arr.slice(i);
}

// Test examples
console.log(dropElements([1, 2, 3, 4], n => n >= 3)); // [3, 4]
console.log(dropElements([0, 1, 0, 1], n => n === 1)); // [1, 0, 1]
console.log(dropElements([1, 2, 3], n => n > 0)); // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], n => n > 5)); // []
console.log(dropElements([1, 2, 3, 7, 4], n => n > 3)); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], n => n > 2)); // [3, 9, 2]
