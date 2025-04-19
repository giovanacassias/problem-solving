"use strict";
/* PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na matriz. Caso não haja ocorrência, retorne -1. Use a mesma classe para os próximos exercícios. */
Object.defineProperty(exports, "__esModule", { value: true });
class Array {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    //get() e set()
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
