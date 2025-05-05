//AQUECIMENTO

export default class Unique {
  private arr: number[] = [];

  public constructor(arr: number[]) {
    this.arr = arr;
  }

  public findUnique(): number {
    let arr: number[] = this.arr,
      tam: number = this.arr.length,
      res: number = 0;

    for (let i = 0; i <= tam; i++) {
      if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
        res = arr[i];
        break;
      }
    }
    return res;
  }
}

/* 
export function findUniq(arr: number[]): number {
    let res: number = 0;

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
        console.log(`O número diferente é ${i}`);
        res = arr[i];
        break;
      }
  }
  return res;
} */
