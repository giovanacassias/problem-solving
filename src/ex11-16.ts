export default class MatrizUnidimensional {
  private n: number;
  private array: number[];
  private index: number = 0;

  public constructor(n: number, array: number[]) {
    this.n = n;
    this.array = array;
  }

  //get() e set()

  //11
  public primeiraOcorrencia(): number {
    return this.primeiraOcorrenciaAux(this.n, this.array, this.index);
  }

  private primeiraOcorrenciaAux(
    n: number,
    array: number[],
    index: number
  ): number {
    if (n == array[index]) return index;
    if (index > array.length) return -1;
    console.log(`Index ${index} possui o número ${array[index]}`);
    return this.primeiraOcorrenciaAux(n, array, index + 1);
  }

  //12
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

  //13

  //14
  public somaElementos(): number {
    return this.somaElementosAux(this.array, this.index);
  }

  private somaElementosAux(array: number[], index: number): number {
    if (index == array.length) return 0;
    return array[index] + this.somaElementosAux(array, index + 1);
  }

  //15
  public numeroOcorrencias(): number {
    let res: number = 0;
    return this.numeroOcorrenciasAux(this.array, this.index, this.n, res);
  }

  private numeroOcorrenciasAux(
    array: number[],
    index: number,
    n: number,
    res: number
  ): number {
    if (index == array.length) return res;
    if (array[index] == n) {
      res++;
    }
    return this.numeroOcorrenciasAux(array, index + 1, n, res);
  }

  //16

  public estaOrdenado(): number {
    let res = this.estaOrdenadoAux(this.array, this.index);
    if (res == 0) {
      console.log(`A matriz NÃO está ordenada`);
    } else if (res == 1) {
      console.log(`A matriz está ordenada`);
    }
    return res;
  }

  private estaOrdenadoAux(array: number[], index: number): number {
    if (index == array.length) return 1;
    if (array[index] > array[index + 1]) return 0;
    return this.estaOrdenadoAux(array, index + 1);
  }
}
