import Message from "./ex1";
import Array from "./ex11";
import MatrizUnidimensional from "./ex11-16";
import Elemento from "./ex13";
import Soma from "./ex14";
import Ocorrencia from "./ex15";
import Matriz from "./ex16";
import Counter from "./ex2";
import CounterAB from "./ex3";
import Gap from "./ex4";
import GapAprimorado from "./ex5";
import Fatorial from "./ex6";
import Math from "./ex7";

//EX1
let mensagem = new Message();
//mensagem.showMessage(5);

//EX2
let contador = new Counter();
//contador.count(4);

//EX3
let contadorAB = new CounterAB();
//contadorAB.countAB(50, 99);

//EX4
let gap = new Gap();
//console.log(gap.gapSum(3, 6));

//EX5
let gapAprimorado = new GapAprimorado();
//console.log(gapAprimorado.gapSum(3, 6));

//EX6
let fatorial = new Fatorial();
//console.log(fatorial.fatorial(5));

//EX7
let math = new Math();
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
let array = new Array(
  20,
  [
    3, 87, 14, 3, 66, 41, 95, 22, 30, 78, 11, 49, 6, 93, 57, 27, 1, 34, 70, 19,
    88,
  ]
);
//console.log(array.primeiraOcorrenciaOrdenada());

//EX12

//EX13
let elemento = new Elemento(20, [3, 87, 14, 3, 66]);
//console.log(elemento.maiorElemento());

//EX14
let soma = new Soma(1, [5, 5, 2, 3]);
console.log(soma.somaElementos());

//EX15
let occorencia = new Ocorrencia(5, [2, 4, 5, 5]);
//console.log(occorencia.numeroOcorrencias());

//EX16
let matriz = new Matriz(1, [2, 5, 9, 25, 99, 44, 100]);
//console.log(matriz.estaOrdenado());

//EX 11 - 16
let matrizUnidimensional = new MatrizUnidimensional(
  9,
  [2, 5, 9, 25, 44, 99, 100]
);

/* console.log(matrizUnidimensional.primeiraOcorrencia());
console.log(matrizUnidimensional.primeiraOcorrenciaOrdenada());
console.log(matrizUnidimensional.somaElementos());
console.log(matrizUnidimensional.numeroOcorrencias());
console.log(matrizUnidimensional.estaOrdenado());*/
