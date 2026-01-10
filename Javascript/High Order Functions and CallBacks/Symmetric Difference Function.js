function diffArray(arr1, arr2) {
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
  
  return onlyInArr1.concat(onlyInArr2);
}
