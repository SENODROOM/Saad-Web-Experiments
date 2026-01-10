// Select all emoji buttons at once
const btns = document.querySelectorAll('.emoji-btn');

// Reusable function to update a button's count
function updateCount(button) {
  const countSpan = button.querySelector('.count');
  const countText = countSpan.textContent;
  let currCount = Number(countText.split('/')[0]);

  if (currCount < 10) {
    currCount += 1;
    countSpan.textContent = `${currCount}/10`;
  }
}

// Use forEach to add the same click event listener to each button
btns.forEach((btn) => {
  btn.addEventListener('click', () => updateCount(btn));
});
