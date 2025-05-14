"use strict";
//EXERCÍCIO 2
/* LISTA ALEATÓRIA – Modele uma classe cujo construtor gere uma lista de n elementos inteiros aleatórios. Sobrescreva o método toString() para que retorne a representação dessa lista em texto.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ListaInteiros {
    constructor(n) {
        this.arr = [];
        this.aux = "";
        for (let i = 0; i < n; i++) {
            this.arr.push(Math.floor(Math.random() * 51));
        }
        console.log(this.arr);
    }
    //EX2
    toString() {
        let aux = "";
        for (let i = 0; i < this.arr.length; i++) {
            aux += " " + this.arr[i];
        }
        return aux;
    }
    //COM SPLICE() DÁ ERRO CASO TENHA DOIS OU MAIS ITENS MENORES QUE N DEPOIS DO ITEM ATUAL!
    //Array original: 22,44,19,43,26,6,6,31,27,27
    //Array modificado: 22,44,19,43,26,6,31,27,27
    //O segundo 6 foi ignorado!
    //PARA USAR SPLICE() SEM ESSE ERRO, FAZER LOOP DE TRÁS PARA FRENTE (altera o array)
    //SE PUDER CRIAR UM NOVO ARRAY, USAR FILTER()
    //SPLICE() SINTAXE: (index, quantidade de itens para excluir a partir do index)
    //COM SPLICE()
    //EX3
    removeLess(n) {
        let arr = this.arr, len = this.arr.length;
        console.log(`Array original: ${arr}`);
        for (let i = len; i >= 0; i--) {
            if (arr[i] < n) {
                arr.splice(i, 1);
            }
        }
        console.log(`Array modificado: ${arr}`);
        return arr;
    }
    //COM FILTER()
    //EX3
    removeLessFilter(n) {
        return this.arr.filter((element) => element > n);
    }
    //EX4
    removeMultiples(n) {
        let arr = [4, 6, 8, 11, 15, 20, 23, 9, 10, 25];
        console.log(`Arrey original: ${arr}`);
        for (let i = arr.length - 1; i >= 0; i--) {
            if ((i + 1) % n == 0) {
                arr.splice(i, 1);
            }
        }
        console.log(`Arrey modificado: ${arr}`);
    }
}
exports.default = ListaInteiros;
