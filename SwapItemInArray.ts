const names: string[] = ["Shubham", "Ayush", "Rohan", "Yash"]; // Array

// Swap the items in the given array
const swapItemsInArray = <T>(items: T[], indexA: number, indexB: number): T[] => {
    const itemA: T = items[indexA];
    const clone: T[] = [...items];

    clone[indexA] = clone[indexB];
    clone[indexB] = itemA;

    return clone;
}

const swapArr = swapItemsInArray<string>(names, 2, 3);
console.log(swapArr); // [ 'Shubham', 'Ayush', 'Yash', 'Rohan' ]