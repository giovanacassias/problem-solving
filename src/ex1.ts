//EXERCÍCIO 1 ORDENAR TRÊS

export default class Inteiros {
  private a: number;
  private b: number;
  private c: number;

  public constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  //EX1
  public ordenar(): number[] {
    let arr: number[] = [this.a, this.b, this.c],
      temp: number = 0;

    if (arr[0] > arr[1]) {
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    if (arr[1] > arr[2]) {
      temp = arr[1];
      arr[1] = arr[2];
      arr[2] = temp;
    }
    if (arr[0] > arr[1]) {
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    return arr;
  }

  //EX2
  public maior(): number {
    let arr: number[] = [this.a, this.b, this.c],
      maior: number = arr[0];

    if (arr[1] > arr[0]) {
      maior = arr[1];
    }
    if (arr[2] > maior) {
      maior = arr[2];
    }
    return maior;
  }
}
