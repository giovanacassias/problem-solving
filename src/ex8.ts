//EX 8 - FIBONACCI
//Dado um inteiro positivo n, retorne o n-ésimo termo da série de Fibonacci. Saiba que os dois primeiros termos desta série são 1 e 1 e os demais são gerados a partir da soma dos anteriores: 1 1 2 3 5 8 13 21...

export default class Math {
  public potencia(n: number, expo: number): number {
    if (expo == 1) return n;
    return n * this.potencia(n, expo - 1);
  }

  public fibonacci(n: number): void {}
}
