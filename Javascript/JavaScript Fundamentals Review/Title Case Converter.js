function titleCase(str) {
    // Convert the entire string to lowercase first
    let lowerStr = str.toLowerCase();
    
    // Split the string into words
    let words = lowerStr.split(" ");
    
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    
    // Join the words back into a single string
    return words.join(" ");
}

// Test cases
console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // "Short And Stout"
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // "Here Is My Handle Here Is My Spout"
console.log(titleCase("javaScript is fun")); // "Javascript Is Fun"
