"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EXERCÍCIO 7 - POTÊNCIA
//Dados a base e um expoente positivo, retorne base expoente. Assuma o valor de n como base.
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
            //this.fibonacci(n) + this.fibonacci(n);
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }
}
exports.default = Math;
