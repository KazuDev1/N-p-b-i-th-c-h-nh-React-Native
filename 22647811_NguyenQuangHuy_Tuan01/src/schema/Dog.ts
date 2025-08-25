import type { Animal } from './Animal.js';

export class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sound(voice: string): void {
        console.log(`${this.name} says: ${voice}`);
    }
}
