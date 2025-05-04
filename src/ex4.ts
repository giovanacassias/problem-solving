//EXERCÍCIO 4 - CRESCENTE

export default class Crescente {
  private arr: number[] = [];
  readonly TAM: number = 20;

  /* 
  public constructor() {
    let array: number[] = [],
      n: number;

    for (let i = 0; i < this.TAM; i++) {
      n = Math.floor(Math.random() * 100);
      array.push(n);
    }
    this.arr = array;
    this.sort(this.arr);
  } */

  public constructor(arr: number[]) {
    this.arr = arr;
  }

  //EX4
  public isOrdenado(): boolean {
    let res: boolean = true;

    for (let i = 1; i <= this.TAM; i++) {
      if (this.arr[i - 1] > this.arr[i]) {
        //console.log(`Essa é a ${i} iteração`);
        res = false;
        break;
      }
      //console.log(`Essa é a ${i} iteração`);
    }
    return res;
  }

  public sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  //EX5
  public bubbleMelhorado(): number[] {
    let arr: number[] = this.arr,
      swap: number = 1,
      temp: number,
      passada: number = 1;

    while (swap != 0) {
      swap = 0;
      console.log(`passada externa ${passada}`);
      for (let j = 1; j <= this.TAM; j++) {
        console.log(`comparação ${j}`);
        if (arr[j - 1] > arr[j]) {
          temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          swap++;
          console.log(
            `Uma troca aconteceu entre os elementos ${arr[j]} e ${arr[j - 1]}`
          );
          console.log(`Quantidade de trocas feitas no laço interno: ${swap}`);
        } else {
          console.log("Não houve troca entre os elementos");
        }
      }
      passada++;
    }
    console.log(
      `Algoritmo encerrado pois não houve trocas na última iteração, logo o array está ordenado!`
    );
    return arr;
  }
}
