"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MatrizUnidimensional {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    //get() e set()
    //11
    primeiraOcorrencia() {
        return this.primeiraOcorrenciaAux(this.n, this.array, this.index);
    }
    primeiraOcorrenciaAux(n, array, index) {
        if (n == array[index])
            return index;
        if (index > array.length)
            return -1;
        console.log(`Index ${index} possui o número ${array[index]}`);
        return this.primeiraOcorrenciaAux(n, array, index + 1);
    }
    //12
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
    //13
    //14
    somaElementos() {
        return this.somaElementosAux(this.array, this.index);
    }
    somaElementosAux(array, index) {
        if (index == array.length)
            return 0;
        return array[index] + this.somaElementosAux(array, index + 1);
    }
    //15
    numeroOcorrencias() {
        let res = 0;
        return this.numeroOcorrenciasAux(this.array, this.index, this.n, res);
    }
    numeroOcorrenciasAux(array, index, n, res) {
        if (index == array.length)
            return res;
        if (array[index] == n) {
            res++;
        }
        return this.numeroOcorrenciasAux(array, index + 1, n, res);
    }
    //16
    estaOrdenado() {
        let res = this.estaOrdenadoAux(this.array, this.index);
        if (res == 0) {
            console.log(`A matriz NÃO está ordenada`);
        }
        else if (res == 1) {
            console.log(`A matriz está ordenada`);
        }
        return res;
    }
    estaOrdenadoAux(array, index) {
        if (index == array.length)
            return 1;
        if (array[index] > array[index + 1])
            return 0;
        return this.estaOrdenadoAux(array, index + 1);
    }
}
exports.default = MatrizUnidimensional;
