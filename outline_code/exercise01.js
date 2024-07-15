class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addingBook(book){
        this.books.push(book);
    }
    removeBookByTitle(title){
        this.books = this.books.filter( item => item.title !== title )
    }
    searchBooks(keywords){
        keywords = keywords.toLowerCase();
        return this.books.filter( book => 
            book.title.toLowerCase().includes(keywords) ||
            book.author.toLowerCase().includes(keywords) ||
            book.gener.toLowerCase().includes(keywords)
        );
    }
    displayAvailableBook(){
        this.books.filter( book => book.available )
    }
    borrowBook(title){
        let book = this.books.find( book => book.title === title)
        if(book && !book.available){
            book.available = false;
            return true;
        }
        return false;
    }
    returnBook(title){
        let book = this.books.find( book => book.title = title)
        if(book && !book.available){
            book.available = true;
            return true;
        }
        return false;
    }
}
class Book{
    constructor(title,author,gener,available = true)
    {
        this.title = title;
        this.author = author;
        this.gener = gener;
        this.available = available;
    }
}
class User{
    constructor(name){
        this.name = name;
        this.borrowBooks = [];
    }
    borrowBook(library,title){
        if(this.borrowBook.length >= 5){
            console.log("You have reached the maximum limit of borrowed books.");
            return false;
        }
        let borrowed = library.borrowBook(title)
        if(borrowed){
            this.borrowBooks.push(title)
            console.log(`${this.name} has borrowed '${title}' successfully.`);
            return true;
        }
    }
}