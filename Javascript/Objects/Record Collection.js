// Record collection object
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Function to update the records
function updateRecords(records, id, prop, value) {
  if (value === "") {
    // If value is empty, delete the property
    delete records[id][prop];
  } else if (prop === "tracks") {
    // If prop is "tracks" and value is not empty
    if (!records[id].hasOwnProperty("tracks")) {
      // If "tracks" doesn't exist, create an empty array
      records[id].tracks = [];
    }
    // Add the value to the tracks array
    records[id].tracks.push(value);
  } else {
    // If prop isn't "tracks", just assign the value
    records[id][prop] = value;
  }

  return records;
}

// Example test cases
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

console.log(recordCollection);
