function steamrollArray(arr) {
  const result = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      item.forEach(el => flatten(el));
    } else {
      result.push(item);
    }
  }

  arr.forEach(el => flatten(el));
  return result;
}
