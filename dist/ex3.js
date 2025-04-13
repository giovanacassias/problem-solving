"use strict";
//EXERCÍCIO 3 - CONTAGEM DE A ATÉ B
Object.defineProperty(exports, "__esModule", { value: true });
class CounterAB {
    count(n) {
        if (n <= 0)
            return;
        this.count(n - 1);
        console.log(n);
    }
    countAB(a, b) {
        if (b < a)
            return;
        this.countAB(a, b - 1);
        console.log(b);
    }
}
exports.default = CounterAB;
