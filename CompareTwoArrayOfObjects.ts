
interface IPersonModel {
    name: string;
}

const obj1: IPersonModel[] = [{ name: "shubham"}, { name: "ayush" }]; // Array 1
const obj2: IPersonModel[] = [{ name: "shubham"}, { name: "ayush" }]; // Array 2
const obj3: IPersonModel[] = [{ name: "shubham"}, { name: "rohan" }]; // Array 3

// Comparing Arrays Of Objects in Javascript with Typescript Generics
const isArraySame = <T, U extends keyof T>(prevProps: T[], nextProps: T[], key: U): boolean => {
    if (prevProps.length !== nextProps.length) {
        return false;
    } 

    for (const [index, value] of prevProps.entries()) {
        if (value[key] !== nextProps[index][key]) {
            return false;
        }
    }

    return true;
}

const result1 = isArraySame<IPersonModel, "name">(obj1, obj2, "name");
const result2 = isArraySame<IPersonModel, "name">(obj1, obj3, "name");

console.log(result1); // True
console.log(result2); // False