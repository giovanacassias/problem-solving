"use strict";
//EXERCÍCIO 1
Object.defineProperty(exports, "__esModule", { value: true });
class Inteiros {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ordenar() {
        let array = [this.a, this.b, this.c];
        if (this.a > this.b) {
            array[(this.b, this.a, this.c)];
        }
        if (this.a > this.c) {
            array[(this.b, this.c, this.a)];
        }
        if (this.c > this.b) {
            array[(this.c, this.a, this.b)];
        }
        return array;
    }
}
exports.default = Inteiros;
