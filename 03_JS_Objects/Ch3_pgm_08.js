// Using dot notation to access property values

var book;

book = {
  title     : "The Hobbit",
	author    : "J. R. R. Tolkien",
	published : 1937
};

console.log(book.title);
console.log(book.author);



/* Further Adventures
 *
 * 1) Log the published property to the console.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console.
 *
 * 4) In the console tab, at the prompt,
 *    type in book.title and press Enter.
 *    Once the program is run, object properties
 *    are available interactively via the console.
 *
 */



var book;

book = {
  title     : "The Hobbit",
  author    : "J. R. R. Tolkien",
  published : 1937
};

console.log(book.title);    // Logs the title property of the book object
console.log(book.author);   // Logs the author property of the book object

// Further Adventures
// 1) Log the published property to the console.
console.log(book.published);    // Logs the published property of the book object

// 2) Add a second book.
var secondBook = {
  title     : "Harry Potter and the Philosopher's Stone",
  author    : "J.K. Rowling",
  published : 1997
};
