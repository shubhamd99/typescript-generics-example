// Last In, First Out
interface DataStructure<T> {
    push(newItem: T): void;
    pop(): T;
}

// Implements Data structure interface
class Stack<T> implements DataStructure<T> {

    items: Array<T> = [];

    push(newItem: T): void {
        this.items.push(newItem);
    }

    pop(): T {
        return this.items.pop();
    }

    peek(): T {
        return this.items[this.items.length - 1];
    }

}

let myNumberStack: Stack<number> = new Stack<number>();

myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);

myNumberStack.pop(); // 3
myNumberStack.peek(); // 2