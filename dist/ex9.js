"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Math {
    tribonacci(n) {
        if (n == 1)
            return 0;
        if (n == 2)
            return 1;
        if (n == 3)
            return 1;
        else {
            //this.fibonacci(n) + this.fibonacci(n);
            return (this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3));
        }
    }
}
exports.default = Math;
