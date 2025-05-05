"use strict";
//AQUECIMENTO
Object.defineProperty(exports, "__esModule", { value: true });
class Unique {
    constructor(arr) {
        this.arr = [];
        this.arr = arr;
    }
    findUnique() {
        let arr = this.arr, tam = this.arr.length, common = 0, res = 0;
        /*
        if (arr[0] == arr[1]) {
          common = arr[0];
        } else if (arr[1] == arr[2]) {
          common = arr[1];
        } else {
          common = arr[1];
        } */
        common = arr[0] === arr[1] ? arr[0] : arr[1] === arr[2] ? arr[1] : arr[1];
        console.log(`o número em comum é ${common}`);
        for (let i = 0; i < tam; i++) {
            if (arr[i] != common) {
                console.log(`O número diferente é ${arr[i]} no index ${i}`);
                res = arr[i];
                break;
            }
        }
        return res;
    }
}
exports.default = Unique;
//PRIMEIRA TENTATIVA - DÁ ERRO COM [3, 2, 3, 3, 3]
/* public findUnique(): number {
    let arr: number[] = this.arr,
      tam: number = this.arr.length,
      res: number = 0;

    for (let i = 0; i < tam; i++) {
      if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
        res = arr[i];
        break;
      }
    }
    return res;
  } */
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
//TENTATIVA 2 - AINDA CONTINUA DANDO ERRO EM BASIC CASES
/*   export function findUniq(arr: number[]): number {
    let common: number = 0, res: number = 0;

    if (arr[0] == arr[1]) {
      common = arr[0];
    } else if (arr[1] == arr[2]) {
      common = arr[1];
    } else if (arr[0] != arr[1] && arr[0] != arr[2]) {
      common = arr[1];
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != common) {
        console.log(`O número diferente é ${arr[i]} no index ${i}`);
        res = arr[i];
        break;
      }
    }
    return res;
} */
