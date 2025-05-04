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

  public bubbleMelhorado() {}
}
