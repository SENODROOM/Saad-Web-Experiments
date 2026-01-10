// 1. Create an array named questions with at least five question objects
const questions = [
    {
        category: "Science",
        question: "What planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        category: "Geography",
        question: "Which is the largest ocean on Earth?",
        choices: ["Atlantic", "Indian", "Pacific"],
        answer: "Pacific"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        category: "Math",
        question: "What is the square root of 64?",
        choices: ["6", "8", "10"],
        answer: "8"
    },
    {
        category: "Literature",
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

// 2. Function to get a random question from the array
function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

// 3. Function to get a random choice from the available choices
function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

// 4. Function to check the result of the computer's choice
function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}

// Example of running the quiz
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Question:", randomQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
