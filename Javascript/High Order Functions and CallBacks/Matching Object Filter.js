function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(
      key => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
