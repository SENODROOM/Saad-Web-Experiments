function largestOfAll(arrays) {
  // Initialize an empty array to hold the largest numbers
  let largestNumbers = [];

  // Loop through each sub-array
  for (let i = 0; i < arrays.length; i++) {
    let subArray = arrays[i];
    let max = subArray[0]; // Start by assuming the first element is the largest

    // Loop through the elements of the sub-array to find the largest
    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > max) {
        max = subArray[j]; // Update max if a larger number is found
      }
    }

    // Add the largest number of this sub-array to the result array
    largestNumbers.push(max);
  }

  return largestNumbers; // Return the array of largest numbers
}

// Example usage:
// console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// Output: [5, 27, 39, 1001]
