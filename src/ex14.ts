//EXERCÍCIO 14 BUSCA BINÁRIA
// comps = qtdElementos / 2

export default class BuscaBinaria {
  private elem: number;

  public constructor(elem: number) {
    this.elem = elem;
  }

  public buscaBinaria(): number {
    let elements: number = this.elem,
      comps: number = 0;

    while (elements > 0) {
      elements = Math.floor(elements / 2);
      comps++;
    }
    return comps;
  }
}
