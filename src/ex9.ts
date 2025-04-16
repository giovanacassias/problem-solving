//TRIBONACCI – Este exercício é uma mera progressão do anterior. Dado um inteiro positivo n, imprima o n-ésimo termo da série de Tribonacci. Saiba que os três primeiros termos desta série são 1, 1 e 2; e os demais são gerados a partir da soma dos anteriores: 1 1 2 4 7 13 24 44...

export default class Math {
  public tribonacci(n: number): number {
    if (n == 1) return 0;
    if (n == 2) return 1;
    if (n == 3) return 1;
    else {
      //this.fibonacci(n) + this.fibonacci(n);
      return (
        this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3)
      );
    }
  }
}
