var libraryName = "RUPP";
var totalBooks;
var isOpen;
var Books = [
    {
        title: "The acts",
        author: "tomas",
        publishedYear: 2000
    },
    {
        title: "Another Book",
        author: "another author",
        publishedYear: 2022
    },
    {
        title: "Third Book",
        author: "third author",
        publishedYear: 2010
    }
];
function displayBooks(book) {
    return book.map(function (book) { return book.title + "\n" + book.author + "\n" + book.publishedYear; });
}
console.log(displayBooks(Books));
