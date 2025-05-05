"use strict";
//EXERCÍCIO 4 - CRESCENTE
Object.defineProperty(exports, "__esModule", { value: true });
class Crescente {
    /*
    public constructor() {
      let array: number[] = [],
        n: number;
  
      for (let i = 0; i < this.TAM; i++) {
        n = Math.floor(Math.random() * 100);
        array.push(n);
      }
      this.arr = array;
      this.sort(this.arr);
    } */
    constructor(arr) {
        this.arr = [];
        this.TAM = 20;
        this.arr = arr;
    }
    //EX4
    isOrdenado() {
        let res = true;
        for (let i = 1; i <= this.TAM; i++) {
            if (this.arr[i - 1] > this.arr[i]) {
                //console.log(`Essa é a ${i} iteração`);
                res = false;
                break;
            }
            //console.log(`Essa é a ${i} iteração`);
        }
        return res;
    }
    sort(arr) {
        return arr.sort((a, b) => a - b);
    }
    //EXERCÍCIO 5 - BUBBLE MELHORADO
    bubbleMelhorado() {
        let arr = this.arr, swap = 1, temp, passada = 1;
        while (swap != 0) {
            swap = 0;
            console.log(`passada externa ${passada}`);
            for (let j = 1; j <= this.TAM; j++) {
                console.log(`comparação ${j}`);
                if (arr[j - 1] > arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    swap++;
                    console.log(`Uma troca aconteceu entre os elementos ${arr[j]} e ${arr[j - 1]}`);
                    console.log(`Quantidade de trocas feitas no laço interno: ${swap}`);
                }
                else {
                    console.log("Não houve troca entre os elementos");
                }
            }
            passada++;
        }
        console.log(`Algoritmo encerrado pois não houve trocas na última iteração, logo o array está ordenado!`);
        return arr;
    }
}
exports.default = Crescente;
