"use strict";
/* EX 16 - ESTÁ ORDENADO
Considere a mesma matriz unidimensional, não ordenada. Retorne se a matriz
unidimensional está em ordem crescente. Verifique recursivamente */
Object.defineProperty(exports, "__esModule", { value: true });
class Matriz {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    //get() e set()
    estaOrdenado() {
        let res = this.estaOrdenadoAux(this.array, this.index);
        if (res == 0) {
            console.log(`A matriz está ordenada`);
        }
        else if (res == 1) {
            console.log(`A matriz NÃO está ordenada`);
        }
        return res;
    }
    estaOrdenadoAux(array, index) {
        console.log(array[index]);
        if (index == array.length)
            return 0;
        if (array[index] > array[index + 1])
            return 1;
        return this.estaOrdenadoAux(array, index + 1);
    }
}
exports.default = Matriz;
