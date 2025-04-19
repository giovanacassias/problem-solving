"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex11_1 = __importDefault(require("./ex11"));
const ex7_1 = __importDefault(require("./ex7"));
//EX1
/* let mensagem = new Message();
mensagem.showMessage(5); */
//EX2
/* let contador = new Counter();
contador.count(4); */
//EX3
/* let contadorAB = new CounterAB();
contadorAB.countAB(50, 99); */
//EX4
/* let gap = new Gap();
console.log(gap.gapSum(3, 6));
 */
//EX5
/* let gapAprimorado = new GapAprimorado();
console.log(gapAprimorado.gapSum(3, 6)); */
//EX6
/* let fatorial = new Fatorial();
console.log(fatorial.fatorial(5)); */
//EX7
let math = new ex7_1.default();
//console.log(math.potencia(2, 3));
//console.log(math.fibonacci(7));
//console.log(math.tribonacci(5));
//console.log(math.tetranacci(5));
//EX8
//math.fibonacci(6);
//EX11
let array = new ex11_1.default(20, [
    3, 87, 14, 3, 66, 41, 95, 22, 30, 78, 11, 49, 6, 93, 57, 27, 1, 34, 70, 19,
    88,
]);
//console.log(array.primeiraOcorrencia());
console.log(array.primeiraOcorrenciaOrdenada());
