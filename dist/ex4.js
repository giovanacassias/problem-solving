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
    isOrdenado() {
        let res = true;
        for (let i = 1; i <= this.TAM; i++) {
            if (this.arr[i - 1] > this.arr[i]) {
                console.log(`Essa é a ${i} iteração`);
                res = false;
                break;
            }
            console.log(`Essa é a ${i} iteração`);
        }
        return res;
    }
    sort(arr) {
        return arr.sort((a, b) => a - b);
    }
}
exports.default = Crescente;
