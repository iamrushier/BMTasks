// Task 2: Working with Objects
//  * Create an object bookLibrary to manage a collection of books.
//  * The object should have the following properties and methods:
//     * books: An array of book objects (each book has title, author, and yearPublished).
//     * addBook(book): Adds a new book to the collection.
//     * getBooksByAuthor(author): Returns all books by a given author.
//     * removeBook(title): Removes a book by title.
//     * Add a method getAllBooks to return a list of all book titles.

const bookLibrary = {
  books: [
    {
      title: "Programming Python",
      author: "Mark",
      yearPublished: 2007,
    },
    {
      title: "The Discovery of India",
      author: "Nehru",
      yearPublished: 1946,
    },
    {
      title: "Wings of Fire",
      author: "Kalam",
      yearPublished: 1999,
    },
    {
      title: "Let us C",
      author: "Kanetkar",
      yearPublished: 1999,
    },
    {
      title: "Let us Python",
      author: "Kanetkar",
      yearPublished: 2005,
    },
  ],
  addBook: function (book) {
    this.books.push(book);
  },
  getBooksByAuthor: function (author) {
    return this.books.filter((book) => book.author === author);
  },
  removeBook: function (title) {
    this.books = this.books.filter((book) => book.title !== title);
  },
  getAllBooks: function () {
    return this.books.map((book) => book.title);
  },
};
// console.log(bookLibrary.books);
console.log(bookLibrary.getAllBooks());
console.log(bookLibrary.getBooksByAuthor("Kanetkar"));
bookLibrary.removeBook("Let us C");
console.log(bookLibrary.getAllBooks());
bookLibrary.addBook({
  title: "Let us C",
  author: "Kanetkar",
  yearPublished: 1999,
});
console.log(bookLibrary.getBooksByAuthor("Kanetkar"));
