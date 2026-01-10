// 1. Declare lunches array
let lunches = [];

// 2. Add lunch to end
function addLunchToEnd(arr, lunchItem) {
    arr.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return arr;
}

// 3. Add lunch to start
function addLunchToStart(arr, lunchItem) {
    arr.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return arr;
}

// 4. Remove last lunch
function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }
    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return arr;
}

// 5. Remove first lunch
function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }
    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
    return arr;
}

// 6. Get random lunch
function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
        return;
    }
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}

// 7. Show lunch menu
function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
        return;
    }
    console.log(`Menu items: ${arr.join(", ")}`);
}
