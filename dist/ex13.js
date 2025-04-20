"use strict";
/* EX 13 - MAIOR ELEMENTO
Considere a mesma matriz unidimensional, não ordenada. Retorne recursivamente o maior elemento. */
Object.defineProperty(exports, "__esModule", { value: true });
class Elemento {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    maiorElemento() {
        return this.maiorElementoAux(this.array, this.index);
    }
    maiorElementoAux(array, index) {
        if (index == array.length) {
            return array[index];
        }
        if (array[index] > array[index + 1]) {
            return index;
        }
        return this.maiorElementoAux(array, index + 1);
    }
}
exports.default = Elemento;
