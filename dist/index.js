"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex1_1 = __importDefault(require("./ex1"));
const ex11_1 = __importDefault(require("./ex11"));
const ex11_16_1 = __importDefault(require("./ex11-16"));
const ex13_1 = __importDefault(require("./ex13"));
const ex14_1 = __importDefault(require("./ex14"));
const ex15_1 = __importDefault(require("./ex15"));
const ex16_1 = __importDefault(require("./ex16"));
const ex2_1 = __importDefault(require("./ex2"));
const ex3_1 = __importDefault(require("./ex3"));
const ex4_1 = __importDefault(require("./ex4"));
const ex5_1 = __importDefault(require("./ex5"));
const ex6_1 = __importDefault(require("./ex6"));
const ex7_1 = __importDefault(require("./ex7"));
//EX1
let mensagem = new ex1_1.default();
//mensagem.showMessage(5);
//EX2
let contador = new ex2_1.default();
//contador.count(4);
//EX3
let contadorAB = new ex3_1.default();
//contadorAB.countAB(50, 99);
//EX4
let gap = new ex4_1.default();
//console.log(gap.gapSum(3, 6));
//EX5
let gapAprimorado = new ex5_1.default();
//console.log(gapAprimorado.gapSum(3, 6));
//EX6
let fatorial = new ex6_1.default();
//console.log(fatorial.fatorial(5));
//EX7
let math = new ex7_1.default();
//console.log(math.potencia(2, 3));
//console.log(math.fibonacci(7));
//console.log(math.tribonacci(5));
//console.log(math.tetranacci(5));
//EX8
//console.log(math.fibonacci(6));
//EX9
//console.log(math.tribonacci(6));
//EX10
//console.log(math.tetranacci(6));
//EX11
let array = new ex11_1.default(20, [
    3, 87, 14, 3, 66, 41, 95, 22, 30, 78, 11, 49, 6, 93, 57, 27, 1, 34, 70, 19,
    88,
]);
//console.log(array.primeiraOcorrenciaOrdenada());
//EX12
//EX13
let elemento = new ex13_1.default(20, [3, 87, 14, 3, 66]);
//console.log(elemento.maiorElemento());
//EX14
let soma = new ex14_1.default(1, [5, 5, 2, 3]);
console.log(soma.somaElementos());
//EX15
let occorencia = new ex15_1.default(5, [2, 4, 5, 5]);
//console.log(occorencia.numeroOcorrencias());
//EX16
let matriz = new ex16_1.default(1, [2, 5, 9, 25, 99, 44, 100]);
console.log(matriz.estaOrdenado());
//EX 11 - 16
let matrizUnidimensional = new ex11_16_1.default(9, [2, 5, 9, 25, 44, 99, 100]);
/* console.log(matrizUnidimensional.primeiraOcorrencia());
console.log(matrizUnidimensional.primeiraOcorrenciaOrdenada());
console.log(matrizUnidimensional.somaElementos());
console.log(matrizUnidimensional.numeroOcorrencias());
console.log(matrizUnidimensional.estaOrdenado());*/
