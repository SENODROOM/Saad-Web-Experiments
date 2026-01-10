// Array of book objects
const books = [
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  },
  {
    title: "Fahrenheit 451",
    authorName: "Ray Bradbury",
    releaseYear: 1953
  }
];

// Callback function for sorting by release year
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  return 0;
}

// Filter books released on or before 1950
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// Sort the filtered books in ascending order by releaseYear
filteredBooks.sort(sortByYear);
