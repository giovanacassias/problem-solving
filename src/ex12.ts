/* EX 12 - PRIMEIRA OCORRÊNCIA ORDENADO
Idem ao anterior, mas suponha que a matriz unidimensional esteja ordenada. Preze pela eficiência. */

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
