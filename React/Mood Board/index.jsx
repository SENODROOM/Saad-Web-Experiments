// MoodBoardItem Component
export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
      <img
        className="mood-board-image"
        src={image}
        alt={description}
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

// MoodBoard Component
export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#3498db"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Peaceful Pathway"
        />
        <MoodBoardItem
          color="#2ecc71"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Calm Shore"
        />
        <MoodBoardItem
          color="#e74c3c"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Green Fields"
        />
      </div>
    </div>
  );
}
