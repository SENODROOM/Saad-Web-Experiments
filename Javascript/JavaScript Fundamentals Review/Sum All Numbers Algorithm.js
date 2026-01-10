function sumAll(arr) {
    // Find the lower and upper bounds
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;

    // Sum all numbers from min to max (inclusive)
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

// Test examples
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
