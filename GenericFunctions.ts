import { Book } from "./models/Book";
import { Customer } from "./models/Customer";

const someBook = new Book("Old Lady", "$150", 2019);
const customer = new Customer("Shubham", "Dhage");

function getItemFromDB<T>(item: T): T {
    return item;
}

function getCustomerFromDB<T>(customer: T): T {
    return customer;
}

// single type
function checkOut<T>(item: T): T {
    const availableItem: T = getItemFromDB(item);
 
    if (availableItem) {
        // check out item for cutsomer
    }

    return item;
}

checkOut<Book>(someBook);

// multiple types
function checkOutMultiple<T, V>(item: T, customer: V): T {
    const availableItem: T = getItemFromDB<T>(item);
    const activeCustomer: V = getCustomerFromDB<V>(customer);
 
    if (availableItem && activeCustomer) {
        // check out item for cutsomer
    }

    return item;
}

checkOutMultiple<Book, Customer>(someBook, customer);


// SHorten Array
function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
    return data.splice(amountToShorten, data.length);
}

let stringArray: string[] = ["Nayan", "Shubham", "Priyanka", "Sharath", "Rubini"];
shortenArray<string>(stringArray, 2); // T --> string