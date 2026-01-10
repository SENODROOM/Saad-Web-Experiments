function getVowelCount(sentence) {
    const vowels = "aeiou";
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;

    for (const char of sentence) {
        if (punctuations.includes(char)) {
            count++;
        }
    }
    return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    return count;
}

const wordCount = getWordCount("I love freeCodeCamp");

console.log("Word Count: " + wordCount);
// OR
// console.log(`Word Count: ${wordCount}`);
