function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    // Slice from i to i + size and push it into result
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Test cases
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0,1,2],[3,4,5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [[0,1],[2,3],[4,5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0,1,2,3],[4,5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [[0,1,2],[3,4,5],[6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0,1,2,3],[4,5,6,7],[8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[0,1],[2,3],[4,5],[6,7],[8]]
