"use strict";
/* EX 12 - PRIMEIRA OCORRÊNCIA ORDENADO
Idem ao anterior, mas suponha que a matriz unidimensional esteja ordenada. Preze pela eficiência. */
Object.defineProperty(exports, "__esModule", { value: true });
class Array {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    //get() e set()
    primeiraOcorrenciaOrdenada() {
        let sortedArray = this.array.sort((a, b) => a - b);
        return this.primeiraOcorrenciaOrdenadaAux(this.n, sortedArray, this.index);
    }
    primeiraOcorrenciaOrdenadaAux(n, sortedArray, index) {
        console.log(sortedArray);
        if (sortedArray[index] > n || index > sortedArray.length)
            return -1;
        if (sortedArray[index] == n) {
            console.log(`Index ${index} possui o número ${sortedArray[index]}`);
            return index;
        }
        console.log(`Index ${index} possui o número ${sortedArray[index]}`);
        return this.primeiraOcorrenciaOrdenadaAux(n, sortedArray, index + 1);
    }
}
exports.default = Array;
