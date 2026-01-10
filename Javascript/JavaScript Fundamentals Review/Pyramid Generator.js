function pyramid(pattern, rows, upsideDown) {
    let result = "\n"; // Start with a newline

    if (!upsideDown) {
        // Vertex facing upwards
        for (let i = 0; i < rows; i++) {
            let numChars = 2 * i + 1; // Number of pattern characters in the row
            let numSpaces = rows - i - 1; // Leading spaces to center the row
            result += " ".repeat(numSpaces) + pattern.repeat(numChars) + "\n";
        }
    } else {
        // Vertex facing downwards
        for (let i = 0; i < rows; i++) {
            let numChars = 2 * (rows - i - 1) + 1; // Number of pattern characters
            let numSpaces = i; // Leading spaces increase each row
            result += " ".repeat(numSpaces) + pattern.repeat(numChars) + "\n";
        }
    }

    return result;
}

// Test cases
console.log(pyramid("o", 4, false));
/*
   o
  ooo
 ooooo
ooooooo
*/

console.log(pyramid("p", 5, true));
/*
ppppppppp
 ppppppp
  ppppp
   ppp
    p
*/
