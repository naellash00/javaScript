const books = [];

//add a new book 
function addBook(bookID, bookTitle, author, bookPrice, quantity) {
  const newBook = [bookID, bookTitle, author, bookPrice, quantity];
  books.push(newBook);
}

//delete a book
function deleteBook(bookIDToDelete) {
  const indexToDelete = books.findIndex(book => book[0] === bookIDToDelete);

  if (indexToDelete !== -1) 
    books.splice(indexToDelete, 1);
}

//show all books
function showBooks() {
  if (books.length === 0) {
    console.log("No books available.");
  } else {
    console.log("Book List:");
    for (const book of books) {
      console.log(`ID: ${book[0]}, Title: ${book[1]}, Author: ${book[2]}, Quantity: ${book[4]}`);
    }
  }
}

//sell a book
function sellBook(bookTitle, quantity) {
    const bookIndex = books.findIndex(book => book[1] === bookTitle);
  
    if (bookIndex !== -1) {
      const availableQuantity = parseInt(books[bookIndex][4], 10);
  
      if (availableQuantity >= quantity) {
        // Update the book quantity
        books[bookIndex][4] = (availableQuantity - quantity).toString();
        console.log(`Sold ${quantity} copies of "${bookTitle}".`);
      } else {
        console.log(`Insufficient stock of "${bookTitle}".`);
      }
    } else {
      console.log("Book not found!");
    }
  }

addBook("001", "start with why", "simon sinek", "80", "13");
addBook("002", "zero to one", "peter thiel", "45", "12");
addBook("003", "you dont know JS", "kyle simpson", "39.9", "9");
showBooks();

sellBook("start with why", 13);
showBooks();
