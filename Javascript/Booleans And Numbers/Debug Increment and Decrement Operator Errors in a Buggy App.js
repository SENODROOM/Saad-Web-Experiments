// let counter = 10;
// console.log(`Counter is currently ${counter}`);

// let updatedCounter = counter++;
// console.log(`Counter is now ${updatedCounter}`);

// let score = 8;
// console.log(`Score is currently ${score}`);

// let finalScore = ++score;
// console.log(`Score is still ${finalScore}`);

// let coins = 3;
// console.log(`Coins is currently ${coins}`);

// let updatedCoins = coins--;
// console.log(`Coins is now ${updatedCoins}`);

// let health = 7;
// console.log(`Health is currently ${health}`);

// let newHealth = --health;
// console.log(`Health is still ${newHealth}`);

// Counter example
let counter = 10;
console.log(`Counter is currently ${counter}`);

// Prefix increment: increases first, then returns value
let updatedCounter = ++counter;  // 10 -> 11
console.log(`Counter is now ${updatedCounter}`);

// Score example
let score = 7;
console.log(`Score is currently ${score}`);

// Postfix increment: returns value first, then increases
let finalScore = score++;  // finalScore = 7, then score becomes 8
console.log(`Score is now ${score}`); // Optional log if you want to see updated score
console.log(`Score used for finalScore = ${++finalScore}`);

// Coins example
let coins = 3;
console.log(`Coins is currently ${coins}`);

// Prefix decrement: decreases first, then returns value
let updatedCoins = --coins;  // 3 -> 2
console.log(`Coins is now ${updatedCoins}`);

// Health example
let health = 7;
console.log(`Health is currently ${health}`);

// Postfix decrement: returns value first, then decreases
let newHealth = health--;  // newHealth = 7, then health becomes 6
console.log(`Health used for newHealth = ${newHealth}`);
console.log(`Health after decrement = ${health}`); // Optional log
