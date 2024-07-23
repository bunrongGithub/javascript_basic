let libraryName: string = "RUPP";
let totalBooks: number;
let isOpen: boolean;

interface BookProps {
    title: string;
    author: string;
    publishedYear: number;
}
let Books: Array<BookProps> = [
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
]
function displayBooks(book: Array<BookProps>){
    return book.map((book)=>book.title + "\n" + book.author + "\n" + book.publishedYear);
}
console.log(displayBooks(Books))
