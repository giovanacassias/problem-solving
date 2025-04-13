//EXERCÍCIO 7 - POTÊNCIA
//Dados a base e um expoente positivo, retorne base expoente. Assuma o valor de n como base.
export default class Math {
  public potencia(n: number, expo: number): number {
    if (expo == 1) return n;
    return n * this.potencia(n, expo - 1);
  }
}
