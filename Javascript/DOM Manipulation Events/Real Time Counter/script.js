const textarea = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const MAX_CHARS = 50;

textarea.addEventListener('input', () => {
  let text = textarea.value;

  // Trim text if it exceeds MAX_CHARS
  if (text.length > MAX_CHARS) {
    text = text.slice(0, MAX_CHARS);
    textarea.value = text;
  }

  // Update the character count
  charCount.textContent = `Character Count: ${text.length}/${MAX_CHARS}`;

  // Change text color to red if max reached
  if (text.length >= MAX_CHARS) {
    charCount.style.color = 'red';
  } else {
    charCount.style.color = 'black';
  }
});
