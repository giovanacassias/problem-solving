//EX 6 - FATORIAL
//FATORIAL – Dado um inteiro n, retorne n!.

export default class Fatorial {
  public fatorial(n: number): number {
    if (n == 1) return n;
    return n * this.fatorial(n - 1);
  }
}
