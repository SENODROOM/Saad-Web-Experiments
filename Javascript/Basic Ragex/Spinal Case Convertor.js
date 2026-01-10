function spinalCase(str) {
    // Step 1: Insert a space before any uppercase letter that follows a lowercase letter (camelCase)
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Step 2: Replace spaces and underscores with hyphens
    str = str.replace(/[\s_]+/g, '-');

    // Step 3: Convert the string to lowercase
    return str.toLowerCase();
}

// Test examples
console.log(spinalCase("This Is Spinal Tap"));       // "this-is-spinal-tap"
console.log(spinalCase("thisIsSpinalTap"));          // "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show"));   // "the-andy-griffith-show"
console.log(spinalCase("Teletubbies say Eh-oh"));    // "teletubbies-say-eh-oh"
console.log(spinalCase("AllThe-small Things"));      // "all-the-small-things"
