/* EX 13 - MAIOR ELEMENTO
Considere a mesma matriz unidimensional, não ordenada. Retorne recursivamente o maior elemento. */

export default class Elemento {
  private n: number;
  private array: number[];
  private index: number = 0;

  public constructor(n: number, array: number[]) {
    this.n = n;
    this.array = array;
  }

  /*   public maiorElemento(): number {
    return this.maiorElementoAux(this.array, this.index);
  }

  private maiorElementoAux(array: number[], index: number): number {
    if (index == array.length) {
      return array[index];
    }
    if (array[index] > array[index + 1]) {
      return index;
    }
    return this.maiorElementoAux(array, index + 1);
  } */

  //get() e set()
}
