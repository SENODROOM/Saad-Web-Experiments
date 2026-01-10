function translatePigLatin(str) {
    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the first character is a vowel
    if (vowels.includes(str[0].toLowerCase())) {
        return str + 'way';
    }

    // Find the index of the first vowel in the word
    let vowelIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            vowelIndex = i;
            break;
        }
    }

    // If there are no vowels
    if (vowelIndex === -1) {
        return str + 'ay';
    }

    // Move the consonant cluster to the end and add 'ay'
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
}

// Test examples
console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove"));      // oveglay
console.log(translatePigLatin("algorithm"));  // algorithmway
console.log(translatePigLatin("eight"));      // eightway
console.log(translatePigLatin("schwartz"));   // artzschway
console.log(translatePigLatin("rhythm"));     // rhythmay
