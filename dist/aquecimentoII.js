"use strict";
//VERIFICAR, RECURSIVAMENTE, SE UMA PALAVRA FORMA UM PALÍNDROMO
Object.defineProperty(exports, "__esModule", { value: true });
class Word {
    constructor(palavra) {
        this.res = "";
        this.palavra = palavra;
    }
    isPalindromo() {
        return this.isPalindromoAux(0, this.palavra.length - 1);
    }
    //han|nah = 6
    //hanah = 5
    isPalindromoAux(indexA, indexB) {
        if (indexB < this.palavra.length / 2)
            return true;
        if (this.palavra[indexA] != this.palavra[indexB]) {
            console.log(this.palavra[indexA]);
            console.log(this.palavra[indexB]);
            return false;
        }
        console.log(this.palavra[indexA]);
        console.log(this.palavra[indexB]);
        return this.isPalindromoAux(indexA + 1, indexB - 1);
    }
}
exports.default = Word;
