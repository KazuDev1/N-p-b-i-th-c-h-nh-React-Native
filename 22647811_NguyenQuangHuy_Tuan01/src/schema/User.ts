export class User {
    private name: string;
    private id: string;

    constructor(name?: string, id?: string) {
        this.name = name ?? "No name";
        this.id = id ?? "";
    }

    get nameUser(): string {
        return this.name;
    }

    get getId(): string {
        return this.id;
    }

    set nameUser(name: string) {
        this.name = name;
    }

}
