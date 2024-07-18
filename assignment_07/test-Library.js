const  Book =  require("./test-Book")
class Library{
    constructor(name , books = []){
        this.name = name;
        this.books = books;
    }
    addingBooks(book){
        this.books.push(book);
    }
    removeBookByTitleOrISBN(query){
        return this.books.filter((item ,idx) => (item.title !== query.trim()) && (item?.isbn !== query.trim()))
    }
    searchBooks(query){
        const searchQuery = query.toLowerCase();
        const search = this.books.filter((item) => (item.title.includes(searchQuery)) || 
            (item.author.includes(searchQuery)) ||
            (item.gener.includes(searchQuery)))
        if(search.length > 0){
            return search;
        }else{
            return search[0] = [{message:"not found!"}]
        }
    }
    displayListBook(){
        return this.books.filter( item => item.available)
    }
    borrowBook(title){
        const checkBook = this.searchBooks(title)
        if(checkBook[0] && checkBook[0].available){
            checkBook[0].available = false;
            return true;
        }
        return;
    }
    returningBook(title){
        const findBook = this.searchBooks(title);
        if(!findBook[0]){
            console.warn('This book are not found in this library!');
            return;
        }
        if(findBook[0] && !findBook.available){
            findBook[0].available = true;
            return true;
        }return;
    }
}
/** Create new instanct of LIBRARY name */
const library = new Library("The Books Store")

/** We added a book to Library "The Books Store" */
library.addingBooks(new Book("The world" , "bro sal" ,"book",true))
library.addingBooks(new Book("Supper Hero" , "bro sok" ,"book",true))

/** Remove a Book by title */
//library.removeBookByTitleOrISBN("c jab chhay")
//console.log(library.removeBookByTitleOrISBN("c jab chhay"))

/** Find a Book by title or author or genre */
// const search = library.searchBooks("bro sal")

// console.table(search);

/** We want to borrowing a book by title */
//const borrowed = library.borrowBook("c jab chhay")
//console.log(borrowed);

/** After we borrowed then returning by title */
//const returned = library.returningBook("c jab chhay")

//console.table(library.displayListBook())

module.exports = [Library , library];

