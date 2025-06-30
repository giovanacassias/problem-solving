class Spider {
  type: string = "";
  alive: boolean = true;

  public constructor(type: string) {
    this.type = type;
  }
}

export default class Game {
  private arrayOfSpiders(n: number): Spider[] {
    let arr: Spider[] = [],
      totalSpiders: number = n * 2;

    for (let i = 0; i < totalSpiders; i++) {
      if (i < totalSpiders / 2) {
        arr.push(new Spider("red"));
      } else {
        arr.push(new Spider("brown"));
      }
    }
    return arr;
  }

  private newGame(n: number, kk: number): void {
    let k: number = kk,
      num: number = n,
      redCounter: number = 0,
      brownCounter: number = 0,
      arr: Spider[] = this.arrayOfSpiders(num),
      counter: number = 0;

    for (
      let i = 0;
      redCounter != num && brownCounter != num;
      i = (i + 1) % arr.length
    ) {
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
  }
}

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


/*     import Game from "./maratonaSpiders";

let teste = new Game();
//console.log(teste.newGame(3));
console.log(teste.merlinWins(3)); */
