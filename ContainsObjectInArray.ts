interface IPersonModel {
    name: string;
}

const personObj: IPersonModel = { name: "shubham"}; // Array 1
const personArray1: IPersonModel[] = [{ name: "shubham"}, { name: "ayush" }, { name: "nayan" }]; // Array 2
const personArray2: IPersonModel[] = [{ name: "rohan" }, { name: "nayan" }, { name: "ayush" }]; // Array 3

// Check whether the object is present in the given array or not
const containsObjectInArray = <T, U extends keyof T>(obj: T, list: T[], key: U): boolean => {
    for (const item of list) {
        if (item && item[key] === obj[key]) {
            return true;
        }
    }
    return false;
}

const resultOne = containsObjectInArray<IPersonModel, "name">(personObj, personArray1, "name");
const resultTwo = containsObjectInArray<IPersonModel, "name">(personObj, personArray2, "name");

console.log(resultOne); // True
console.log(resultTwo); // False