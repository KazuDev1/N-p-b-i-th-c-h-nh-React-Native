export class Book {
    title: string;
    author: string;
    year: number;
    // overload signatures
    constructor();
    constructor(title: string, author: string, year: number)

    constructor(title?: string, author?: string, year?: number) {
        this.title = title ?? "";
        this.author = author ?? "";
        this.year = year ?? 0;
    }

    InforYourCar(): string {
        return `Book is title: ${this.title}, author: ${this.author}, year: ${this.year}`;
    }
}

