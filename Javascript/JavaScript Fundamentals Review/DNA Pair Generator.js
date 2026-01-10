function pairElement(str) {
    const pairs = { "A": "T", "T": "A", "C": "G", "G": "C" };
    const result = [];
    
    for (let char of str) {
        result.push([char, pairs[char]]);
    }
    
    return result;
}

// Test examples
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
