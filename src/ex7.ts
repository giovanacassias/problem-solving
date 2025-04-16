//EXERCÍCIO 7 - POTÊNCIA
//Dados a base e um expoente positivo, retorne base expoente. Assuma o valor de n como base.
export default class Math {
  public potencia(n: number, expo: number): number {
    if (expo == 1) return n;
    return n * this.potencia(n, expo - 1);
  }

  public fibonacci(n: number): number {
    if (n == 1) return 0;
    if (n == 2) return 1;
    else {
      //this.fibonacci(n) + this.fibonacci(n);
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }

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
