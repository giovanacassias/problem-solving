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
