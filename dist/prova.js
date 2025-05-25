"use strict";
//LUCAS E GIOVANA
Object.defineProperty(exports, "__esModule", { value: true });
class Domino {
    constructor(a, b) {
        this.startGame = [];
        if (a === b && (a >= 0 || a <= 6) && (b >= 0 || b <= 6)) {
            /*             this.startGame.push(a);
                  this.startGame.push(b); */
            this.startGame = [a, b];
        }
        console.log(this.startGame);
    }
    playGame() {
        let table = this.startGame, hand = this.newCard(), counter = 0;
        console.log(`mesa original ${table}`);
        while (counter != 27) {
            if (hand[1] === table[0]) {
                table.unshift(hand[1]);
                table.unshift(hand[0]);
                console.log(`mesa modificada ${table}`);
            }
            if (hand[0] === table[1]) {
                table.push(hand[0]);
                table.push(hand[1]);
                console.log(`mesa modificada ${table}`);
            }
            else {
                console.log("Peça inválida!");
            }
            counter++;
            hand = this.newCard();
        }
    }
    newCard() {
        let hand = [], a = this.randomNumber(), b = this.randomNumber();
        if ((a >= 0 || a <= 6) && (b >= 0 || b <= 6)) {
            return (hand = [a, b]);
        }
        return hand;
    }
    randomNumber() {
        return Math.floor(Math.random() * 7);
    }
}
exports.default = Domino;
