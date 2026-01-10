function getIndexToIns(arr, num) {
  // Sort array in ascending order
  arr.sort((a, b) => a - b);

  // Find the lowest index where num should be inserted
  const index = arr.findIndex(value => value >= num);

  // If findIndex returns -1, insert at the end
  return index === -1 ? arr.length : index;
}
