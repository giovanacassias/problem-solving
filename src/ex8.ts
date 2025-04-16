//EX 8 - FIBONACCI
//Dado um inteiro positivo n, retorne o n-ésimo termo da série de Fibonacci. Saiba que os dois primeiros termos desta série são 1 e 1 e os demais são gerados a partir da soma dos anteriores: 1 1 2 3 5 8 13 21...

export default class Math {
  public fibonacci(n: number): number {
    if (n == 1) return 0;
    if (n == 2) return 1;
    else {
      //this.fibonacci(n) + this.fibonacci(n);
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }
}
