import { Animal1 } from "./Animal1";
export class Dog1 extends Animal1 {
    constructor(name: string) {
        super(name);
    }

    sound(voice: string): void {
        console.log(`${this.name} says: ${voice}`);
    }

    bark(): void {
        this.sound("Gâu gâu!");
    }
}