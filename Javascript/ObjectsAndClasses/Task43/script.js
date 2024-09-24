function book( title, author, publisher, year,genre){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.genre = genre;
    this.describe = function(){
        return `${title} - ${author} (${year}).`;
    }
    this.displayGenre = function(){
        return `genre : ${genre}`;
    }
}

let classicBook = new book("Pride and Prejudice", "Jane Austen", "T. Egerton", 1813, "Classic");
let sciFiBook = new book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction");

console.log(classicBook);
console.log(classicBook.describe());
console.log(classicBook.displayGenre());

console.log(sciFiBook);
console.log(sciFiBook.describe());
console.log(sciFiBook.displayGenre());


