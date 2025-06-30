"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spider {
    constructor(type) {
        this.type = "";
        this.alive = true;
        this.type = type;
    }
}
class Game {
    arrayOfSpiders(n) {
        let arr = [], totalSpiders = n * 2;
        for (let i = 0; i < totalSpiders; i++) {
            if (i < totalSpiders / 2) {
                arr.push(new Spider("red"));
            }
            else {
                arr.push(new Spider("brown"));
            }
        }
        return arr;
    }
    newGame(n, kk) {
        let k = kk, num = n, redCounter = 0, brownCounter = 0, arr = this.arrayOfSpiders(num), counter = 0;
        for (let i = 0; redCounter != num && brownCounter != num; i = (i + 1) % arr.length) {
            if (arr[i].alive === true) {
                counter++;
                if (counter === k) {
                    arr[i].alive = false;
                    if (arr[i].type === "red") {
                        redCounter++;
                        counter = 0;
                    }
                    if (arr[i].type === "brown") {
                        brownCounter++;
                        counter = 0;
                    }
                }
            }
        }
        let result = [redCounter, brownCounter];
        return result;
    }
    randomNumber() {
        let random = Math.floor(Math.random() * 101);
        return random;
    }
    merlinWins(number) {
        let end = false, k = 0;
        while (end === false) {
            k = this.randomNumber();
            let n = number, game = this.newGame(n, k);
            if (game[1] === 3) {
                end = true;
            }
        }
        return k;
    }
}
exports.default = Game;
/* const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const number = parseInt(input);

const instance = new NumberToWords();
const finalLength = instance.f(number, 0);

console.log(finalLength); */
/*

  private newSpider(type: string): Spider {
    let spider = new Spider(type);
    return spider;
  } */
