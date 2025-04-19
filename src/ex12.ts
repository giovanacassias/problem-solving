/* PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na matriz. Caso não haja ocorrência, retorne -1. Use a mesma classe para os próximos exercícios. */

export default class Array {
  private n: number;
  private array: number[];
  private index: number = 0;

  public constructor(n: number, array: number[]) {
    this.n = n;
    this.array = array;
  }

  //get() e set()

  public primeiraOcorrenciaOrdenada(): number {
    let sortedArray = this.array.sort((a, b) => a - b);
    return this.primeiraOcorrenciaOrdenadaAux(this.n, sortedArray, this.index);
  }

  private primeiraOcorrenciaOrdenadaAux(
    n: number,
    sortedArray: number[],
    index: number
  ): number {
    console.log(sortedArray);
    if (sortedArray[index] > n || index > sortedArray.length) return -1;
    if (sortedArray[index] == n) {
      console.log(`Index ${index} possui o número ${sortedArray[index]}`);
      return index;
    }
    console.log(`Index ${index} possui o número ${sortedArray[index]}`);
    return this.primeiraOcorrenciaOrdenadaAux(n, sortedArray, index + 1);
  }
}
