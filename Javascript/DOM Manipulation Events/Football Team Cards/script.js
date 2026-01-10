// Step 1: Create the footballTeam object
const footballTeam = {
  team: "Dream FC",
  year: 2026,
  headCoach: "Alex Ferguson",
  players: [
    { name: "Lionel Messi", position: "forward", isCaptain: true },
    { name: "Kevin De Bruyne", position: "midfielder", isCaptain: false },
    { name: "Virgil van Dijk", position: "defender", isCaptain: false },
    { name: "Manuel Neuer", position: "goalkeeper", isCaptain: false },
    { name: "Neymar Jr", position: "forward", isCaptain: false },
    { name: "Luka Modrić", position: "midfielder", isCaptain: false }
  ]
};

// Step 2: Select HTML elements
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");
const playerCardsEl = document.getElementById("player-cards");
const selectEl = document.getElementById("players");

// Step 3: Display team info
teamEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;
headCoachEl.textContent = footballTeam.headCoach;

// Step 4: Function to render player cards
function renderPlayers(players) {
  playerCardsEl.innerHTML = players
    .map(player => {
      const captainText = player.isCaptain ? "(Captain) " : "";
      return `
        <div class="player-card">
          <h2>${captainText}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join(""); // join to remove commas between cards
}

// Step 5: Initial render (all players)
renderPlayers(footballTeam.players);

// Step 6: Filter players based on dropdown
selectEl.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;

  if (selectedPosition === "all") {
    renderPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(player => player.position === selectedPosition);
    renderPlayers(filteredPlayers);
  }
});
