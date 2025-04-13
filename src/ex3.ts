//EXERCÍCIO 3 - CONTAGEM DE A ATÉ B

export default class CounterAB {
  public count(n: number): void {
    if (n <= 0) return;
    this.count(n - 1);
    console.log(n);
  }

  public countAB(a: number, b: number): void {
    if (b < a) return;
    this.countAB(a, b - 1);
    console.log(b);
  }
}
