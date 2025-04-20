/* EX 14 - SOMA DOS ELEMENTOS
Considere a mesma matriz unidimensional, não ordenada. Retorne recursivamente soma dos elementos. */

export default class Soma {
  private n: number;
  private array: number[];
  private index: number = 0;

  public constructor(n: number, array: number[]) {
    this.n = n;
    this.array = array;
  }

  //get() e set()

  public somaElementos(): number {
    return this.somaElementosAux(this.array, this.index);
  }

  private somaElementosAux(array: number[], index: number): number {
    if (index == array.length) return 0;
    return array[index] + this.somaElementosAux(array, index + 1);
  }
}
