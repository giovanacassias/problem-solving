"use strict";
//VERIFICAR, RECURSIVAMENTE, SE UMA PALAVRA FORMA UM PALÍNDROMO
Object.defineProperty(exports, "__esModule", { value: true });
class Palavra {
    constructor(palavra) {
        this.res = "";
        this.palavra = palavra;
    }
    //HANAH
    //01234 -> INDEX
    //12345 -> LENGHT
    //(this.palavra.length - 1) == INDEX (que começa em 4)
    isPalindromo() {
        return this.isPalindromoAux(this.palavra.length - 1);
    }
    //hannah
    isPalindromoAux(index) {
        console.log(this.res);
        if (index < 0) {
            if (this.res === this.palavra) {
                return true;
            }
            else {
                return false;
            }
        }
        this.res += this.palavra[index];
        return this.isPalindromoAux(index - 1);
    }
}
exports.default = Palavra;
