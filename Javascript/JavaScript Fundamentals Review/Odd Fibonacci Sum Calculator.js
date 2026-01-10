function sumFibs(num) {
  let a = 0; // first Fibonacci number
  let b = 1; // second Fibonacci number
  let sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b; // add only odd Fibonacci numbers
    }
    let next = a + b; // generate next Fibonacci number
    a = b;
    b = next;
  }

  return sum;
}

// Test examples
console.log(sumFibs(1)); // 1
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025)); // 135721
