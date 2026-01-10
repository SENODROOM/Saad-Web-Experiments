const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b",
},
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32",
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  },
};

function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

scaryStoryBtn.addEventListener("click", displayStory);
scaryStoryBtn.addEventListener('click', () => displayStory("scary"));
funnyStoryBtn.addEventListener('click', () => displayStory("funny"));
adventureStoryBtn.addEventListener('click', () => displayStory("adventure"));

