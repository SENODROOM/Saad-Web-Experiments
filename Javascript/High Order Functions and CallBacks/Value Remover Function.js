function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}
