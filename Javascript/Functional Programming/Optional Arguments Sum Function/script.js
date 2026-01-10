function addTogether() {
  const [first, second] = arguments;

  const isNumber = (num) => typeof num === "number";

  // First argument must be a number
  if (!isNumber(first)) return undefined;

  // If there is a second argument, it must also be a number
  if (arguments.length === 2) {
    return isNumber(second) ? first + second : undefined;
  }

  // If only one argument, return a function for currying
  return function(secondArg) {
    return isNumber(secondArg) ? first + secondArg : undefined;
  };
}

// ✅ Testing all cases
console.log(addTogether(2, 3));             // 5
console.log(addTogether(23.4, 30));         // 53.4
console.log(addTogether("2", 3));           // undefined
console.log(addTogether(5, undefined));     // undefined
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(typeof addTogether(5));         // function
console.log(addTogether(5)(7));             // 12
console.log(addTogether(2)([3]));           // undefined
console.log(addTogether(2, "3"));           // undefined
