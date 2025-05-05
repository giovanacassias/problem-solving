"use strict";
//EXERCÍCIO 14 BUSCA BINÁRIA
// comps = qtdElementos / 2
Object.defineProperty(exports, "__esModule", { value: true });
class BuscaBinaria {
    constructor(elem) {
        this.elem = elem;
    }
    buscaBinaria() {
        let elements = this.elem, comps = 0;
        while (elements > 0) {
            elements = Math.floor(elements / 2);
            comps++;
        }
        return comps;
    }
}
exports.default = BuscaBinaria;
