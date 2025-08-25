export class Car {
    brand: string;
    model: string;
    year: string;

    constructor(brand: string, model: string, year: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    inforYourCar(): string {
        return `Your car is brand: ${this.brand}, model: ${this.model}, year: ${this.year}`;
    }
}

