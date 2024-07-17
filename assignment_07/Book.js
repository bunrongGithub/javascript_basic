class Book{
    constructor(title,author,gener,available = true){
        this.title = title;
        this.author = author;
        this.gener = gener;
        this.available = available;
    }
}
module.exports = Book;