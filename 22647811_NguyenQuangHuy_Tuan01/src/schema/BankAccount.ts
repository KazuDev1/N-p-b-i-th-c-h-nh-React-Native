export class BankAccount {
    balance: number;
    readonly ownerName: string;

    constructor(balance?: number, ownerName?: string) {
        this.balance = balance ?? 0;
        this.ownerName = ownerName ?? "";
    }

    public deposit(money: number): void {
        this.balance += money;
        console.log("You are deposit successful!")
    }

    public withdraw(money: number): void {
        this.balance -= money;
        console.log("You are withdraw successful!")
    }
}



