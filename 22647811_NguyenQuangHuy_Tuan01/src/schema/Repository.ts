export class Repository<T> {
    private items: T[] = [];
    public add(item: T) {
        return this.items.push(item)
    }

    public getAll(): T[] {
        return this.items;
    }
}