function myReplace(sentence, oldWord, newWord) {
    // Check if the first character of oldWord is uppercase
    if (oldWord[0] === oldWord[0].toUpperCase()) {
        // Capitalize the first character of newWord
        newWord = newWord[0].toUpperCase() + newWord.slice(1);
    } else {
        // Make sure newWord starts lowercase if oldWord starts lowercase
        newWord = newWord[0].toLowerCase() + newWord.slice(1);
    }
    
    // Replace oldWord with newWord in the sentence
    return sentence.replace(oldWord, newWord);
}

// Test cases
console.log(myReplace("Let us go to the store", "store", "mall")); // Let us go to the mall
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down")); // I think we should look down there
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // This has a spelling error
console.log(myReplace("His name is Tom", "Tom", "john")); // His name is John
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // Let us get back to more Algorithms
