"use strict";
//AQUECIMENTO
Object.defineProperty(exports, "__esModule", { value: true });
class Unique {
    constructor(arr) {
        this.arr = [];
        this.arr = arr;
    }
    findUnique() {
        let arr = this.arr, tam = this.arr.length, res = 0;
        for (let i = 0; i <= tam; i++) {
            if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
                //console.log(`O número diferente é ${i}`);
                console.log(`Essa é a passada número ${i + 1}`);
                res = arr[i];
                break;
            }
        }
        return res;
    }
}
exports.default = Unique;
/*
export function findUniq(arr: number[]): number {
    let res: number = 0;

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
        console.log(`O número diferente é ${i}`);
        res = arr[i];
        break;
      }
  }
  return res;
} */
