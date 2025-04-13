"use strict";
//EXERCÍCIO 2 - CONTAGEM REGRESSIVA
//Dado um número inteiro positivo n, realize a contagem progressiva de 1 até n;
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    count(n) {
        if (n <= 0)
            return;
        this.count(n - 1);
        console.log(n);
    }
}
exports.default = Counter;
/* export default class Counter {
  public count(n: number, atual: number = 1): void {
    if (atual > n) {
      return;
    }
    console.log(atual);
    this.count(n, atual + 1);
  }
} */
/* export default class Counter {
    public count(n: number): void {
      if (n == 0) {
        return;
      }
      console.log(n);
      return this.count(n - 1);
    }
  } */
