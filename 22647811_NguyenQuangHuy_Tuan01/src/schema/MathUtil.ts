export class MathUtil {
    private constructor() {

    }

    public static add(a: number, b: number): number {
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }

    public static multiply(a: number, b: number): number {
        return a * b;
    }

    public static devide(a: number, b: number): number {
        if (b === 0) {
            console.log("B not zero");
        }
        return a / b;
    }
}