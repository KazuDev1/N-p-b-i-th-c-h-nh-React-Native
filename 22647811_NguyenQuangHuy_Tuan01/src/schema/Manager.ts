import { Employee } from "./Employee";

export class Manager extends Employee {
    private teamSize: number;
    constructor(id: string, name: string, salary: number, teamsize: number) {
        super(id, name, salary);
        this.teamSize = teamsize;
    }

    assignTask(task: string): void {
        console.log(`${this.getName} giao nhiệm vụ: ${task} cho đội.`);
    }
}