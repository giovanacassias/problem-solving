//TETRANACCI – Este exercício é uma mera progressão do anterior (que é uma mera progressão do anterior… e isso é recursividade). Dado um inteiro positivo n, imprima o n-ésimo termo da série de Tetranacci. Saiba que os quatro primeiros termos desta série são 1, 1, 2 e 4; e os demais são gerados a partir da soma dos anteriores: 1 1 2 4 8 15 29 56...//

export default class Math {
  public tetranacci(n: number): number {
    if (n == 1) return 0;
    if (n == 2) return 1;
    if (n == 3) return 1;
    if (n == 4) return 2;
    else {
      //this.fibonacci(n) + this.fibonacci(n);
      return (
        this.tetranacci(n - 1) +
        this.tetranacci(n - 2) +
        this.tetranacci(n - 3) +
        this.tetranacci(n - 4)
      );
    }
  }
}
