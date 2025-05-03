//EXERCÍCIO 3

export default class Baralho {
  private arr: number[] = [];

  public constructor(arr: number[]) {
    this.arr = arr;
  }

  public bubbleSort(): number[] {
    let arr: number[] = this.arr,
      sorted: boolean = false,
      comp: number = 0,
      swaps: number = 0,
      res: number[];

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length; i++) {
        comp = comp + 1;
        if (arr[i] < arr[i - 1]) {
          let temp: number = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          sorted = false;
          swaps = swaps + 1;
        }
      }
    }
    res = [comp, swaps];
    console.log(arr);
    return res;
  }

  public selectionSort(): number[] {
    let arr = this.arr,
      length = this.arr.length,
      comp: number = 0,
      swaps: number = 0;

    for (let i = 0; i < length - 1; i++) {
      let smallestIndex = i;
      for (let s = i + 1; s < length; s++) {
        comp++;
        if (arr[s] < arr[smallestIndex]) {
          smallestIndex = s;
        }
      }
      if (smallestIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
        swaps++;
      }
      console.log(arr);
    }
    console.log(`O número de comparações foi de: ${comp}`);
    console.log(`O número de trocas foi de: ${swaps}`);
    return arr;
  }
}
