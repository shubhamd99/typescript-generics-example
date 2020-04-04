// Generic Interface
export interface LibraryCollection<T> {
    _items: T[];
    addItemToCatalog(newItem: T): void;
    removeItemFromCatalog(oldItem: T): void;
}

let titleCollection: LibraryCollection<string> = {
    _items: ["Shubham", "Nayan"],
    addItemToCatalog: s => console.log(`Added item ${s}`),
    removeItemFromCatalog: s => console.log(`Removed item ${s}`),
};

// Add Number
interface Addition<T> {
    add(a: T, b: T): T;
}

class AddNumber<T> implements Addition<T> {
    add(a: T, b: T): T {
        // Not correct
        return a + b;
    }
}

let myNumberAdditon: AddNumber<number> = new AddNumber<number>();
myNumberAdditon.add(2, 3); // 5


