export class Stack<T> {
    private items: T[] = [];


    get getItems() {
        return this.items;
    }

    set setItems(items: []) {
        this.items = items;
    }

    public push(item: T): boolean {
        if (item == null) {
            return false;
        }
        this.items.push(item)
        return true;
    }

    public pop(): boolean {
        this.items.pop()
        return true;
    }

    public peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : undefined;
    }

    public isEmpty(): boolean {
        return this.items.length <= 0;
    }

}