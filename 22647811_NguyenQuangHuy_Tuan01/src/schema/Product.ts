export class Product {
    name: string;
    price: number;

    constructor(name?: string, price?: number) {
        this.name = name ?? "";
        this.price = price ?? 0;
    }

    get productName(): string {
        return this.name;
    }

    get productPrice(): number {
        return this.price;
    }

    set productName(name: string) {
        this.name = name;
    }

    set productPrice(price: number) {
        this.price = price;
    }
}

