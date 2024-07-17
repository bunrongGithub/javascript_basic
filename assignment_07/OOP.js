class Book {
  constructor(title, author, genre, available = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBookByTitle(title) {
    this.books = this.books.filter(book => book.title !== title);
  }
  removeBookByISBN(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }
  searchBooks(query) {
    query = query.toLowerCase();
    return this.books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  }
  displayAvailableBooks() {
    return this.books.filter(book => book.available);
  }
  borrowBook(title) {
    let book = this.books.find(book => book.title === title);
    if (book && book.available) {
      book.available = false;
      return true;
    }
    return false;
  }
  returnBook(title) {
    let book = this.books.find(book => book.title === title);
    if (book && !book.available) {
      book.available = true;
      return true;
    }
    return false;
  }
}
class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  borrowBook(library, title) {
    if (this.borrowedBooks.length >= 5) {
      console.log("You have reached the maximum limit of borrowed books.");
      return false;
    }
    let borrowed = library.borrowBook(title);
    if (borrowed) {
      this.borrowedBooks.push(title);
      console.log(`${this.name} has borrowed '${title}' successfully.`);
      return true;
    } else {
      console.log(`Sorry, '${title}' is not available.`);
      return false;
    }
  }

  returnBook(library, title) {
    let returned = library.returnBook(title);
    if (returned) {
      this.borrowedBooks = this.borrowedBooks.filter(book => book !== title);
      console.log(`${this.name} has returned '${title}' successfully.`);
      return true;
    } else {
      console.log(`You haven't borrowed '${title}'.`);
      return false;
    }
  }
  viewBorrowedBooks() {
    console.log(`${this.name}'s borrowed books:`);
    this.borrowedBooks.forEach(book => console.log(`- ${book}`));
  }
}
let library = new Library("City Library");

library.addBook(new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"));
library.addBook(new Book("1984", "George Orwell", "Dystopian"));
library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction"));

console.log("Available books:");
console.log(library.displayAvailableBooks());
let user1 = new User("Alice");
user1.borrowBook(library, "The Hobbit");
user1.borrowBook(library, "1984");
user1.viewBorrowedBooks();

user1.returnBook(library, "The Hobbit");
user1.viewBorrowedBooks();

class Admin extends User {
}

class Student extends User {
  borrowBook(library, title) {
    if (this.borrowedBooks.length >= 5) {
      console.log("As a student, you can only borrow up to 5 books.");
      return false;
    }
    return super.borrowBook(library, title);
  }
}

