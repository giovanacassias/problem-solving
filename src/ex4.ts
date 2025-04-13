//EX 4 - SOMA DO INTERVALO
//Dados dois números, os limites superior e inferior de um intervalo, retorne a soma dos inteiros neste intervalo fechado. O limite superior sempre será maior, ou igual, ao inferior.

export default class Gap {
  public gapSum(i: number, s: number): number {
    if (i > s) return 0;
    return i + this.gapSum(i + 1, s);
  }
}
