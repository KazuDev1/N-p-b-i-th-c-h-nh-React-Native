export class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }

    get getT(): T {
        return this.value;
    }

    set setT(value: T) {
        this.value = value;
    }


}