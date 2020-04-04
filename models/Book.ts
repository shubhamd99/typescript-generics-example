export class Book {
    private _name: string;
    private _year: string;
    private _price: number;

    public constructor(name: string, year: string, price: number) {
        this._name = name;
        this._year = year;
        this._price = price;
    }
}