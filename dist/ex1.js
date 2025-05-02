"use strict";
//EXERCÍCIO 1 ORDENAR TRÊS
Object.defineProperty(exports, "__esModule", { value: true });
class Inteiros {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ordenar() {
        let arr = [this.a, this.b, this.c], temp = 0;
        if (arr[0] > arr[1]) {
            temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        if (arr[1] > arr[2]) {
            temp = arr[1];
            arr[1] = arr[2];
            arr[2] = temp;
        }
        if (arr[0] > arr[1]) {
            temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr;
    }
    maior() {
        let arr = [this.a, this.b, this.c], maior = arr[0];
        if (arr[1] > arr[0]) {
            maior = arr[1];
        }
        if (arr[2] > maior) {
            maior = arr[2];
        }
        return maior;
    }
}
exports.default = Inteiros;
