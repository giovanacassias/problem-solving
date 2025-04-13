"use strict";
//EX 6 - FATORIAL
//FATORIAL – Dado um inteiro n, retorne n!.
Object.defineProperty(exports, "__esModule", { value: true });
class Fatorial {
    fatorial(n) {
        if (n == 1)
            return n;
        return n * this.fatorial(n - 1);
    }
}
exports.default = Fatorial;
