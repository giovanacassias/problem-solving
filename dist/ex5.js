"use strict";
//EX 4 - SOMA DO INTERVALO APRIMORADA
/* Aprimore a resolução anterior para que os limites sejam
invertidos no caso do limite inferior ser maior do que o superior. Assim, quando for pedido que a função retorne a soma do intervalo [10, 1], será tratado da mesma forma do que a soma de [1, 10]. */
Object.defineProperty(exports, "__esModule", { value: true });
class GapAprimorado {
    gapSum(i, s) {
        if (i > s) {
            return this.gapSum(s, i);
        }
        if (i > s) {
            return 0;
        }
        return i + this.gapSum(i + 1, s);
    }
}
exports.default = GapAprimorado;
