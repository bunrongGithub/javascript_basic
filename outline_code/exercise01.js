class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBookByTitle(title){
        this.books = this.books
                .filter(book => book.title !== title);
    }
    removeBookByISBN(isbn){
        this.books = this.books
                .filter( book => book.isbn !== isbn);
    }
    searchBooks(query){
        query = query.toLowerCase();
        return this.books.filter( book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)||
                book.gener.toLowerCase().includes(query)
        );
    }
    displayAvailableBook(){
        return this.books.filter( book => book.available);
    }
    borrowBook(title){
        let book = this.books.filter( book => book.title === title);
        if(book && book.available){
            book.available = false;
            return true;
        }
    }
    returnBook(title){
        let book = this.books.find( book => book.title === title);
        if(book && !book.available){
            book.available = true;
            return true;
        }
        return false;
    }
}


class Book{
    constructor(title,author,gener,available = true){
        this.title = title;
        this.author = author;
        this.gener = gener;
        this.available = available;
    }
}
class User extends Library{
    constructor(library , username){
        super(library)
        this.username = username;
        this.borrowedBooks = [];
    }
    borrowBook(title){
        let bookTitle = this.borrowBook(title)
        if(bookTitle){
            this.borrowedBooks.push(title);
            console.log(`${this.name} has borrowed '${title}' successfully.`);
            return true;
        }else {
            console.log(`Sorry, '${title}' is not available.`);
            return false;
          }
    }
}
const library = new Library("Books Store");
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"));
library.addBook(new Book("1984", "George Orwell", "Dystopian"));
library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction"));
console.log(library.displayAvailableBook());
const user = new User(library.name , "Jonh Doe");
user.borrowBook("The Hobbit")
console.log(user.borrowedBooks)