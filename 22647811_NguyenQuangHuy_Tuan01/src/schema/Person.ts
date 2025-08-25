export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public helloPerson(): string {
        return `Hello ${this.name}, ${this.age} age`;
    }
}
