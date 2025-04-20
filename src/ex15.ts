/* EX 15 - NÚMERO DE OCORRÊNCIAS
Considere a mesma matriz unidimensional, não ordenada. Dado um inteiro, retorne recursivamente quantas ocorrências deste há na matriz. */

export default class Ocorrencia {
  private n: number;
  private array: number[];
  private index: number = 0;

  public constructor(n: number, array: number[]) {
    this.n = n;
    this.array = array;
  }

  //get() e set()

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
}
