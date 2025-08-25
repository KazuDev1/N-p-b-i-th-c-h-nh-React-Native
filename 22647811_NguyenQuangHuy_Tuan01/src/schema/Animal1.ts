export abstract class Animal1 {
    protected name: string;

    constructor(name?: string) {
        this.name = name ?? "";
    }

    abstract sound(voice: string): void;
}