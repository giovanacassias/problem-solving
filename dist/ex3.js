"use strict";
//EXERCÍCIO 3
Object.defineProperty(exports, "__esModule", { value: true });
class Baralho {
    constructor(arr) {
        this.arr = [];
        this.arr = arr;
    }
    bubbleSort() {
        let arr = this.arr, sorted = false, comp = 0, swaps = 0, res;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < arr.length; i++) {
                comp = comp + 1;
                if (arr[i] < arr[i - 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i - 1];
                    arr[i - 1] = temp;
                    sorted = false;
                    swaps = swaps + 1;
                }
            }
        }
        res = [comp, swaps];
        console.log(arr);
        return res;
    }
    selectionSort() {
        let arr = this.arr, length = this.arr.length, comp = 0, swaps = 0;
        for (let i = 0; i < length - 1; i++) {
            let smallestIndex = i;
            for (let s = i + 1; s < length; s++) {
                comp++;
                if (arr[s] < arr[smallestIndex]) {
                    smallestIndex = s;
                }
            }
            if (smallestIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[smallestIndex];
                arr[smallestIndex] = temp;
                swaps++;
            }
            console.log(arr);
        }
        console.log(`O número de comparações foi de: ${comp}`);
        console.log(`O número de trocas foi de: ${swaps}`);
        return arr;
    }
    insertionSort() {
        let arr = this.arr, len = this.arr.length, comp = 0, swaps = 0;
        for (let i = 1; i < len; i++) {
            let currentElement = arr[i];
            let j = i - 1;
            while (true) {
                comp++;
                if (j >= 0 && arr[j] > currentElement) {
                    arr[j + 1] = arr[j];
                    j--;
                    swaps++;
                }
                else {
                    break;
                }
            }
            arr[j + 1] = currentElement;
            swaps++;
        }
        console.log(`Esse algoritmo gerou ${swaps} trocas e ${comp} comparações entre os elementos`);
        return arr;
    }
}
exports.default = Baralho;
