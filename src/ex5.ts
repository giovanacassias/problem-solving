//EX 5 - SOMA DO INTERVALO APRIMORADA
/* Aprimore a resolução anterior para que os limites sejam
invertidos no caso do limite inferior ser maior do que o superior. Assim, quando for pedido que a função retorne a soma do intervalo [10, 1], será tratado da mesma forma do que a soma de [1, 10]. */

export default class GapAprimorado {
  public gapSum(i: number, s: number): number {
    if (i > s) {
      return this.gapSum(s, i);
    }
    if (i == s) {
      i + (i + 1);
      return i;
    }
    return i + this.gapSum(i + 1, s);
  }
}
