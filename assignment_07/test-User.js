const [Library, library] = require("./test-Library")
class User extends Library {
    constructor(name, books = [], username) {
        super(name, books)
        this.username = username;
        this.borrowedBook = [
            {
             title:'',
             author:'',
             gener:''   
            }
        ]
    }
    userBorrowBooks(title) {
        if (this.borrowedBook.length > 5) {
            console.warn("full limit for borrow a book");
            return;
        } else {
            const search = library.searchBooks(title)
            console.table(search);
            // if (borrow) {
            //     const [{title,author,gener}] = [{...this.borrowedBook , borrow: borrow.title}]
            //     this.borrowedBook = title,author,gener}
            //     console.log(`${this.name} has borrowed '${title}' successfully.`);
            //     return true;
            // }
        }
}
}
const { name, books } = library;

const user = new User(name, books, "Rong")
user.userBorrowBooks("bro sal");




class Admin extends User { }
class Student extends User { }


//console.log(name , books);