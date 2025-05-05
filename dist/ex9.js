"use strict";
//EXERCÍCIO 9 EXTREMIDADE MAIS PRÓXIMA
//busca sequencial;
// [5, 8, 15, 33, 80, 99]
//target = 91
Object.defineProperty(exports, "__esModule", { value: true });
class Extremidade {
    constructor(arr) {
        this.arr = arr;
    }
    extremidadeMaisProxima(target) {
        let beginning = this.arr[0], ending = this.arr[this.arr.length - 1], auxBeginning = 0, auxEnding = 0;
        auxBeginning = Math.abs(target - beginning);
        auxEnding = Math.abs(target - ending);
        console.log(`A diferença entre o target e o início é de ${auxBeginning} e a diferença entre o target e o fim é de ${auxEnding}`);
        if (target < beginning || target > ending) {
            console.log("O target não se encontra neste array!");
            return -1;
        }
        if (auxBeginning < auxEnding) {
            console.log("começar pelo início do array");
            for (let i = 0; i < this.arr.length; i++) {
                if (target == this.arr[i]) {
                    console.log(`Elemento encontrado no index ${i}`);
                    return this.arr[i];
                }
                if (this.arr[i] > target) {
                    console.log(`A partir do index ${i} não é mais possível que o elemento esteja presente no array!`);
                    return -1;
                }
            }
            console.log(`Você chegou no fim do array e descobriu que o elemento procurado não está no array :()`);
            return -1;
        }
        else {
            console.log("começar pelo fim do array");
            for (let i = this.arr.length - 1; i > 0; i--) {
                if (target == this.arr[i]) {
                    console.log(`Elemento encontrado no index ${i}`);
                    return this.arr[i];
                }
                if (this.arr[i] < target) {
                    console.log(`A partir do index ${i} não é mais possível que o elemento esteja presente no array!`);
                    return -1;
                }
            }
        }
        return -1;
    }
}
exports.default = Extremidade;
