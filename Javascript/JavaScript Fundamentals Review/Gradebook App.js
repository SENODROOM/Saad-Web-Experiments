// Function to calculate the average of an array of scores
function getAverage(scores) {
    let sum = scores.reduce((acc, curr) => acc + curr, 0);
    return sum / scores.length;
}

// Function to get the letter grade for a given score
function getGrade(score) {
    if (score === 100) return "A+";
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Function to check if a grade is passing (anything except "F")
function hasPassingGrade(score) {
    let grade = getGrade(score);
    return grade !== "F";
}

// Function to return the student message with class average, grade, and pass/fail
function studentMsg(scores, studentScore) {
    let average = getAverage(scores);
    let grade = getGrade(studentScore);
    let passMsg = hasPassingGrade(studentScore) ? "passed" : "failed";
    return `Class average: ${average}. Your grade: ${grade}. You ${passMsg} the course.`;
}

// Test cases
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); 
// 71.7

console.log(getGrade(100)); // A+
console.log(getGrade(95));  // A
console.log(getGrade(85));  // B
console.log(getGrade(75));  // C
console.log(getGrade(65));  // D
console.log(getGrade(50));  // F

console.log(hasPassingGrade(85)); // true
console.log(hasPassingGrade(50)); // false

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); 
// "Class average: 71.7. Your grade: F. You failed the course."

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// "Class average: 50.8. Your grade: A+. You passed the course."

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
// "Class average: 48.25. Your grade: B. You passed the course."

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
// "Class average: 45.625. Your grade: C. You passed the course."
