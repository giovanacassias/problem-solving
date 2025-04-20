/* EX 16 - ESTÁ ORDENADO
Considere a mesma matriz unidimensional, não ordenada. Retorne se a matriz
unidimensional está em ordem crescente. Verifique recursivamente */

export default class Matriz {
  private n: number;
  private array: number[];
  private index: number = 0;

  public constructor(n: number, array: number[]) {
    this.n = n;
    this.array = array;
  }

  //get() e set()

  public estaOrdenado(): number {
    let res = this.estaOrdenadoAux(this.array, this.index);
    if (res == 0) {
      console.log(`A matriz está ordenada`);
    } else if (res == 1) {
      console.log(`A matriz NÃO está ordenada`);
    }
    return res;
  }

  private estaOrdenadoAux(array: number[], index: number): number {
    if (index == array.length) return 0;
    if (array[index] > array[index + 1]) return 1;
    return this.estaOrdenadoAux(array, index + 1);
  }
}
