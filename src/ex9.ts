//EXERCÍCIO 9 EXTREMIDADE MAIS PRÓXIMA
//busca sequencial;
// [5, 8, 15, 33, 80, 99]
//target = 91

export default class Extremidade {
  private arr: number[];

  public constructor(arr: number[]) {
    this.arr = arr;
  }

  public extremidadeMaisProxima(target: number): number {
    let beginning: number = this.arr[0],
      ending: number = this.arr[this.arr.length - 1],
      auxBeginning: number = 0,
      auxEnding: number = 0;

    auxBeginning = Math.abs(target - beginning);
    auxEnding = Math.abs(target - ending);
    console.log(
      `A diferença entre o target e o início é de ${auxBeginning} e a diferença entre o target e o fim é de ${auxEnding}`
    );

    if (target < beginning || target > ending) {
      console.log("O target não se encontra neste array!");
      return -1;
    }
    if (auxBeginning < auxEnding) {
      console.log("começar pelo início do array");
      for (let i = 0; i < this.arr.length; i++) {
        if (target == this.arr[i]) {
          console.log(`Elemento encontrado no index ${i}`);
          return this.arr[i];
        }
        if (this.arr[i] > target) {
          console.log(
            `A partir do index ${i} não é mais possível que o elemento esteja presente no array!`
          );
          return -1;
        }
      }
    } else {
      console.log("começar pelo fim do array");
      for (let i = this.arr.length - 1; i > 0; i--) {
        if (target == this.arr[i]) {
          console.log(`Elemento encontrado no index ${i}`);
          return this.arr[i];
        }
        if (this.arr[i] < target) {
          console.log(
            `A partir do index ${i} não é mais possível que o elemento esteja presente no array!`
          );
          return -1;
        }
      }
    }
    console.log(
      `Você chegou no fim do array e descobriu que o elemento procurado não está no array`
    );
    return -1;
  }
}
