import { Employee } from "./Employee";

export class Developer extends Employee {
    private programmingLanguage: string;

    constructor(id: string, name: string, salary: number, programmingLanguage: string) {
        super(id, name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    work(): void {
        console.log(`${this.getName} is use language: ${this.programmingLanguage}`);
    }
}