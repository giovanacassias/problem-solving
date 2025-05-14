//EXERCÍCIO 2
/* LISTA ALEATÓRIA – Modele uma classe cujo construtor gere uma lista de n elementos inteiros aleatórios. Sobrescreva o método toString() para que retorne a representação dessa lista em texto.
 */

export default class ListaInteiros {
  private arr: number[] = [];

  /*   public constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.arr.push(Math.floor(Math.random() * 51));
    }
  } */

  public constructor() {
    this.arr = [9, 28, 32, 8, 28, 18, 5, 37, 16, 46];
  }

  //EX2
  public toString(): string {
    let aux: string = "";
    for (let i = 0; i < this.arr.length; i++) {
      aux += " " + this.arr[i];
    }
    return aux;
  }

  //COM SPLICE() DÁ ERRO CASO TENHA DOIS OU MAIS ITENS MENORES QUE N DEPOIS DO ITEM ATUAL!
  //Array original: 22,44,19,43,26,6,6,31,27,27
  //Array modificado: 22,44,19,43,26,6,31,27,27
  //O segundo 6 foi ignorado!
  //PARA USAR SPLICE() SEM ESSE ERRO, FAZER LOOP DE TRÁS PARA FRENTE (altera o array)
  //SE PUDER CRIAR UM NOVO ARRAY, USAR FILTER()
  //SPLICE() SINTAXE: (index, quantidade de itens para excluir a partir do index)

  //COM SPLICE()
  //EX3
  public removeLess(n: number): number[] {
    let arr: number[] = this.arr,
      len: number = this.arr.length;

    for (let i = len; i >= 0; i--) {
      if (arr[i] < n) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  //COM FILTER()
  //EX3
  public removeLessFilter(n: number): number[] {
    return this.arr.filter((element) => element > n);
  }

  //EX4
  public removeMultiples(n: number): void {
    let arr: number[] = [4, 6, 8, 11, 15, 20, 23, 9, 10, 25];

    for (let i = arr.length - 1; i >= 0; i--) {
      if ((i + 1) % n == 0) {
        arr.splice(i, 1);
      }
    }
  }

  public maisProximoMedia(): void {
    let sum = this.arr.reduce((a, b) => a + b),
      average = Math.floor(sum / this.arr.length),
      closest = this.findDifference(0, average),
      arr: number[] = [],
      finalIndex: number = 0;

    console.log(`Array original ${this.arr}`);
    console.log(`Soma dos elementos: ${sum}`);
    console.log(`Média dos elementos: ${average}`);
    console.log(`Primeiro valor mais próximo da média: ${closest}`);

    for (let i = 0; i < this.arr.length; i++) {
      arr.push(this.findDifference(i, average));
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < closest) {
        closest = arr[i];
        console.log(closest);
      }
    }

    finalIndex = arr.indexOf(closest);

    console.log(`Array da diferença: ${arr}`);
    console.log(`O item mais próximo da média é ${this.arr[finalIndex]}`);
  }

  private findDifference(index: number, average: number) {
    return Math.floor(Math.abs(this.arr[index] - average));
  }

  public reduceLength(n: number): void {
    let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`Array original ${arr}`);
    if (n > arr.length) {
      console.log(
        `Quantidade de elementos que deseja excluir é maior que a quantidade de itens no array!`
      );
      return;
    } else {
      arr.splice(0, arr.length - n);
    }
    console.log(`Array modificado ${arr}`);
  }

  public fatia(inicio: number, fim: number): void {}

  public amplitude(): void {
    let arr: number[] = this.arr,
      maior: number = arr[0],
      menor: number = arr[0],
      diferenca: number = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < menor) {
        menor = arr[i];
      }
      if (arr[i] > maior) {
        maior = arr[i];
      }
    }

    diferenca = maior - menor;

    console.log(`O array é ${arr}`);
    console.log(`O menor elemento é ${menor} e o maior é ${maior}`);
    console.log(`A diferença entre o maior e o menor é ${diferenca}`);
  }

  public josephus(): void {}
}
