import { Book } from "./models/Book";
import { Shelf } from "./models/Shelf";

// new class instance (T --> Book parameter)
let bookShelf: Shelf<Book> = new Shelf<Book>();
// let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

bookShelf.addBookToCataog(new Book("Old Lady", "$150", 2019));
// bookShelf.addBookToCataog(new Magazine("Sports", "$200", 2019, "Sunday"));