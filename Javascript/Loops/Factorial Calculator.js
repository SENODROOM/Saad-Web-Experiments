// Declare a number between 1 and 20
let num = 5;

// Create the factorial calculator function
function factorialCalculator(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

// Call the function and store the result
let factorial = factorialCalculator(num);

// Create the result message
let resultMsg = "Factorial of " + num + " is " + factorial;

// Output the result
console.log(resultMsg);
