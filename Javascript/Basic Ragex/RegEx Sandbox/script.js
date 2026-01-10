// Access elements
const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

// Function to get selected flags
function getFlags() {
    let flags = '';
    if (caseInsensitiveFlag.checked) flags += 'i';
    if (globalFlag.checked) flags += 'g';
    return flags;
}

// Function to test regex and highlight matches
function testRegex() {
    const pattern = regexPattern.value;
    const flags = getFlags();

    if (!pattern) {
        testResult.textContent = 'no match';
        return;
    }

    let regex;
    try {
        regex = new RegExp(pattern, flags);
    } catch (e) {
        testResult.textContent = 'Invalid regex';
        return;
    }

    const text = stringToTest.textContent;
    const matches = text.match(regex);

    if (!matches) {
        testResult.textContent = 'no match';
        return;
    }

    // Display matched text in #result
    testResult.textContent = matches.join(', ');

    // Highlight matches in the original string
    const highlightedText = text.replace(regex, match => `<span class="highlight">${match}</span>`);
    stringToTest.innerHTML = highlightedText;
}

// Attach click event
testButton.addEventListener('click', testRegex);
