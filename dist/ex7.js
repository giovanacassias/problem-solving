"use strict";
//EXERCÍCIO 7 - POTÊNCIA
//Dados a base e um expoente positivo, retorne base expoente. Assuma o valor de n como base.
Object.defineProperty(exports, "__esModule", { value: true });
class Math {
    potencia(n, expo) {
        if (expo == 1)
            return n;
        return n * this.potencia(n, expo - 1);
    }
    fibonacci(n) {
        if (n == 1)
            return 0;
        if (n == 2)
            return 1;
        else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }
    tribonacci(n) {
        if (n == 1)
            return 0;
        if (n == 2)
            return 1;
        if (n == 3)
            return 1;
        else {
            return (this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3));
        }
    }
    tetranacci(n) {
        if (n == 1)
            return 0;
        if (n == 2)
            return 1;
        if (n == 3)
            return 1;
        if (n == 4)
            return 2;
        else {
            //this.fibonacci(n) + this.fibonacci(n);
            return (this.tetranacci(n - 1) +
                this.tetranacci(n - 2) +
                this.tetranacci(n - 3) +
                this.tetranacci(n - 4));
        }
    }
}
exports.default = Math;
