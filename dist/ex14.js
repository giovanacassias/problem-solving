"use strict";
/* EX 14 - SOMA DOS ELEMENTOS
Considere a mesma matriz unidimensional, não ordenada. Retorne recursivamente soma dos elementos. */
Object.defineProperty(exports, "__esModule", { value: true });
class Soma {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    //get() e set()
    somaElementos() {
        return this.somaElementosAux(this.array, this.index);
    }
    somaElementosAux(array, index) {
        if (index == array.length)
            return 0;
        return array[index] + this.somaElementosAux(array, index + 1);
    }
}
exports.default = Soma;
