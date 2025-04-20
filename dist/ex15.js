"use strict";
/* EX 15 - NÚMERO DE OCORRÊNCIAS
Considere a mesma matriz unidimensional, não ordenada. Dado um inteiro, retorne recursivamente quantas ocorrências deste há na matriz. */
Object.defineProperty(exports, "__esModule", { value: true });
class Ocorrencia {
    constructor(n, array) {
        this.index = 0;
        this.n = n;
        this.array = array;
    }
    //get() e set()
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
}
exports.default = Ocorrencia;
