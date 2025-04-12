"use strict";
//EXERCÍCIO 1 - MENSAGEM
//Implemente um método que exiba n vezes uma mensagem na tela
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    showMessage(n) {
        if (n == 0) {
            return;
        }
        console.log("Hello");
        return this.showMessage(n - 1);
    }
}
exports.default = Message;
