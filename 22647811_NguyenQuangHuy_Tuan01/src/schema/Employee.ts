export class Employee {
    protected id: string;
    protected name: string;
    protected salary: number;

    constructor(id: string, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get getSalary(): number {
        return this.salary;
    }

    get getId(): string {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }

    set setSalary(salary: number) {
        this.salary = salary;
    }

    set setName(name: string) {
        this.name = name;
    }

}