const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4][rR] fr[i1|][e3][nN][dD](?:$|\s)/i;


const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }

    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
    messageInput.value = "";
});